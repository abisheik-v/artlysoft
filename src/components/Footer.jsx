import React from 'react';
import {
  Code,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
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
                  <span>Krishnagiri, Tamil Nadu, India</span>
                </div>
                <div className="d-flex gap-2 mb-3">
                  <Phone size={16} className="text-primary mt-1" />
                  <span>+91 9901718700</span>
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
                  <li><a href="/services">Product Engineering</a></li>
                  <li><a href="/services">Data & AI</a></li>
                  <li><a href="/services">Cloud Services</a></li>
                  <li><a href="/services">Automation</a></li>
                  <li><a href="/services">Cybersecurity</a></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <div className="footer-section">
                <h5>Industries</h5>
                <ul>
                  <li><a href="/industries">Healthcare</a></li>
                  <li><a href="/industries">Finance</a></li>
                  <li><a href="/industries">Manufacturing</a></li>
                  <li><a href="/industries">Retail</a></li>
                  <li><a href="/industries">Logistics</a></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <div className="footer-section">
                <h5>Company</h5>
                <ul>
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/careers">Careers</a></li>
                  <li><a href="/industries">News & Events</a></li>
                  <li><a href="/services">Case Studies</a></li>
                  <li><a href="/">Partners</a></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <div className="footer-section">
                <h5>Resources</h5>
                <ul>

                  <li><a href="/services">Whitepapers</a></li>
                  <li><a href="/">Documentation</a></li>
                  <li><a href="/industries">Support</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="social-links">
              <a href="https://www.instagram.com/artly_soft?igsh=MW5sZGJpaWp3cnBjdg==" className="social-link" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
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