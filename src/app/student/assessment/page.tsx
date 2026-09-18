'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { initAdaptiveSession, getNextQuestion, processResponse, AdaptiveState, getFinalProfile } from '@/lib/adaptive-engine';
import { Question } from '@/lib/types';
import { motion, AnimatePresence } from 'framer-motion';

export default function AssessmentPage() {
  const router = useRouter();
  
  // State
  const [subject, setSubject] = useState<'reading' | 'numeracy' | null>(null);
  const [adaptiveState, setAdaptiveState] = useState<AdaptiveState | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [investigatorMsg, setInvestigatorMsg] = useState<string>('');
  const [isFinished, setIsFinished] = useState(false);
  
  // Start session
  const handleStart = (selectedSubject: 'reading' | 'numeracy') => {
    setSubject(selectedSubject);
    const state = initAdaptiveSession(selectedSubject, 5); // Assuming Class 5 student
    setAdaptiveState(state);
    
    const firstQ = getNextQuestion(state);
    setCurrentQuestion(firstQ);
  };

  // Text-to-speech for audio button
  const handleListen = () => {
    if (!currentQuestion) return;
    const utterance = new SpeechSynthesisUtterance(currentQuestion.questionText);
    utterance.rate = 0.9; // Slightly slower for kids
    window.speechSynthesis.speak(utterance);
  };

  // Handle Answer
  const handleAnswerSubmit = () => {
    if (!adaptiveState || !currentQuestion || !selectedOption) return;

    // Process
    const { investigatorMessage } = processResponse(
      adaptiveState,
      currentQuestion.id,
      selectedOption,
      10 // mock 10 seconds spent
    );
    
    setInvestigatorMsg(investigatorMessage);

    // Get next
    setTimeout(() => {
      const nextQ = getNextQuestion(adaptiveState);
      if (!nextQ) {
        setIsFinished(true);
      } else {
        setCurrentQuestion(nextQ);
        setSelectedOption(null);
        setInvestigatorMsg('');
      }
    }, 1500); // 1.5s delay to show the investigator message
  };

  // If finished, show summary
  if (isFinished && adaptiveState) {
    const profile = getFinalProfile(adaptiveState);
    return (
      <div className="max-w-2xl mx-auto bg-white p-12 rounded-[3rem] shadow-card text-center border-4 border-soft-peach mt-12">
        <h2 className="font-heading text-4xl font-black text-charcoal mb-6">Assessment Complete! ??</h2>
        <p className="text-xl text-charcoal-light mb-8 font-medium">Great job! We have figured out your learning path.</p>
        
        <div className="space-y-4 mb-8 text-left">
          {profile.map(skill => (
            <div key={skill.skillId} className="p-4 bg-ivory rounded-2xl border border-soft-peach/50 flex justify-between items-center">
              <span className="font-bold text-charcoal">{skill.skillName}</span>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                skill.status === 'secure' ? 'bg-mastery-secure text-white' : 
                skill.status === 'developing' ? 'bg-mastery-developing text-charcoal' : 
                skill.status === 'needs-support' ? 'bg-mastery-needs-support text-white' : 'bg-gray-200'
              }`}>
                {skill.status.replace('-', ' ').toUpperCase()}
              </span>
            </div>
          ))}
        </div>

        <button 
          onClick={() => router.push('/student')}
          className="px-8 py-4 bg-peach text-charcoal font-black text-xl rounded-full hover:scale-105 transition-transform shadow-[0_8px_0_#E5A070] active:translate-y-2 active:shadow-none"
        >
          Return to Quest
        </button>
      </div>
    );
  }

  // Subject Selection
  if (!subject) {
    return (
      <div className="max-w-2xl mx-auto mt-20 text-center">
        <h1 className="font-heading text-5xl font-black text-charcoal mb-8">What are we learning today?</h1>
        <div className="flex gap-6 justify-center">
          <button 
            onClick={() => handleStart('reading')}
            className="w-48 h-48 bg-sky-light rounded-[2rem] border-4 border-white shadow-card hover:-translate-y-2 transition-transform flex flex-col items-center justify-center gap-4 group"
          >
            <span className="text-6xl group-hover:scale-110 transition-transform">??</span>
            <span className="font-heading font-black text-xl text-charcoal">Reading</span>
          </button>
          <button 
            onClick={() => handleStart('numeracy')}
            className="w-48 h-48 bg-peach-light rounded-[2rem] border-4 border-white shadow-card hover:-translate-y-2 transition-transform flex flex-col items-center justify-center gap-4 group"
          >
            <span className="text-6xl group-hover:scale-110 transition-transform">??</span>
            <span className="font-heading font-black text-xl text-charcoal">Maths</span>
          </button>
        </div>
      </div>
    );
  }

  // Quiz UI
  return (
    <div className="max-w-3xl mx-auto mt-12">
      <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-card border-4 border-soft-peach relative">
        
        {/* Top Bar: Audio & Progress */}
        <div className="flex justify-between items-center mb-8">
          <button 
            onClick={handleListen}
            className="flex items-center gap-2 px-4 py-2 bg-ivory rounded-full text-charcoal font-bold hover:bg-soft-peach transition-colors"
          >
            ?? <span>Listen</span>
          </button>

          <div className="flex gap-1.5">
            {Array.from({ length: 10 }).map((_, i) => (
              <div 
                key={i} 
                className={`w-3 h-3 rounded-full ${
                  i < (adaptiveState?.questionsAsked || 0) 
                    ? 'bg-peach' 
                    : i === (adaptiveState?.questionsAsked || 0) 
                      ? 'bg-peach-light animate-pulse' 
                      : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Question Text */}
        <div className="mb-10 text-center">
          <AnimatePresence mode="wait">
            <motion.h2 
              key={currentQuestion?.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="font-heading text-3xl md:text-4xl font-bold text-charcoal leading-tight"
            >
              {currentQuestion?.questionText}
            </motion.h2>
          </AnimatePresence>
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {currentQuestion?.options?.map((opt) => (
            <button
              key={opt}
              onClick={() => setSelectedOption(opt)}
              disabled={!!investigatorMsg}
              className={`p-6 rounded-2xl border-4 text-xl font-bold transition-all ${
                selectedOption === opt 
                  ? 'border-peach bg-peach/10 text-peach-dark scale-[1.02]' 
                  : 'border-ivory bg-white text-charcoal hover:border-soft-peach hover:bg-ivory'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Submit & Investigator Feedback */}
        <div className="flex flex-col items-center min-h-[80px]">
          {investigatorMsg ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="px-6 py-3 bg-sky-light text-charcoal-light font-bold rounded-full flex items-center gap-2"
            >
              <span className="animate-spin text-xl">?</span>
              {investigatorMsg}
            </motion.div>
          ) : (
            <button
              onClick={handleAnswerSubmit}
              disabled={!selectedOption}
              className={`px-10 py-4 font-black text-xl rounded-full transition-all ${
                selectedOption 
                  ? 'bg-peach text-charcoal hover:scale-105 shadow-[0_6px_0_#E5A070] active:translate-y-2 active:shadow-none' 
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              Check Answer
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
