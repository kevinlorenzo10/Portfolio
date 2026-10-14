import React from 'react';
import { Terminal } from 'lucide-react';
import type { ContactInfo } from '../types/portfolio';

interface NavbarProps {
  readonly name: string;
  readonly contact: ContactInfo;
}

export const Navbar: React.FC<NavbarProps> = ({ name, contact }) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2.5 font-mono text-slate-100 hover:text-cyan-400 transition-colors group">
          <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-700/60 group-hover:border-cyan-500/50 transition-colors text-cyan-400">
            <Terminal size={18} />
          </div>
          <span className="font-bold tracking-tight text-sm sm:text-base">
            {name.toLowerCase().replace(/\s+/g, '')}
            <span className="text-cyan-400">.go</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-400">
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
          <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${contact.email}`}
            className="text-xs sm:text-sm font-medium px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/10"
          >
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
};
