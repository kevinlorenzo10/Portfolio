import React from 'react';

interface SectionHeadingProps {
  readonly title: string;
  readonly subtitle?: string;
  readonly badge?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, badge }) => (
  <div className="mb-10 space-y-2">
    {badge && (
      <span className="inline-block px-3 py-1 rounded-md text-xs font-mono font-medium tracking-wide uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
        {badge}
      </span>
    )}
    <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);