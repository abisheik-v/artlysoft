import React, { useState, useEffect } from 'react';
import {
  Code,
  Database,
  Bot,
  Cloud,
  Shield,
  Smartphone,
  Globe,
  Zap,
  CheckCircle,
  ArrowRight,
  Users,
  Award,
  Target,
  Monitor,
  Server,
  Layers,
  BarChart3,
  Brain,
  Cpu,
  Settings,
  MessageSquare,
  Search,
  Workflow,
  Boxes
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

const services = [
  {
    id: 'software-modernization',
    icon: Settings,
    title: 'Software Modernization',
    description: 'We will assess your legacy software and offer modernization activities to improve its overall efficiency and reduce maintenance costs. This includes all components of your IT ecosystem.',
    features: [
      {
        icon: Layers,
        title: 'Legacy System Assessment',
        description: 'Comprehensive evaluation of your existing software landscape to identify modernization opportunities.'
      },
      {
        icon: Cpu,
        title: 'Modernization Activities',
        description: 'Refactoring, re-platforming, and re-architecting to align with current business needs and technology standards.'
      },
      {
        icon: Cloud,
        title: 'Ecosystem Coverage',
        description: 'Covers applications, databases, infrastructure, and integrations for a holistic IT transformation.'
      }
    ],
    technologies: ['.NET', 'Java', 'Node.js', 'Cloud', 'Microservices', 'APIs']
  },
  {
    id: 'software-consulting',
    icon: MessageSquare,
    title: 'Software Consulting',
    description: 'Our experts provide actionable guidance to optimize your IT strategy, architecture, and processes. For example, we recently helped a client reduce cloud costs by 30% through targeted architectural improvements.',
    features: [
      {
        icon: BarChart3,
        title: 'IT Strategy & Roadmapping',
        description: 'Align technology investments with business goals for maximum ROI.'
      },
      {
        icon: Brain,
        title: 'Architecture Review',
        description: 'In-depth analysis and recommendations to improve scalability, security, and performance.'
      },
      {
        icon: Award,
        title: 'Process Optimization',
        description: 'Streamline development and delivery workflows for faster time-to-market.'
      }
    ],
    technologies: ['Cloud', 'DevOps', 'Security', 'APIs', 'Architecture']
  },
  {
    id: 'custom-software-development',
    icon: Code,
    title: 'Custom Software Development',
    description: 'When building software from scratch, we ensure intuitive workflows, maintainable code, and thorough documentation.',
    features: [
      {
        icon: Monitor,
        title: 'Web & Mobile Apps',
        description: 'Full-stack development for web and mobile platforms, tailored to your business needs.'
      },
      {
        icon: Users,
        title: 'User-Centric Design',
        description: 'Intuitive interfaces and seamless user experiences that drive adoption.'
      },
      {
        icon: CheckCircle,
        title: 'Quality & Documentation',
        description: 'Robust testing and clear documentation for long-term maintainability.'
      }
    ],
    technologies: ['React', 'Node.js', 'Python', 'Flutter', 'SQL', 'NoSQL']
  },
  {
    id: 'product-engineering',
    icon: Code,
    title: 'Product Engineering',
    description: 'We deliver end-to-end product development services. Our solutions power high-performance digital products and platforms.',
    features: [
      {
        icon: Monitor,
        title: 'Web App Development',
        description: 'We craft secure, scalable, and high-performing web applications using modern technologies such as React, Angular, Java, and Python. From MVPs to complex enterprise solutions, our products deliver measurable business value.'
      },
      {
        icon: Smartphone,
        title: 'Mobile App Development',
        description: 'We build cross-platform and native mobile apps that ensure seamless performance and intuitive user experiences. Our apps feature robust backend integration and are powered by React Native, Flutter, Swift, and Kotlin.'
      },
      {
        icon: Layers,
        title: 'Platform Development',
        description: 'We develop extensible digital platforms and ecosystems that support multi-tenancy, user management, real-time data, and cloud-native operations. Ideal for SaaS, marketplaces, and B2B applications.'
      }
    ],
    technologies: ['React', 'Angular', 'Java', 'Python', 'React Native', 'Flutter', 'Swift', 'Kotlin']
  },
  {
    id: 'data-ai',
    icon: Database,
    title: 'Data & AI',
    description: 'Unlock your data’s true potential with intelligent engineering and advanced analytics.',
    features: [
      {
        icon: Server,
        title: 'Data Engineering',
        description: 'Design and build modern data pipelines and lakehouse architectures. ETL/ELT, real-time streaming, and data warehouse development on Snowflake, BigQuery, or Redshift.'
      },
      {
        icon: BarChart3,
        title: 'Data Analytics',
        description: 'Transform raw data into actionable insights using dashboards, BI reports, and visualization tools like Power BI, Tableau, and Looker.'
      },
      {
        icon: Brain,
        title: 'Data Science & ML',
        description: 'Solve business problems with predictive analytics, machine learning, and NLP. From churn prediction to customer segmentation, we build models that matter.'
      }
    ],
    technologies: ['Snowflake', 'BigQuery', 'Redshift', 'Power BI', 'Tableau', 'Looker', 'Python', 'TensorFlow', 'PyTorch']
  },
  {
    id: 'intelligent-automation',
    icon: Bot,
    title: 'Intelligent Automation',
    description: 'Accelerate business transformation with AI-powered automation solutions.',
    features: [
      {
        icon: Cpu,
        title: 'Robotic Process Automation (RPA)',
        description: 'Automate repetitive tasks using UiPath, Automation Anywhere, and Microsoft Power Automate. Improve accuracy, reduce costs, and free up human resources.'
      },
      {
        icon: MessageSquare,
        title: 'Generative AI (Chatbots & Agents)',
        description: 'Build smart, conversational AI experiences using OpenAI, Vertex AI, or custom LLMs. Automate customer support, employee self-service, and knowledge delivery.'
      },
      {
        icon: Search,
        title: 'Process Mining',
        description: 'Discover, analyze, and optimize business workflows using tools like Celonis. Identify bottlenecks and drive process excellence with real-time insights.'
      },
      {
        icon: Workflow,
        title: 'Process Automation',
        description: 'Digitize and automate end-to-end business operations across HR, finance, and IT using BPM and orchestration tools.'
      },
      {
        icon: Boxes,
        title: 'Low-Code Application Development',
        description: 'Rapidly build applications using platforms like OutSystems, Mendix, or Microsoft Power Apps. Faster delivery, lower costs, better agility.'
      }
    ],
    technologies: ['UiPath', 'Automation Anywhere', 'Power Automate', 'OpenAI', 'Vertex AI', 'Celonis', 'OutSystems', 'Mendix', 'Power Apps']
  },
  {
    id: 'cloud-services',
    icon: Cloud,
    title: 'Cloud Services',
    description: 'Empower digital innovation with scalable cloud infrastructure and DevOps.',
    features: [
      {
        icon: Cloud,
        title: 'Google Cloud Platform (GCP)',
        description: 'Leverage GCP’s AI, analytics, and compute power for next-gen cloud applications. We offer GCP-native architecture, migration, and ML services.'
      },
      {
        icon: Cloud,
        title: 'Microsoft Azure',
        description: 'Comprehensive Azure services from App Services to Azure ML, Azure DevOps, and Azure Kubernetes Service (AKS). Cloud modernization at scale.'
      },
      {
        icon: Cloud,
        title: 'Amazon Web Services (AWS)',
        description: 'AWS consulting, migration, serverless architecture, and infrastructure automation using CloudFormation and Terraform. Optimize performance, cost, and security.'
      }
    ],
    technologies: ['Google Cloud Platform', 'Microsoft Azure', 'Amazon Web Services', 'Kubernetes', 'Docker', 'Terraform', 'CloudFormation']
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Analysis',
    description: 'We begin by understanding your business requirements, current challenges, and objectives through comprehensive analysis.'
  },
  {
    step: '02',
    title: 'Strategy & Planning',
    description: 'Our experts develop a tailored strategy and detailed project plan aligned with your business goals and timeline.'
  },
  {
    step: '03',
    title: 'Design & Development',
    description: 'We create innovative solutions using cutting-edge technologies and industry best practices.'
  },
  {
    step: '04',
    title: 'Testing & Quality Assurance',
    description: 'Rigorous testing ensures your solution meets the highest standards of quality, security, and performance.'
  },
  {
    step: '05',
    title: 'Deployment & Support',
    description: 'We handle seamless deployment and provide ongoing support to ensure optimal performance.'
  }
];

function ServicesPage() {



  useEffect(() => {
    // Set SEO meta tags
    document.title = 'IT Services | Web Development, DevOps, AI Solutions & Consulting - Artlysoft';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore Artlysoft\'s IT services — web development, DevOps automation, AI solutions, and IT consulting for businesses across industries.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Explore Artlysoft\'s IT services — web development, DevOps automation, AI solutions, and IT consulting for businesses across industries.';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }

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
                Our <span className="gradient-text">Services</span>
              </h1>
              <p className="lead mb-4 text-theme-responsive" data-aos="fade-right" data-aos-delay="100">
                From product engineering to intelligent automation, we deliver end-to-end solutions that drive digital transformation and business growth.
              </p>
              <div className="d-flex gap-3 mb-5" data-aos="fade-right" data-aos-delay="200">
                
                <NavHashLink smooth to="#services-overview" className="btn-hero">Explore Services</NavHashLink>
              </div>
              <div className="row g-3" data-aos="fade-right" data-aos-delay="300">
                <div className="col-4 text-center">
                  <h3 className="fw-bold text-theme-responsive mb-1">200+</h3>
                  <small className="text-theme-responsive">Projects Delivered</small>
                </div>
                <div className="col-4 text-center">
                  <h3 className="fw-bold text-theme-responsive mb-1">1+</h3>
                  <small className="text-theme-responsive">Years Experience</small>
                </div>
                <div className="col-4 text-center">
                  <h3 className="fw-bold text-theme-responsive mb-1">500+</h3>
                  <small className="text-theme-responsive">Happy Clients</small>
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

      {/* Services Overview */}
      <section id="services-overview" className="capabilities">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title text-theme-responsive" data-aos="fade-up">Our Core Services</h2>
            <p className="section-subtitle text-theme-responsive" data-aos="fade-up" data-aos-delay="100">
              We offer comprehensive technology solutions designed to accelerate your digital transformation journey.
            </p>
          </div>

          {services.map((service, idx) => (
            <div key={service.id} id={service.id} className="mb-5 pb-5 border-bottom">
              <div className="row mb-4">
                <div className="col-lg-12">
                  <div className="capability-card" data-aos="fade-up">
                    <div className="d-flex align-items-center mb-4">
                      <div className="capability-icon me-4">
                        <service.icon size={32} />
                      </div>
                      <div>
                        <h3 className="capability-title mb-2">{service.title}</h3>
                        <p className="capability-description mb-0">{service.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row g-4 mb-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="col-lg-4 col-md-6">
                    <div
                      className="capability-card h-100"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <div className="capability-icon mb-3">
                        <feature.icon size={24} />
                      </div>
                      <h5 className="capability-title">{feature.title}</h5>
                      <p className="capability-description">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-4">
                <h6 className="fw-bold mb-3 text-theme-responsive">Technologies & Tools</h6>
                <div className="d-flex flex-wrap gap-2">
                  {service.technologies.map((tech, i) => (
                    <span key={i} className="badge bg-primary text-white px-3 py-2">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Process */}
      <section className="capabilities bg-theme-secondary">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title" data-aos="fade-up">Our Proven Process</h2>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
              We follow a structured approach to ensure successful project delivery and client satisfaction.
            </p>
          </div>

          <div className="row g-4">
            {processSteps.map((step, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div
                  className="capability-card text-center h-100"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
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
      <section className="stats bg-primary text-white py-5">
        <div className="container text-center">
          <h2 className="mb-4 text-white" data-aos="fade-up">Ready to Transform Your Business?</h2>
          <p className="opacity-75 mb-4 lead text-white" data-aos="fade-up" data-aos-delay="100">
            Let's discuss how our services can help you achieve your digital transformation goals.
          </p>
          <a href="#contact" className="btn btn-light btn-lg" data-aos="fade-up" data-aos-delay="200">
            Start Your Project <ArrowRight size={20} className="ms-2" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ServicesPage;