import React, { useState, useEffect } from 'react';
import {
  Code,
  Users,
  Award,
  Target,
  Globe,
  Heart,
  Zap,
  Shield,
  CheckCircle,
  ArrowRight,
  Eye,
  Lightbulb,
  Linkedin,
  Github,
  Instagram, 
  MessageCircle,
  Handshake
} from 'lucide-react';
import { NavHashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Video1 from '../assets/images/slide1.mp4';
import '../index.css';

// Import AOS
import AOS from 'aos';
import p1 from '../assets/images/Anand.jpg';
import p2 from '../assets/images/Abisheik.jpg';

import p3 from '../assets/images/Ajith.jpg';
import p4 from '../assets/images/Tamil.jpg';
import p5 from '../assets/images/Preethi.jpg';


const values = [
  {
    icon: Lightbulb,
    title: 'Innovation & Integrity',
    description: 'We embrace cutting-edge technologies and creative solutions while maintaining transparency, honesty, and ethical practices in all our business dealings.'
  },
  {
    icon: Shield,
    title: 'Commitment to Quality',
    description: 'We maintain the highest standards in everything we do, from code quality to client service.'
  },
  {
    icon: Handshake,
    title: 'Customer-Centric Approach',
    description: 'We build long-term relationships with our clients, acting as trusted technology partners focused on their success.'
  },
  {
    icon: Heart,
    title: 'Team Collaboration',
    description: 'We foster a collaborative environment where teamwork and shared knowledge drive exceptional results.'
  }
];

const milestones = [
  {
    year: '2024',
    title: 'Company Founded',
    description: 'Started in Krishnagiri, Tamil Nadu, Artlysoft has grown from a small tech startup into a trusted name in IT consulting and outsourcing. We work closely with clients to understand their goals and turn technology into a business advantage.'
  }
];

const leadership = [
  {
    name: 'Jones Marimuthu',
    position: 'Chief Executive Officer',
    bio: '15+ years of experience in technology leadership and business strategy.',
    avatar: 'JM'
  },
  {
    name: 'Ananthi Suresh',
    position: 'Chief Technology Officer',
    bio: 'Expert in cloud architecture and AI/ML solutions with 12+ years of experience.',
    avatar: 'AS'
  },
  {
    name: 'Monisha Baskaran',
    position: 'VP of Engineering',
    bio: 'Full-stack development expert with extensive experience in scalable systems.',
    avatar: 'MB'
  },
  {
    name: 'Sarath Kumar',
    position: 'VP of Operations',
    bio: 'Operations excellence leader with expertise in process optimization and automation.',
    avatar: 'SK'
  }
];

const teamMembers = [
  {id: 1, name: "Anand T", role: "Director", image: p1, insta: "https://www.instagram.com/anand77002?igsh=MTNxZ3d2MGNrNTlweA==", whatsapp: "https://wa.me/message/J6EL6M6BJSWIF1"},
  {id: 2, name: "Abisheik V", role: "Frontend Developer", image: p2, linkedIn: "https://www.linkedin.com/in/abisheik-kumar-v-8a4202257/", github: "https://github.com/Abisheik-V"},
  {id: 3, name: "Ajith M", role: "Web Developer", image: p3, linkedIn: "https://www.linkedin.com/in/ajith-m-044823418/", github: "https://github.com/ajith17123"},
  {id: 4, name: "Tamilmozhi S", role: "Web Developer", image: p4, linkedIn: "https://www.linkedin.com/in/tamilmozhi-s-63032a311/", github: "https://github.com/Tamilmozhi2003"},
  {id: 5, name: "Preethika C", role: "Web Developer", image: p5, linkedIn: "https://www.linkedin.com/in/preethi-c-989352392/", github: "https://github.com/sudhapreethika76-eng"},
]



function AboutPage() {

  const [activeMember, setActiveMember] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // Set SEO meta tags
    document.title = 'About Artlysoft Private Limited | Innovative IT Solutions Company';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about Artlysoft Private Limited — a technology-driven company specializing in web, AI, DevOps, and IT consulting services for startups, ISVs, and enterprises.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Learn about Artlysoft Private Limited — a technology-driven company specializing in web, AI, DevOps, and IT consulting services for startups, ISVs, and enterprises.';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }

    // Refresh AOS when component mounts
    AOS.refresh();
  }, []);


  const doubleMembers = [...teamMembers, ...teamMembers];



  return (
    <div className="artylsoft-root">
      <Navbar />

      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <h1 className="display-3 fw-bold py-5 mt-5 text-theme-responsive" data-aos="fade-right">
                About <span className="gradient-text"> <span className='class-font'>A</span>rtlysoft Private Limited</span>
              </h1>
              <p className="lead mb-4 text-theme-responsive" data-aos="fade-right" data-aos-delay="100">
                <span className='class-font'>A</span>rtlysoft Private Limited is an emerging IT services company delivering customized digital solutions to global clients. Founded with a vision to empower businesses through technology, Artlysoft combines innovation, expertise, and dedication to create value-driven solutions.
              </p>
              <div className="d-flex gap-3 mb-5" data-aos="fade-right" data-aos-delay="200">
                <NavHashLink smooth to="#our-story" className="btn-hero">
              Our Story
                </NavHashLink>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative" data-aos="fade-left" data-aos-delay="200">
                <video
                  src={Video1}
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
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mision-vision" className="capabilities">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="capability-card h-100" data-aos="fade-right">
                <div className="capability-icon">
                  <Target size={32} />
                </div>
                <h3 className="capability-title class-font">Our Mission</h3>
                <p className="capability-description">
                  To deliver reliable, scalable, and client-focused technology services that drive digital transformation and long-term business success.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="capability-card h-100" data-aos="fade-left" data-aos-delay="100">
                <div className="capability-icon">
                  <Eye size={32} />
                </div>
                <h3 className="capability-title class-font">Our Vision</h3>
                <p className="capability-description">
                  To become a globally recognized IT company that empowers enterprises with smart, efficient, and sustainable technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="why-artylsoft">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <h2 className="section-title text-theme-responsive" data-aos="fade-up">Our Core Values</h2>
              <p className="section-subtitle text-theme-responsive" data-aos="fade-up" data-aos-delay="100">
                These fundamental principles guide everything we do and shape our company culture
              </p>
            </div>
          </div>

          <div className="row g-4">
            {values.map((value, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div
                  className="capability-card text-center h-100"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="capability-icon mx-auto">
                    <value.icon size={32} />
                  </div>
                  <h4 className="capability-title class-font">{value.title}</h4>
                  <p className="capability-description">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* Our Team */}
<section className='team-sec' id='our-team'>
        <div className='team-header text-center mb-5'>
          <h2 className="section-title text-theme-responsive" data-aos="fade-up">Our Team</h2>
          <h4 className='team-h' data-aos="fade-left">Meet the people behind our success</h4>
          <p className='team-para' data-aos="fade-right">A passionate team of builders, thinkers, and innovators.</p>
        </div>
        
        {/* Infinite Marquee Loop */}
        <div 
          className={`marquee-container ${isPaused ? 'paused' : ''}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => !activeMember && setIsPaused(false)}
        >
          <div className="marquee-track">
            {doubleMembers.map((member, index) => {
              const isSelected = activeMember === member.id;
              
              return (
                <div 
                    key={`${member.id}-${index}`} 
                    className="team-card"
                   >
                  <div className="image-wrapper">
                    <img src={member.image} alt={member.name} />
                    
        
                    <div className="social-overlay">
                      <div className="social-links" onClick={(e) => e.stopPropagation()}>
                        {member.linkedIn && (
                          <a href={member.linkedIn} target="_blank" rel="noreferrer" className="icon-link">
                            <Linkedin size={20} />
                          </a>
                        )}
                        {member.github && (
                          <a href={member.github} target="_blank" rel="noreferrer" className="icon-link">
                            <Github size={20} />
                          </a>
                        )}
                        {member.insta && (
      <a href={member.insta} target="_blank" rel="noreferrer" className="icon-link">
        <Instagram size={20} style={{ color: '#e1306c' }} />
      </a>
    )}
    {member.whatsapp && (
      <a href={member.whatsapp} target="_blank" rel="noreferrer" className="icon-link">
        <MessageCircle size={20} style={{ color: '#25d366' }} />
      </a>
    )}
                        {!member.linkedIn && !member.github && !member.insta && !member.whatsapp &&(
                          <span className="no-links text-white-50 small">No handles linked</span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="info-box">
                    <h3 className='class-font'>{member.name}</h3>
                    <p>{member.role}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>


</section>
        

      {/* Our Story */}
      <section id="our-story" className="capabilities">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <h2 className="section-title text-theme-responsive" data-aos="fade-up">Our Story</h2>
              <p className="section-subtitle text-theme-responsive" data-aos="fade-up" data-aos-delay="100">
                Started in Krishnagiri, Tamil Nadu, Artlysoft has grown from a small tech startup into a trusted name in IT consulting and outsourcing. We work closely with clients to understand their goals and turn technology into a business advantage.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {milestones.map((milestone, index) => (
              <div key={index} className="col-lg-12">
                <div
                  className="capability-card h-100"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="d-flex align-items-center mb-3">
                    <span className="badge bg-primary fs-6 me-3">{milestone.year}</span>
                    <h4 className="capability-title mb-0 class-font">{milestone.title}</h4>
                  </div>
                  <p className="capability-description">{milestone.description}</p>
                </div>
              </div>
            ))}
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

      {/* CTA Section */}
      <section className="why-artylsoft">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="section-title text-theme-responsive" data-aos="fade-up">Ready to Partner With Us?</h2>
              <p className="section-subtitle mb-4 text-theme-responsive" data-aos="fade-up" data-aos-delay="100">
                Let's discuss how we can help transform your business with innovative technology solutions.
              </p>
              <a href="#contact" className="btn-hero" data-aos="fade-up" data-aos-delay="200">
                Get In Touch <ArrowRight size={20} className="ms-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AboutPage;