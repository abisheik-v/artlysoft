import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  User,
  Building,
  MessageSquare,
  Globe,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ArrowRight,
  Calendar,
  Video,
  FileText,
  Headphones
} from 'lucide-react';
import { NavHashLink } from 'react-router-hash-link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import slide2Video from '../Assets/images/slide2.mp4';
import '../index.css';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Send us an email and we\'ll respond within 24 hours',
    contact: 'admin@artlysoft.com',
    action: 'https://mail.google.com/mail/?view=cm&fs=1&to=admin@artlysoft.com',
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Speak directly with our experts during business hours',
    contact: '+91 9901718700',
    action: 'tel:+919901718700'
  },
  {
    icon: Globe,
    title: 'Website',
    description: 'Visit our website for more information',
    contact: 'www.artlysoft.com',
    action: 'https://www.artlysoft.com'
  },
  {
    icon: MapPin,
    title: 'Visit Our Office',
    description: 'Meet us in person at our headquarters',
    contact: 'Bengaluru, Karnataka, India',
    action: '#location'
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp',
    description: 'Chat with us instantly on WhatsApp',
    contact: '+91 9901718700',
    action: 'https://wa.me/919901718700'
  }
];

function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+91',
    phone: '',
    description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Set SEO meta tags
    document.title = 'Contact Artlysoft | Get in Touch with Our IT Experts';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Reach out to Artlysoft Private Limited for IT projects, partnerships, or vendor collaborations. Let\'s start building your next digital solution today.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Reach out to Artlysoft Private Limited for IT projects, partnerships, or vendor collaborations. Let\'s start building your next digital solution today.';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }
  }, []);




  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const fullPhoneNumber = formData.phone ? `${formData.countryCode}${formData.phone}` : 'Not Provided';
    const message = `
Hello, I'm ${formData.firstName} ${formData.lastName}.
Here are my details:

📧 Email: ${formData.email}
📞 Phone: ${fullPhoneNumber}
📝 Description: ${formData.description}
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '919901718700'; // <-- Replace with your WhatsApp number

    window.location.href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          countryCode: '+91',
          phone: '',
          description: '',
        });
      }, 3000);
    }, 1000);
  };

  return (
    <div className="artylsoft-root">
      <Navbar />

      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <h1 className="display-3 fw-bold mb-4 text-theme-responsive" data-aos="fade-right">
                We'd Love to <span className="gradient-text">Hear from You!</span>
              </h1>
              <p className="lead mb-4 text-theme-responsive">
                Whether you're looking for a technology partner or want to discuss collaboration opportunities, our team is ready to connect.
              </p>
              <div className="d-flex gap-3 mb-5" data-aos="fade-right" data-aos-delay="200">
                <NavHashLink smooth to="#contact-form" className="btn-hero">Contact us</NavHashLink>
              </div>
              <div className="row g-3">
                <div className="col-4">
                  <div className="text-center">
                    <h3 className="fw-bold text-theme-responsive mb-1">24h</h3>
                    <small className="text-theme-responsive">Response Time</small>
                  </div>
                </div>
                <div className="col-4">
                  <div className="text-center">
                    <h3 className="fw-bold text-theme-responsive mb-1">500+</h3>
                    <small className="text-theme-responsive">Happy Clients</small>
                  </div>
                </div>
                <div className="col-4">
                  <div className="text-center">
                    <h3 className="fw-bold text-theme-responsive mb-1">1+</h3>
                    <small className="text-theme-responsive">Years Experience</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative">
                <video
                  src={slide2Video}
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

      {/* Contact Methods Section */}
      <section className="capabilities" id="Details-form">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <h2 className="section-title text-theme-responsive">How Can We Help You?</h2>
              <p className="section-subtitle text-theme-responsive">
                Choose the best way to reach us and we'll get back to you promptly
              </p>
            </div>
          </div>

          <div className="row g-4">
            {contactMethods.map((method, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <a
                  href={method.action}
                  target={method.target}
                  rel={method.rel}
                  className="text-decoration-none"
                >
                  <div className="capability-card text-center h-100">
                    <div className="capability-icon mx-auto">
                      <method.icon size={32} />
                    </div>
                    <h4 className="capability-title class-font">{method.title}</h4>
                    <p className="capability-description mb-3">{method.description}</p>
                    <div className="fw-bold text-primary">{method.contact}</div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="why-artylsoft">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="capability-card">
                <div className="text-center mb-5">
                  <h2 className="section-title">Tell Us About Your Project</h2>
                  <p className="section-subtitle">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-5">
                    <CheckCircle size={64} className="text-success mb-3" />
                    <h3 className="text-success mb-3">Thank You!</h3>
                    <p className="lead mb-4">
                      Your message has been sent successfully. We'll get back to you within 24 hours.
                    </p>
                    <button
                      className="btn btn-primary"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="firstName" className="form-label">First Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="lastName" className="form-label">Last Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email Address *</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <div className="input-group">
                          <select
                            className="form-select"
                            style={{ maxWidth: '120px' }}
                            name="countryCode"
                            value={formData.countryCode}
                            onChange={handleInputChange}
                          >
                            <option value="+1">+1 (US/CA)</option>
                            <option value="+44">+44 (UK)</option>
                            <option value="+91">+91 (India)</option>
                            <option value="+61">+61 (Australia)</option>
                            <option value="+49">+49 (Germany)</option>
                            <option value="+33">+33 (France)</option>
                            <option value="+81">+81 (Japan)</option>
                            <option value="+86">+86 (China)</option>
                            <option value="+971">+971 (UAE)</option>
                            <option value="+65">+65 (Singapore)</option>
                            <option value="+27">+27 (South Africa)</option>
                            <option value="+55">+55 (Brazil)</option>
                          </select>
                          <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            name="phone"
                            placeholder="Enter mobile number with country code"
                            value={formData.phone}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <label htmlFor="description" className="form-label">Description *</label>
                        <textarea
                          className="form-control"
                          id="description"
                          name="description"
                          rows="5"
                          value={formData.description}
                          onChange={handleInputChange}
                          required
                        ></textarea>
                      </div>
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg w-100"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <div className="spinner-border spinner-border-sm me-2" role="status">
                                <span className="visually-hidden">Loading...</span>
                              </div>
                              Sending Message...
                            </>
                          ) : (
                            <>
                              Send via WhatsApp <Send size={20} className="ms-2" />
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="location py-5 bg-theme-secondary" id="location">
        <div className="text-center mb-5 px-3">
          <h2 className="section-title mb-3">Visit Our Headquarters</h2>
          <p className="section-subtitle">
            We'd love to meet you in person! Visit us at our office to discuss how we can help your business thrive.
          </p>
        </div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="rounded-4 shadow-lg overflow-hidden">
                <iframe
  title="Company Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4785.135408593581!2d77.62947187585654!3d12.91595051609431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac470931839411%3A0xd5ca641a983f56bc!2sArtlysoft%20Private%20Limited!5e1!3m2!1sen!2sin!4v1782710446138!5m2!1sen!2sin"
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="stats">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="text-white mb-4 fs-3 class-font">Ready to Start Your Digital Transformation?</h2>
              <p className="text-white opacity-75 mb-4 lead">
                Join 500+ companies that have transformed their business with our innovative solutions.
              </p>
              <div className="d-flex gap-3 justify-content-center">
                <NavHashLink smooth to="#contact-form" className="btn-hero">Get Started Today</NavHashLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ContactPage;
