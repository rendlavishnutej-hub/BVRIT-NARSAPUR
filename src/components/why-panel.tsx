'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface WhyPanelProps {
  isOpen: boolean;
  onClose: () => void;
  skillName: string;
  evidence: string[];
  interpretation: string;
  confidence: number;
  nextAction: string;
}

export default function WhyPanel({ isOpen, onClose, skillName, evidence, interpretation, confidence, nextAction }: WhyPanelProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-white w-full max-w-lg rounded-[2rem] p-8 shadow-card border-4 border-soft-peach z-10"
        >
          <button onClick={onClose} className="absolute top-6 right-6 text-charcoal-lighter hover:text-charcoal transition-colors">
            ?
          </button>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">??</span>
            <h2 className="font-heading font-black text-2xl text-charcoal">Why this classification?</h2>
          </div>
          
          <div className="mb-2 text-sm font-bold text-peach-dark uppercase tracking-wider">{skillName}</div>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-charcoal mb-2">AI Interpretation</h3>
              <p className="text-charcoal-light text-sm leading-relaxed p-4 bg-sky-light rounded-xl border border-sky/30">
                {interpretation}
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-charcoal mb-2 flex justify-between">
                <span>Evidence Collected</span>
                <span className="text-peach-dark text-sm">{confidence}% Confidence</span>
              </h3>
              <ul className="space-y-2">
                {evidence.map((ev, idx) => (
                  <li key={idx} className="text-sm text-charcoal-lighter flex items-start gap-2">
                    <span className={ev.startsWith('?') ? 'text-mastery-secure' : 'text-mastery-needs-support'}>
                      {ev.charAt(0)}
                    </span>
                    <span>{ev.slice(2)}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pt-4 border-t border-soft-peach/50">
              <h3 className="font-bold text-charcoal mb-2">Recommended Next Action</h3>
              <p className="text-sm font-medium text-charcoal p-3 bg-peach/10 rounded-xl text-peach-dark">
                {nextAction}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
