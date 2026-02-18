import React, { useState, useEffect } from 'react';
import {
  Code,
  Sun,
  Moon,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Heart,
  Building,
  CreditCard,
  Database,
  Bot,
  Cog,
  Smartphone,
  Globe,
  Shield,
  Users,
  Award,
  Zap,
  Target,
  CheckCircle,
  Star,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import slide1Video from '../Assets/images/slide1.mp4';
import slide2Video from '../Assets/images/slide2.mp4';
import slide3Video from '../Assets/images/slide3.mp4';
import slide4Video from '../Assets/images/slide4.mp4';
import awsLogo from '../Assets/images/clients/aws.svg';
import microsoftLogo from '../Assets/images/clients/microsoft.svg';
import googleLogo from '../Assets/images/clients/google.svg';
import stripeLogo from '../Assets/images/clients/stripe.svg';
import tcsLogo from '../Assets/images/clients/tcs.svg';
import salesforceLogo from '../Assets/images/clients/salesforce.svg';
import oracleLogo from '../Assets/images/clients/oracle.svg';
import ibmLogo from '../Assets/images/clients/ibm.svg';
import placeholderLogo from '../Assets/images/clients/placeholder.svg';
import { Link } from 'react-router-dom';

// Import Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import AOS
import AOS from 'aos';

const clientLogos = [
  { name: 'AWS', logo: awsLogo },
  { name: 'Microsoft', logo: microsoftLogo },
  { name: 'Google', logo: googleLogo },
  { name: 'Stripe', logo: stripeLogo },
  { name: 'TCS', logo: tcsLogo },
  { name: 'Salesforce', logo: salesforceLogo },
  { name: 'Oracle', logo: oracleLogo },
  { name: 'IBM', logo: ibmLogo }
];

const handleLogoError = (event) => {
  event.currentTarget.onerror = null;
  event.currentTarget.src = placeholderLogo;
};

const carouselSlides = [
  {
    id: 1,
    video: slide1Video,
    title: 'Softly Shaping Software Solutions',
    subtitle: 'Empowering businesses through intelligent, scalable, and secure technology.',
    icon: Cloud, // Cloud for broad technology services
  },
  {
    id: 2,
    video: slide2Video,
    title: 'Softly Shaping Software Solutions',
    subtitle: 'Empowering businesses through intelligent, scalable, and secure technology.',
    icon: Cloud,
  },
  {
    id: 3,
    video: slide3Video,
    title: 'Softly Shaping Software Solutions',
    subtitle: 'Empowering businesses through intelligent, scalable, and secure technology.',
    icon: Cloud,
  },
  {
    id: 4,
    video: slide4Video,
    title: 'Softly Shaping Software Solutions',
    subtitle: 'Empowering businesses through intelligent, scalable, and secure technology.',
    icon: Cloud,
  }
];

const capabilities = [
  {
    icon: Code,
    title: 'Product Engineering',
    description: 'Full-stack development with modern frameworks, scalable architectures, and best practices for web and mobile applications.'
  },
  {
    icon: Database,
    title: 'Data & AI',
    description: 'Advanced analytics, machine learning, and AI-powered solutions to unlock insights from your data.'
  },
  {
    icon: Bot,
    title: 'Intelligent Automation',
    description: 'RPA, process mining, and AI-driven automation to streamline operations and boost efficiency.'
  },
  {
    icon: Cloud,
    title: 'Cloud Services',
    description: 'Multi-cloud expertise across AWS, Azure, and GCP for scalable, secure, and cost-effective solutions.'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.'
  },
  {
    icon: Smartphone,
    title: 'Digital Transformation',
    description: 'End-to-end digital transformation strategies to modernize your business processes.'
  }
];

const testimonials = [
  {
    quote: "Artylsoft transformed our healthcare platform with their innovative AI solutions. The team's expertise and dedication exceeded our expectations.",
    author: "Mr. Dinesh Kumar",
    position: "CTO, MedTech Solutions",
    avatar: "DK"
  },
  {
    quote: "Their cloud migration strategy saved us 40% in infrastructure costs while improving our system performance significantly.",
    author: "Arun",
    position: "IT Director, FinanceCore",
    avatar: "AN"
  },
  {
    quote: "The intelligent automation solutions implemented by Artylsoft increased our operational efficiency by 60%. Outstanding work!",
    author: "kalikrishnan",
    position: "Operations Manager, LogiFlow",
    avatar: "kK"
  }
];

function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    // Set SEO meta tags
    document.title = 'Artlysoft Private Limited | Web Development, DevOps, AI & IT Consulting Services';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Artlysoft Private Limited delivers cutting-edge web development, DevOps, AI, and IT consulting solutions for global businesses. Softly shaping software solutions for your success.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Artlysoft Private Limited delivers cutting-edge web development, DevOps, AI, and IT consulting solutions for global businesses. Softly shaping software solutions for your success.';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Refresh AOS when component mounts
    AOS.refresh();
  }, []);



  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  return (
    <div className="artylsoft-root">
      <Navbar />

      {/* Hero Carousel */}
      <div id="heroCarousel" className="carousel slide hero-carousel">
        <div className="carousel-indicators">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={index === activeSlide ? 'active' : ''}
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="carousel-inner">
          {carouselSlides.map((slide, index) => (
            <div key={slide.id} className={`carousel-item ${index === activeSlide ? 'active' : ''}`}>
              {slide.video.endsWith('.mp4') ? (
                <video src={slide.video} autoPlay loop muted playsInline className="carousel-media" />
              ) : (
                <img src={slide.video} alt={slide.title} className="carousel-media" />
              )}
              <div className="carousel-overlay">
                <div className="carousel-content" data-aos="fade-left" data-aos-delay="300">
                  <div className="carousel-icon" data-aos="zoom-in" data-aos-delay="500">
                    <slide.icon size={40} />
                  </div>
                  <h1 className="carousel-title" data-aos="fade-up" data-aos-delay="600">{slide.title}</h1>
                  <p className="carousel-subtitle" data-aos="fade-up" data-aos-delay="700">{slide.subtitle}</p>
                  <Link to="/contact" className="btn-hero" data-aos="fade-up" data-aos-delay="800">Let's build together →</Link>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>

      {/* Trusted By Section */}
      <section className="trusted-by">
        <div className="container">
          <h2 className="section-title text-theme-responsive" data-aos="fade-up">Trusted by Industry Leaders</h2>
          <p className="section-subtitle text-theme-responsive" data-aos="fade-up" data-aos-delay="100">
            Partnering with forward-thinking businesses in Finance, Healthcare, and Logistics
          </p>

          <div className="marquee-container" data-aos="fade-up" data-aos-delay="200">
            <div className="marquee-track">
              {[...clientLogos, ...clientLogos].map((client, index) => (
                <div key={index} className="client-logo-item">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="client-logo"
                    loading="lazy"
                    onError={handleLogoError}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities Section */}
      <section className="capabilities">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto text-center mb-5">
              <h2 className="section-title text-theme-responsive" data-aos="fade-up">Our Core Capabilities</h2>
              <p className="section-subtitle text-theme-responsive" data-aos="fade-up" data-aos-delay="100">
                Comprehensive technology solutions designed to accelerate your digital transformation journey
              </p>
            </div>
          </div>

          <div className="row g-4">
            {capabilities.map((capability, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div
                  className="capability-card"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="capability-icon">
                    <capability.icon size={32} />
                  </div>
                  <h4 className="capability-title">{capability.title}</h4>
                  <p className="capability-description">{capability.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Highlight Section */}
      <section className="capabilities">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="capability-card" data-aos="fade-up">
                <h2 className="section-title text-center mb-4">About Artlysoft Private Limited</h2>
                <p className="section-subtitle text-center lead text-theme-responsive fs-4">
                  Artlysoft Private Limited is a fast-growing IT company based in Krishnagiri, Tamil Nadu. We provide complete technology solutions — from web and cloud development to AI automation and IT consulting. Our goal is to help organizations grow through innovative and reliable digital transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Artylsoft Section */}
      <section className="why-artylsoft">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 why-content">
              <h2 className="section-title text-start text-theme-responsive" data-aos="fade-right">Why Choose Artylsoft?</h2>
              <p className="section-subtitle text-start mb-4 text-theme-responsive" data-aos="fade-right" data-aos-delay="100">
                We combine deep technical expertise with industry knowledge to deliver solutions that drive real business value.
              </p>

              <ul className="feature-list">
                <li data-aos="fade-right" data-aos-delay="200">
                  <CheckCircle className="feature-icon" />
                  <span className="feature-text">1+ years of industry experience across multiple domains</span>
                </li>
                <li data-aos="fade-right" data-aos-delay="300">
                  <CheckCircle className="feature-icon" />
                  <span className="feature-text">Agile development methodology with rapid delivery cycles</span>
                </li>
                <li data-aos="fade-right" data-aos-delay="400">
                  <CheckCircle className="feature-icon" />
                  <span className="feature-text">24/7 support and maintenance for all deployed solutions</span>
                </li>
                <li data-aos="fade-right" data-aos-delay="500">
                  <CheckCircle className="feature-icon" />
                  <span className="feature-text">Certified experts in leading cloud platforms and technologies</span>
                </li>
                <li data-aos="fade-right" data-aos-delay="600">
                  <CheckCircle className="feature-icon" />
                  <span className="feature-text">Proven track record with 200+ successful project deliveries</span>
                </li>
                <li data-aos="fade-right" data-aos-delay="700">
                  <CheckCircle className="feature-icon" />
                  <span className="feature-text">Cost-effective solutions with transparent pricing models</span>
                </li>
              </ul>
            </div>

            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6">
                  <div className="capability-card text-center" data-aos="zoom-in" data-aos-delay="200">
                    <div className="capability-icon mx-auto">
                      <Users size={32} />
                    </div>
                    <h4 className="capability-title">50+</h4>
                    <p className="capability-description">Satisfied Clients</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="capability-card text-center" data-aos="zoom-in" data-aos-delay="300">
                    <div className="capability-icon mx-auto">
                      <Award size={32} />
                    </div>
                    <h4 className="capability-title">200+</h4>
                    <p className="capability-description">Projects Completed</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="capability-card text-center" data-aos="zoom-in" data-aos-delay="400">
                    <div className="capability-icon mx-auto">
                      <Zap size={32} />
                    </div>
                    <h4 className="capability-title">1+</h4>
                    <p className="capability-description">Years of Excellence</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="capability-card text-center" data-aos="zoom-in" data-aos-delay="500">
                    <div className="capability-icon mx-auto">
                      <Target size={32} />
                    </div>
                    <h4 className="capability-title">50+</h4>
                    <p className="capability-description">Expert Team Members</p>
                  </div>
                </div>
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

      {/* Client Testimonials */}
      <section className="testimonials">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <h2 className="section-title text-theme-responsive" data-aos="fade-up">What Our Clients Say</h2>
              <p className="section-subtitle text-theme-responsive" data-aos="fade-up" data-aos-delay="100">
                Don't just take our word for it - hear from the companies we've helped transform
              </p>
            </div>
          </div>

          <div className="row g-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div
                  className="testimonial-card"
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                >
                  <div className="mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-warning me-1" fill="currentColor" />
                    ))}
                  </div>
                  <p className="testimonial-quote">"{testimonial.quote}"</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      {testimonial.avatar}
                    </div>
                    <div className="author-info">
                      <h6>{testimonial.author}</h6>
                      <small>{testimonial.position}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;