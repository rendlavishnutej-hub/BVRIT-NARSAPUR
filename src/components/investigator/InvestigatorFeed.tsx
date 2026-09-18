'use client';

import React from 'react';
import { InvestigatorEntry } from '@/lib/adaptive-engine';
import { Sparkles, AlertTriangle, CheckCircle2, XCircle, Search, HelpCircle } from 'lucide-react';

interface InvestigatorFeedProps {
  logs: InvestigatorEntry[];
  currentSignal?: string;
  isInvestigating?: boolean;
}

export function InvestigatorFeed({ logs, currentSignal, isInvestigating }: InvestigatorFeedProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-soft border border-sky-blue/30 space-y-4">
      <div className="flex items-center justify-between border-b border-gray-100 pb-3">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-sky-100 rounded-xl text-sky-700">
            <Search className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-charcoal text-base flex items-center gap-2">
              AI Learning Investigator
              <span className="text-xs px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 font-semibold border border-sky-200">
                Live Signal
              </span>
            </h3>
            <p className="text-xs text-charcoal-lighter">
              Determining WHY learning breaks down, not just right or wrong
            </p>
          </div>
        </div>

        {isInvestigating && (
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-600 bg-sky-50 px-3 py-1.5 rounded-full border border-sky-200">
            <Sparkles className="w-3.5 h-3.5 animate-spin" />
            Analyzing Diagnostic Probes...
          </div>
        )}
      </div>

      {currentSignal && (
        <div className="bg-sky-50/70 border border-sky-200 rounded-xl p-3 flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-sky-600 shrink-0 animate-bounce" />
          <p className="text-sm font-medium text-sky-900">{currentSignal}</p>
        </div>
      )}

      {logs.length === 0 ? (
        <div className="text-center py-6 text-charcoal-lighter text-sm">
          No diagnostic signals collected yet. Start an assessment to activate the investigator feed.
        </div>
      ) : (
        <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
          {logs.map((log, index) => {
            const isBottleneck = log.type === 'bottleneck';
            const isEvidence = log.type === 'evidence';
            const isClassification = log.type === 'classification';
            const isProbe = log.type === 'probe';

            return (
              <div
                key={index}
                className={`p-3 rounded-xl border text-xs leading-relaxed transition-all flex items-start gap-3 ${
                  isBottleneck
                    ? 'bg-amber-50 border-amber-200 text-amber-900'
                    : isClassification
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                    : isProbe
                    ? 'bg-sky-50 border-sky-200 text-sky-900'
                    : isEvidence && log.message.includes('✓')
                    ? 'bg-emerald-50/50 border-emerald-100 text-emerald-800'
                    : isEvidence && log.message.includes('✗')
                    ? 'bg-rose-50/50 border-rose-100 text-rose-800'
                    : 'bg-gray-50 border-gray-200 text-charcoal'
                }`}
              >
                <div className="mt-0.5 shrink-0">
                  {isBottleneck && <AlertTriangle className="w-4 h-4 text-amber-600" />}
                  {isClassification && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                  {isProbe && <HelpCircle className="w-4 h-4 text-sky-600" />}
                  {isEvidence && log.message.includes('✓') && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                  {isEvidence && log.message.includes('✗') && <XCircle className="w-4 h-4 text-rose-600" />}
                  {log.type === 'hypothesis' && <Search className="w-4 h-4 text-gray-500" />}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="font-semibold uppercase tracking-wider text-[10px] opacity-75">
                      {log.type}
                    </span>
                    <span className="text-[10px] text-charcoal-lighter">
                      {new Date(log.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                    </span>
                  </div>
                  <p className="font-medium text-xs">{log.message}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
