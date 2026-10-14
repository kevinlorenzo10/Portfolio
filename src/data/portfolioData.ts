import type { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  name: "Kevin Lorenzo",
  title: "Backend Software Engineer",
  contact: {
    location: "Bekasi, Indonesia",
    email: "kevinlorenzo1919@gmail.com",
    linkedin: "https://www.linkedin.com/in/kevinlorenzo10/"
  },
  summary: "Results-driven Backend Software Engineer with proven expertise in architecting, modernizing, and scaling high-concurrency microservices and RESTful APIs across Digital and Branch Banking platforms. Specialized in Go (Golang) engineering, event-driven streaming with Apache Kafka, low-latency Redis caching, and robust MongoDB and MySQL database management. Deep technical domain expertise in secure financial transaction processing, ISO 8583 payment messaging standards, QRIS payment systems, bill payments, and digital onboarding solutions. Demonstrated track record of refactoring legacy banking monoliths, optimizing query performance to minimize latency, and integrating multi-cloud infrastructure (AWS, GCP) to drive operational reliability and high throughput.",
  skills: {
    "Languages & Frameworks": ["Go (Golang)", "Python", "C# .NET Framework", "Laravel", "PEGA Low-Code", "HTML", "CSS", "JavaScript"],
    "Databases & Caching": ["PostgreSQL", "SQL Server", "MySQL", "MongoDB", "Oracle", "Redis"],
    "Architecture & Cloud": ["Microservices", "Event-Driven Architecture (Apache Kafka)", "RESTful APIs", "ISO 8583", "QRIS", "AWS", "GCP"],
    "Developer Tools & Practices": ["Git", "GitHub", "GitLab", "CI/CD pipelines", "Unit Testing", "Performance Tuning"]
  },
  experience: [
    {
      id: "exp-mnc",
      company: "Bank MNC Internasional",
      location: "Jakarta, Indonesia",
      role: "Senior Supervisor - Backend Software Engineer | Digital Technologies Group",
      period: "September 2025 - Present",
      highlights: [
        "Architect, develop, and maintain core high-concurrency microservices backing the flagship Motion Bank mobile application, ensuring robust performance and security.",
        "Champion Go (Golang) engineering excellence across the team, establishing rigorous code quality standards, automated unit testing frameworks, and continuous performance tuning.",
        "Spearhead the refactoring and modernization of legacy monoliths into clean, scalable microservices architectures to enhance system agility and maintainability.",
        "Optimize REST API endpoints, MongoDB and MySQL database integrations, Redis caching strategies, and query performance, successfully reducing system latency and increasing throughput across high-traffic digital banking workflows.",
        "Design and deploy event-driven messaging pipelines using Apache Kafka to enable real-time data streaming and asynchronous integration between core microservices.",
        "Architect and integrate end-to-end payment processing pipelines utilizing ISO 8583 messaging standards and QRIS payment systems for secure financial transactions.",
        "Design and expand core digital banking modules including friction-free digital onboarding for savings accounts, automated bill payment integrations, and credit card service features."
      ]
    },
    {
      id: "exp-sinarmas-assoc",
      company: "Bank Sinarmas",
      location: "Jakarta, Indonesia",
      role: "Associate - Software Development Engineer | Branch Banking Platform",
      period: "December 2021 - September 2025",
      highlights: [
        "Designed and engineered scalable RESTful microservices in Go, supporting core mission-critical branch operations including Customer Service, Safe Deposit Box management, and Public Information Displays across all national branches.",
        "Implemented asynchronous event-driven messaging pipelines utilizing Apache Kafka to facilitate seamless, real-time communication between decoupled microservices.",
        "Integrated multi-cloud object storage solutions (AWS S3, Google Cloud Storage) for secure, compliant document and asset archiving.",
        "Built automated synchronization applications in .NET Framework to stream real-time data from Core Banking T24 into Customer Service databases.",
        "Optimized complex SQL and NoSQL database schemas and queries across SQL Server, PostgreSQL, and Redis, driving higher query performance and strict data integrity.",
        "Collaborated with cross-functional Product, QA, DevOps, and Frontend teams to design external client web services and accelerate feature delivery lifecycles."
      ]
    },
    {
      id: "exp-sinarmas-intern",
      company: "Bank Sinarmas",
      location: "Jakarta, Indonesia",
      role: "IT Software Engineer Intern | Internal Business Process Application Division",
      period: "March 2021 - November 2021",
      highlights: [
        "Assisted senior engineers in developing and enhancing core Customer Service applications using PEGA low-code framework, HTML, CSS, JavaScript, and SQL Server.",
        "Executed thorough integration testing across Conventional and Sharia applications prior to Business Analyst and UAT phases, ensuring high reliability and smooth deployment."
      ]
    }
  ],
  education: [
    {
      id: "edu-binus",
      institution: "Universitas Bina Nusantara",
      period: "September 2018 - April 2022",
      degree: "Bachelor of Computer Science in Database Technology",
      details: "Accelerated 3.5-year completion (GPA: 3.23/4.00)"
    }
  ]
};