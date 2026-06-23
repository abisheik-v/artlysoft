import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Target, Briefcase, TrendingUp, Monitor, Calendar, Clock, Users, Presentation, Search, BookOpen, Code, FileText, Layers, Rocket, UserCheck, Building, Database, Mail, Globe, Phone, ClipboardList, Star, Download, Lock, RefreshCw, Server, CheckCircle } from 'lucide-react';
import brochure from '../assets/images/Artlysoft_training_brochure.pdf';


const CoursesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Form State for Enquiry
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    email: '',
    course: ''
  });

  const [isUnlocked, setIsUnlocked] = React.useState(() => {
    return localStorage.getItem('brochureUnlocked') === 'true';
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const isFormValid = formData.name && formData.phone && formData.email && formData.course && formData.course !== 'Select a course...';

  const handleSubmitEnquiry = (e) => {
    e.preventDefault();
    if (isFormValid) {
      // 1. WhatsApp Logic
      const phoneNumber = "919901718700"; // Country code + number
      const message = `Hello, I would like to enquire about a course.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nCourse: ${formData.course}`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      // 2. Unlock & Persist
      localStorage.setItem('brochureUnlocked', 'true');
      setIsUnlocked(true);

      // 3. Clear Form
      setFormData({
        name: '',
        phone: '',
        email: '',
        course: ''
      });

      // 4. Redirect
      window.location.href = whatsappUrl;
    }
  };

  const handleDownloadClick = (e) => {
    if (!isUnlocked) {
      e.preventDefault();
      alert('Please fill out and submit the enquiry form to unlock the brochure download.');
    }
  };

  return (
    <div className="artylsoft-root">
      <Navbar />

      {/* Spacer for fixed navbar */}
      <div style={{ marginTop: '80px' }}></div>

      {/* About Artlysoft Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold text-primary mb-4">About <span className='class-font'>A</span>rtlysoft Private Limited</h2>
              <div className="text-theme-responsive">
                <p className="lead mb-4">
                  <span className='class-font'>A</span>rtlysoft Private Limited is a technology-driven IT services and consulting company focused on
                  software development, DevOps, AI-enabled solutions, and enterprise IT consulting. Our mission
                  is to bridge the gap between academic knowledge and real-world industry requirements by
                  delivering practical, job-oriented training programs.
                </p>
                <p>
                  We design our training programs with direct input from industry professionals, ensuring
                  learners gain hands-on experience and become deployment-ready. With a commitment to excellence
                  and innovation, Artlysoft has established itself as a trusted partner for organizations seeking
                  quality IT services and skilled talent development.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative">

                <img
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Artlysoft Training Environment"
                  className="img-fluid rounded-4 shadow-lg position-relative"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Philosophy Section */}
      <section className="py-5 bg-theme-secondary">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h3 className="fw-bold text-theme-responsive mb-4 fs-4 class-font">Our training philosophy centers on three core pillars</h3>
            </div>
          </div>

          <div className="row g-4 text-center">
            {/* Pillar 1 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm hover-lift bg-transparent">
                <div className="card-body">
                  <div className="mb-3 d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle text-primary" style={{ width: '64px', height: '64px' }}>
                    <Target size={32} />
                  </div>
                  <h4 className="fw-bold text-primary mb-3">Industry Relevance</h4>
                  <p className="text-theme-responsive text-muted">
                    Curriculum aligned with current market demands
                  </p>
                  <div className="mt-3 text-primary fw-bold display-6 opacity-85">1</div>
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm hover-lift bg-transparent">
                <div className="card-body">
                  <div className="mb-3 d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle text-primary" style={{ width: '64px', height: '64px' }}>
                    <Briefcase size={32} />
                  </div>
                  <h4 className="fw-bold text-primary mb-3">Practical Application</h4>
                  <p className="text-theme-responsive text-muted">
                    Real-world projects and case studies
                  </p>
                  <div className="mt-3 text-primary fw-bold display-6 opacity-85">2</div>
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm hover-lift bg-transparent">
                <div className="card-body">
                  <div className="mb-3 d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle text-primary" style={{ width: '64px', height: '64px' }}>
                    <TrendingUp size={32} />
                  </div>
                  <h4 className="fw-bold text-primary mb-3">Career Support</h4>
                  <p className="text-theme-responsive text-muted">
                    Comprehensive placement assistance and mentorship
                  </p>
                  <div className="mt-3 text-primary fw-bold display-6 opacity-85">3</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview Section */}
      <section className="py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 fw-bold text-primary mb-4 fs-1 class-font">Program Overview</h2>
              <div className="text-theme-responsive lead">
                <p className="mb-4">
                  The Full Stack Python & Java Online Training Program is a comprehensive, career-focused
                  program designed for students, fresh graduates, working professionals, and career switchers who
                  aspire to become full stack developers.
                </p>
                <p>
                  This program covers both backend and frontend development, real-time projects, industry best
                  practices, and deployment fundamentals. Learners will build complete, production-ready
                  applications using modern development practices.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-4 mb-5">
            {/* Format Card */}
            <div className="col-md-6">
              <div className="card border-0 shadow-sm bg-theme-secondary h-100">
                <div className="card-body p-4 d-flex align-items-center">
                  <div className="flex-shrink-0 me-4">
                    <div className="d-flex align-items-center justify-content-center bg-white rounded-3 p-3 shadow-sm" style={{ width: '64px', height: '64px' }}>
                      <Monitor size={32} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="fw-bold mb-1 text-theme-responsive">Program Format</h4>
                    <p className="mb-0 text-muted">100% Online (Live Instructor-Led Sessions)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Duration Card */}
            <div className="col-md-6">
              <div className="card border-0 shadow-sm bg-theme-secondary h-100">
                <div className="card-body p-4 d-flex align-items-center">
                  <div className="flex-shrink-0 me-4">
                    <div className="d-flex align-items-center justify-content-center bg-white rounded-3 p-3 shadow-sm" style={{ width: '64px', height: '64px' }}>
                      <Calendar size={32} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="fw-bold mb-1 text-theme-responsive">Program Duration</h4>
                    <p className="mb-0 text-muted">6 Months (Flexible scheduling available)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Learning Hours Card */}
            <div className="col-md-6">
              <div className="card border-0 shadow-sm bg-theme-secondary h-100">
                <div className="card-body p-4 d-flex align-items-center">
                  <div className="flex-shrink-0 me-4">
                    <div className="d-flex align-items-center justify-content-center bg-white rounded-3 p-3 shadow-sm" style={{ width: '64px', height: '64px' }}>
                      <Clock size={32} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="fw-bold mb-1 text-theme-responsive">Learning Hours</h4>
                    <p className="mb-0 text-muted">350+ hours of instructional content</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Batch Size Card */}
            <div className="col-md-6">
              <div className="card border-0 shadow-sm bg-theme-secondary h-100">
                <div className="card-body p-4 d-flex align-items-center">
                  <div className="flex-shrink-0 me-4">
                    <div className="d-flex align-items-center justify-content-center bg-white rounded-3 p-3 shadow-sm" style={{ width: '64px', height: '64px' }}>
                      <Users size={32} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="fw-bold mb-1 text-theme-responsive">Batch Size</h4>
                    <p className="mb-0 text-muted">Small cohorts (15-20 students) for personalized attention</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section >

      {/* Key Highlights Section - Circular/Pie Structure */}
      < section className="py-5 bg-theme-secondary overflow-hidden" >
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="display-5 fw-bold text-primary mb-4 fs-1 class-font">Key Highlights</h2>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-12">
              <div className="circular-chart-container">
                {/* Central Hub */}
                <div className="center-hub">
                  <h3 className="h4 fw-bold text-primary mb-0">10 Key</h3>
                  <small className="text-uppercase fw-bold text-muted">Features</small>
                </div>

                {/* Chart Items */}
                {[
                  { id: 1, title: 'Industry-Oriented Curriculum', desc: 'Designed with input from senior developers and tech leads' },
                  { id: 2, title: 'Live Interactive Online Classes', desc: 'Real-time doubt clarification and hands-on guidance' },
                  { id: 3, title: 'Hands-on Coding & Projects', desc: 'Build 5+ complete projects during the course' },
                  { id: 4, title: 'Case Studies & Capstone', desc: 'Work on enterprise-level application development' },
                  { id: 5, title: 'Resume & Interview Support', desc: 'Professional resume building and mock interviews' },
                  { id: 6, title: '100% Placement Assistance', desc: 'Job referrals through our partner network' },
                  { id: 7, title: 'Lifetime Learning Access', desc: 'Recorded sessions and resources available forever' },
                  { id: 8, title: 'Expert Mentorship', desc: 'Learn from developers with 5+ years experience' },
                  { id: 9, title: 'Suitable for All Levels', desc: 'Beginners, career switchers, and professionals welcome' },
                  { id: 10, title: 'Certificate of Completion', desc: 'Recognized credential for job applications' },
                ].map((item) => (
                  <div key={item.id} className="chart-item" style={{ '--i': item.id }}>
                    <div className="chart-number">{item.id}</div>
                    <div className="chart-content">
                      <h5 className="text-theme-responsive">{item.title}</h5>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Why Choose Artlysoft Section */}
      < section className="py-5" >
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="display-5 fw-bold mb-4 text-theme-responsive fs-1 class-font">
                Why Choose <span className="text-primary">Artlysoft?</span>
              </h2>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="chevron-list">
                {[
                  {
                    icon: <Briefcase size={28} />,
                    title: 'Real Industry Exposure',
                    desc: "Our curriculum is constantly updated based on market trends and feedback from industry partners. You'll learn technologies that companies are actively hiring for right now."
                  },
                  {
                    icon: <Presentation size={28} />,
                    title: 'Project-Based Learning',
                    desc: "Instead of just theory, you'll build real applications from day one. Our project-based approach ensures you have a portfolio ready by the time you finish the course."
                  },
                  {
                    icon: <Users size={28} />,
                    title: 'Mentorship from Experienced Professionals',
                    desc: "Learn directly from developers and architects working in top companies. Get insights into industry practices, best coding standards, and career growth strategies."
                  },
                  {
                    icon: <Search size={28} />,
                    title: 'Career-Focused Support',
                    desc: "From resume building to interview preparation, we support every step of your job search journey."
                  },
                  {
                    icon: <Monitor size={28} />,
                    title: '100% Online Flexibility',
                    desc: "Study from anywhere, at any time. Balance your learning with work or other commitments."
                  },
                ].map((item, index) => (
                  <div key={index} className="chevron-item">
                    <div className="chevron-icon-wrapper">
                      <div className="chevron-shape"></div>
                      <div className="chevron-icon">{item.icon}</div>
                    </div>
                    <div className="chevron-content">
                      <h4 className="fw-bold mb-2 text-primary">{item.title}</h4>
                      <p className="text-muted mb-0">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Learning Path Section */}
      < section className="py-5 bg-theme-secondary" >
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="display-5 fw-bold text-primary mb-3 fs-1 class-font">Learning Path</h2>
              <p className="lead text-theme-responsive">Our structured learning approach ensures progressive skill development:</p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-12">
              <div className="learning-path-timeline">
                {[
                  {
                    icon: <BookOpen size={24} />,
                    stage: 'Stage 1',
                    title: 'Conceptual Foundation',
                    desc: 'Build strong fundamentals in programming concepts, data structures, and object-oriented programming.'
                  },
                  {
                    icon: <Code size={24} />,
                    stage: 'Stage 2',
                    title: 'Hands-on Coding Sessions',
                    desc: 'Engage in live coding sessions where instructors demonstrate real-world problem-solving techniques.'
                  },
                  {
                    icon: <FileText size={24} />,
                    stage: 'Stage 3',
                    title: 'Assignments & Assessments',
                    desc: 'Complete regular assignments to reinforce learning and track your progress.'
                  },
                  {
                    icon: <Layers size={24} />,
                    stage: 'Stage 4',
                    title: 'Real-Time Project Development',
                    desc: 'Work on mini-projects that mirror industry applications and best practices.'
                  },
                  {
                    icon: <Rocket size={24} />,
                    stage: 'Stage 5',
                    title: 'Capstone Project',
                    desc: 'Develop a complete full-stack application from requirements to deployment.'
                  },
                  {
                    icon: <UserCheck size={24} />,
                    stage: 'Stage 6',
                    title: 'Interview Preparation & Soft Skills',
                    desc: 'Learn interview techniques, communication skills, and professional development essentials.'
                  },
                  {
                    icon: <Building size={24} />,
                    stage: 'Stage 7',
                    title: 'Placement Assistance',
                    desc: 'Receive job referrals, profile optimization, and ongoing career guidance.'
                  },
                ].map((item, index) => (
                  <div key={index} className="learning-path-item">
                    <div className="learning-path-icon">
                      {item.icon}
                    </div>
                    <div className="learning-path-content">
                      <h4 className="fw-bold mb-2 text-theme-responsive">
                        <span className="text-primary d-block mb-1 small text-uppercase">{item.stage}</span>
                       <span className='class-font fs-6'> {item.title}</span>
                      </h4>
                      <p className="text-muted mb-0">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Technology Stack Covered Section */}
      < section className="py-5" >
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="display-5 fw-bold text-theme-responsive mb-4 class-font fs-1">
                Technology Stack <span className="text-primary">Covered</span>
              </h2>
            </div>
          </div>

          <div className="row g-4">
            {/* Frontend Card */}
            <div className="col-lg-4 col-md-6">
              <div className="tech-stack-card">
                <div className="tech-stack-header">
                  <div className="tech-stack-icon-wrapper">
                    <Monitor size={28} />
                  </div>
                  <div className="tech-stack-number text-white-50">01</div>
                </div>
                <div className="tech-stack-content">
                  <h4 className="fw-bold text-primary mb-3">Frontend</h4>
                  <ul className="tech-stack-list">
                    <li><strong className="text-theme-responsive">HTML5 & CSS3:</strong> Semantic markup, Flexbox, Grid</li>
                    <li><strong className="text-theme-responsive">JavaScript:</strong> ES6+, DOM, Async/Await</li>
                    <li><strong className="text-theme-responsive">React.js:</strong> Hooks, Redux, Context API</li>
                    <li><strong className="text-theme-responsive">Bootstrap/Tailwind:</strong> Responsive UI</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Backend Card */}
            <div className="col-lg-4 col-md-6">
              <div className="tech-stack-card">
                <div className="tech-stack-header">
                  <div className="tech-stack-icon-wrapper">
                    <Layers size={28} />
                  </div>
                  <div className="tech-stack-number text-white-50">02</div>
                </div>
                <div className="tech-stack-content">
                  <h4 className="fw-bold text-primary mb-3">Backend</h4>
                  <ul className="tech-stack-list">
                    <li><strong className="text-theme-responsive">Java:</strong> Core & Advanced, OOPs</li>
                    <li><strong className="text-theme-responsive">Spring Boot:</strong> REST APIs, Microservices</li>
                    <li><strong className="text-theme-responsive">Python:</strong> Django/Flask fundamentals</li>
                    <li><strong className="text-theme-responsive">System Design:</strong> Scalable architecture</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Database & Tools Card */}
            <div className="col-lg-4 col-md-6 mx-auto">
              <div className="tech-stack-card">
                <div className="tech-stack-header">
                  <div className="tech-stack-icon-wrapper">
                    <Briefcase size={28} />
                  </div>
                  <div className="tech-stack-number text-white-50">03</div>
                </div>
                <div className="tech-stack-content">
                  <h4 className="fw-bold text-primary mb-3">Database & DevOps</h4>
                  <ul className="tech-stack-list">
                    <li><strong className="text-theme-responsive">SQL:</strong> MySQL/PostgreSQL, Complex Queries</li>
                    <li><strong className="text-theme-responsive">NoSQL:</strong> MongoDB basics</li>
                    <li><strong className="text-theme-responsive">DevOps:</strong> Docker, CI/CD Pipelines</li>
                    <li><strong className="text-theme-responsive">Tools:</strong> Git, Jira, Postman</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Who Can Apply Section */}
      < section className="py-5 bg-theme-secondary" >
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="display-5 fw-bold text-theme-responsive mb-4 fs-1 class-font">Who Can Apply</h2>
            </div>
          </div>

          <div className="row g-4 mb-4">
            {/* Students & Fresh Graduates */}
            <div className="col-md-4">
              <div className="apply-card">
                <h4 className='class-font fs-5'>Students & Fresh Graduates</h4>
                <ul className="apply-list">
                  <li>Looking to start a career in software development</li>
                  <li>Want practical experience before entering the job market</li>
                </ul>
              </div>
            </div>

            {/* Career Switchers */}
            <div className="col-md-4">
              <div className="apply-card">
                <h4 className='class-font fs-5'>Career Switchers</h4>
                <ul className="apply-list">
                  <li>Professionals from non-IT backgrounds interested in development</li>
                  <li>Existing IT professionals looking to upskill in full stack development</li>
                </ul>
              </div>
            </div>

            {/* Working IT Professionals */}
            <div className="col-md-4">
              <div className="apply-card">
                <h4 className='class-font fs-5'>Working IT Professionals</h4>
                <ul className="apply-list">
                  <li>Wanting to expand their skillset</li>
                  <li>Aiming for career growth and better opportunities</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Non-IT Background Candidates */}
          <div className="row">
            <div className="col-12">
              <div className="apply-card text-center py-4">
                <h4 className='class-font fs-5'>Non-IT Background Candidates</h4>
                <div className="d-flex flex-column flex-md-row justify-content-center gap-md-5 gap-3 non-it-text">
                  <div className="d-flex align-items-center justify-content-center gap-2">
                    <span className="text-primary fw-bold">•</span> Passionate about coding and technology
                  </div>
                  <div className="d-flex align-items-center justify-content-center gap-2">
                    <span className="text-primary fw-bold">•</span> Willing to invest time in learning and practice
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Career Opportunities Section */}
      < section className="py-5" >
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="display-5 fw-bold text-theme-responsive mb-4 class-font fs-1">
                Career <span className="text-primary">Opportunities</span>
              </h2>
            </div>
          </div>

          <div className="row g-4 justify-content-center">
            {/* Full Stack Developer */}
            <div className="col-lg-4 col-md-6">
              <div className="career-card">
                <div className="career-icon-wrapper">
                  <Layers size={32} />
                </div>
                <h4 className='class-font fs-5'>Full Stack Developer</h4>
                <p>Design and develop complete web applications</p>
              </div>
            </div>

            {/* Java Developer */}
            <div className="col-lg-4 col-md-6">
              <div className="career-card">
                <div className="career-icon-wrapper">
                  <Code size={32} />
                </div>
                <h4 className='class-font fs-5'>Java Developer</h4>
                <p>Develop enterprise-level applications</p>
              </div>
            </div>

            {/* Software Engineer */}
            <div className="col-lg-4 col-md-6">
              <div className="career-card">
                <div className="career-icon-wrapper">
                  <Monitor size={32} />
                </div>
                <h4 className='class-font fs-5'>Software Engineer</h4>
                <p>Work on complex software systems</p>
              </div>
            </div>

            {/* Python Developer */}
            <div className="col-lg-4 col-md-6">
              <div className="career-card">
                <div className="career-icon-wrapper">
                  <FileText size={32} />
                </div>
                <h4 className='class-font fs-5'>Python Developer</h4>
                <p>Build backend services and automation tools</p>
              </div>
            </div>

            {/* Backend Developer */}
            <div className="col-lg-4 col-md-6">
              <div className="career-card">
                <div className="career-icon-wrapper">
                  <Database size={32} />
                </div>
                <h4 className='class-font fs-5'>Backend Developer</h4>
                <p>Focus on server-side logic and databases</p>
              </div>
            </div>
          </div>

          {/* Salary Banner */}
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="salary-banner">
                <div className="salary-banner-icon">
                  <Briefcase size={24} />
                </div>
                <p className="mb-0 fw-bold text-theme-responsive fs-5">
                  Average Starting Salary Range: ₹4.5 - 7 LPA (subject to experience and performance)
                </p>
              </div>
            </div>
          </div>

          {/* Job Market Demand - Simple Text */}
          <div className="row mt-5">
            <div className="col-lg-10 mx-auto text-center">
              <h3 className="h4 fw-bold text-primary mb-3 class-font">Job Market Demand</h3>
              <p className="lead text-theme-responsive">
                Full stack developer roles are among the most in-demand positions in India's IT industry. Companies actively seek graduates with hands-on project experience and modern technology expertise.
              </p>
            </div>
          </div>
        </div>
      </section >

      {/* Contact & Enrollment Section */}
      < section className="py-5 bg-theme-secondary" >
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="display-5 fw-bold text-theme-responsive mb-2 class-font fs-2">Contact Us <span style={{fontFamily: "Alike"}}>&</span> Enrollment</h2>
              <h3 className="h4 text-primary fw-bold">Get in Touch</h3>
            </div>
          </div>

          <div className="row g-4 mb-5 text-center justify-content-center">
            {/* Email */}
            <div className="col-md-4">
              <div className="contact-card">
                <div className="contact-icon-box">
                  <Mail size={24} />
                </div>
                <h4 className="fw-bold mb-2">Email</h4>
                <a href="mailto:hr@artlysoft.com" className="text-decoration-none text-primary">hr@artlysoft.com</a>
              </div>
            </div>

            {/* Website */}
            <div className="col-md-4">
              <div className="contact-card">
                <div className="contact-icon-box">
                  <Globe size={24} />
                </div>
                <h4 className="fw-bold mb-2">Website</h4>
                <a href="https://www.artlysoft.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary">www.artlysoft.com</a>
              </div>
            </div>

            {/* Phone */}
            <div className="col-md-4">
              <div className="contact-card">
                <div className="contact-icon-box">
                  <Phone size={24} />
                </div>
                <h4 className="fw-bold mb-2">Phone</h4>
                <p className="mb-0 text-theme-responsive">
                  <a href="https://wa.me/919901718700" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary">
                    9901718700
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Enrollment Process */}
          <div className="row mb-4">
            <div className="col-12 text-center">
              <h3 className="h4 text-theme-responsive fw-bold mb-4 class-font">Enrollment Process</h3>
            </div>
          </div>

          <div className="row g-4 mb-5 relative">
            {/* Step 1: Register */}
            <div className="col-md-6">
              <div className="process-step-container">
                <div className="process-step-header">
                  <ClipboardList size={28} />
                </div>
                <div className="process-step-content px-3">
                  <h5>Register</h5>
                  <p>Fill out the enrollment form on our website</p>
                </div>
              </div>
            </div>

            {/* Step 2: Attend Free Demo */}
            <div className="col-md-6">
              <div className="process-step-container">
                <div className="process-step-header">
                  <Presentation size={28} />
                </div>
                <div className="process-step-content px-3">
                  <h5>Attend Free Demo</h5>
                  <p>Join a live demo session to understand the teaching style</p>
                </div>
              </div>
            </div>

            {/* Step 3: Confirm Enrollment */}
            <div className="col-md-6">
              <div className="process-step-container">
                <div className="process-step-header">
                  <UserCheck size={28} />
                </div>
                <div className="process-step-content px-3">
                  <h5>Confirm Enrollment</h5>
                  <p>Complete payment after confirmation</p>
                </div>
              </div>
            </div>

            {/* Step 4: Get Started */}
            <div className="col-md-6">
              <div className="process-step-container">
                <div className="process-step-header">
                  <Star size={28} />
                </div>
                <div className="process-step-content px-3">
                  <h5>Get Started</h5>
                  <p>Receive access to course materials and attend your first class</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="row mt-5">
            <div className="col-12">
              <hr className="mb-5 text-muted opacity-25" />
              <div className="empower-banner text-center">
                <h2 className="display-4 mb-4 text-theme-responsive class-font fs-2">
                  Empowering Careers Through <br />
                  <span className="text-highlight">Practical Technology Training</span>
                </h2>
                <p className="lead text-theme-responsive mb-4 mx-auto" style={{ maxWidth: '800px' }}>
                  Join <span className='class-font'>A</span>rtlysoft's Full Stack Python & Java Training Program and take the first step toward a rewarding career in software development.
                </p>
                <h4 className="fw-bold text-theme-responsive">
                  Your journey to becoming a full stack developer starts here!
                </h4>
              </div>
            </div>
          </div>

        </div>
      </section >

      {/* Enquiry Form & Brochure Download Section */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card border-0 shadow-lg overflow-hidden">
                <div className="row g-0">
                  {/* Left Column: Brochure Download */}
                  <div className="col-md-5 bg-primary text-white p-5 d-flex flex-column justify-content-center align-items-center text-center">
                    <div className="mb-4">
                      <div className="bg-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px', color: 'var(--primary-color)' }}>
                        <FileText size={40} />
                      </div>
                    </div>
                    <h3 className="fw-bold mb-3 fs-4 class-font">Course Brochure</h3>
                    <p className="mb-4 opacity-75 c-para">
                      Get detailed curriculum, syllabus, and program highlights in our comprehensive brochure.
                    </p>

                    {/* Locked/Unlocked Download Button */}
                    <div className="position-relative">
                      {!isUnlocked && (
                        <div className="mb-2 text-warning fw-bold small">
                          <Lock size={14} className="me-1 mb-1" />
                          Submit form to unlock
                        </div>
                      )}
                      <a
                        href={isUnlocked ? brochure : '#'}
                        download={isUnlocked ? "Artlysoft_Training_Brochure.pdf" : undefined}
                        onClick={handleDownloadClick}
                        className={`btn btn-lg fw-bold rounded-pill px-4 d-inline-flex align-items-center transition-all ${isUnlocked ? 'btn-light hover-scale' : 'btn-white-50 cursor-not-allowed opacity-50'}`}
                        style={{ pointerEvents: isUnlocked ? 'auto' : 'no-drop' }} // Changed to no-drop to show it's disabled but still visible
                      >
                        {isUnlocked ? <Download size={20} className="me-2" /> : <Lock size={20} className="me-2" />}
                        {isUnlocked ? 'Download Now' : 'Locked'}
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Enquiry Form */}
                  <div className="col-md-7 bg-theme-secondary p-5">
                    <h3 className="fw-bold text-primary mb-2 class-font fs-3" >Enquire Now</h3>
                    <p className="text-theme-responsive mb-4">Fill out the form below and our team will get back to you shortly.</p>

                    <form onSubmit={handleSubmitEnquiry}>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label text-theme-responsive fw-semibold">Full Name</label>
                        <input
                          type="text"
                          className="form-control bg-theme-input"
                          id="name"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="row mb-3">
                        <div className="col-md-6">
                          <label htmlFor="phone" className="form-label text-theme-responsive fw-semibold">Phone Number</label>
                          <input
                            type="tel"
                            className="form-control bg-theme-input"
                            id="phone"
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="email" className="form-label text-theme-responsive fw-semibold">Email Address</label>
                          <input
                            type="email"
                            className="form-control bg-theme-input"
                            id="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      <div className="mb-4">
                        <label htmlFor="course" className="form-label text-theme-responsive fw-semibold">Interested Course</label>
                        <select
                          className="form-select bg-theme-input"
                          id="course"
                          value={formData.course}
                          onChange={handleInputChange}
                        >
                          <option value="">Select a course...</option>
                          <option value="java">Java Full Stack Development</option>
                          <option value="python">Python Full Stack Development</option>
                          <option value="other">Other Courses</option>
                        </select>
                      </div>

                      <button type="submit" className="btn btn-primary w-100 fw-bold py-2 rounded-3">
                        Submit Enquiry
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div >
  );
};

export default CoursesPage;
