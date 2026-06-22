import React from 'react';
import { Link } from 'react-router-dom';
import {
  Code,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Github,
  ArrowUp
} from 'lucide-react';
import logo from '../Assets/images/logo.png';

const Footer = () => {
  const [showScroll, setShowScroll] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showScroll && (
        <button
          className="scroll-to-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUp size={28} />
        </button>
      )}
      <footer className="footer">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="footer-section">
                <div className="d-flex align-items-center mb-3">
                  <div className="brand-icon me-3">
                    <img src={logo} alt="Logo" style={{ height: 32, width: 32 }} />
                  </div>
                  <h5 className="mb-0">Artlysoft Private Limited</h5>
                </div>
                <p className="text-muted mb-4">
                  Transforming businesses through innovative technology solutions.
                  We partner with organizations to accelerate their digital transformation journey.
                </p>
                <div className="d-flex gap-2 mb-3">
                  <MapPin size={16} className="text-primary mt-1" />
<<<<<<< HEAD
                  <span>Bangalore, Karnataka, India</span>
=======
                  <span>Bengaluru, Karnataka, India</span>
>>>>>>> 6de1b5b (Updated project with latest changes)
                </div>
                <div className="d-flex gap-2 mb-3">
                  <Phone size={16} className="text-primary mt-1" />
                  <span>
                    <a href="https://wa.me/919901718700" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-reset">
                      +91 9901718700
                    </a>
                  </span>
                </div>
                <div className="d-flex gap-2">
                  <Mail size={16} className="text-primary mt-1" />
                  <span>admin@artlysoft.com</span>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <div className="footer-section">
                <h5>Services</h5>
                <ul>
                  <li><Link to="/services">Product Engineering</Link></li>
                  <li><Link to="/services">Data & AI</Link></li>
                  <li><Link to="/services">Cloud Services</Link></li>
                  <li><Link to="/services">Automation</Link></li>
                  <li><Link to="/services">Cybersecurity</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <div className="footer-section">
                <h5>Careers</h5>
                <ul>
<<<<<<< HEAD
                  <li><Link to="#">Healthcare</Link></li>
                  <li><Link to="#">Finance</Link></li>
                  <li><Link to="#">Manufacturing</Link></li>
                  <li><Link to="#">Retail</Link></li>
                  <li><Link to="#">Logistics</Link></li>
=======
                  <li><Link to="/careers">Software Developer</Link></li>
                  <li><Link to="/careers">Devops Engineer</Link></li>
                  <li><Link to="/careers">AI/ML Intern</Link></li>
                  <li><Link to="/careers">IT Consultant</Link></li>
>>>>>>> 6de1b5b (Updated project with latest changes)
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <div className="footer-section">
                <h5>Company</h5>
                <ul>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/courses">Courses</Link></li>
                  <li><Link to="#">News & Events</Link></li>
                  <li><Link to="/services">Case Studies</Link></li>
                  <li><Link to="/">Partners</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <div className="footer-section">
                <h5>Resources</h5>
                <ul>

                  <li><Link to="/services">Whitepapers</Link></li>
                  <li><Link to="/">Documentation</Link></li>
                  <li><Link to="#">Support</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="social-links">
              <a href="https://www.instagram.com/artly_soft?igsh=MW5sZGJpaWp3cnBjdg==" className="social-link" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/share/1Psq5pJ1L2/" className="social-link" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} />
              </a>
              <a href="https://youtube.com/@artlysoftprivatelimited?si=jkp8QbDDpDsLTxX8" className="social-link" target="_blank" rel="noopener noreferrer">
                <Youtube size={20} />
              </a>
              <a href="https://github.com/Artlysoft-Pvt-Ltd" className="social-link" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
            </div>
            <p className="text-muted">&copy; 2025 Artlysoft Private Limited. All rights reserved.</p>
            <p className="text-muted">Designed with 💻 by Artlysoft Web Team.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;