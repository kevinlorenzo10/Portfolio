import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import type { ContactInfo } from '../types/portfolio';

interface HeaderProps {
  readonly name: string;
  readonly title: string;
  readonly contact: ContactInfo;
}

export const Header: React.FC<HeaderProps> = ({ name, title, contact }) => (
  <header className="bg-slate-900 text-white py-16 px-6">
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{name}</h1>
      <h2 className="text-xl md:text-2xl text-blue-400 font-semibold mb-8">{title}</h2>

      <div className="flex flex-wrap gap-6 text-sm md:text-base text-slate-300">
        <div className="flex items-center gap-2">
          <MapPin size={18} className="text-blue-400" aria-hidden="true" />
          <span>{contact.location}</span>
        </div>
    
        <a
          href={`mailto:${contact.email}`}
          className="flex items-center gap-2 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
        >
          <Mail size={18} className="text-blue-400" aria-hidden="true" />
          <span>{contact.email}</span>
        </a>
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
        >
          {/* <Linkedin size={18} className="text-blue-400" aria-hidden="true" />
          <span>LinkedIn Profile</span> */}
        </a>
      </div>
    </div>
  </header>
);