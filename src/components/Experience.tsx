import React from 'react';
import { Calendar, MapPin, Building2, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import type { ExperienceItem } from '../types/portfolio';

interface ExperienceProps {
  readonly items: readonly ExperienceItem[];
}

export const Experience: React.FC<ExperienceProps> = ({ items }) => (
  <section id="experience" className="py-8 scroll-mt-20">
    <SectionHeading
      badge="Career Path"
      title="Professional Experience"
      subtitle="Proven history of delivering critical backend infrastructure in regulated banking environments."
    />

    <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-6 space-y-12">
      {items.map((job) => (
        <div key={job.id} className="relative pl-6 sm:pl-10 group">
          {/* Timeline node */}
          <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:bg-cyan-400 transition-colors duration-200" />

          {/* Job Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {job.role}
                </h3>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-300 mt-1">
                  <Building2 size={16} className="text-cyan-400" />
                  <span>{job.company}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-cyan-300">
                  <Calendar size={13} />
                  {job.period}
                </span>
                <span className="flex items-center gap-1 text-slate-400">
                  <MapPin size={13} />
                  {job.location}
                </span>
              </div>
            </div>

            {/* Highlights list */}
            <ul className="mt-6 space-y-3.5">
              {job.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                  <CheckCircle2
                    size={17}
                    className="text-cyan-400 flex-shrink-0 mt-1 opacity-80"
                    aria-hidden="true"
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </section>
);