import { Terminal, Code, Cpu, Globe, Github, Linkedin, Mail, ExternalLink, Award } from 'lucide-react';

function App() {
  // --- CUSTOM DATA ---
  const projects = [
    {
      title: "Real-Time Collaborative Dashboard",
      description: "A full-stack application featuring real-time data synchronization, secure user authentication, and interactive charting.",
      tech: ["MongoDB", "Express", "React", "Node.js", "Socket.io"],
      github: "#",
      live: "#"
    },
    {
      title: "AI-Powered PDF Insight System",
      description: "An intelligent Retrieval-Augmented Generation (RAG) pipeline that allows users to query dense PDF documents and receive contextual answers.",
      tech: ["Python", "LangChain", "LLM API", "Vector DB", "React"],
      github: "#",
      live: "#"
    },
    {
      title: "IoT Landslide Monitoring System",
      description: "A hardware-software integration project using microcontrollers to stream sensor data to a centralized web dashboard for real-time risk alerts.",
      tech: ["React", "Node.js", "ESP32", "MQTT", "Tailwind CSS"],
      github: "#",
      live: "#"
    }
  ];

  const skillCategories = [
    {
      title: "Languages & Core",
      skills: ["C++", "JavaScript (ES6+)", "Python", "HTML5/CSS3"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "Socket.io"]
    },
    {
      title: "Databases & Tools",
      skills: ["MongoDB", "SQL", "Git & GitHub", "Postman"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-teal-500 selection:text-slate-900">
      
      {/* --- NAVBAR --- */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 font-bold text-xl tracking-tight text-teal-400">
            <Terminal size={20} />
            <span>Dev.Portfolio</span>
          </a>
          <div className="flex gap-6 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-teal-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-teal-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-teal-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="hero" className="max-w-5xl mx-auto px-6 pt-24 pb-20 flex flex-col justify-center min-h-[70vh]">
        <p className="text-teal-400 font-mono mb-3 text-sm tracking-wider">Hi, my name is</p>
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-100 tracking-tight mb-4">
          Software Engineer & Full-Stack Developer.
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mb-8 leading-relaxed">
          I build robust, scalable web applications and specialize in creating interactive user experiences. 
          From crafting responsive MERN stack applications to integrating real-time features and analytical tools, 
          I love turning complex problems into elegant code.
        </p>
        <div className="flex gap-4">
          <a href="#projects" className="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold rounded transition-colors shadow-lg shadow-teal-500/10">
            View My Work
          </a>
          <a href="#contact" className="px-6 py-3 border border-slate-700 hover:border-teal-500 hover:text-teal-400 text-slate-300 font-semibold rounded transition-colors">
            Get In Touch
          </a>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-800">
        <h2 className="text-3xl font-bold mb-8 text-slate-200 flex items-center gap-3">
          <span className="text-teal-400 font-mono text-xl">01.</span> About Me
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-slate-400 leading-relaxed">
          <div className="md:col-span-2 space-y-4">
            <p>
              I am a final-year engineering student passionate about competitive programming and building backend-heavy, highly interactive web solutions. My technical journey thrives at the intersection of robust server-side logic and smooth, intuitive front-end interfaces.
            </p>
            <p>
              Beyond standard web development, I enjoy exploring real-time communication architectures, microcontrollers for smart monitoring, and finding efficient solutions to complex algorithmic problems.
            </p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 flex flex-col justify-center items-center text-center">
            <Award className="text-teal-400 mb-3" size={32} />
            <h3 className="font-semibold text-slate-200 mb-1">Competitive Programmer</h3>
            <p className="text-xs text-slate-400">Active participant on LeetCode, CodeChef, and Codeforces.</p>
          </div>
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section id="skills" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-800">
        <h2 className="text-3xl font-bold mb-8 text-slate-200 flex items-center gap-3">
          <span className="text-teal-400 font-mono text-xl">02.</span> Technical Skills
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {skillCategories.map((cat, index) => (
            <div key={index} className="p-6 bg-slate-800/40 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors">
              <h3 className="font-semibold text-teal-400 mb-4 flex items-center gap-2">
                {index === 0 && <Code size={18} />}
                {index === 1 && <Globe size={18} />}
                {index === 2 && <Cpu size={18} />}
                {cat.title}
              </h3>
              <ul className="space-y-2 text-slate-300 text-sm font-mono">
                {cat.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-2">
                    <span className="text-teal-500">▹</span> {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-800">
        <h2 className="text-3xl font-bold mb-12 text-slate-200 flex items-center gap-3">
          <span className="text-teal-400 font-mono text-xl">03.</span> Featured Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((proj, index) => (
            <div key={index} className="flex flex-col bg-slate-800/30 rounded-lg border border-slate-800 p-6 hover:-translate-y-1 transition-transform duration-300">
              <div className="flex justify-between items-center mb-6">
                <Code className="text-teal-400" size={28} />
                <div className="flex gap-3 text-slate-400">
                  <a href={proj.github} className="hover:text-teal-400 transition-colors"><Github size={18} /></a>
                  <a href={proj.live} className="hover:text-teal-400 transition-colors"><ExternalLink size={18} /></a>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-200 mb-3 hover:text-teal-400 transition-colors">
                {proj.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 grow">
                {proj.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {proj.tech.map((t, tIdx) => (
                  <span key={tIdx} className="text-xs font-mono bg-slate-800 text-slate-300 px-2.5 py-1 rounded border border-slate-700/50">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-24 text-center border-t border-slate-800">
        <span className="text-teal-400 font-mono text-sm tracking-widest">04. WHAT'S NEXT?</span>
        <h2 className="text-4xl font-bold text-slate-200 mt-2 mb-4">Get In Touch</h2>
        <p className="text-slate-400 max-w-md mx-auto mb-8 text-sm leading-relaxed">
          Whether you have an opening that fits my skill set, a project collaboration idea, or just want to say hi, my inbox is always open!
        </p>
        <a href="mailto:your.email@example.com" className="inline-flex items-center gap-2 px-6 py-3 border border-teal-400 text-teal-400 hover:bg-teal-400/10 font-semibold rounded transition-colors tracking-wide text-sm">
          <Mail size={16} /> Say Hello
        </a>

        {/* Social Footnote */}
        <div className="flex justify-center gap-6 mt-16 text-slate-500">
          <a href="#" className="hover:text-teal-400 transition-colors"><Github size={20} /></a>
          <a href="#" className="hover:text-teal-400 transition-colors"><Linkedin size={20} /></a>
        </div>
        <p className="text-xs text-slate-600 mt-6 font-mono">Designed & Built with React & Tailwind</p>
      </section>

    </div>
  );
}

export default App;