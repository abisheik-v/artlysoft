import React, { useState, useEffect } from 'react';
import {
  Briefcase,
  Users,
  GraduationCap,
  Code,
  Cloud,
  Bot,
  Mail,
  ArrowRight,
  CheckCircle,
  Heart,
  Zap,
  Target
} from 'lucide-react';
import { NavHashLink } from 'react-router-hash-link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import slide3Video from '../Assets/images/slide3.mp4';
import '../index.css';

// Import AOS
import AOS from 'aos';

const openPositions = [
  {
    icon: Code,
    title: 'Software Developer (Web / Full Stack)',
    description: 'Join our development team to build scalable web applications using modern technologies.',
    requirements: [
      'Experience with React, Node.js, or similar frameworks',
      'Strong problem-solving skills',
      'Passion for clean code and best practices'
    ]
  },
  {
    icon: Cloud,
    title: 'DevOps Engineer',
    description: 'Help us automate and optimize our infrastructure and deployment processes.',
    requirements: [
      'Experience with AWS, Azure, or GCP',
      'Knowledge of CI/CD pipelines',
      'Container orchestration expertise'
    ]
  },
  {
    icon: Bot,
    title: 'AI/ML Intern',
    description: 'Work on cutting-edge AI projects and learn from experienced data scientists.',
    requirements: [
      'Basic knowledge of Python and machine learning',
      'Eagerness to learn',
      'Strong analytical thinking'
    ]
  },
  {
    icon: Briefcase,
    title: 'IT Consultant',
    description: 'Provide strategic IT consulting to help clients transform their businesses.',
    requirements: [
      'Strong technical background',
      'Excellent communication skills',
      'Client-facing experience preferred'
    ]
  },
  {
    icon: Users,
    title: 'BPO Non-Voice Executive',
    description: 'Support our business operations through efficient non-voice processes.',
    requirements: [
      'Attention to detail',
      'Good organizational skills',
      'Proficiency in office software'
    ]
  }
];

function CareersPage() {

  useEffect(() => {
    // Set SEO meta tags
    document.title = 'Careers at Artlysoft | Join Our IT & Consulting Team';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore career opportunities at Artlysoft Private Limited. Join our team of innovators in web development, DevOps, AI, and IT consulting.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Explore career opportunities at Artlysoft Private Limited. Join our team of innovators in web development, DevOps, AI, and IT consulting.';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }



    // Initialize AOS
    AOS.init({ once: true });
  }, []);

  return (
    <div className="artylsoft-root">
      <Navbar />

      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <h1 className="display-3 fw-bold mb-4 text-theme-responsive" data-aos="fade-right">
                Work With <span className="gradient-text">Us</span>
              </h1>
              <p className="lead mb-4 text-theme-responsive" data-aos="fade-right" data-aos-delay="100" style={{ color: '#3175f1' }}>
                At Artlysoft, we value creativity, learning, and collaboration. We're always looking for passionate professionals who love solving problems through technology.
              </p>
              <div className="d-flex gap-3 mb-5" data-aos="fade-right" data-aos-delay="200">
                <NavHashLink smooth to="#open-positions" className="btn-hero">
                  View Open Positions
                </NavHashLink>
              </div>
              <div className="row g-3" data-aos="fade-right" data-aos-delay="300">
                <div className="col-4 text-center">
                  <h3 className="fw-bold text-theme-responsive mb-1">50+</h3>
                  <small className="text-theme-responsive">Team Members</small>
                </div>
                <div className="col-4 text-center">
                  <h3 className="fw-bold text-theme-responsive mb-1">200+</h3>
                  <small className="text-theme-responsive">Projects</small>
                </div>
                <div className="col-4 text-center">
                  <h3 className="fw-bold text-theme-responsive mb-1">1+</h3>
                  <small className="text-theme-responsive">Years Growing</small>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
              <video
                src={slide3Video}
                autoPlay
                muted
                loop
                playsInline
                className="img-fluid rounded-4 shadow-lg"
              />
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-primary opacity-10 rounded-4"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="capabilities">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <h2 className="section-title text-theme-responsive" data-aos="fade-up">Why Join Artlysoft?</h2>
              <p className="section-subtitle text-theme-responsive" data-aos="fade-up" data-aos-delay="100">
                We're building a culture where innovation thrives and every team member can make an impact.
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="capability-card text-center h-100" data-aos="fade-up" data-aos-delay="100">
                <div className="capability-icon mx-auto">
                  <Heart size={32} />
                </div>
                <h4 className="capability-title">Creative Environment</h4>
                <p className="capability-description">Work in an environment that encourages innovation and creative problem-solving.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="capability-card text-center h-100" data-aos="fade-up" data-aos-delay="200">
                <div className="capability-icon mx-auto">
                  <GraduationCap size={32} />
                </div>
                <h4 className="capability-title">Continuous Learning</h4>
                <p className="capability-description">Access to training, workshops, and opportunities to work with cutting-edge technologies.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="capability-card text-center h-100" data-aos="fade-up" data-aos-delay="300">
                <div className="capability-icon mx-auto">
                  <Users size={32} />
                </div>
                <h4 className="capability-title">Team Collaboration</h4>
                <p className="capability-description">Work alongside talented professionals in a collaborative and supportive team environment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="why-artylsoft">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <h2 className="section-title text-theme-responsive" data-aos="fade-up">Open Positions</h2>
              <p className="section-subtitle text-theme-responsive" data-aos="fade-up" data-aos-delay="100">
                Explore current opportunities to join our growing team
              </p>
            </div>
          </div>

          <div className="row g-4">
            {openPositions.map((position, index) => (
              <div key={index} className="col-lg-6">
                <div className="capability-card h-100" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="d-flex align-items-start mb-3">
                    <div className="capability-icon me-3">
                      <position.icon size={32} />
                    </div>
                    <div>
                      <h4 className="capability-title mb-2">{position.title}</h4>
                      <p className="capability-description mb-3">{position.description}</p>
                      <h6 className="fw-bold mb-2">Requirements:</h6>
                      <ul className="list-unstyled">
                        {position.requirements.map((req, idx) => (
                          <li key={idx} className="d-flex align-items-center mb-2">
                            <CheckCircle size={16} className="text-primary me-2" />
                            <span className="small">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="capabilities">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="capability-card text-center" data-aos="fade-up">
                <Mail size={48} className="text-primary mb-4" />
                <h2 className="section-title mb-4">How to Apply</h2>
                <p className="lead mb-4">
                  Send your resume to <a href="mailto:hr@artlysoft.com" className="text-primary fw-bold">hr@artlysoft.com</a>
                </p>
                <p className="section-subtitle mb-4">
                  Let's build your future, together.
                </p>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=hr@artlysoft.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hero"
                >
                  Apply Now <ArrowRight size={20} className="ms-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="stat-item" data-aos="fade-up" data-aos-delay="100">
                <span className="stat-number">1+</span>
                <span className="stat-label">Years of Excellence</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stat-item" data-aos="fade-up" data-aos-delay="200">
                <span className="stat-number">50+</span>
                <span className="stat-label">Satisfied Clients</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stat-item" data-aos="fade-up" data-aos-delay="300">
                <span className="stat-number">200+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stat-item" data-aos="fade-up" data-aos-delay="400">
                <span className="stat-number">50+</span>
                <span className="stat-label">Expert Team Members</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default CareersPage;

