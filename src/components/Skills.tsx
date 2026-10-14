import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Code2, Database, Cloud, Wrench } from 'lucide-react';
import type { SkillsMap, SkillCategory } from '../types/portfolio';

interface SkillsProps {
  readonly skills: SkillsMap;
}

const getCategoryIcon = (category: SkillCategory) => {
  switch (category) {
    case 'Languages & Frameworks':
      return <Code2 className="text-cyan-400" size={20} />;
    case 'Databases & Caching':
      return <Database className="text-blue-400" size={20} />;
    case 'Architecture & Cloud':
      return <Cloud className="text-indigo-400" size={20} />;
    case 'Developer Tools & Practices':
      return <Wrench className="text-emerald-400" size={20} />;
  }
};

export const Skills: React.FC<SkillsProps> = ({ skills }) => (
  <section id="skills" className="py-8 scroll-mt-20">
    <SectionHeading
      badge="Expertise"
      title="Technical Skills"
      subtitle="Comprehensive stack honed across mission-critical financial backend systems."
    />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {(Object.entries(skills) as [SkillCategory, readonly string[]][]).map(([category, items]) => (
        <div
          key={category}
          className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-200 shadow-xl"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/50">
              {getCategoryIcon(category)}
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              {category}
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {items.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 rounded-lg bg-slate-800/90 hover:bg-slate-700/80 text-slate-200 text-xs sm:text-sm font-medium border border-slate-700/60 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);