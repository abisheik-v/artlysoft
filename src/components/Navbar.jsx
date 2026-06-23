import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Code, Menu, X, Sun, Moon } from 'lucide-react';
import logo from '../Assets/images/logo.png';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);

  useEffect(() => {
    const checkDevice = () => setIsMobile(window.innerWidth < 992);
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY < 50) {
        setNavbarVisible(true);
      } else if (window.scrollY > lastScrollY) {
        setNavbarVisible(false); // scrolling down
      } else {
        setNavbarVisible(true); // scrolling up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = () => setIsNavOpen(false);
  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <>
      <nav className={`navbar navbar-expand-lg fixed-top transition-navbar ${navbarVisible ? 'navbar-visible' : 'navbar-hidden'
        } ${theme === 'dark' ? 'navbar-dark' : 'navbar-light'}`}>
        <div className="container-fluid d-flex justify-content-between align-items-center px-4">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={logo} alt="Logo" style={{ height: 32, width: 32, marginRight: 8 }} />
            <span><span className='class-font'>A</span>rtlysoft Private Limited</span>
          </Link>

          <div className="d-flex align-items-center gap-3 d-lg-none ms-auto">
            <button className="navbar-toggler border-0" onClick={toggleNav}>
              {isNavOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="d-none d-lg-flex align-items-center gap-4">
            <ul className="navbar-nav flex-row gap-4 align-items-center">
              <li className="nav-item"><NavLink className="nav-link" to="/" end>Home</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>

              {/* Services */}
              <li className="nav-item dropdown position-static">
                <NavLink 
    className={({ isActive }) => `nav-link dropdown-toggle ${isActive || window.location.pathname.startsWith('/services') ? 'active' : ''}`} 
    to="/services"
  >Services</NavLink>
                <div className="mega-menu services-menu">
                  <div className="d-flex">
                    <div className="menu-col">
                      <h6>Product Engineering</h6>
                      <Link to="/services/web-app">Web App</Link>
                      <Link to="/services/mobile-app">Mobile App</Link>
                      <Link to="/services/platform">Platform</Link>
                    </div>
                    <div className="menu-col">
                      <h6>Data & AI</h6>
                      <Link to="/services/engineering">Engineering</Link>
                      <Link to="/services/analytics">Analytics</Link>
                      <Link to="/services/data-science">Data Science</Link>
                    </div>
                    <div className="menu-col">
                      <h6>Intelligent Automation</h6>
                      <Link to="/services/rpa">RPA</Link>
                      <Link to="/services/gen-ai">Gen AI</Link>
                      <Link to="/services/process-mining">Process Mining</Link>
                      <Link to="/services/automation">Process Automation</Link>
                      <Link to="/services/low-code">Low Code</Link>
                    </div>
                    <div className="menu-col">
                      <h6>Cloud Services</h6>
                      <Link to="/services/gcp">GCP</Link>
                      <Link to="/services/azure">Azure</Link>
                      <Link to="/services/aws">AWS</Link>
                    </div>
                  </div>
                </div>
              </li>

              

              <li className="nav-item"><NavLink className="nav-link" to="/careers">Careers</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/courses">Courses</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>

              {/* Theme Toggle Button */}
              <li className="nav-item ml-3">
                <div
                  className="theme-switch"
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                  title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                >
                  <div className={`switch-option ${theme === 'light' ? 'active' : ''}`}>
                    <Sun size={14} />
                  </div>
                  <div className={`switch-option ${theme === 'dark' ? 'active' : ''}`}>
                    <Moon size={14} />
                  </div>
                </div>
              </li>
            </ul>
          </div>

          
        </div>

        {/* Mobile Menu */}
        {isMobile && isNavOpen && (
          <div className="d-lg-none mobile-menu">
            <ul className="navbar-nav ms-4 me-4">
              <li><NavLink to="/" className="nav-link" onClick={handleNavLinkClick} end>Home</NavLink></li>
              <li><NavLink to="/about" className="nav-link" onClick={handleNavLinkClick}>About</NavLink></li>
              <li><NavLink to="/services" className="nav-link" onClick={handleNavLinkClick}>Services</NavLink></li>
            


              <li><NavLink to="/careers" className="nav-link" onClick={handleNavLinkClick}>Careers</NavLink></li>
              <li><NavLink to="/courses" className="nav-link" onClick={handleNavLinkClick}>Courses</NavLink></li>
              <li><NavLink to="/contact" className="nav-link" onClick={handleNavLinkClick}>Contact</NavLink></li>

              {/* Mobile Theme Toggle */}
              <li className="nav-link d-flex align-items-center justify-content-between cursor-pointer" onClick={toggleTheme} style={{ cursor: 'pointer' }}>
                <span>{theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</span>
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </li>
            </ul>
          </div>
        )}
      </nav>

      <style>{`
        .mega-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          width: 100vw;
          
          padding: 2rem 4rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          z-index: 9999;
          display: none;
        }

        .nav-item.dropdown:hover .mega-menu {
          display: block;
        }

        .position-static {
          position: static !important;
        }

        .menu-col {
          flex: 1;
          padding: 0 1rem;
          min-width: 180px;
        }

        .menu-col h6 {
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .menu-col a {
          display: block;
          color: #333;
          text-decoration: none;
          margin-bottom: 0.5rem;
          transition: color 0.2s;
        }
        .services-menu {
          background: #000;
          color: #fff;
        }

        .services-menu .menu-col h6 {
          color: #ffd700;
        }

        .services-menu .menu-col a {
          color: #f5f5f5;
        }

        .services-menu .menu-col a:hover {
          color: #ffd700;
        }


        .menu-col a:hover {
          color: #007bff;
        }

        .industries-menu .border-divider {
          border-left: 1px solid #ddd;
          border-right: 1px solid #ddd;
        }

        .industries-menu {
          background: #000;
          color: #fff;
        }

        .industries-menu .menu-col h6 {
          color: #ffd700;
        }

        .industries-menu .menu-col a {
          color: #f5f5f5;
        }

        .industries-menu .menu-col a:hover {
          color: #ffd700;
        }

        .industries-menu .border-divider {
          border-left: 1px solid #333;
          border-right: 1px solid #333;
        }

        /* Show mega menu on hover for all screen sizes except mobile */
        @media (max-width: 991px) {
          .mega-menu {
            display: none !important;
          }
          .d-lg-flex {
            display: none !important;
          }
          .d-lg-none {
            display: block !important;
          }
        }

        @media (min-width: 992px) {
          .d-lg-flex {
            display: flex !important;
          }
          .d-lg-none {
            display: none !important;
          }
        }

        .mobile-menu .nav-link {
          padding: 0.75rem 0;
          font-size: 1rem;
          border-bottom: 1px solid #eee;
        }

        /* Dark Theme - Desktop Only */
        @media (min-width: 992px) {
          .dark-theme .mega-menu {
            background: #1a1a1a;
            color: #fff;
          }

          .dark-theme .mega-menu .menu-col h6 {
            color: #ffd700;
          }

          .dark-theme .mega-menu .menu-col a {
            color: #fff;
            background: transparent;
            transition: background 0.2s, color 0.2s;
          }

          .dark-theme .mega-menu .menu-col a:hover {
            color: #ffd700;
            background: #222;
          }

          .dark-theme .industries-menu .border-divider {
            border-left: 1px solid #444;
            border-right: 1px solid #444;
          }

          .dark-theme .mega-menu .menu-col {
            /* Ensure no background leaks from light mode */
            background: transparent;
          }
        }

        @media (max-width: 1539px) and (min-width: 992px) {
          .mega-menu {
            padding: 1.5rem 2rem;
            font-size: 0.95rem;
          }
          .menu-col {
            min-width: 140px;
            padding: 0 0.5rem;
          }
        }

        .transition-navbar {
          transition: transform 0.3s ease-in-out;
        }
        .navbar-hidden {
          transform: translateY(-100%);
        }
        .navbar-visible {
          transform: translateY(0);
        }
      `}</style>
    </>
  );
};

export default Navbar;
