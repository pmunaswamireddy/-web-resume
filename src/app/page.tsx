"use client"; // Force Update: 2026-03-09

import React, { useState, useRef, useEffect } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Camera, Upload, Plus, Trash2, Printer, Edit2, Check, Download } from 'lucide-react';

export default function ResumeBuilder() {
  const [isEditing, setIsEditing] = useState(false);
  const printRef = useRef(null);

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: 'Madhu_Sudhan_Reddy_Resume',
  });

  // Default Data State
  const [profileImg, setProfileImg] = useState<string | null>(null);
  const [photoOffsetY, setPhotoOffsetY] = useState(25);

  // Persist profile photo across refreshes
  useEffect(() => {
    const savedImg = localStorage.getItem('resume_profileImg');
    const savedOffset = localStorage.getItem('resume_photoOffsetY');
    if (savedImg) setProfileImg(savedImg);
    if (savedOffset) setPhotoOffsetY(Number(savedOffset));
  }, []);

  const saveProfileImg = (img: string | null) => {
    setProfileImg(img);
    if (img) localStorage.setItem('resume_profileImg', img);
    else localStorage.removeItem('resume_profileImg');
  };

  const saveOffsetY = (val: number) => {
    setPhotoOffsetY(val);
    localStorage.setItem('resume_photoOffsetY', String(val));
  };
  
  const [basicInfo, setBasicInfo] = useState({
    name: 'Penumuru Madhu Sudhan Reddy',
    title: 'Software Engineer | AI & Data Science Specialist',
    email: 'pmrpmadhusudhanreddy@gmail.com',
    phone: '7672082814',
    github1: 'https://github.com/pmunaswamireddy',
    github2: 'https://github.com/pmr1234',
    github3: 'https://web-resume-peach-xi.vercel.app/',
    github4: 'https://frontend-nine-dusky-21.vercel.app/',
    summary: 'Currently a 4th-year B.Tech student at MTIET with a specialized focus on Full-Stack Development, Data Engineering, and AI. Recognized for leading a team to 1st Prize at the HACKHOUSE 24-Hour Live Hackathon. Backed by 240+ hours of internship experience with industry leaders like AWS, Google, and Palo Alto Networks. Adept at engineering high-accuracy solutions and leveraging Elite+Silver NPTEL expertise to deliver scalable, data-driven applications in high-pressure professional environments.'
  });

  const [experience, setExperience] = useState([
    {
      id: 1,
      title: 'First Prize (₹8,000) - HACKHOUSE 24-Hour Live Hackathon',
      company: 'VAULTSPHERE AI TECHNOLOGIES PVT. LTD. & MTIET',
      date: 'Dec 26-27, 2025',
      description: 'Led a team to victory in a national-level hackathon. Developed a fully functional Health Management platform using React and Node.js within a strict 24-hour deadline.'
    },
    {
      id: 2,
      title: 'AWS Cloud & Gen AI Intern (240 Hours)',
      company: 'AWS / AICTE',
      date: 'Aug - Oct 2024',
      description: 'Intensive internship focused on AWS services, Generative AI models, and cloud architecture. Built scalable AI solutions using AWS Bedrock and Lambda.'
    },
    {
      id: 3,
      title: 'Data Engineering Intern (Grade: O)',
      company: 'AWS Academy / EduSkills',
      date: 'Oct - Dec 2025',
      description: 'Engineered data pipelines and processed large datasets using AWS cloud infrastructure.'
    },
    {
      id: 4,
      title: 'Full Stack Web Development Intern',
      company: 'Gen Proces',
      date: 'July 2025',
      description: 'Developed and maintained responsive web applications using modern JavaScript frameworks.'
    },
    {
      id: 5,
      title: 'Google Cloud Engineering Intern',
      company: 'Google Cloud / AICTE',
      date: 'July - Sep 2024',
      description: 'Implemented cloud infrastructure solutions and learned about GCP big data services including BigQuery and Dataflow.'
    },
    {
      id: 6,
      title: 'Ethical Hacking Intern (Grade: P)',
      company: 'EduSkills Academy',
      date: 'April - June 2025',
      description: 'Focused on penetration testing, network security, and vulnerability assessment.'
    }
  ]);


  const [education, setEducation] = useState([
    {
      id: 1,
      degree: 'B.Tech in Artificial Intelligence & Data Science',
      school: 'MTIET / JNTUA',
      grade: '8.60 CGPA (81.0%) | Currently 4th Year',
      details: 'National Hackathon Champion; Focus on AI/ML and Full-Stack Engineering.'
    },
    {
      id: 2,
      degree: 'Elite + Silver Certification in Industry 4.0 & IIoT',
      school: 'NPTEL / IIT Kanpur',
      grade: 'Grade: Elite+Silver',
      details: 'Ranked in the top percentage of candidates nationwide.'
    },
    {
      id: 3,
      degree: 'Intermediate / 12th Grade',
      school: 'Board of Intermediate Education, AP',
      grade: '946 / 1000 (94.6%)',
      details: ''
    },
    {
      id: 4,
      degree: 'SSC / 10th Grade',
      school: 'Board of Secondary Education, AP',
      grade: '573 / 600 (95.5%)',
      details: ''
    },
    {
      id: 5,
      degree: 'Python for Data Science (edX)',
      school: 'IBM / edX',
      grade: 'Grade: Pass',
      details: 'Certified in advanced Python data analysis and visualization.'
    },
    {
      id: 6,
      degree: 'Precision Engineering Certification',
      school: 'CMTI, Bangalore',
      grade: 'Grade: Pass',
      details: 'Specialized training in high-accuracy engineering and manufacturing.'
    }
  ]);

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Scrcpy Master Control',
      link: 'https://github.com/pmunaswamireddy/scrcpy-master-control.git',
      bullets: [
        'Advanced Windows GUI for low-latency mirroring and batch control of multiple Android devices using ADB.',
        'Features built-in wireless pairing (QR Code/mDNS), internet tunneling (Tailscale), and Broadcast Mode.',
        'Engineered with Python (CustomTkinter) and a background-buffered UI queue for zero-lag performance.'
      ]
    },
    {
      id: 2,
      title: 'JNTUA Calculator App',
      link: 'https://github.com/pmunaswamireddy/-jntua-calculator.git',
      bullets: [
        'Android APK for automatic SGPA/CGPA calculation with AI-based OCR extraction from PDF mark sheets.',
        'Built using Java/Kotlin with integrated ML Kit for text recognition from images.',
        'Reduces manual GPA calculation effort to zero for JNTUA students.'
      ]
    },
    {
      id: 3,
      title: 'Elderly Guardian AI',
      link: 'https://frontend-nine-dusky-21.vercel.app/',
      bullets: [
        'ML-powered web platform for remote elderly health monitoring and emergency alert system.',
        'Built with React frontend and FastAPI backend; deployed live on Vercel.',
        'Features real-time health data tracking, AI anomaly detection, and caregiver notifications.'
      ]
    },
    {
      id: 4,
      title: 'Hetro Shopping App',
      link: '',
      bullets: [
        'Full-stack e-commerce platform with secure authentication, cart management, and product listing.',
        'Developed using React.js, Node.js, Express.js, and MongoDB with JWT-based auth.',
        'Includes admin panel for product and order management with responsive UI design.'
      ]
    }
  ]);

  const [skills, setSkills] = useState([
    { id: 1, category: 'Languages', items: 'C, Python, Java, JavaScript, HTML, CSS, SQL' },
    { id: 2, category: 'Frameworks & Tech', items: 'React.js, Next.js, Node.js, Express.js, Hadoop, Spark, MongoDB, Hive, Tableau, Prompt Engineering' },
    { id: 3, category: 'Soft Skills', items: 'Leadership, Effective Communication, High Accuracy, Confident' },
    { id: 4, category: 'Spoken Languages', items: 'Telugu, Hindi, English, Sanskrit' },
    { id: 5, category: 'Hobbies', items: 'Gaming, Photography, Traveling, Exploring New Tech' }
  ]);


  // Handlers for Images
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        saveProfileImg(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const captureCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const video = document.createElement('video');
      video.srcObject = stream;
      video.play();
      setTimeout(() => {
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext('2d')?.drawImage(video, 0, 0);
        saveProfileImg(canvas.toDataURL('image/jpeg'));
        stream.getTracks().forEach(track => track.stop());
      }, 1500);
    } catch (err) {
      alert("Could not access camera. Please check permissions.");
    }
  };

  // Handlers for Add/Remove
  const addExperience = () => setExperience([...experience, { id: Date.now(), title: '', company: '', date: '', description: '' }]);
  const removeExperience = (id: number) => setExperience(experience.filter(e => e.id !== id));
  
  const addEducation = () => setEducation([...education, { id: Date.now(), degree: '', school: '', grade: '', details: '' }]);
  const removeEducation = (id: number) => setEducation(education.filter(e => e.id !== id));
  
  const addProject = () => setProjects([...projects, { id: Date.now(), title: '', link: '', bullets: [''] }]);
  const removeProject = (id: number) => setProjects(projects.filter(p => p.id !== id));
  const updateProjectBullet = (projectId: number, bulletIndex: number, value: string) => {
    setProjects(projects.map(p => {
      if (p.id === projectId) {
        const newBullets = [...p.bullets];
        newBullets[bulletIndex] = value;
        return { ...p, bullets: newBullets };
      }
      return p;
    }));
  };
  const addProjectBullet = (projectId: number) => {
    setProjects(projects.map(p => p.id === projectId ? { ...p, bullets: [...p.bullets, ''] } : p));
  };

  const addSkill = () => setSkills([...skills, { id: Date.now(), category: '', items: '' }]);
  const removeSkill = (id: number) => setSkills(skills.filter(s => s.id !== id));

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#c5c6c7]">
      {/* Floating Action Controls */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button 
          onClick={() => setIsEditing(!isEditing)}
          className="flex items-center gap-2 px-4 py-2 bg-[#1f2833] border border-[#66fcf1] border-opacity-30 rounded-lg text-[#66fcf1] hover:bg-[#66fcf1] hover:text-[#0b0c10] transition-all shadow-lg"
        >
          {isEditing ? <><Check size={22}/> Preview Mode</> : <><Edit2 size={22}/> Edit Mode</>}
        </button>
        {!isEditing && (
          <button 
            onClick={() => handlePrint()}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#66fcf1] rounded-lg text-[#0b0c10] hover:bg-[#45a29e] transition-all shadow-lg font-bold text-base"
          >
            <Printer size={22}/> Export PDF
          </button>
        )}
      </div>

      <main ref={printRef} className="container mx-auto max-w-[1000px] px-6 py-12 flex flex-col gap-12 pdf-container">
        
        {/* Hero Section */}
        <section className={`hero text-center flex flex-col relative items-center ${isEditing ? 'border border-dashed border-[#45a29e] p-6 rounded-xl bg-[#1f2833] bg-opacity-30' : ''}`}>
          
          {/* Profile Photo Area */}
          <div className="relative group mb-6 flex flex-col items-center">
            {/* The circle container – overflow:hidden is key */}
            <div
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '4px solid #66fcf1',
                boxShadow: '0 0 20px rgba(102,252,241,0.3)',
                flexShrink: 0
              }}
            >
              {profileImg ? (
                <img
                  src={profileImg}
                  alt="Profile"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: `center ${photoOffsetY}%`,
                  }}
                />
              ) : (
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#1f2833', color: '#8c9096', fontSize: '0.85rem' }}>
                  No Photo
                </div>
              )}
            </div>

            {isEditing && (
              <div className="mt-3 flex flex-col items-center gap-2">
                {/* Upload / Camera row */}
                <div className="flex gap-2 bg-[#0b0c10] p-1 rounded-lg border border-[#66fcf1] shadow-xl">
                  <label className="p-2 hover:bg-[#1f2833] rounded cursor-pointer text-[#66fcf1]" title="Upload Image">
                    <Upload size={16} />
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                  </label>
                  <button onClick={captureCamera} className="p-2 hover:bg-[#1f2833] rounded cursor-pointer text-[#66fcf1]" title="Take Photo">
                    <Camera size={16} />
                  </button>
                  {profileImg && (
                    <button onClick={() => saveProfileImg(null)} className="p-2 hover:bg-red-900 rounded cursor-pointer text-red-400" title="Remove Photo">
                      <Trash2 size={16} />
                    </button>
                  )}
                </div>
                {/* Vertical offset slider */}
                {profileImg && (
                  <div className="flex items-center gap-2 text-xs text-[#8c9096]">
                    <span>⬆ Face</span>
                    <input
                      type="range" min={0} max={100} value={photoOffsetY}
                      onChange={e => saveOffsetY(Number(e.target.value))}
                      className="w-28 accent-[#66fcf1]"
                      title="Adjust vertical position of face"
                    />
                    <span>⬇</span>
                  </div>
                )}
              </div>
            )}
          </div>

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
              {experience.map((item, index) => {
                if (!isEditing && !item.title && !item.company) return null;
                
                return isEditing ? (
                  <div key={item.id} className="bg-[#1f2833] bg-opacity-50 p-4 rounded-lg relative border border-[#45a29e] border-opacity-30">
                    <button onClick={() => removeExperience(item.id)} className="absolute top-4 right-4 text-red-400 hover:text-red-300"><Trash2 size={22}/></button>
                    <div className="flex flex-col gap-3 pr-8">
                      <input value={item.title} onChange={e => {
                        const newExp = [...experience]; newExp[index].title = e.target.value; setExperience(newExp);
                      }} className="bg-transparent border-b border-[#45a29e] text-lg font-bold text-white outline-none w-full pb-1" placeholder="Job Title or Achievement" />
                      <div className="grid grid-cols-2 gap-3">
                        <input value={item.company} onChange={e => {
                          const newExp = [...experience]; newExp[index].company = e.target.value; setExperience(newExp);
                        }} className="bg-[#0b0c10] p-2 rounded text-sm outline-none border border-transparent focus:border-[#66fcf1]" placeholder="Company or Organization" />
                        <input value={item.date} onChange={e => {
                          const newExp = [...experience]; newExp[index].date = e.target.value; setExperience(newExp);
                        }} className="bg-[#0b0c10] p-2 rounded text-sm outline-none border border-transparent focus:border-[#66fcf1]" placeholder="Date Range (e.g. Dec 2025)" />
                      </div>
                      <textarea value={item.description} onChange={e => {
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
                education.map((item, index) => {
                  return (
                    <div key={item.id} className="bg-[#1f2833] bg-opacity-50 p-4 rounded-lg relative border border-[#45a29e] border-opacity-30">
                      <button onClick={() => removeEducation(item.id)} className="absolute top-4 right-4 text-red-400 hover:text-red-300"><Trash2 size={22}/></button>
                      <div className="flex flex-col gap-3 pr-8">
                        <input value={item.degree} onChange={e => {
                          const newEd = [...education]; newEd[index].degree = e.target.value; setEducation(newEd);
                        }} className="bg-transparent border-b border-[#45a29e] text-lg font-bold text-white outline-none w-full pb-1" placeholder="Degree or Certification Name" />
                        <input value={item.school} onChange={e => {
                          const newEd = [...education]; newEd[index].school = e.target.value; setEducation(newEd);
                        }} className="bg-[#0b0c10] p-2 rounded text-sm outline-none border border-transparent focus:border-[#66fcf1]" placeholder="Institution Name" />
                        <input value={item.grade} onChange={e => {
                          const newEd = [...education]; newEd[index].grade = e.target.value; setEducation(newEd);
                        }} className="bg-[#0b0c10] p-2 rounded text-sm outline-none border border-transparent focus:border-[#66fcf1]" placeholder="Grade / GPA / Percentage" />
                        <input value={item.details} onChange={e => {
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
                      {education.filter(e => e.degree || e.school || e.grade).map((item) => (
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
              {projects.map((item, index) => {
                if (!isEditing && !item.title) return null;
                
                return isEditing ? (
                  <div key={item.id} className="bg-[#1f2833] bg-opacity-50 p-4 rounded-lg relative border border-[#45a29e] border-opacity-30">
                    <button onClick={() => removeProject(item.id)} className="absolute top-4 right-4 text-red-400 hover:text-red-300"><Trash2 size={16}/></button>
                    <div className="flex flex-col gap-3 pr-8">
                      <div className="grid grid-cols-2 gap-3">
                        <input value={item.title} onChange={e => {
                          const newProj = [...projects]; newProj[index].title = e.target.value; setProjects(newProj);
                        }} className="bg-transparent border-b border-[#45a29e] text-lg font-bold text-white outline-none w-full pb-1" placeholder="Project Name" />
                        <input value={item.link} onChange={e => {
                          const newProj = [...projects]; newProj[index].link = e.target.value; setProjects(newProj);
                        }} className="bg-transparent border-b border-[#45a29e] text-sm text-[#66fcf1] outline-none w-full pb-1" placeholder="Project Link (Optional)" />
                      </div>
                      
                      <div className="flex flex-col gap-2 mt-2">
                        <span className="text-xs text-[#8c9096] uppercase tracking-wider">Bullet Points</span>
                        {item.bullets.map((bullet, bIndex) => (
                          <div key={bIndex} className="flex items-center gap-2">
                            <span className="text-[#66fcf1] text-lg leading-none">•</span>
                            <input 
                              value={bullet} 
                              onChange={e => updateProjectBullet(item.id, bIndex, e.target.value)} 
                              className="bg-[#0b0c10] p-2 rounded text-sm outline-none border border-transparent focus:border-[#66fcf1] w-full" 
                              placeholder="Project detail or achievement..." 
                            />
                            <button 
                              onClick={() => {
                                const newProj = [...projects];
                                newProj[index].bullets = newProj[index].bullets.filter((_, i) => i !== bIndex);
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
                    {item.bullets.filter(b => b.trim() !== '').length > 0 && (
                      <ul className="resume-list">
                        {item.bullets.filter(b => b.trim() !== '').map((bullet, idx) => (
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
              {skills.map((item, index) => {
                if (!isEditing && !item.category && !item.items) return null;
                
                return isEditing ? (
                  <div key={item.id} className="bg-[#1f2833] bg-opacity-50 p-4 rounded-lg relative border border-[#45a29e] border-opacity-30">
                    <button onClick={() => removeSkill(item.id)} className="absolute top-4 right-4 text-red-400 hover:text-red-300"><Trash2 size={16}/></button>
                    <div className="flex flex-col gap-3 pr-8">
                      <input value={item.category} onChange={e => {
                        const newSkills = [...skills]; newSkills[index].category = e.target.value; setSkills(newSkills);
                      }} className="bg-transparent border-b border-[#45a29e] text-lg font-bold text-white outline-none w-full pb-1" placeholder="Skill Category (e.g. Languages)" />
                      <input value={item.items} onChange={e => {
                        const newSkills = [...skills]; newSkills[index].items = e.target.value; setSkills(newSkills);
                      }} className="bg-[#0b0c10] p-2 rounded text-sm outline-none border border-transparent focus:border-[#66fcf1]" placeholder="Comma separated items (e.g. Python, Java, C++)" />
                    </div>
                  </div>
                ) : (
                  <div key={item.id} className="skill-category">
                    {item.category && <h3>{item.category}</h3>}
                    <div className="skills-container">
                      {item.items.split(',').filter(s => s.trim() !== '').map((skill, idx) => (
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
