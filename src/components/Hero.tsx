import React from 'react';
import { Mail, MapPin, ArrowUpRight, ShieldCheck, Cpu, Database, Server, Layers } from 'lucide-react';
import type { ContactInfo } from '../types/portfolio';


interface HeroProps {
  readonly name: string;
  readonly title: string;
  readonly contact: ContactInfo;
}

export const Hero: React.FC<HeroProps> = ({ name, title, contact }) => {
  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Background ambient light effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/10 to-indigo-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
          {/* Main Hero Info */}
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-medium text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for Backend Engineering Opportunities
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">{name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-300">
                {title}
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
              Architecting high-concurrency microservices, resilient event streaming pipelines, and secure transaction architectures across enterprise banking platforms.
            </p>

            {/* Quick Meta details */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-slate-400 pt-1">
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-cyan-400" />
                {contact.location}
              </span>
              
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-semibold text-sm hover:bg-cyan-400 transition-all duration-200 shadow-lg shadow-cyan-500/25 active:scale-95"
              >
                <Mail size={18} />
                <span>Contact Me</span>
              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-medium text-sm transition-all duration-200 hover:border-slate-600 active:scale-95"
              >
                <svg className="w-4 h-4 fill-current text-blue-400" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0-.01-3.05 1.53 1.53 0 0 0 .01 3.05m1.39 9.74v-8.37H5.07v8.37h2.78Z"/>
                </svg>
                <span>LinkedIn</span>
                <ArrowUpRight size={14} className="text-slate-400" />
              </a>
            </div>
          </div>

          {/* Quick Technical Highlights Card */}
          <div className="w-full lg:w-96 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                <ShieldCheck size={14} /> Core Specialization
              </span>
              <span className="text-slate-400">Core Technical Stack</span>
            </div>

            <div className="mt-5 space-y-3.5">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-slate-800/80 text-cyan-400 border border-slate-700/50">
                  <Cpu size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Go (Golang)</h4>
                  <p className="text-xs text-slate-400 mt-0.5">High-concurrency backend services & clean architecture</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-slate-800/80 text-blue-400 border border-slate-700/50">
                  <Server size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Event-Driven Architecture</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Asynchronous event-driven messaging pipelines</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-slate-800/80 text-emerald-400 border border-slate-700/50">
                  <Database size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Redis & Databases</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Low-latency caching, PostgreSQL, MySQL & MongoDB</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-slate-800/80 text-indigo-400 border border-slate-700/50">
                  <Layers size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Microservices & REST APIs</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Scalable distributed APIs, ISO 8583 & QRIS</p>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-800/80">
              <div className="flex flex-wrap gap-1.5">
                {['Go', 'Kafka', 'Redis', 'PostgreSQL', 'MySQL', 'MongoDB', 'Microservices', 'ISO 8583', 'QRIS'].map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded-md bg-slate-800/90 text-cyan-300 text-xs font-mono border border-slate-700/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
