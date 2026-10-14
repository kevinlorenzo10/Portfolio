import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Award, Briefcase, Zap } from 'lucide-react';

interface SummaryProps {
  readonly summary: string;
}

export const Summary: React.FC<SummaryProps> = ({ summary }) => {
  return (
    <section id="about" className="py-8 scroll-mt-20">
      <SectionHeading
        badge="About Me"
        title="Professional Summary"
        subtitle="Bridging core banking systems and scalable cloud-native architectures."
      />

      <div className="relative p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm shadow-xl">
        <p className="text-base sm:text-lg leading-relaxed text-slate-300 font-normal">
          {summary}
        </p>

        {/* Highlight Metrics / Callout Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-800/80">
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/60">
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
              <Briefcase size={20} />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Tier-1 Banking</div>
              <div className="text-xs text-slate-400">Motion Bank Digital Banking & Branch Banking Applications</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/60">
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
              <Zap size={20} />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">High Concurrency</div>
              <div className="text-xs text-slate-400">Low-latency microservices</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/60">
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
              <Award size={20} />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Financial Standards</div>
              <div className="text-xs text-slate-400">Branch and Digital Banking flows</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
