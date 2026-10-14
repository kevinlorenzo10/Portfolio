import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import type { EducationItem } from '../types/portfolio';

interface EducationProps {
  readonly items: readonly EducationItem[];
}

export const Education: React.FC<EducationProps> = ({ items }) => (
  <section id="education" className="py-8 scroll-mt-20">
    <SectionHeading
      badge="Academic Background"
      title="Education"
      subtitle="Formal computer science foundation with a specialization in database architecture."
    />

    <div className="grid grid-cols-1 gap-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-200 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex-shrink-0">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {item.degree}
              </h3>
              <p className="text-slate-300 font-medium text-sm sm:text-base mt-1">
                {item.institution}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/60 text-xs font-mono text-slate-300 self-start md:self-auto">
            <Calendar size={13} className="text-cyan-400" />
            <span>{item.period}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);
