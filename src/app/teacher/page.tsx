'use client';

import React, { useState } from 'react';
import { LearningDNA } from '@/components/investigator/LearningDNA';
import { WhyPanelModal } from '@/components/investigator/WhyPanelModal';
import { generateDefaultLearningDNA } from '@/lib/classifier';
import { SubSkillProfile } from '@/lib/types';
import { Sparkles, Users, Target, TrendingUp, HelpCircle } from 'lucide-react';

export default function TeacherDashboard() {
  const [selectedLearner, setSelectedLearner] = useState<{ id: string; name: string } | null>({
    id: 'learner-01',
    name: 'Aarav Kumar (Synthetic Learner 01)',
  });
  const [activeWhyProfile, setActiveWhyProfile] = useState<SubSkillProfile | null>(null);

  const learnerDNA = generateDefaultLearningDNA('reading', 'paragraph');

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl font-bold text-charcoal">Class 5A Intelligence Center</h1>
          <p className="text-charcoal-lighter mt-1">40 synthetic learners • ASER-aligned adaptive diagnosis</p>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 bg-peach text-charcoal font-semibold rounded-xl hover:bg-peach-dark transition-all shadow-soft flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-peach-dark" />
            New Adaptive Assessment
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-6 shadow-soft border border-soft-peach/20 flex items-center justify-between">
          <div>
            <div className="text-sm text-charcoal-lighter mb-1">Class Assessed</div>
            <div className="text-3xl font-heading font-bold text-charcoal">38/40</div>
            <div className="text-xs text-emerald-600 font-medium mt-1">95% complete</div>
          </div>
          <Users className="w-8 h-8 text-peach/60" />
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-soft border border-soft-peach/20 flex items-center justify-between">
          <div>
            <div className="text-sm text-charcoal-lighter mb-1">Instructional Groups</div>
            <div className="text-3xl font-heading font-bold text-charcoal">4</div>
            <div className="text-xs text-sky-700 font-medium mt-1">Grouped by common gap</div>
          </div>
          <Target className="w-8 h-8 text-sky-blue" />
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-soft border border-soft-peach/20">
          <div className="text-sm text-charcoal-lighter mb-1">Priority Skill Need</div>
          <div className="text-2xl font-heading font-bold text-rose-600">Connected Text</div>
          <div className="text-xs text-rose-600 mt-1">14 learners need support</div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-soft border border-soft-peach/20 flex items-center justify-between">
          <div>
            <div className="text-sm text-charcoal-lighter mb-1">Recent Progress</div>
            <div className="text-3xl font-heading font-bold text-emerald-600">+12%</div>
            <div className="text-xs text-charcoal-lighter mt-1">Since last cycle</div>
          </div>
          <TrendingUp className="w-8 h-8 text-emerald-400" />
        </div>
      </div>

      {/* Today's Next Action */}
      <div className="bg-gradient-to-r from-sky-50 to-soft-peach/30 rounded-2xl p-6 border border-sky-blue/30 shadow-soft">
        <div className="flex items-start gap-4">
          <div className="text-3xl p-3 bg-white rounded-2xl shadow-soft">🎯</div>
          <div className="flex-1">
            <h3 className="font-heading font-bold text-lg text-charcoal">Today&apos;s Priority Action</h3>
            <p className="text-charcoal-light mt-1">Start with <strong>Group B — Sentence Fluency</strong></p>
            <p className="text-sm text-charcoal-lighter mt-2">
              12 learners demonstrate strong word recognition but struggle with connected-text transition.
              Recommended 15-minute guided paragraph reading intervention.
            </p>
            <div className="flex gap-3 mt-4">
              <button className="px-4 py-2 bg-peach text-charcoal font-semibold rounded-xl text-sm hover:bg-peach-dark transition-all">
                View Group B
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Learning DNA & WHY Panel Demo */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Classroom Grid */}
        <div className="lg:col-span-1 bg-white rounded-2xl p-6 shadow-soft border border-soft-peach/20 space-y-4">
          <h3 className="font-heading font-bold text-lg text-charcoal">Classroom Learner Roster</h3>
          <p className="text-xs text-charcoal-lighter">Click any learner to inspect their multidimensional Learning DNA</p>

          <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
            {[
              { id: 'learner-01', name: 'Aarav Kumar', level: 'Paragraph', status: 'developing' },
              { id: 'learner-02', name: 'Ananya Sharma', level: 'Story', status: 'secure' },
              { id: 'learner-03', name: 'Rohan Patel', level: 'Word', status: 'needs-support' },
              { id: 'learner-04', name: 'Priya Singh', level: 'Sentence', status: 'developing' },
              { id: 'learner-05', name: 'Vikram Das', level: 'Letter', status: 'needs-support' },
            ].map((student) => (
              <button
                key={student.id}
                onClick={() => setSelectedLearner({ id: student.id, name: student.name })}
                className={`w-full p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
                  selectedLearner?.id === student.id
                    ? 'bg-soft-peach/40 border-peach text-charcoal shadow-soft'
                    : 'bg-white hover:bg-gray-50 border-gray-100 text-charcoal-light'
                }`}
              >
                <div>
                  <div className="font-medium text-sm text-charcoal">{student.name}</div>
                  <div className="text-xs text-charcoal-lighter">Demonstrated: {student.level}</div>
                </div>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold border ${
                  student.status === 'secure'
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : student.status === 'developing'
                    ? 'bg-amber-50 text-amber-700 border-amber-200'
                    : 'bg-rose-50 text-rose-700 border-rose-200'
                }`}>
                  {student.status}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Learner DNA */}
        <div className="lg:col-span-2">
          {selectedLearner && (
            <LearningDNA
              learnerName={selectedLearner.name}
              skillProfiles={learnerDNA}
              onSelectWhy={(profile) => setActiveWhyProfile(profile)}
            />
          )}
        </div>
      </div>

      {/* WHY Panel Modal */}
      <WhyPanelModal
        profile={activeWhyProfile}
        isOpen={Boolean(activeWhyProfile)}
        onClose={() => setActiveWhyProfile(null)}
      />
    </div>
  );
}

