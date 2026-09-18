'use client';

import React from 'react';
import { SubSkillProfile } from '@/lib/types';
import { getStatusBadgeBg, getStatusLabel } from '@/lib/classifier';
import { Dna, HelpCircle, CheckCircle2, AlertCircle, HelpCircle as QuestionIcon } from 'lucide-react';

interface LearningDNAProps {
  skillProfiles: SubSkillProfile[];
  learnerName?: string;
  onSelectWhy?: (profile: SubSkillProfile) => void;
}

export function LearningDNA({ skillProfiles, learnerName, onSelectWhy }: LearningDNAProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-soft border border-soft-peach/30 space-y-6">
      <div className="flex items-center justify-between border-b border-gray-100 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-soft-peach/50 rounded-xl text-peach-dark">
            <Dna className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-charcoal text-lg">
              Learning DNA — {learnerName || 'Learner Fingerprint'}
            </h3>
            <p className="text-xs text-charcoal-lighter">
              Multidimensional skill breakdown — never reduced to a single score
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {skillProfiles.map((skill) => {
          const badgeClass = getStatusBadgeBg(skill.status);
          const isSecure = skill.status === 'secure';
          const isDeveloping = skill.status === 'developing';
          const isNeedsSupport = skill.status === 'needs-support';

          // Progress bar percentage calculation
          const progressPercent = isSecure ? 100 : isDeveloping ? 65 : isNeedsSupport ? 35 : 0;

          return (
            <div
              key={skill.skillId}
              className="p-4 rounded-xl border border-gray-100 hover:border-soft-peach/60 transition-all bg-ivory/30 space-y-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-heading font-semibold text-sm text-charcoal">
                    {skill.skillName}
                  </span>
                  <span className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full border ${badgeClass}`}>
                    {getStatusLabel(skill.status)}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-xs text-charcoal-lighter flex items-center gap-1">
                    <span>Confidence:</span>
                    <span className="font-bold text-charcoal">{skill.confidence}%</span>
                  </div>

                  {onSelectWhy && (
                    <button
                      onClick={() => onSelectWhy(skill)}
                      className="px-2.5 py-1 text-xs font-semibold bg-sky-blue/30 text-charcoal hover:bg-sky-blue/60 transition-all rounded-lg border border-sky-blue/50 flex items-center gap-1"
                    >
                      <HelpCircle className="w-3.5 h-3.5 text-sky-800" />
                      WHY?
                    </button>
                  )}
                </div>
              </div>

              {/* Progress Bar Visual */}
              <div className="space-y-1">
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden flex">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      isSecure
                        ? 'bg-emerald-500'
                        : isDeveloping
                        ? 'bg-amber-400'
                        : isNeedsSupport
                        ? 'bg-rose-400'
                        : 'bg-gray-200'
                    }`}
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-[11px] text-charcoal-lighter">
                  <span>Current Level: <strong className="capitalize">{skill.level}</strong></span>
                  <span>Evidence Points: <strong>{skill.evidence.length}</strong></span>
                </div>
              </div>

              {/* Next Action Recommendation */}
              <div className="text-xs bg-white/80 p-2.5 rounded-lg border border-gray-100 text-charcoal-light flex items-start gap-2">
                {isSecure ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                ) : isNeedsSupport ? (
                  <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                ) : (
                  <QuestionIcon className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                )}
                <span><strong>Recommended Action:</strong> {skill.nextAction}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
