'use client';

import React from 'react';
import { SubSkillProfile } from '@/lib/types';
import { buildWhyExplanation, getStatusBadgeBg, getStatusLabel } from '@/lib/classifier';
import { X, CheckCircle2, XCircle, Brain, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

interface WhyPanelModalProps {
  profile: SubSkillProfile | null;
  isOpen: boolean;
  onClose: () => void;
}

export function WhyPanelModal({ profile, isOpen, onClose }: WhyPanelModalProps) {
  if (!isOpen || !profile) return null;

  const explanation = buildWhyExplanation(profile);
  const badgeClass = getStatusBadgeBg(profile.status);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/40 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-xl w-full shadow-card border border-soft-peach/30 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-soft-peach/40 to-sky-blue/30 p-6 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white rounded-2xl shadow-soft text-peach-dark">
              <Brain className="w-6 h-6 text-sky-700" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-bold text-lg text-charcoal">
                  Why this Classification?
                </span>
                <span className={`text-xs px-2.5 py-0.5 rounded-full border ${badgeClass}`}>
                  {getStatusLabel(profile.status)}
                </span>
              </div>
              <p className="text-xs text-charcoal-lighter">
                Transparent diagnostic reasoning for <strong>{profile.skillName}</strong>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 hover:bg-white/80 rounded-full transition-all text-charcoal-lighter hover:text-charcoal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Confidence Score Gauge */}
          <div className="bg-ivory/60 border border-soft-peach/30 p-4 rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <div>
                <span className="text-xs text-charcoal-lighter font-medium">Diagnostic Confidence</span>
                <div className="font-heading font-bold text-lg text-charcoal">
                  {explanation.confidence}% Reliable
                </div>
              </div>
            </div>
            <div className="w-24 bg-gray-200 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-emerald-500 h-full rounded-full transition-all"
                style={{ width: `${explanation.confidence}%` }}
              />
            </div>
          </div>

          {/* Plain Language Interpretation */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-lighter flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-sky-600" />
              AI Investigator Interpretation
            </h4>
            <div className="bg-sky-50/60 border border-sky-100 p-4 rounded-2xl text-sm leading-relaxed text-charcoal">
              {explanation.interpretation}
            </div>
          </div>

          {/* Diagnostic Evidence List */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-lighter">
              Diagnostic Evidence Collected
            </h4>
            <div className="space-y-2">
              {explanation.evidenceSummary.map((item, idx) => {
                const isCorrect = item.startsWith('✓');
                return (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl border text-xs leading-relaxed flex items-start gap-2.5 ${
                      isCorrect
                        ? 'bg-emerald-50/60 border-emerald-100 text-emerald-950'
                        : 'bg-rose-50/60 border-rose-100 text-rose-950'
                    }`}
                  >
                    {isCorrect ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    )}
                    <span>{item}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recommended Next Action */}
          <div className="bg-peach/10 border border-peach/30 p-4 rounded-2xl space-y-1">
            <div className="flex items-center gap-2 text-peach-dark font-bold text-xs uppercase tracking-wider">
              <ArrowRight className="w-4 h-4" /> Recommended Action
            </div>
            <p className="text-sm font-medium text-charcoal">{explanation.nextAction}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-charcoal text-white text-xs font-bold rounded-xl hover:bg-black transition-all"
          >
            Close Explanation
          </button>
        </div>
      </div>
    </div>
  );
}
