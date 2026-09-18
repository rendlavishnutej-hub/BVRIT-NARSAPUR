'use client';

import { SubSkillProfile } from '@/lib/types';
import { motion } from 'framer-motion';

export default function LearningDNA({ profile }: { profile: SubSkillProfile[] }) {
  return (
    <div className="space-y-6">
      {profile.map((skill, i) => (
        <motion.div 
          key={skill.skillId}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-white rounded-2xl p-6 border-2 border-soft-peach shadow-sm"
        >
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-heading font-bold text-lg text-charcoal">{skill.skillName}</h3>
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
              skill.status === 'secure' ? 'bg-mastery-secure text-white' : 
              skill.status === 'developing' ? 'bg-mastery-developing text-charcoal' : 
              skill.status === 'needs-support' ? 'bg-mastery-needs-support text-white' : 'bg-gray-200'
            }`}>
              {skill.status.replace('-', ' ').toUpperCase()}
            </span>
          </div>
          
          <div className="h-4 bg-ivory rounded-full overflow-hidden flex">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${skill.confidence}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={`h-full ${
                skill.status === 'secure' ? 'bg-mastery-secure' : 
                skill.status === 'developing' ? 'bg-mastery-developing' : 
                skill.status === 'needs-support' ? 'bg-mastery-needs-support' : 'bg-gray-200'
              }`}
            />
          </div>
          <div className="flex justify-between text-xs text-charcoal-lighter mt-2 font-medium">
            <span>Confidence: {skill.confidence}%</span>
            <span>Expected: {skill.expectedLevel}</span>
          </div>
          
          <div className="mt-4 p-3 bg-sky-light/50 rounded-xl text-sm text-charcoal-light border border-sky/30">
            <strong>Next Action:</strong> {skill.nextAction}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
