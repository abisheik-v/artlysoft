import React, { useState, useEffect } from 'react';
import {
  Building2,
  Heart,
  Pill,
  Code2,
  Factory,
  CreditCard,
  Shield,
  Bot,
  Database,
  Users,
  CheckCircle,
  ArrowRight,
  Stethoscope,
  Activity,
  FileText,
  Lock,
  Smartphone,
  Brain,
  FlaskConical,
  Microscope,
  Truck,
  BarChart3,
  Cloud,
  Zap,
  Settings,
  Cpu,
  MonitorSpeaker,
  Gauge
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import slide4Video from '../Assets/images/slide4.mp4';
import '../index.css';

const industries = [
  {
    id: 'bfsi',
    icon: CreditCard,
    title: 'Banking, Financial Services, and Insurance (BFSI)',
    description: 'Transforming financial services with secure, scalable, and intelligent solutions that enhance customer experience and operational efficiency.',
    image: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=800',
    solutions: [
      {
        icon: Smartphone,
        title: 'Digital Banking Platforms',
        description: 'Modern, secure, and user-friendly digital banking solutions with real-time transactions, multi-channel support, and advanced security features. Built for web and mobile with seamless integration.'
      },
      {
        icon: Brain,
        title: 'AI-Powered Credit Scoring and Fraud Detection',
        description: 'Advanced machine learning models for real-time credit assessment and fraud prevention. Reduce risk, improve decision-making, and enhance customer onboarding with intelligent automation.'
      },
      {
        icon: Bot,
        title: 'RPA in Claims Processing',
        description: 'Automated claims processing workflows that reduce manual effort, improve accuracy, and accelerate claim settlements. Integration with existing systems for seamless operations.'
      },
      {
        icon: Users,
        title: 'Customer Onboarding Automation',
        description: 'Streamlined digital onboarding processes with KYC automation, document verification, and compliance checks. Reduce onboarding time from days to minutes.'
      }
    ],
    technologies: ['React', 'Java', 'Python', 'AWS', 'Azure', 'Blockchain', 'AI/ML', 'RPA Tools'],
    stats: { projects: '50+', clients: '25+', experience: '1+' }
  },
  {
    id: 'healthcare',
    icon: Heart,
    title: 'Healthcare',
    description: 'Revolutionizing healthcare delivery with innovative technology solutions that improve patient outcomes and streamline operations.',
    image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=800',
    solutions: [
      {
        icon: Stethoscope,
        title: 'Patient Portals and Telemedicine Apps',
        description: 'Comprehensive patient engagement platforms with appointment scheduling, virtual consultations, prescription management, and secure messaging between patients and providers.'
      },
      {
        icon: Lock,
        title: 'HIPAA-Compliant Data Systems',
        description: 'Secure, compliant healthcare data management systems with encryption, audit trails, and access controls. Ensure patient privacy while enabling efficient data sharing.'
      },
      {
        icon: Activity,
        title: 'AI for Diagnostics and Clinical Decision Support',
        description: 'AI-powered diagnostic tools and clinical decision support systems that assist healthcare providers in making accurate diagnoses and treatment recommendations.'
      },
      {
        icon: FileText,
        title: 'EHR Integration and Automation',
        description: 'Seamless Electronic Health Record integration with workflow automation, reducing administrative burden and improving care coordination across healthcare systems.'
      }
    ],
    technologies: ['FHIR', 'HL7', 'React', 'Python', 'TensorFlow', 'AWS', 'Azure', 'HIPAA Compliance'],
    stats: { projects: '40+', clients: '20+', experience: '1+' }
  },
  {
    id: 'pharma',
    icon: Pill,
    title: 'Pharma & Life Sciences',
    description: 'Accelerating drug discovery and development with advanced analytics, automation, and compliance solutions.',
    image: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=800',
    solutions: [
      {
        icon: FlaskConical,
        title: 'Drug Discovery Analytics Platforms',
        description: 'Advanced analytics platforms for drug discovery with molecular modeling, compound screening, and predictive analytics to accelerate research and development processes.'
      },
      {
        icon: Microscope,
        title: 'AI for Clinical Trials and Pharmacovigilance',
        description: 'AI-powered solutions for clinical trial optimization, patient recruitment, adverse event detection, and pharmacovigilance to ensure drug safety and efficacy.'
      },
      {
        icon: Settings,
        title: 'Lab Automation Systems',
        description: 'Automated laboratory management systems with sample tracking, equipment integration, and workflow optimization to improve efficiency and reduce errors.'
      },
      {
        icon: Truck,
        title: 'Supply Chain and Compliance Dashboards',
        description: 'Real-time supply chain visibility and compliance monitoring dashboards with track-and-trace capabilities, regulatory reporting, and quality assurance.'
      }
    ],
    technologies: ['Python', 'R', 'TensorFlow', 'BioPython', 'AWS', 'Snowflake', 'Tableau', 'Regulatory APIs'],
    stats: { projects: '30+', clients: '15+', experience: '1+' }
  },
  {
    id: 'isv-hitech',
    icon: Code2,
    title: 'Independent Software Vendors (ISVs / Hi-Tech)',
    description: 'Empowering software companies with cutting-edge product development, platform engineering, and AI integration services.',
    image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=800',
    solutions: [
      {
        icon: Cloud,
        title: 'SaaS Product Development',
        description: 'End-to-end SaaS product development with multi-tenant architecture, subscription management, analytics, and scalable cloud infrastructure for rapid market entry.'
      },
      {
        icon: Database,
        title: 'API-First Platform Engineering',
        description: 'Modern API-first platform development with microservices architecture, GraphQL, REST APIs, and comprehensive developer tools for seamless integrations.'
      },
      {
        icon: Zap,
        title: 'CI/CD and DevOps Acceleration',
        description: 'Advanced CI/CD pipelines, infrastructure as code, automated testing, and DevOps practices to accelerate software delivery and improve quality.'
      },
      {
        icon: Bot,
        title: 'AI Co-pilot Integrations',
        description: 'Integration of AI co-pilots and intelligent assistants into existing software products to enhance user experience and productivity with generative AI capabilities.'
      }
    ],
    technologies: ['React', 'Node.js', 'Python', 'Kubernetes', 'Docker', 'AWS', 'Azure', 'OpenAI', 'GraphQL'],
    stats: { projects: '80+', clients: '40+', experience: '1+' }
  },
  {
    id: 'manufacturing',
    icon: Factory,
    title: 'Manufacturing',
    description: 'Driving Industry 4.0 transformation with smart manufacturing solutions, IoT integration, and predictive analytics.',
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
    solutions: [
      {
        icon: Gauge,
        title: 'Predictive Maintenance using IoT + AI',
        description: 'IoT-enabled predictive maintenance solutions with sensor data analytics, machine learning models, and real-time alerts to prevent equipment failures and optimize maintenance schedules.'
      },
      {
        icon: MonitorSpeaker,
        title: 'Digital Twins and Smart Factory Solutions',
        description: 'Digital twin implementations and smart factory solutions with real-time monitoring, simulation, and optimization of manufacturing processes for improved efficiency.'
      },
      {
        icon: Cpu,
        title: 'ERP Automation and MES Integration',
        description: 'Enterprise Resource Planning automation and Manufacturing Execution System integration to streamline operations, improve visibility, and enhance production planning.'
      },
      {
        icon: BarChart3,
        title: 'Cloud-Enabled Analytics Dashboards',
        description: 'Real-time analytics dashboards with KPI monitoring, production metrics, quality control, and operational intelligence to drive data-driven decision making.'
      }
    ],
    technologies: ['IoT Platforms', 'Python', 'TensorFlow', 'Azure IoT', 'AWS IoT', 'Power BI', 'Tableau', 'SAP'],
    stats: { projects: '35+', clients: '18+', experience: '1+' }
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Industry Analysis',
    description: 'Deep dive into your industry-specific challenges, regulations, and market dynamics to understand unique requirements.'
  },
  {
    step: '02',
    title: 'Solution Design',
    description: 'Design tailored solutions that address industry-specific needs while ensuring compliance and scalability.'
  },
  {
    step: '03',
    title: 'Technology Implementation',
    description: 'Implement cutting-edge technologies with industry best practices and proven methodologies.'
  },
  {
    step: '04',
    title: 'Compliance & Security',
    description: 'Ensure all solutions meet industry regulations and security standards with comprehensive testing.'
  },
  {
    step: '05',
    title: 'Ongoing Support',
    description: 'Provide continuous support, updates, and optimization to keep your solutions current and effective.'
  }
];

function IndustriesPage() {
  const [activeIndustry, setActiveIndustry] = useState('bfsi');

  useEffect(() => {
    // Set SEO meta tags
    document.title = 'Industries We Serve | BFSI, Healthcare, Manufacturing & Hi-Tech - Artlysoft';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Discover how Artlysoft supports BFSI, healthcare, pharma, manufacturing, and high-tech industries with tailored web, AI, cloud, and automation solutions.'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content =
        'Discover how Artlysoft supports BFSI, healthcare, pharma, manufacturing, and high-tech industries with tailored web, AI, cloud, and automation solutions.';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }
  }, []);





  return (
    <div className="artylsoft-root">
      <Navbar />

      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <h1 className="display-3 fw-bold mb-4 text-theme-responsive">
                Industries <span className="gradient-text">We Serve</span>
              </h1>
              <p className="lead mb-4 text-theme-responsive">
                We bring deep industry expertise and innovative technology solutions to transform
                businesses across healthcare, finance, manufacturing, and high-tech sectors.
              </p>
              <div className="d-flex gap-3 mb-5" data-aos="fade-right" data-aos-delay="200">
                <a href="#industries-overview" className="btn-hero">Explore Industries</a>
              </div>
              <div className="row g-3">
                <div className="col-4">
                  <div className="text-center">
                    <h3 className="fw-bold text-theme-responsive mb-1">5</h3>
                    <small className="text-theme-responsive">Key Industries</small>
                  </div>
                </div>
                <div className="col-4">
                  <div className="text-center">
                    <h3 className="fw-bold text-theme-responsive mb-1">200+</h3>
                    <small className="text-theme-responsive">Industry Projects</small>
                  </div>
                </div>
                <div className="col-4">
                  <div className="text-center">
                    <h3 className="fw-bold text-theme-responsive mb-1">1+</h3>
                    <small className="text-theme-responsive">Years of Excellence</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative">
                <video
                  src={slide4Video}
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

      {/* Industries Navigation */}
      <section className="py-4 bg-theme-secondary">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex flex-wrap justify-content-center gap-2">
                {industries.map((industry) => (
                  <button
                    key={industry.id}
                    className={`btn ${activeIndustry === industry.id ? 'btn-primary' : 'btn-outline-primary'} btn-sm`}
                    onClick={() => setActiveIndustry(industry.id)}
                  >
                    <industry.icon size={16} className="me-2" />
                    {industry.title.split(' (')[0]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Overview */}
      <section id="industries-overview" className="capabilities">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <h2 className="section-title text-theme-responsive">Industry Expertise</h2>
              <p className="section-subtitle text-theme-responsive">
                Specialized solutions tailored to the unique challenges and opportunities of each industry
              </p>
            </div>
          </div>

          {industries.map((industry) => (
            <div key={industry.id} className={`industry-section ${activeIndustry === industry.id ? 'd-block' : 'd-none'}`}>
              <div className="row mb-5">
                <div className="col-lg-6">
                  <div className="capability-card h-100">
                    <div className="d-flex align-items-center mb-4">
                      <div className="capability-icon me-4">
                        <industry.icon size={32} />
                      </div>
                      <div>
                        <h3 className="capability-title mb-2">{industry.title}</h3>
                        <p className="capability-description mb-0">{industry.description}</p>
                      </div>
                    </div>

                    <div className="row g-3 mt-3">
                      <div className="col-4 text-center">
                        <h4 className="fw-bold text-primary mb-1">{industry.stats.projects}</h4>
                        <small className="text-muted">Projects</small>
                      </div>
                      <div className="col-4 text-center">
                        <h4 className="fw-bold text-primary mb-1">{industry.stats.clients}</h4>
                        <small className="text-muted">Clients</small>
                      </div>
                      <div className="col-4 text-center">
                        <h4 className="fw-bold text-primary mb-1">{industry.stats.experience}</h4>
                        <small className="text-muted">Years of Excellence</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="position-relative">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="img-fluid rounded-4 shadow-lg"
                    />
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-primary opacity-10 rounded-4"></div>
                  </div>
                </div>
              </div>

              <div className="row g-4 mb-5">
                {industry.solutions.map((solution, index) => (
                  <div key={index} className="col-lg-6 col-md-6">
                    <div className="capability-card h-100">
                      <div className="capability-icon mb-3">
                        <solution.icon size={24} />
                      </div>
                      <h5 className="capability-title">{solution.title}</h5>
                      <p className="capability-description">{solution.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <div className="capability-card">
                    <h6 className="fw-bold mb-3 text-theme-responsive">Technologies & Platforms:</h6>
                    <div className="d-flex flex-wrap gap-2">
                      {industry.technologies.map((tech, idx) => (
                        <span key={idx} className="badge bg-primary text-white px-3 py-2">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Industries Grid */}
      <section className="why-artylsoft">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <h2 className="section-title text-theme-responsive">Complete Industry Portfolio</h2>
              <p className="section-subtitle text-theme-responsive">
                Comprehensive overview of all industries we serve and our specialized solutions
              </p>
            </div>
          </div>

          <div className="row g-4">
            {industries.map((industry, index) => (
              <div key={index} className="col-lg-6 col-md-6">
                <div className="capability-card h-100">
                  <div className="capability-icon">
                    <industry.icon size={32} />
                  </div>
                  <h4 className="capability-title">{industry.title}</h4>
                  <p className="capability-description mb-4">{industry.description}</p>

                  <div className="mb-4">
                    <h6 className="fw-bold mb-3">Key Solutions:</h6>
                    <ul className="list-unstyled">
                      {industry.solutions.slice(0, 3).map((solution, idx) => (
                        <li key={idx} className="d-flex align-items-center mb-2">
                          <CheckCircle size={16} className="text-primary me-2" />
                          <span className="small">{solution.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>


                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="capabilities">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <h2 className="section-title text-theme-responsive">Our Industry-Focused Approach</h2>
              <p className="section-subtitle text-theme-responsive">
                We follow a specialized methodology that addresses the unique requirements of each industry
              </p>
            </div>
          </div>

          <div className="row g-4">
            {processSteps.map((step, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="capability-card text-center h-100">
                  <div className="process-step-number mb-3">
                    <span className="display-4 fw-bold text-primary">{step.step}</span>
                  </div>
                  <h4 className="capability-title">{step.title}</h4>
                  <p className="capability-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="stats bg-primary text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="text-theme-responsive mb-4">Ready to Transform Your Industry?</h2>
              <p className="text-theme-responsive opacity-75 mb-4 lead">
                Let's discuss how our industry expertise can help you achieve your digital transformation goals.
              </p>
              <a href="/contact" className="btn btn-light btn-lg">
                Start Your Journey <ArrowRight size={20} className="ms-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default IndustriesPage;