"use client";

import React, { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { 
  Code, Mail, Phone, MapPin, Globe, Briefcase, GraduationCap, 
  ExternalLink, Sparkles, Copy, Check, Cpu, Terminal, 
  Download, ArrowUpRight, ShieldCheck, Trophy, X, Laptop, Edit2
} from 'lucide-react';

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  badge: string;
  link: string;
  github: string;
  stack: string[];
  summary: string;
  bullets: string[];
}

export default function MadhuPortfolio() {
  const printRef = useRef<HTMLDivElement>(null);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: 'Penumuru_Madhu_Sudhan_Reddy_Resume',
  });

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2500);
  };

  const [basicInfo, setBasicInfo] = useState({
    name: 'Penumuru Madhu Sudhan Reddy',
    role: 'Software Engineer | AI & Data Science Student',
    email: 'pmrpmadhusudhanreddy@gmail.com',
    phone: '+91 7672082814',
    location: 'Palamaner, AP, India',
    github: 'https://github.com/pmunaswamireddy',
    linkedin: 'https://linkedin.com/in/penumuru-madhu-sudhan-reddy-942550390',
    portfolio: 'https://web-resume-peach-xi.vercel.app/',
    livedemo: 'https://frontend-nine-dusky-21.vercel.app/',
    summary: 'Enthusiastic B.Tech student in Artificial Intelligence & Data Science (8.55 CGPA) and 1st Prize Winner at HACKHOUSE 24-Hour Live Hackathon. Skilled in low-latency desktop/system applications (Python, Win32 API, CustomTkinter), full-stack Web APIs (React, FastAPI, Node.js), and AI vision systems (Llama 3.2 Vision, OpenCV). Proven technical leader with 240+ hours of industry-backed cloud & data engineering training across AWS and Google programs.'
  });

  const metrics = [
    { label: 'Hackathon Champion', value: '1st Prize (₹8,000)', sub: 'HACKHOUSE 24-Hour Live Hackathon', icon: Trophy, color: 'text-amber-400' },
    { label: 'B.Tech CGPA', value: '8.55', sub: '80.5% | Top Academic Record', icon: GraduationCap, color: 'text-teal-400' },
    { label: 'NPTEL Elite+Silver', value: '88%', sub: 'Industry 4.0 & IIoT | IIT NPTEL', icon: ShieldCheck, color: 'text-sky-400' },
    { label: 'Cloud Training', value: '240+ Hours', sub: 'AWS Cloud & Gen AI Internship', icon: Briefcase, color: 'text-indigo-400' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Elderly Guardian AI Platform',
      category: 'Web & AI',
      badge: 'Live Web App',
      link: 'https://frontend-nine-dusky-21.vercel.app/',
      github: 'https://github.com/pmunaswamireddy',
      stack: ['React', 'FastAPI', 'Python', 'Scikit-learn', 'Vercel'],
      summary: 'ML-powered web platform for remote elderly health monitoring and emergency alert notifications with real-time AI anomaly detection.',
      bullets: [
        'Built a full-stack health telemetry web platform connecting caregivers with real-time patient status.',
        'Engineered a FastAPI backend running machine learning anomaly detection on physiological sensor streams.',
        'Integrated automated SMS/Email emergency alert dispatches upon critical threshold breaches.',
        'Deployed live on Vercel with high-availability RESTful API endpoint architecture.'
      ]
    },
    {
      id: 2,
      title: 'Invisible AI Overlay',
      category: 'AI & Vision',
      badge: 'Win32 System App',
      link: 'https://github.com/pmunaswamireddy/Invisible-ai',
      github: 'https://github.com/pmunaswamireddy/Invisible-ai',
      stack: ['Python', 'Win32 API', 'Groq API', 'Llama 3.2 Vision', 'CustomTkinter'],
      summary: 'Stealth floating AI desktop assistant utilizing native Win32 APIs for anti-screen capture rendering and vision-based question detection.',
      bullets: [
        'Engineered a floating stealth desktop assistant bypassing screen capture recording software via native Win32 APIs.',
        'Integrates Llama 3.2 Vision via Groq for instant optical question solving from desktop regions.',
        'Simulates hardware keystrokes using SendInput API for seamless character typing injection.',
        'Features background voice dictation threads, incognito browser overlays, and daily quota management.'
      ]
    },
    {
      id: 3,
      title: 'Scrcpy Master Control',
      category: 'Desktop Systems',
      badge: 'ADB Management GUI',
      link: 'https://github.com/pmunaswamireddy/scrcpy-master-control.git',
      github: 'https://github.com/pmunaswamireddy/scrcpy-master-control.git',
      stack: ['Python', 'CustomTkinter', 'ADB', 'Tailscale', 'Multithreading'],
      summary: 'Advanced Windows GUI for low-latency screen mirroring and batch control of multiple Android devices via ADB and Tailscale.',
      bullets: [
        'Designed a multi-threaded Windows control hub for simultaneous ADB Android device management.',
        'Supports wireless QR Code/mDNS pairing, Tailscale remote IP tunneling, and batch broadcast mode.',
        'Built a background-buffered UI queue preventing UI lockup during high-rate ADB stream commands.'
      ]
    },
    {
      id: 4,
      title: 'JNTUA Calculator & OCR App',
      category: 'Mobile & OCR',
      badge: 'Android APK',
      link: 'https://github.com/pmunaswamireddy/-jntua-calculator.git',
      github: 'https://github.com/pmunaswamireddy/-jntua-calculator.git',
      stack: ['Java', 'Kotlin', 'Android SDK', 'Google ML Kit', 'OCR'],
      summary: 'Android mobile app tailored to JNTUA R23 regulations featuring automated SGPA/CGPA calculation and AI-powered OCR mark sheet extraction.',
      bullets: [
        'Developed a native Android app providing accurate GPA/CGPA computation for JNTUA engineering students.',
        'Integrated Google ML Kit OCR to automatically parse grades directly from mark sheet photos and PDF files.',
        'Reduces manual grade entry effort to zero with smart regex pattern matching.'
      ]
    }
  ];

  const experience = [
    {
      id: 1,
      role: '1st Prize Winner (Rs. 8,000) -- Live Hackathon',
      company: 'HACKHOUSE 24-Hour Live Hackathon (Vaultsphere AI & MTIET)',
      period: 'Dec 26-27, 2025',
      grade: '1st Rank Champions',
      description: 'Led a 4-member development team to victory in a 24-hour national hackathon, building a complete full-stack web and AI application under strict deadline pressures.'
    },
    {
      id: 2,
      role: 'AWS Gen AI & Cloud Engineering Intern (240 Hours)',
      company: 'EduSkills & APSCHE',
      period: 'Aug – Oct 2024',
      grade: 'Completed (240 Hrs)',
      description: 'Intensive long-term internship mastering AWS Bedrock, Lambda, S3, and cloud generative AI deployment pipelines.'
    },
    {
      id: 3,
      role: 'Full Stack Web Development Intern',
      company: 'Gen Proces',
      period: 'July 2025 (2 Months)',
      grade: 'Completed',
      description: 'Built and maintained responsive web applications, implemented RESTful API endpoints, and optimized database queries.'
    },
    {
      id: 4,
      role: 'AI-ML Virtual Internship',
      company: 'Google for Developers',
      period: 'July – Sep 2024',
      grade: 'Grade: D',
      description: 'Hands-on project work in computer vision pipelines, feature engineering, and model validation with TensorFlow.'
    }
  ];

  const education = [
    {
      degree: 'B.Tech -- Artificial Intelligence & Data Science',
      institution: 'Mother Theresa Institute of Engineering and Technology (MTIET)',
      period: '2023 – 2027 | Currently Pursuing (4th Year B.Tech)',
      score: '8.55 CGPA (80.5%)',
      details: 'Focus on System Programming, Machine Learning, Full-Stack Web Development, and Data Engineering.'
    },
    {
      degree: 'Intermediate -- MPC (Mathematics, Physics, Chemistry)',
      institution: 'Board of Intermediate Education, AP (Vivekananda Jr College)',
      period: '2021 – 2023 | Completed',
      score: '946 / 1000 (94.6%)',
      details: 'Graduated with distinction in Mathematics, Physics, and Chemistry.'
    },
    {
      degree: 'Secondary School Certificate (SSC / 10th Grade)',
      institution: 'Board of Secondary Education, AP (ZP High School, Karasanapalle)',
      period: 'Passed June 2021 | Completed',
      score: '573 / 600 (95.5%)',
      details: 'Achieved top marks in Mathematics and General Science.'
    }
  ];

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Terminal,
      skills: ['Python', 'Java', 'C', 'JavaScript', 'SQL', 'Prompt Engineering']
    },
    {
      title: 'Web & Frameworks',
      icon: Laptop,
      skills: ['React.js', 'Node.js', 'FastAPI', 'HTML5/CSS3', 'REST APIs']
    },
    {
      title: 'AI, ML & Data Science',
      icon: Cpu,
      skills: ['Scikit-learn', 'PyTorch', 'OpenCV', 'MediaPipe', 'MongoDB', 'LangChain']
    },
    {
      title: 'Tools & Platforms',
      icon: Sparkles,
      skills: ['Git', 'GitHub', 'VS Code', 'Win32 API', 'Tailscale', 'Antigravity IDE']
    }
  ];

  const certifications = [
    { title: 'NPTEL Industry 4.0 & IIoT (12-Week)', issuer: 'IIT NPTEL', badge: 'Score: 88% (Elite+Silver)' },
    { title: 'NPTEL Quantum Computing (4-Week)', issuer: 'IIT NPTEL', badge: 'Score: 53% (Certified)' },
    { title: 'Problem Solving & Critical Thinking', issuer: 'edX -- FullbridgeX', badge: 'Grade: Pass | April 2024' },
    { title: 'Upper-Intermediate English', issuer: 'edX -- UPValenciaX', badge: 'Grade: Pass | April 2024' }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category.includes(activeCategory));

  return (
    <div className="min-h-screen bg-ambient text-slate-100 selection:bg-teal-400 selection:text-black">
      
      {/* Toast Notification */}
      {copiedText && (
        <div className="fixed bottom-6 right-6 z-50 bg-teal-400 text-slate-950 px-5 py-3 rounded-xl font-bold shadow-2xl flex items-center gap-2 animate-bounce">
          <Check size={18}/> Copied {copiedText} to clipboard!
        </div>
      )}

      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-40 bg-[#0b0f19]/90 backdrop-blur-md border-b border-slate-800 px-6 py-4 print:hidden">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-400 text-slate-950 font-black text-lg flex items-center justify-center shadow-lg shadow-teal-400/20">
              MR
            </div>
            <div>
              <div className="font-bold text-white leading-tight text-base">Penumuru Madhu Sudhan Reddy</div>
              <div className="text-xs text-amber-400 flex items-center gap-1.5 font-medium">
                <Trophy size={12}/> HACKHOUSE 1st Prize Winner
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-teal-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-teal-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-teal-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-teal-400 transition-colors">Experience</a>
            <a href="#education" className="hover:text-teal-400 transition-colors">Education</a>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsEditing(!isEditing)}
              className="px-3.5 py-2 rounded-xl bg-slate-800 text-teal-400 border border-slate-700 text-xs font-semibold hover:bg-slate-700 transition-all flex items-center gap-1.5"
            >
              {isEditing ? <Check size={14}/> : <Edit2 size={14}/>}
              {isEditing ? 'Done' : 'Edit'}
            </button>
            <button 
              onClick={() => handlePrint()}
              className="btn-primary text-xs flex items-center gap-2 uppercase tracking-wider"
            >
              <Download size={14}/> Download PDF
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Container */}
      <main ref={printRef} className="max-w-6xl mx-auto px-6 py-12 flex flex-col gap-20">
        
        {/* HERO SECTION */}
        <section id="about" className="flex flex-col gap-8 pt-4">
          <div className="flex flex-col gap-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-semibold uppercase tracking-wider w-fit">
              <Trophy size={14} className="text-amber-400"/> Hackathon Winner • AI & Full-Stack Engineer
            </div>

            {isEditing ? (
              <div className="flex flex-col gap-3 card-clean p-6 border-dashed border-teal-400">
                <input 
                  value={basicInfo.name} 
                  onChange={e => setBasicInfo({...basicInfo, name: e.target.value})} 
                  className="text-3xl font-bold bg-slate-900 p-2 rounded text-white border border-teal-400"
                />
                <input 
                  value={basicInfo.role} 
                  onChange={e => setBasicInfo({...basicInfo, role: e.target.value})} 
                  className="text-base bg-slate-900 p-2 rounded text-teal-400 border border-teal-400"
                />
                <textarea 
                  value={basicInfo.summary} 
                  onChange={e => setBasicInfo({...basicInfo, summary: e.target.value})} 
                  className="text-sm bg-slate-900 p-3 rounded text-slate-200 border border-teal-400 min-h-[100px]"
                />
              </div>
            ) : (
              <>
                <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
                  Penumuru Madhu <span className="text-teal-400">Sudhan Reddy</span>
                </h1>

                <div className="text-slate-400 text-lg font-medium">
                  {basicInfo.role}
                </div>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                  {basicInfo.summary}
                </p>
              </>
            )}

            {/* Quick Contact Chips */}
            <div className="flex flex-wrap items-center gap-3 pt-3 print:hidden">
              <button 
                onClick={() => copyToClipboard(basicInfo.email, 'Email')}
                className="chip-tag flex items-center gap-2 cursor-pointer"
              >
                <Mail size={14} className="text-teal-400"/> {basicInfo.email} <Copy size={12}/>
              </button>

              <button 
                onClick={() => copyToClipboard(basicInfo.phone, 'Phone')}
                className="chip-tag flex items-center gap-2 cursor-pointer"
              >
                <Phone size={14} className="text-teal-400"/> {basicInfo.phone} <Copy size={12}/>
              </button>

              <a 
                href={basicInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="chip-tag flex items-center gap-2 cursor-pointer"
              >
                <Code size={14} className="text-teal-400"/> GitHub <ExternalLink size={12}/>
              </a>

              <a 
                href={basicInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="chip-tag flex items-center gap-2 cursor-pointer"
              >
                <Globe size={14} className="text-teal-400"/> LinkedIn <ExternalLink size={12}/>
              </a>

              <a 
                href={basicInfo.livedemo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="chip-tag flex items-center gap-2 cursor-pointer"
              >
                <Laptop size={14} className="text-teal-400"/> Live App <ExternalLink size={12}/>
              </a>

              <div className="chip-tag flex items-center gap-2 cursor-default">
                <MapPin size={14} className="text-teal-400"/> {basicInfo.location}
              </div>
            </div>
          </div>

          {/* 4 METRICS CARDS */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {metrics.map((m, idx) => (
              <div key={idx} className="card-clean p-6 flex flex-col justify-between gap-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">{m.label}</span>
                  <m.icon size={20} className={m.color}/>
                </div>
                <div>
                  <div className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${m.color}`}>{m.value}</div>
                  <div className="text-slate-400 text-xs mt-1 font-medium">{m.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* HACKHOUSE WINNER BANNER */}
        <section className="card-clean p-8 border-l-4 border-l-amber-400 bg-slate-900/90 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0">
              <Trophy size={30}/>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-amber-400 text-xs font-extrabold uppercase tracking-wider">National Hackathon Champion</span>
              <h3 className="text-2xl font-bold text-white">1st Prize Winner (₹8,000 Cash Award)</h3>
              <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
                Led a team to victory at the HACKHOUSE 24-Hour Live Hackathon organized by Vaultsphere AI & MTIET, engineering a fully functional web & AI platform in 24 hours.
              </p>
            </div>
          </div>
          <span className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-extrabold text-xs uppercase shrink-0">
            Dec 26-27, 2025
          </span>
        </section>

        {/* FEATURED PROJECTS */}
        <section id="projects" className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-teal-400 text-xs font-bold uppercase tracking-wider">Portfolio Showcase</span>
              <h2 className="text-3xl font-bold text-white mt-1">Featured Projects</h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 bg-slate-900 p-1.5 rounded-xl border border-slate-800">
              {['All', 'AI & Vision', 'Desktop Systems', 'Web'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeCategory === cat 
                      ? 'bg-teal-400 text-slate-950 shadow' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map(project => (
              <div 
                key={project.id} 
                className="card-clean p-6 flex flex-col justify-between gap-6 group"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <span className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20 text-xs font-bold">
                      {project.badge}
                    </span>
                    <ArrowUpRight size={18} className="text-slate-500 group-hover:text-teal-400 transition-colors"/>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                <div className="flex flex-col gap-4 pt-4 border-t border-slate-800">
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 text-xs font-medium border border-slate-800">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 py-2 rounded-lg bg-teal-400 text-slate-950 text-xs font-bold text-center hover:bg-teal-300 transition-colors"
                    >
                      Live Demo / Link
                    </a>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-lg bg-slate-800 text-slate-200 text-xs font-bold hover:bg-slate-700 transition-colors"
                    >
                      GitHub
                    </a>
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="px-3 py-2 rounded-lg bg-slate-800 text-teal-400 text-xs font-bold hover:bg-slate-700 transition-colors"
                      title="View Details"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS MATRIX */}
        <section id="skills" className="flex flex-col gap-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-teal-400 text-xs font-bold uppercase tracking-wider">Technical Toolkit</span>
            <h2 className="text-3xl font-bold text-white mt-1">Skills & Competencies</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="card-clean p-6 flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
                    <cat.icon size={20}/>
                  </div>
                  <h3 className="text-base font-bold text-white">{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 rounded-xl bg-slate-900 text-slate-200 border border-slate-800 text-xs font-semibold hover:border-teal-400 hover:text-teal-300 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* INTERNSHIPS TIMELINE */}
        <section id="experience" className="flex flex-col gap-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-teal-400 text-xs font-bold uppercase tracking-wider">Industry Experience</span>
            <h2 className="text-3xl font-bold text-white mt-1">Internships & Achievements</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experience.map(exp => (
              <div key={exp.id} className="card-clean p-6 flex flex-col gap-4 border-l-4 border-l-teal-400">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                    <div className="text-teal-400 text-xs font-semibold mt-0.5">{exp.company}</div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-extrabold">
                    {exp.grade}
                  </span>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {exp.description}
                </p>

                <div className="text-slate-400 text-xs font-medium pt-3 border-t border-slate-800 flex items-center justify-between">
                  <span>Period: {exp.period}</span>
                  <span className="text-slate-400">Verified Program</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ACADEMIC HISTORY */}
        <section id="education" className="flex flex-col gap-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-teal-400 text-xs font-bold uppercase tracking-wider">Academic Background</span>
            <h2 className="text-3xl font-bold text-white mt-1">Education</h2>
          </div>

          <div className="flex flex-col gap-4">
            {education.map((edu, idx) => (
              <div key={idx} className="card-clean p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex flex-col gap-1 max-w-2xl">
                  <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                  <div className="text-teal-400 text-xs font-semibold">{edu.institution}</div>
                  <p className="text-slate-300 text-sm mt-1">{edu.details}</p>
                </div>

                <div className="flex flex-col items-start md:items-end gap-1">
                  <span className="text-2xl font-extrabold text-teal-400 tracking-tight">{edu.score}</span>
                  <span className="text-slate-400 text-xs font-medium">{edu.period}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS GRID */}
        <section id="certifications" className="flex flex-col gap-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-teal-400 text-xs font-bold uppercase tracking-wider">Credentials & Courses</span>
            <h2 className="text-3xl font-bold text-white mt-1">Certifications</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {certifications.map((cert, idx) => (
              <div key={idx} className="card-clean p-5 flex flex-col justify-between gap-4 border-l-4 border-l-teal-400">
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-bold text-white">{cert.title}</h3>
                  <span className="text-slate-400 text-xs">{cert.issuer}</span>
                </div>

                <span className="px-3 py-1 rounded-md bg-teal-500/10 text-teal-400 border border-teal-500/20 text-xs font-bold w-fit">
                  {cert.badge}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <div>
            © 2026 Penumuru Madhu Sudhan Reddy. Built with React 19, Next.js & Tailwind CSS.
          </div>
          <div className="flex gap-6 font-medium">
            <a href={basicInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">GitHub</a>
            <a href={basicInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">LinkedIn</a>
            <a href={basicInfo.portfolio} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">Portfolio Live</a>
          </div>
        </footer>

      </main>

      {/* PROJECT DETAILS MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6">
          <div className="bg-[#131c2e] border border-slate-700 rounded-2xl max-w-2xl w-full p-8 flex flex-col gap-6 relative max-h-[90vh] overflow-y-auto shadow-2xl">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X size={18}/>
            </button>

            <div className="flex flex-col gap-2">
              <span className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20 text-xs font-bold uppercase tracking-wider w-fit">
                {selectedProject.badge}
              </span>
              <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Features & Architecture:</h4>
              <ul className="flex flex-col gap-2 text-slate-200 text-sm leading-relaxed list-disc list-inside">
                {selectedProject.bullets.map((bullet: string, idx: number) => (
                  <li key={idx} className="pl-1">{bullet}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.stack.map((tech: string, i: number) => (
                  <span key={i} className="px-3 py-1 rounded-md bg-teal-500/10 text-teal-300 border border-teal-500/20 text-xs font-semibold">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
              <a 
                href={selectedProject.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-teal-400 text-slate-950 font-bold text-xs flex items-center gap-2 hover:bg-teal-300 transition-colors"
              >
                <Globe size={14}/> Live Demo Link
              </a>
              <a 
                href={selectedProject.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-200 font-bold text-xs flex items-center gap-2 hover:bg-slate-700 transition-colors"
              >
                <Code size={14}/> GitHub Repository
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
