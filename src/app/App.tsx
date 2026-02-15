import { useEffect } from 'react';
import './portfolio.css';
import { initPortfolio } from './portfolio-script';

export default function App() {
  useEffect(() => {
    initPortfolio();
  }, []);

  return (
    <div id="portfolio-root" dangerouslySetInnerHTML={{ 
      __html: `
<!-- ================================
     ULTRA-MODERN PORTFOLIO WEBSITE
     Futuristic | Cyberpunk | Premium
     ================================ -->

<!-- Custom Cursor -->
<div class="custom-cursor"></div>
<div class="cursor-follower"></div>

<!-- Noise Texture Overlay -->
<div class="noise-overlay"></div>

<!-- Navigation Bar -->
<nav class="navbar">
  <div class="nav-container">
    <a href="#home" class="nav-logo">&lt;/&gt; Portfolio</a>
    
    <div class="nav-menu">
      <a href="#home" class="nav-link" data-section="home">Home</a>
      <a href="#about" class="nav-link" data-section="about">About</a>
      <a href="#skills" class="nav-link" data-section="skills">Skills</a>
      <a href="#projects" class="nav-link" data-section="projects">Projects</a>
      <a href="#certifications" class="nav-link" data-section="certifications">Certifications</a>
      <a href="#achievements" class="nav-link" data-section="achievements">Achievements</a>
      <a href="#education" class="nav-link" data-section="education">Education</a>
      <a href="#timeline" class="nav-link" data-section="timeline">Experience</a>
      <a href="#contact" class="nav-link" data-section="contact">Contact</a>
    </div>

    <div class="nav-actions">
      <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme">
        <span class="theme-icon">🌙</span>
      </button>
      <button class="menu-toggle" id="menuToggle" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </div>
  
  <!-- Section Indicator -->
  <div class="section-indicator">
    <div class="indicator-dot" data-section="home"></div>
    <div class="indicator-dot" data-section="about"></div>
    <div class="indicator-dot" data-section="skills"></div>
    <div class="indicator-dot" data-section="projects"></div>
    <div class="indicator-dot" data-section="certifications"></div>
    <div class="indicator-dot" data-section="achievements"></div>
    <div class="indicator-dot" data-section="education"></div>
    <div class="indicator-dot" data-section="timeline"></div>
    <div class="indicator-dot" data-section="contact"></div>
  </div>
</nav>

<!-- Hero Section -->
<section id="home" class="hero-section">
  <canvas id="particleCanvas" class="particle-canvas"></canvas>
  
  <div class="hero-content">
    <div class="hero-badge" data-aos="fade-up">
      <span class="badge-dot"></span>
      Available for Opportunities
    </div>
    
    <h1 class="hero-title" data-aos="fade-up" data-aos-delay="100">
      Hi, I'm <span class="gradient-text" id="heroName">Your Name</span>
    </h1>
    
    <div class="hero-roles" data-aos="fade-up" data-aos-delay="200">
      <span class="role-prefix">I'm a</span>
      <span class="role-text" id="typingText"></span>
      <span class="cursor-blink">|</span>
    </div>
    
    <p class="hero-description" data-aos="fade-up" data-aos-delay="300" id="heroDescription">
      Computer Science Engineer passionate about building secure, innovative solutions.
    </p>
    
    <div class="hero-cta" data-aos="fade-up" data-aos-delay="400">
      <button class="btn btn-primary magnetic" data-action="projects">
        <span>View My Work</span>
        <span class="btn-glow"></span>
      </button>
      <button class="btn btn-secondary magnetic" data-action="contact">
        <span>Get In Touch</span>
        <span class="btn-glow"></span>
      </button>
      <button class="btn btn-outline magnetic" id="downloadResume">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        <span>Resume</span>
        <span class="btn-glow"></span>
      </button>
    </div>
    
    <div class="hero-social" data-aos="fade-up" data-aos-delay="500">
      <a href="https://github.com/SYEDSUBHANHUSSAIN" target="_blank" rel="noopener noreferrer" class="social-link magnetic" aria-label="GitHub">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      </a>
      <a href="https://www.linkedin.com/in/syed-subhan-hussain-414675337" target="_blank" rel="noopener noreferrer" class="social-link magnetic" aria-label="LinkedIn">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      </a>
      <a href="mailto:syedsubhanhussain.icb@gmail.com" class="social-link magnetic" aria-label="Email">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      </a>
    </div>
  </div>
  
  <div class="scroll-indicator">
    <div class="scroll-arrow"></div>
  </div>
</section>

<!-- About Section -->
<section id="about" class="section about-section">
  <div class="container">
    <div class="section-header" data-aos="fade-up">
      <span class="section-tag">Who I Am</span>
      <h2 class="section-title">About Me</h2>
      <p class="section-subtitle" id="aboutSubtitle">Passionate about technology and innovation</p>
    </div>
    
    <div class="about-content">
      <div class="about-text" data-aos="fade-right">
        <p id="aboutText">
          I'm a Computer Science Engineering student specializing in cutting-edge technologies. 
          My journey in tech is driven by curiosity and a desire to build solutions that matter.
        </p>
        
        <div class="about-stats">
          <div class="stat-card">
            <div class="stat-value" data-count="50">0</div>
            <div class="stat-label">Projects</div>
          </div>
          <div class="stat-card">
            <div class="stat-value" data-count="15">0</div>
            <div class="stat-label">Certifications</div>
          </div>
          <div class="stat-card">
            <div class="stat-value" data-count="100">0</div>
            <div class="stat-label">Hours Coding</div>
          </div>
        </div>
      </div>
      
      <div class="about-image" data-aos="fade-left">
        <div class="image-card glass-card">
          <div class="card-glow"></div>
          <div class="profile-photo-wrap">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300d4ff' stroke-width='1.5' opacity='0.5'%3E%3Ccircle cx='12' cy='7' r='4'/%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'/%3E%3C/svg%3E" alt="Syed Subhan Hussain" class="profile-photo" id="profilePhoto" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Skills Section -->
<section id="skills" class="section skills-section">
  <div class="container">
    <div class="section-header" data-aos="fade-up">
      <span class="section-tag">My Expertise</span>
      <h2 class="section-title">Skills & Technologies</h2>
      <p class="section-subtitle">Languages, cyber security tools, networking, databases &amp; platforms</p>
    </div>
    
    <div class="skills-grid" id="skillsGrid">
      <!-- Skills will be dynamically inserted -->
    </div>
  </div>
</section>

<!-- Projects Section -->
<section id="projects" class="section projects-section">
  <div class="container">
    <div class="section-header" data-aos="fade-up">
      <span class="section-tag">My Work</span>
      <h2 class="section-title">Featured Projects</h2>
      <p class="section-subtitle">DEFENXIA – SIH &amp; Android security solutions</p>
    </div>
    
    <div class="projects-grid" id="projectsGrid">
      <!-- Projects will be dynamically inserted -->
    </div>
  </div>
</section>

<!-- Certifications Section -->
<section id="certifications" class="section certifications-section">
  <div class="container">
    <div class="section-header" data-aos="fade-up">
      <span class="section-tag">Credentials</span>
      <h2 class="section-title">Certifications</h2>
      <p class="section-subtitle">Cisco, Red Hat, Simplilearn, LearnTube, Infosys Springboard</p>
    </div>
    
    <div class="certifications-grid" id="certificationsGrid">
      <!-- Certifications will be dynamically inserted -->
    </div>
  </div>
</section>

<!-- Achievements Section -->
<section id="achievements" class="section achievements-section">
  <div class="container">
    <div class="section-header" data-aos="fade-up">
      <span class="section-tag">Milestones</span>
      <h2 class="section-title">Achievements</h2>
      <p class="section-subtitle">Mini project winner (₹3,000), SIH finalist, class topper</p>
    </div>
    
    <div class="achievements-grid" id="achievementsGrid">
      <!-- Achievements will be dynamically inserted -->
    </div>
  </div>
</section>

<!-- Education Section -->
<section id="education" class="section education-section">
  <div class="container">
    <div class="section-header" data-aos="fade-up">
      <span class="section-tag">Academic Journey</span>
      <h2 class="section-title">Education</h2>
      <p class="section-subtitle">BE CSE (Cyber Security, IoT &amp; Blockchain) – GNDEC, VTU, 2027</p>
    </div>
    
    <div class="education-timeline" id="educationTimeline">
      <!-- Education will be dynamically inserted -->
    </div>
  </div>
</section>

<!-- Experience Section -->
<section id="timeline" class="section timeline-section">
  <div class="container">
    <div class="section-header" data-aos="fade-up">
      <span class="section-tag">Hands-on</span>
      <h2 class="section-title">Practical Experience</h2>
      <p class="section-subtitle">Cyber Security lab &amp; training</p>
    </div>
    
    <div class="timeline-container" id="timelineContainer">
      <!-- Timeline will be dynamically inserted -->
    </div>
  </div>
</section>

<!-- Contact Section -->
<section id="contact" class="section contact-section">
  <div class="container">
    <div class="section-header" data-aos="fade-up">
      <span class="section-tag">Get In Touch</span>
      <h2 class="section-title">Contact Me</h2>
      <p class="section-subtitle">Let's connect and build something amazing</p>
    </div>
    
    <div class="contact-content">
      <div class="contact-info" data-aos="fade-right">
        <div class="info-card glass-card">
          <div class="card-glow"></div>
          <div class="info-item">
            <div class="info-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div class="info-text">
              <div class="info-label">Email</div>
              <div class="info-value" id="contactEmail">your.email@example.com</div>
            </div>
          </div>
          
          <div class="info-item">
            <div class="info-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div class="info-text">
              <div class="info-label">Location</div>
              <div class="info-value" id="contactLocation">Your City, Country</div>
            </div>
          </div>
          
          <div class="info-item">
            <div class="info-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div class="info-text">
              <div class="info-label">Phone</div>
              <div class="info-value" id="contactPhone">+1 234 567 8900</div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="contact-form-wrapper" data-aos="fade-left">
        <form class="contact-form glass-card" id="contactForm">
          <div class="card-glow"></div>
          
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required>
          </div>
          
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
          </div>
          
          <div class="form-group">
            <label for="subject">Subject</label>
            <input type="text" id="subject" name="subject" required>
          </div>
          
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          
          <button type="submit" class="btn btn-primary magnetic">
            <span>Send Message</span>
            <span class="btn-glow"></span>
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

<!-- Footer -->
<footer class="footer">
  <div class="container">
    <div class="footer-content">
      <div class="footer-text">
        <p>&copy; 2026 <span id="footerName">Your Name</span>. All rights reserved.</p>
        <p class="footer-tagline">Built with passion and code ⚡</p>
      </div>
      
      <div class="footer-social">
        <a href="https://github.com/SYEDSUBHANHUSSAIN" target="_blank" rel="noopener noreferrer" class="social-link magnetic" aria-label="GitHub">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/syed-subhan-hussain-414675337" target="_blank" rel="noopener noreferrer" class="social-link magnetic" aria-label="LinkedIn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</footer>

<!-- Back to Top Button -->
<button class="back-to-top" id="backToTop" aria-label="Back to top">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M18 15l-6-6-6 6"/>
  </svg>
</button>
      `
    }} />
  );
}
