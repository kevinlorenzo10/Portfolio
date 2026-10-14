export interface ContactInfo {
  readonly location: string;
  readonly email: string;
  readonly linkedin: string;
}

export interface ExperienceItem {
  readonly id: string;
  readonly company: string;
  readonly location: string;
  readonly role: string;
  readonly period: string;
  readonly highlights: readonly string[];
}

export interface EducationItem {
  readonly id: string;
  readonly institution: string;
  readonly period: string;
  readonly degree: string;
}

export type SkillCategory = 
  | 'Languages & Frameworks'
  | 'Databases & Caching'
  | 'Architecture & Cloud'
  | 'Developer Tools & Practices';

export type SkillsMap = Record<SkillCategory, readonly string[]>;

export interface PortfolioData {
  readonly name: string;
  readonly title: string;
  readonly contact: ContactInfo;
  readonly summary: string;
  readonly experience: readonly ExperienceItem[];
  readonly education: readonly EducationItem[];
  readonly skills: SkillsMap;
}