import React, { useState, useEffect } from 'react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  
  // Handle scroll to update active section in navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'resume', 'about', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Project data - now with SmartFit presentation details
  const projects = [
    {
      id: 1,
      title: 'SmartFit Marketing Strategy',
      role: 'Lead Strategist – Fitness App Pitch',
      summary: 'Comprehensive marketing strategy for SmartFit, a fitness app targeting health-conscious consumers in a $5.4B industry',
      keyComponents: {
        strategicPlan: [
          "Competitive pricing strategy (free vs MyFitnessPal's $80/year)",
          "App partnership plan with Inbody analysis stores",
          "Integration with Apple Watch ecosystem",
          "Influencer marketing campaign with 10 fitness influencers"
        ],
        timeline: {
          preLaunch: "Dec 2 - Jan 2: Influencer content creation, blog development",
          launch: "Jan 2 - Dec 30: Partner negotiations, SEO optimization, campaign execution",
          postLaunch: "Dec 30 - Jan 30: Performance evaluation and metrics tracking"
        },
        budget: {
          total: "$120,000",
          breakdown: {
            influencers: "$50,000",
            socialMediaAds: "$25,000",
            seo: "$36,000",
            other: "$9,000"
          }
        }
      },
      contributions: [
        "Developed SWOT analysis identifying market opportunities in at-home workouts",
        "Created customer acquisition strategy targeting 33% of fitness app users",
        "Designed multi-channel promotional plan across TikTok, YouTube, Instagram, and Facebook",
        "Built financial model projecting $7 revenue per marketing dollar spent"
      ],
      previewImages: [
        'https://picsum.photos/id/10/800/600 ',
        'https://picsum.photos/id/11/800/600 ',
        'https://picsum.photos/id/12/800/600 ',
        'https://picsum.photos/id/13/800/600 '
      ],
      pdfLink: '/SmartFit_Presentation.pdf',
      presentationLink: '#'
    },
    {
      id: 2,
      title: 'Budget University Marketing Strategy',
      role: 'Marketing Consultant – Budget University',
      summary: 'Presented marketing strategy to real stakeholders at Budget University, focusing on student engagement.',
      contributions: [
        'Analyzed current marketing efforts and identified gaps',
        'Developed targeted marketing campaigns for different student segments',
        'Created measurable KPIs for campaign success',
        'Incorporated feedback to refine messaging and approach'
      ],
      previewImage: 'https://picsum.photos/id/20/800/600 ',
      link: '#'
    }
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">Garrett Weeks</div>
          <div className="hidden md:flex space-x-6">
            {['home', 'projects', 'resume', 'about', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-colors ${
                  activeSection === section 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center bg-gradient-to-r from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Garrett Weeks
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-6">
              Marketing Strategist & Digital Professional
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Crafting data-driven marketing strategies for impactful growth.
            </p>
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
            >
              View My Work
            </button>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/id/30/600/600 " 
              alt="Professional headshot" 
              className="rounded-lg shadow-xl w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
              >
                {/* Custom presentation collage */}
                {project.id === 1 ? (
                  <div className="relative h-48 md:h-64 overflow-hidden">
                    {/* Image collage */}
                    <div className="absolute inset-0 grid grid-cols-2 gap-2 p-4">
                      {/* Main image */}
                      <div className="relative row-span-2">
                        <img 
                          src={project.previewImages[0]} 
                          alt="Presentation page 1" 
                          className="w-full h-full object-cover rounded-lg shadow-md transform rotate-1 transition-transform hover:rotate-0"
                        />
                      </div>
                      
                      {/* Column 2 - stacked images */}
                      <div className="flex flex-col gap-2">
                        <img 
                          src={project.previewImages[1]} 
                          alt="Presentation page 2" 
                          className="w-full h-1/2 object-cover rounded-lg shadow-sm transform -rotate-2 transition-transform hover:rotate-0"
                        />
                        <img 
                          src={project.previewImages[2]} 
                          alt="Presentation page 3" 
                          className="w-full h-1/2 object-cover rounded-lg shadow-sm transform rotate-2 transition-transform hover:rotate-0"
                        />
                      </div>
                    </div>
                    
                    {/* Overlay with title */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <h3 className="text-white font-bold text-xl">{project.title}</h3>
                      <p className="text-blue-300 text-sm">{project.role}</p>
                    </div>
                  </div>
                ) : (
                  <img 
                    src={project.previewImage} 
                    alt={`${project.title} preview`} 
                    className="w-full h-48 object-cover"
                  />
                )}
                
                <div className="p-6">
                  {project.id !== 1 && (
                    <>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{project.role}</p>
                      <p className="text-gray-700 mb-4">{project.summary}</p>
                    </>
                  )}
                  
                  {project.id === 1 && (
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Key Components:</h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="text-sm font-medium text-gray-600">Strategic Plan</h5>
                          <ul className="list-disc pl-5 text-sm">
                            {project.keyComponents.strategicPlan.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="text-sm font-medium text-gray-600">Budget Overview</h5>
                          <p className="text-sm">Total Budget: {project.keyComponents.budget.total}</p>
                          <ul className="list-disc pl-5 text-sm">
                            <li>Influencers: {project.keyComponents.budget.breakdown.influencers}</li>
                            <li>Social Media Ads: {project.keyComponents.budget.breakdown.socialMediaAds}</li>
                            <li>SEO: {project.keyComponents.budget.breakdown.seo}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <ul className="mb-6">
                    {project.contributions.map((contribution, index) => (
                      <li key={index} className="flex items-start mb-2">
                        <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {contribution}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between">
                    {project.id === 1 ? (
                      <a 
                        href="/SmartFit_Presentation.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                      >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                        </svg>
                        View Full Presentation
                      </a>
                    ) : (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        View Full Presentation
                      </a>
                    )}
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                      </svg>
                      Download PDF
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Resume
          </h2>
          
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h3 className="text-xl font-bold">Garrett Weeks</h3>
                  <p className="text-gray-600">Dallas-Fort Worth, TX | (972) 821-3879</p>
                  <p className="text-gray-600">linkedin.com/in/garretttweeks/</p>
                  <p className="text-gray-600">Garrett.Weeks2018@gmail.com</p>
                </div>
                <button className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition-colors">
                  Download PDF
                </button>
              </div>

              <div className="border-t border-gray-200 pt-6 mb-6">
                <h3 className="font-bold text-lg mb-2">PROFESSIONAL PROFILE</h3>
                <p className="text-gray-700">
                  Motivated marketing professional with a solid foundation in client relationship management and data-driven insights.
                  Experienced in enhancing brand visibility through social media, content creation, and graphic design.
                  Proficient in Adobe Creative Cloud, Canva, and Google Analytics. Eager to contribute to a dynamic marketing team and grow my career in a fast-paced environment.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6 mb-6">
                <h3 className="font-bold text-lg mb-2">CORE COMPETENCIES</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['Marketing Campaign Execution', 'Market Research', 'Content Creation', 'Social Media Management', 'Data Analysis', 'Team Collaboration', 'Creativity', 'Organization'].map((skill, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 mb-6">
                <h3 className="font-bold text-lg mb-2">TECHNICAL SKILLS</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <p className="text-gray-700">Social Media Analytics (Facebook, Instagram, LinkedIn)</p>
                  <p className="text-gray-700">Graphic Design (Adobe Creative Cloud, Canva)</p>
                  <p className="text-gray-700">Google Analytics</p>
                  <p className="text-gray-700">Microsoft Office</p>
                  <p className="text-gray-700">Google Workspace</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 mb-6">
                <h3 className="font-bold text-lg mb-2">EDUCATION</h3>
                <div className="mb-4">
                  <div className="flex justify-between">
                    <h4 className="font-medium">Bachelor of Business Administration in Marketing</h4>
                    <span className="text-gray-600">Dec 2024</span>
                  </div>
                  <p className="text-gray-700">University of North Texas, Denton, TX</p>
                  <p className="text-gray-600">GPA: 3.57</p>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between">
                    <h4 className="font-medium">Bachelor of Arts in Media Arts</h4>
                    <span className="text-gray-600">Dec 2024</span>
                  </div>
                  <p className="text-gray-700">University of North Texas, Denton, TX</p>
                  <p className="text-gray-600">GPA: 3.57</p>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between">
                    <h4 className="font-medium">Associate of Arts</h4>
                    <span className="text-gray-600">May 2020</span>
                  </div>
                  <p className="text-gray-700">North Lake College, Irving, TX</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 mb-6">
                <h3 className="font-bold text-lg mb-2">HONORS & AWARDS</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Dean’s List, 5 semesters</li>
                  <li>Graduated with honors (Cum Laude)</li>
                </ul>
              </div>

              <div className="border-t border-gray-200 pt-6 mb-6">
                <h3 className="font-bold text-lg mb-2">ADDITIONAL EDUCATION & CERTIFICATIONS</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Google Analytics Certified - Fall 2024</li>
                  <li>Excel Certified - Fall 2022</li>
                </ul>
              </div>

              <div className="border-t border-gray-200 pt-6 mb-6">
                <h3 className="font-bold text-lg mb-2">EXPERIENCE</h3>
                
                <div className="mb-4">
                  <div className="flex justify-between">
                    <h4 className="font-medium">Server</h4>
                    <span className="text-gray-600">Mar 2018 - Current</span>
                  </div>
                  <p className="text-gray-700">Mi Dia From Scratch - Flower Mound, TX</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Built strong relationships with 40+ regular customers through personalized service, leading to increased repeat visits.</li>
                    <li>Collaborated with management to promote menu items, contributing to successful upsell strategies.</li>
                    <li>Trained over 30 new employees, ensuring they were well-prepared for their roles.</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between">
                    <h4 className="font-medium">Student Volunteer</h4>
                    <span className="text-gray-600">Fall 2019 - Fall 2021</span>
                  </div>
                  <p className="text-gray-700">NTTV, UNT</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Trained and guided 20+ students in using broadcast equipment for live television.</li>
                    <li>Produced a pilot talk show, managing all aspects from pre-production to on-air execution, resulting in a successful proof of concept.</li>
                    <li>Collaborated with department heads to integrate innovative production techniques.</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between">
                    <h4 className="font-medium">Videographer</h4>
                    <span className="text-gray-600">Dec 2017 - Oct 2022</span>
                  </div>
                  <p className="text-gray-700">Freelance Work - DFW, TX</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Provided videography services for private and commercial clients, including weddings, event broadcasting, and corporate advertising.</li>
                    <li>Managed all aspects of freelance work, from client acquisition to invoicing.</li>
                    <li>Directed video production phases, producing final products through effective shooting, lighting, and editing.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            About Me
          </h2>
          
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0 md:mr-8">
              <img 
                src="https://picsum.photos/id/40/600/600 " 
                alt="Casual photo of Garrett Weeks" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-2/3">
              <p className="text-lg text-gray-700 mb-4">
                I'm a marketing strategist passionate about creating data-driven strategies that drive business growth. With experience in both academic and real-world marketing environments, I bring analytical thinking and creative problem-solving to every project I work on.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                My approach combines market research, consumer behavior analysis, and digital marketing tactics to develop comprehensive strategies that deliver measurable results. I believe in the power of storytelling to connect brands with their audiences, and I'm always looking for innovative ways to bring marketing concepts to life.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                When I'm not optimizing marketing funnels or developing campaign strategies, you'll find me hiking in nature reserves, exploring new coffee shops, or experimenting with photography.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                  </svg>
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5V8zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0V20h4.988V8.398c0-7.88-8.922-7.593-11.018 0L12.98 20z"/>
                  </svg>
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Contact Me
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-900 p-8 rounded-lg shadow-xl mb-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="text-center">
              <div className="mb-4">
                <a href="mailto:john@example.com" className="text-blue-400 hover:text-blue-300">
                  john@example.com
                </a>
              </div>
              <div className="flex justify-center space-x-6">
                <a href="#" className="text-blue-400 hover:text-blue-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                  </svg>
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5V8zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0V20h4.988V8.398c0-7.88-8.922-7.593-11.018 0L12.98 20z"/>
                  </svg>
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <button 
        onClick={() => scrollToSection('home')}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors focus:outline-none"
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
      </button>
    </div>
  );
}