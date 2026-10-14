import React from 'react';
import { ArrowUp, Terminal } from 'lucide-react';

interface FooterProps {
  readonly name: string;
}

export const Footer: React.FC<FooterProps> = ({ name }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 border-t border-slate-800/80 bg-slate-950/70 text-slate-400 py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-sm">
        <div className="flex items-center gap-2 font-mono text-slate-300">
          <Terminal size={16} className="text-cyan-400" />
          <span>{name}</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-500 text-xs">Backend Software Engineer</span>
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-cyan-400 transition-colors"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};