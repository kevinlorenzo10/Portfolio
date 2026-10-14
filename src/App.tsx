import React from 'react';
import { portfolioData } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Summary } from './components/Summary';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar name={portfolioData.name} contact={portfolioData.contact} />

      <Hero
        name={portfolioData.name}
        title={portfolioData.title}
        contact={portfolioData.contact}
      />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16 pb-12">
        <Summary summary={portfolioData.summary} />
        <Experience items={portfolioData.experience} />
        <Skills skills={portfolioData.skills} />
        <Education items={portfolioData.education} />
        <ContactSection contact={portfolioData.contact} />
      </main>

      <Footer name={portfolioData.name} />
    </div>
  );
};

export default App;