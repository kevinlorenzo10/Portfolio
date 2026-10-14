import React from 'react';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import type { ContactInfo } from '../types/portfolio';

interface ContactSectionProps {
  readonly contact: ContactInfo;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ contact }) => {
  return (
    <section id="contact" className="py-8 scroll-mt-20">
      <SectionHeading
        badge="Connect"
        title="Get in Touch"
        subtitle="Feel free to reach out for backend engineering roles, technical architecture collaborations, or inquiries."
      />

      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Let's build something scalable together</h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Open to conversations regarding Senior Backend, Distributed Systems, and Golang engineering opportunities.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-400 pt-2">
              <MapPin size={16} className="text-cyan-400" />
              <span>Based in {contact.location}</span>
            </div>
          </div>

          <div className="space-y-3">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center justify-between p-4 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-cyan-500/50 transition-all duration-200 group text-slate-200"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Email</div>
                  <div className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {contact.email}
                  </div>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
            </a>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-cyan-500/50 transition-all duration-200 group text-slate-200"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0-.01-3.05 1.53 1.53 0 0 0 .01 3.05m1.39 9.74v-8.37H5.07v8.37h2.78Z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-slate-400">LinkedIn</div>
                  <div className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    Kevin Lorenzo
                  </div>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
