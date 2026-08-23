"use client";

import React, { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Plus, Trash2, Edit2, Printer, Check } from 'lucide-react';

export default function ResumeBuilder() {
  const [isEditing, setIsEditing] = useState(false);
  const printRef = useRef(null);

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: 'Madhu_Sudhan_Reddy_Resume',
  });

  // Interfaces for Type Safety
  interface Experience { id: number; title: string; company: string; date: string; description: string; }
  interface Education { id: number; degree: string; school: string; grade: string; details: string; }
  interface Project { id: number; title: string; link: string; bullets: string[]; }
  interface Skill { id: number; category: string; items: string; }

  // Default Data State
  const [basicInfo, setBasicInfo] = useState({
    name: 'Penumuru Madhu Sudhan Reddy',
    title: 'Software Engineer | AI & Data Science Student',
    email: 'pmrpmadhusudhanreddy@gmail.com',
    phone: '+91 7672082814',
    location: 'Palamaner, AP, India',
    github1: 'https://github.com/pmunaswamireddy',
    github2: 'https://linkedin.com/in/penumuru-madhu-sudhan-reddy-942550390',
    github3: 'https://web-resume-peach-xi.vercel.app/',
    github4: 'https://frontend-nine-dusky-21.vercel.app/',
    summary: 'Enthusiastic B.Tech student in Artificial Intelligence & Data Science (8.55 CGPA) and 1st Prize Winner at HACKHOUSE 24-Hour Live Hackathon. Skilled in low-latency desktop/system applications (Python, Win32 API, CustomTkinter), full-stack Web APIs (React, FastAPI, Node.js), and AI vision systems (Llama 3.2 Vision, OpenCV). Proven technical leader with 240+ hours of industry-backed cloud & data engineering training across AWS and Google programs.'
  });

  const [experience, setExperience] = useState([
    {
      id: 1,
      title: '1st Prize (Rs. 8,000) -- HACKHOUSE 24-Hour Live Hackathon',
      company: 'Vaultsphere AI & MTIET',
      date: 'Dec 2025',
      description: 'Won 1st prize in a 24-hour live hackathon building scalable AI and web solutions.'
    },
    {
      id: 2,
      title: 'AWS Gen AI & Cloud Eng. (240 Hours)',
      company: 'EduSkills & APSCHE',
      date: 'Long-Term Internship',
      description: 'Completed 240+ hours of intensive cloud and generative AI engineering.'
    },
    {
      id: 3,
      title: 'Full Stack Web Development Intern',
      company: 'Gen Proces',
      date: 'July 2025 (2 Months)',
      description: 'Built responsive web applications and full-stack API integrations.'
    },
    {
      id: 4,
      title: 'AI-ML Virtual Internship (Grade: D)',
      company: 'Google for Developers',
      date: 'July -- Sep 2024',
      description: 'Hands-on training in machine learning models and computer vision pipelines.'
    }
  ]);

  const [education, setEducation] = useState([
    {
      id: 1,
      degree: 'B.Tech -- AI & Data Science',
      school: 'Mother Theresa Institute of Engineering and Technology',
      grade: '8.55 CGPA (80.5%)',
      details: 'Currently Pursuing (4th Year B.Tech) | 2023 -- 2027'
    },
    {
      id: 2,
      degree: 'Intermediate -- MPC (Mathematics, Physics, Chemistry)',
      school: 'Board of Intermediate Education, AP (Vivekananda Jr College)',
      grade: '946 / 1000 (94.6%)',
      details: 'Completed (2021 -- 2023)'
    },
    {
      id: 3,
      degree: 'SSC / 10th Grade',
      school: 'Board of Secondary Education, AP (ZP High School, Karasanapalle)',
      grade: '573 / 600 (95.5%)',
      details: 'Completed (June 2021)'
    },
    {
      id: 4,
      degree: 'NPTEL Industry 4.0 & IIoT (12-Week)',
      school: 'IIT NPTEL',
      grade: 'Score: 88% (Elite+Silver)',
      details: '12-Week NPTEL certification course.'
    },
    {
      id: 5,
      degree: 'NPTEL Quantum Computing (4-Week)',
      school: 'IIT NPTEL',
      grade: 'Score: 53% (Certified)',
      details: 'Certified in Quantum Computing basics.'
    },
    {
      id: 6,
      degree: 'Problem Solving & Critical Thinking',
      school: 'edX -- FullbridgeX',
      grade: 'Grade: Pass | April 2024',
      details: 'Soft skills & critical problem solving methodology.'
    },
    {
      id: 7,
      degree: 'Upper-Intermediate English',
      school: 'edX -- UPValenciaX',
      grade: 'Grade: Pass | April 2024',
      details: 'Business English and professional communication.'
    }
  ]);

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Elderly Guardian AI',
      link: 'https://frontend-nine-dusky-21.vercel.app/',
      bullets: [
        'ML-powered web platform for remote elderly health monitoring and emergency alert system.',
        'Built with React frontend and FastAPI backend; deployed live on Vercel with real-time AI anomaly detection.'
      ]
    },
    {
      id: 2,
      title: 'Invisible AI Overlay',
      link: 'https://github.com/pmunaswamireddy/Invisible-ai',
      bullets: [
        'Engineered a stealth floating AI desktop assistant using native Win32 APIs for anti-screen capture rendering.',
        'Integrated vision-based question detection via Groq/NVIDIA Llama 3.2 Vision and hardware typing simulation via SendInput.'
      ]
    },
    {
      id: 3,
      title: 'Scrcpy Master Control',
      link: 'https://github.com/pmunaswamireddy/scrcpy-master-control.git',
      bullets: [
        'Built an advanced Windows GUI for low-latency mirroring and batch wireless pairing/control of multiple Android devices.',
        'Designed a background-buffered UI queue ensuring zero lag and integrated Tailscale for remote wireless management.'
      ]
    },
    {
      id: 4,
      title: 'JNTUA Calculator & OCR App',
      link: 'https://github.com/pmunaswamireddy/-jntua-calculator.git',
      bullets: [
        'Developed an Android app calculating SGPA, CGPA, and percentage tailored to JNTUA R23 regulations.',
        'Implemented Google ML Kit OCR to automatically extract grades from mark sheet images/PDFs with high accuracy.'
      ]
    }
  ]);

  const [skills, setSkills] = useState([
    { id: 1, category: 'Programming Languages', items: 'Python, Java, C, JavaScript, SQL, Prompt Engineering' },
    { id: 2, category: 'Web & Frameworks', items: 'React.js, Node.js, HTML5/CSS3' },
    { id: 3, category: 'AI, ML & Data Science', items: 'Scikit-learn, PyTorch, OpenCV, MediaPipe, MongoDB, LangChain' },
    { id: 4, category: 'Tools & Platforms', items: 'Git, GitHub, VS Code, Antigravity IDE' },
    { id: 5, category: 'Core Competencies', items: 'Problem Solving, Leadership Skills, Technical Communication, Adaptability' }
  ]);

  // Handlers for Add/Remove
  const addExperience = () => setExperience([...experience, { id: Date.now(), title: '', company: '', date: '', description: '' }]);
  const removeExperience = (id: number) => setExperience(experience.filter(e => e.id !== id));
  
  const addEducation = () => setEducation([...education, { id: Date.now(), degree: '', school: '', grade: '', details: '' }]);
  const removeEducation = (id: number) => setEducation(education.filter(e => e.id !== id));
  
  const addProject = () => setProjects([...projects, { id: Date.now(), title: '', link: '', bullets: [''] }]);
  const removeProject = (id: number) => setProjects(projects.filter(p => p.id !== id));
  const updateProjectBullet = (projectId: number, bulletIndex: number, value: string) => {
    setProjects(projects.map((p: Project) => {
      if (p.id === projectId) {
        const newBullets = [...p.bullets];
        newBullets[bulletIndex] = value;
        return { ...p, bullets: newBullets };
      }
      return p;
    }));
  };
  const addProjectBullet = (projectId: number) => {
    setProjects(projects.map((p: Project) => p.id === projectId ? { ...p, bullets: [...p.bullets, ''] } : p));
  };

  const addSkill = () => setSkills([...skills, { id: Date.now(), category: '', items: '' }]);
  const removeSkill = (id: number) => setSkills(skills.filter((s: Skill) => s.id !== id));

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#c5c6c7] relative">
      {/* Top Action Bar */}
      <div className="fixed top-6 right-6 flex gap-3 z-50 print:hidden">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="flex items-center gap-2 px-4 py-2 bg-[#1f2833] text-[#66fcf1] border border-[#45a29e] rounded-lg hover:bg-[#45a29e] hover:text-black transition-all shadow-lg text-sm font-medium"
        >
          {isEditing ? <Check size={18}/> : <Edit2 size={18}/>}
          {isEditing ? 'Done Editing' : 'Edit Mode'}
        </button>
        <button
          onClick={() => handlePrint()}
          className="flex items-center gap-2 px-4 py-2 bg-[#66fcf1] text-black rounded-lg hover:bg-[#45a29e] transition-all shadow-lg text-sm font-bold"
        >
          <Printer size={18}/>
          Print PDF
        </button>
      </div>

      <main ref={printRef} className="container mx-auto max-w-[1000px] px-6 py-12 flex flex-col gap-12 pdf-container">
        
        {/* Hero Section */}
        <section className={`hero text-center flex flex-col relative items-center ${isEditing ? 'border border-dashed border-[#45a29e] p-6 rounded-xl bg-[#1f2833] bg-opacity-30' : ''}`}>
          


          {isEditing ? (
            <div className="w-full max-w-2xl flex flex-col gap-4 mt-6">
              <input value={basicInfo.name} onChange={e => setBasicInfo({...basicInfo, name: e.target.value})} className="text-4xl font-bold bg-transparent border-b-2 border-[#45a29e] text-center text-white focus:outline-none focus:border-[#66fcf1] pb-2 w-full" placeholder="Full Name" />
              <input value={basicInfo.title} onChange={e => setBasicInfo({...basicInfo, title: e.target.value})} className="text-2xl text-center text-[#66fcf1] bg-transparent border-b-2 border-[#45a29e] focus:outline-none focus:border-[#66fcf1] pb-2 w-full" placeholder="Professional Title" />
              <div className="grid grid-cols-2 gap-4 mt-2 text-base">
                <input value={basicInfo.email} onChange={e => setBasicInfo({...basicInfo, email: e.target.value})} className="bg-[#1f2833] p-3 rounded-lg text-[#c5c6c7] border border-transparent focus:border-[#66fcf1] outline-none text-base" placeholder="Email" />
                <input value={basicInfo.phone} onChange={e => setBasicInfo({...basicInfo, phone: e.target.value})} className="bg-[#1f2833] p-3 rounded-lg text-[#c5c6c7] border border-transparent focus:border-[#66fcf1] outline-none text-base" placeholder="Phone" />
                <input value={basicInfo.github1} onChange={e => setBasicInfo({...basicInfo, github1: e.target.value})} className="bg-[#1f2833] p-3 rounded-lg text-[#c5c6c7] border border-transparent focus:border-[#66fcf1] outline-none text-base" placeholder="GitHub 1" />
                <input value={basicInfo.github2} onChange={e => setBasicInfo({...basicInfo, github2: e.target.value})} className="bg-[#1f2833] p-3 rounded-lg text-[#c5c6c7] border border-transparent focus:border-[#66fcf1] outline-none text-base" placeholder="GitHub 2" />
                <input value={basicInfo.github3} onChange={e => setBasicInfo({...basicInfo, github3: e.target.value})} className="bg-[#1f2833] p-3 rounded-lg text-[#c5c6c7] border border-transparent focus:border-[#66fcf1] outline-none text-base" placeholder="Project Portfolio" />
                <input value={basicInfo.github4} onChange={e => setBasicInfo({...basicInfo, github4: e.target.value})} className="bg-[#1f2833] p-3 rounded-lg text-[#c5c6c7] border border-transparent focus:border-[#66fcf1] outline-none text-base" placeholder="Live Deployment" />
              </div>
            </div>
          ) : (
            <>
              {basicInfo.name && <h1>{basicInfo.name}</h1>}
              {basicInfo.title && <div className="subtitle">{basicInfo.title}</div>}
              <div className="contact-links">
                {basicInfo.email && <a href={`mailto:${basicInfo.email}`}>{basicInfo.email}</a>}
                {basicInfo.phone && <a href={`tel:${basicInfo.phone}`}>{basicInfo.phone}</a>}
                {basicInfo.github1 && <a href={basicInfo.github1} target="_blank" rel="noopener noreferrer">{basicInfo.github1.replace('https://', '').replace('github.com/', 'GH: ')}</a>}
                {basicInfo.github2 && <a href={basicInfo.github2} target="_blank" rel="noopener noreferrer">{basicInfo.github2.replace('https://', '').replace('github.com/', 'GH: ')}</a>}
                {basicInfo.github3 && <a href={basicInfo.github3} target="_blank" rel="noopener noreferrer">Portfolio</a>}
                {basicInfo.github4 && <a href={basicInfo.github4} target="_blank" rel="noopener noreferrer">Live Demo</a>}
              </div>
            </>
          )}
        </section>

        {/* About Section */}
        {(isEditing || basicInfo.summary) && (
          <section className="card relative group">
            <h2>Professional Summary</h2>
            {isEditing ? (
              <textarea 
                value={basicInfo.summary}
                onChange={e => setBasicInfo({...basicInfo, summary: e.target.value})}
                className="w-full bg-[#1f2833] p-5 rounded-xl text-[#c5c6c7] border border-transparent focus:border-[#66fcf1] outline-none min-h-[180px] resize-y text-base leading-relaxed"
                placeholder="Write a short summary about your professional background and goals..."
              />
            ) : (
              <p>{basicInfo.summary}</p>
            )}
          </section>
        )}

        {/* Experience Section */}
        {(isEditing || experience.some(e => e.title || e.company)) && (
          <section className="card relative">
            <div className="flex justify-between items-center mb-6">
              <h2 className="mb-0">Experience & Achievements</h2>
              {isEditing && (
                <button onClick={addExperience} className="text-[#66fcf1] flex items-center gap-2 hover:text-white text-base bg-[#1f2833] px-4 py-2 rounded-lg">
                  <Plus size={20}/> Add Item
                </button>
              )}
            </div>
            
            <div className="flex flex-col gap-6">
              {experience.map((item: Experience, index: number) => {
                if (!isEditing && !item.title && !item.company) return null;
                
                return isEditing ? (
                  <div key={item.id} className="bg-[#1f2833] bg-opacity-50 p-4 rounded-lg relative border border-[#45a29e] border-opacity-30">
                    <button onClick={() => removeExperience(item.id)} className="absolute top-4 right-4 text-red-400 hover:text-red-300"><Trash2 size={22}/></button>
                    <div className="flex flex-col gap-3 pr-8">
                      <input value={item.title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        const newExp = [...experience]; newExp[index].title = e.target.value; setExperience(newExp);
                      }} className="bg-transparent border-b border-[#45a29e] text-lg font-bold text-white outline-none w-full pb-1" placeholder="Job Title or Achievement" />
                      <div className="grid grid-cols-2 gap-3">
                        <input value={item.company} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          const newExp = [...experience]; newExp[index].company = e.target.value; setExperience(newExp);
                        }} className="bg-[#0b0c10] p-2 rounded text-sm outline-none border border-transparent focus:border-[#66fcf1]" placeholder="Company or Organization" />
                        <input value={item.date} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          const newExp = [...experience]; newExp[index].date = e.target.value; setExperience(newExp);
                        }} className="bg-[#0b0c10] p-2 rounded text-sm outline-none border border-transparent focus:border-[#66fcf1]" placeholder="Date Range (e.g. Dec 2025)" />
                      </div>
                      <textarea value={item.description} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                        const newExp = [...experience]; newExp[index].description = e.target.value; setExperience(newExp);
                      }} className="bg-[#0b0c10] p-3 rounded text-sm outline-none border border-transparent focus:border-[#66fcf1] min-h-[80px]" placeholder="Description of your role and achievements..." />
                    </div>
                  </div>
                ) : (
                  <div key={item.id} className="resume-item">
                    <div className="resume-item-header">
                      <div>
                        {item.title && <h3>{item.title}</h3>}
                        {item.company && <div className="text-sub">{item.company}</div>}
                      </div>
                      {item.date && <div className="text-sub">{item.date}</div>}
                    </div>
                    {item.description && <p>{item.description}</p>}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Education Section */}
        {(isEditing || education.some(e => e.degree || e.school)) && (
          <section className="card relative">
            <div className="flex justify-between items-center mb-6">
              <h2 className="mb-0">Education & Certifications</h2>
              {isEditing && (
                <button onClick={addEducation} className="text-[#66fcf1] flex items-center gap-2 hover:text-white text-base bg-[#1f2833] px-4 py-2 rounded-lg">
                  <Plus size={20}/> Add Item
                </button>
              )}
            </div>
            
            <div className="flex flex-col gap-6">
              {isEditing ? (
                // Editing View: Kept as standard forms for easy editing
                education.map((item: Education, index: number) => {
                  return (
                    <div key={item.id} className="bg-[#1f2833] bg-opacity-50 p-4 rounded-lg relative border border-[#45a29e] border-opacity-30">
                      <button onClick={() => removeEducation(item.id)} className="absolute top-4 right-4 text-red-400 hover:text-red-300"><Trash2 size={22}/></button>
                      <div className="flex flex-col gap-3 pr-8">
                        <input value={item.degree} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          const newEd = [...education]; newEd[index].degree = e.target.value; setEducation(newEd);
                        }} className="bg-transparent border-b border-[#45a29e] text-lg font-bold text-white outline-none w-full pb-1" placeholder="Degree or Certification Name" />
                        <input value={item.school} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          const newEd = [...education]; newEd[index].school = e.target.value; setEducation(newEd);
                        }} className="bg-[#0b0c10] p-2 rounded text-sm outline-none border border-transparent focus:border-[#66fcf1]" placeholder="Institution Name" />
                        <input value={item.grade} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          const newEd = [...education]; newEd[index].grade = e.target.value; setEducation(newEd);
                        }} className="bg-[#0b0c10] p-2 rounded text-sm outline-none border border-transparent focus:border-[#66fcf1]" placeholder="Grade / GPA / Percentage" />
                        <input value={item.details} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          const newEd = [...education]; newEd[index].details = e.target.value; setEducation(newEd);
                        }} className="bg-[#0b0c10] p-2 rounded text-sm outline-none border border-transparent focus:border-[#66fcf1]" placeholder="Additional details (optional)" />
                      </div>
                    </div>
                  );
                })
              ) : (
                // Preview/Read-Only View: Tabular Layout
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse border border-[#1f2833] mt-2">
                    <thead>
                      <tr className="bg-[#1f2833] text-[#66fcf1]">
                        <th className="p-3 border border-[#1f2833]">Degree / Qualification</th>
                        <th className="p-3 border border-[#1f2833]">Institution / Board</th>
                        <th className="p-3 border border-[#1f2833]">Marks / Percentage</th>
                      </tr>
                    </thead>
                    <tbody>
                      {education.filter((e: Education) => e.degree || e.school || e.grade).map((item: Education) => (
                        <tr key={item.id} className="border-b border-[#1f2833] hover:bg-[#1f2833] hover:bg-opacity-30 transition-colors">
                          <td className="p-3 border-r border-[#1f2833] font-medium text-white">{item.degree}
                            {item.details && <div className="text-xs text-[#8c9096] mt-1 font-normal break-words max-w-[250px]">{item.details}</div>}
                          </td>
                          <td className="p-3 border-r border-[#1f2833] text-[#c5c6c7]">{item.school}</td>
                          <td className="p-3 text-[#66fcf1] font-semibold whitespace-nowrap">{item.grade}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Projects Section */}
        {(isEditing || projects.some(p => p.title)) && (
          <section className="card relative">
            <div className="flex justify-between items-center mb-6">
              <h2 className="mb-0">Key Projects</h2>
              {isEditing && (
                <button onClick={addProject} className="text-[#66fcf1] flex items-center gap-2 hover:text-white text-base bg-[#1f2833] px-4 py-2 rounded-lg">
                  <Plus size={20}/> Add Project
                </button>
              )}
            </div>
            
            <div className="flex flex-col gap-6">
              {projects.map((item: Project, index: number) => {
                if (!isEditing && !item.title) return null;
                
                return isEditing ? (
                  <div key={item.id} className="bg-[#1f2833] bg-opacity-50 p-4 rounded-lg relative border border-[#45a29e] border-opacity-30">
                    <button onClick={() => removeProject(item.id)} className="absolute top-4 right-4 text-red-400 hover:text-red-300"><Trash2 size={16}/></button>
                    <div className="flex flex-col gap-3 pr-8">
                      <div className="grid grid-cols-2 gap-3">
                        <input value={item.title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          const newProj = [...projects]; newProj[index].title = e.target.value; setProjects(newProj);
                        }} className="bg-transparent border-b border-[#45a29e] text-lg font-bold text-white outline-none w-full pb-1" placeholder="Project Name" />
                        <input value={item.link} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          const newProj = [...projects]; newProj[index].link = e.target.value; setProjects(newProj);
                        }} className="bg-transparent border-b border-[#45a29e] text-sm text-[#66fcf1] outline-none w-full pb-1" placeholder="Project Link (Optional)" />
                      </div>
                      
                      <div className="flex flex-col gap-2 mt-2">
                        <span className="text-xs text-[#8c9096] uppercase tracking-wider">Bullet Points</span>
                        {item.bullets.map((bullet: string, bIndex: number) => (
                          <div key={bIndex} className="flex items-center gap-2">
                            <span className="text-[#66fcf1] text-lg leading-none">•</span>
                            <input 
                              value={bullet} 
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateProjectBullet(item.id, bIndex, e.target.value)} 
                              className="bg-[#0b0c10] p-2 rounded text-sm outline-none border border-transparent focus:border-[#66fcf1] w-full" 
                              placeholder="Project detail or achievement..." 
                            />
                            <button 
                              onClick={() => {
                                const newProj = [...projects];
                                newProj[index].bullets = newProj[index].bullets.filter((_: string, i: number) => i !== bIndex);
                                setProjects(newProj);
                              }}
                              className="text-red-400 hover:text-red-300 p-1"
                            ><Trash2 size={14}/></button>
                          </div>
                        ))}
                        <button onClick={() => addProjectBullet(item.id)} className="text-xs text-[#66fcf1] w-max mt-1 hover:underline flex items-center gap-1">
                          <Plus size={12}/> Add Bullet Point
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div key={item.id} className="resume-item">
                    <div className="resume-item-header">
                      <div>
                        {item.title && <h3>{item.title}</h3>}
                        {item.link && <div className="text-sub"><a href={item.link} target="_blank" rel="noopener noreferrer">{item.link}</a></div>}
                      </div>
                    </div>
                    {item.bullets.filter((b: string) => b.trim() !== '').length > 0 && (
                      <ul className="resume-list">
                        {item.bullets.filter((b: string) => b.trim() !== '').map((bullet: string, idx: number) => (
                          <li key={idx}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Skills Section */}
        {(isEditing || skills.some(s => s.category || s.items)) && (
          <section className="card relative">
            <div className="flex justify-between items-center mb-6">
              <h2 className="mb-0">Technical Skills</h2>
              {isEditing && (
                <button onClick={addSkill} className="text-[#66fcf1] flex items-center gap-2 hover:text-white text-base bg-[#1f2833] px-4 py-2 rounded-lg">
                  <Plus size={20}/> Add Category
                </button>
              )}
            </div>
            
            <div className="flex flex-col gap-6">
              {skills.map((item: Skill, index: number) => {
                if (!isEditing && !item.category && !item.items) return null;
                
                return isEditing ? (
                  <div key={item.id} className="bg-[#1f2833] bg-opacity-50 p-4 rounded-lg relative border border-[#45a29e] border-opacity-30">
                    <button onClick={() => removeSkill(item.id)} className="absolute top-4 right-4 text-red-400 hover:text-red-300"><Trash2 size={16}/></button>
                    <div className="flex flex-col gap-3 pr-8">
                      <input value={item.category} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        const newSkills = [...skills]; newSkills[index].category = e.target.value; setSkills(newSkills);
                      }} className="bg-transparent border-b border-[#45a29e] text-lg font-bold text-white outline-none w-full pb-1" placeholder="Skill Category (e.g. Languages)" />
                      <input value={item.items} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        const newSkills = [...skills]; newSkills[index].items = e.target.value; setSkills(newSkills);
                      }} className="bg-[#0b0c10] p-2 rounded text-sm outline-none border border-transparent focus:border-[#66fcf1]" placeholder="Comma separated items (e.g. Python, Java, C++)" />
                    </div>
                  </div>
                ) : (
                  <div key={item.id} className="skill-category">
                    {item.category && <h3>{item.category}</h3>}
                    <div className="skills-container">
                      {item.items.split(',').filter((s: string) => s.trim() !== '').map((skill: string, idx: number) => (
                        <span key={idx} className="skill-tag">{skill.trim()}</span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

      </main>
      
      {/* Print-specific CSS adjustments */}
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          body, .min-h-screen { background: white !important; color: black !important; }
          .container { padding: 0 !important; max-width: 100% !important; gap: 1rem !important; }
          .card { border: none !important; padding: 0 !important; margin-bottom: 1.5rem !important; box-shadow: none !important; }
          h1, h2, h3, p, div, span, li, td, th { color: black !important; text-shadow: none !important; -webkit-text-fill-color: black !important; border-color: #ddd !important; }
          .skill-tag { border: 1px solid #ccc !important; background: #f4f4f4 !important; color: black !important; padding: 0.2rem 0.8rem !important; font-size: 0.85rem !important;}
          .subtitle { color: #555 !important; }
          .text-sub { color: #666 !important; }
          h2::after { display: none !important; }
          a { color: #0066cc !important; text-decoration: none !important; }
          .resume-item::before { background: black !important; box-shadow: none !important; }
          .resume-item { border-left-color: #ccc !important; }
          .pdf-container { padding: 40px !important; }
          
          /* Table Print Properties */
          table { width: 100% !important; border-collapse: collapse !important; border-color: #ccc !important; }
          th { background: #f8f8f8 !important; border-color: #ccc !important; font-weight: bold !important;}
          td { border-color: #ccc !important; }
          th, td { padding: 8px !important; font-size: 0.9rem !important;}
          tr {border-bottom: 1px solid #ccc !important;}
        }
      `}} />
    </div>
  );
}
