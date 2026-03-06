// ================================================
// ULTRA-MODERN PORTFOLIO JAVASCRIPT
// All functionality and content management
// ================================================

/* ============================================
   PORTFOLIO DATA OBJECT
   Update this object to customize all content
   ============================================ */
const portfolioData = {
  // Personal Information
  personal: {
    name: "SYED SUBHAN HUSSAIN",
    roles: [
      "Cyber Security Analyst",
      "IoT & Blockchain Specialist",
      "Software Engineer",
      "Security Researcher"
    ],
    description: "Innovative Computer Science Engineering undergraduate specializing in Cyber Security, IoT, and Blockchain Technology. Seeking an entry-level role as a Cyber Security Analyst, SOC Analyst, or Software Engineer.",
    email: "syedsubhanhussain.icb@gmail.com",
    phone: "+91-8431323178",
    location: "Bidar, Karnataka",
    resumeUrl: "/resume.html",
    linkedin: "https://www.linkedin.com/in/syed-subhan-hussain-414675337",
    github: "https://github.com/SYEDSUBHANHUSSAIN",
    // Profile photo: put your image at public/profile.png, or use any URL
    profileImageUrl: "/profile.png"
  },

  // About Section
  about: {
    subtitle: "Cyber Security, IoT & Blockchain Specialist",
    text: "Innovative Computer Science Engineering undergraduate specializing in Cyber Security, IoT, and Blockchain Technology. Demonstrated expertise in network security, vulnerability assessment, and secure application development through hands-on projects and leadership in national hackathons (SIH). Adept at using tools like Wireshark, Nmap, and Burp Suite to identify and mitigate security threats.",
    stats: {
      projects: 2,
      certifications: 5,
      codingHours: 500
    }
  },

  // Skills (Languages, Cyber Security, Networking & OS, Databases, Tools & Platforms)
  skills: [
    { name: "Java", icon: "☕", level: 88 },
    { name: "Python", icon: "🐍", level: 90 },
    { name: "C / C++", icon: "⚙️", level: 85 },
    { name: "HTML5, CSS3, JavaScript (ES6+)", icon: "🌐", level: 85 },
    { name: "Solidity", icon: "💎", level: 75 },
    { name: "Wireshark & Nmap (Zenmap)", icon: "🔍", level: 88 },
    { name: "Burp Suite", icon: "🛡️", level: 85 },
    { name: "Metasploit & Snort", icon: "🔐", level: 82 },
    { name: "tcpdump, GoPhish, LUCY, OWASP", icon: "🕵️", level: 82 },
    { name: "TCP/IP, UDP, VPNs, Firewalls", icon: "🌐", level: 85 },
    { name: "Linux (Kali/Ubuntu) & Windows", icon: "🐧", level: 88 },
    { name: "MySQL, PostgreSQL, MongoDB, SQLite, Firebase", icon: "🗄️", level: 85 },
    { name: "Git, GitHub, Docker, Arduino, RPi, VS Code", icon: "🛠️", level: 85 }
  ],

  // Projects
  projects: [
    {
      title: "DEFENXIA – Network & Mobile Security Solution (SIH)",
      description: "Architected a comprehensive security solution for Smart India Hackathon (SIH). Conducted rigorous vulnerability scanning and packet analysis using Wireshark and Nmap. Led a team of 6 to implement secure communication protocols, resulting in a robust prototype presented to industry evaluators at PALS Cluster finals.",
      tags: ["Cyber Security", "Wireshark", "Nmap", "SIH", "Team Lead"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
      github: "https://github.com/SYEDSUBHANHUSSAIN/DEFENXIA",
      demo: "#",
      apk: "/defentia.apk.apk",
      video: "https://www.youtube.com/watch?v=OYz_V0XBqgw"
    },
    {
      title: "DEFENXIA – Mobile Security Application (Android)",
      description: "Developed an Android-based security application using Java and Android SDK to detect and alert users of malicious activities in real-time. Implemented threat detection algorithms and user alert mechanisms. Simulated phishing attacks using GoPhish to test resilience and educate users on social engineering. Winner – Mini Project Competition (₹3,000).",
      tags: ["Android", "Java", "Security", "GoPhish", "Team Lead"],
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800",
      github: "https://github.com/SYEDSUBHANHUSSAIN/DEFENXIA",
      demo: "#",
      apk: "/defentia.apk.apk",
      video: "https://www.youtube.com/watch?v=OYz_V0XBqgw"
    }
  ],

  // Certifications
  certifications: [
    {
      title: "Cisco Networking Basics",
      issuer: "Cisco",
      date: "2024",
      icon: "🌐",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800"
    },
    {
      title: "Red Hat Linux Essentials",
      issuer: "Red Hat",
      date: "2024",
      icon: "🐧",
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800"
    },
    {
      title: "Ethical Hacking & Networking",
      issuer: "Simplilearn",
      date: "2023",
      icon: "🔐",
      image: "https://images.unsplash.com/photo-1510511459019-5efa7ae17353?w=800"
    },
    {
      title: "Cyber Security Training",
      issuer: "LearnTube",
      date: "2023",
      icon: "🛡️",
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800"
    },
    {
      title: "IT & Programming Courses",
      issuer: "Infosys Springboard",
      date: "2022",
      icon: "💻",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800"
    }
  ],

  // Achievements
  achievements: [
    {
      title: "Winner: Mini Project Competition",
      description: "Cash prize: ₹3,000 for developing DEFENXIA mobile security application.",
      icon: "🏆",
      image: "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?w=800"
    },
    {
      title: "Smart India Hackathon (SIH) – Finalist",
      description: "PALS Cluster final participant. Presented a comprehensive security solution to industry evaluators.",
      icon: "🥇",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800"
    },
    {
      title: "Class Topper",
      description: "Consistently maintained top academic performance through early semesters.",
      icon: "📚",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800"
    }
  ],

  // Education
  education: [
    {
      degree: "Bachelor of Engineering in Computer Science (Cyber Security, IoT & Blockchain)",
      institution: "Guru Nanak Dev Engineering College (VTU), Bidar, Karnataka",
      date: "Expected Graduation: 2027",
      description: "CGPA: 7.90/10.0 (up to 5th Semester)"
    }
  ],

  // Timeline (Practical Experience)
  timeline: [
    {
      date: "Hands-on Lab",
      title: "Cyber Security Lab & Practical Training",
      subtitle: "Vulnerability Assessment, Network Analysis & Attack Simulation",
      description: "Vulnerability assessment with comprehensive Nmap scanning (open ports, services, CVEs). Network analysis of 50+ traffic dumps using Wireshark and tcpdump. Web security testing: SQL Injection and XSS with Burp Suite. Configured and deployed Snort IDS. Ethical ARP poisoning, traffic sniffing (MITM), and phishing simulations with GoPhish and LUCY. Study of rootkit and malware behavior."
    }
  ]
};

/* ============================================
   INITIALIZATION FUNCTION
   Called when the page loads
   ============================================ */
export function initPortfolio() {
  // Wait for DOM to be fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}

function init() {
  // Populate content first so elements exist in DOM
  populateContent();

  // Initialize all components after content is in DOM
  initCustomCursor();
  initParticles();
  initTypingAnimation();
  initNavigation();
  initThemeToggle();
  initScrollAnimations();
  initMagneticButtons();
  initStatCounters();
  initBackToTop();
  initContactForm();
  
  // Initialize 3D tilt effect for cards
  initCardTilt();
}

/* ============================================
   CUSTOM CURSOR
   ============================================ */
function initCustomCursor() {
  const cursor = document.querySelector('.custom-cursor');
  const follower = document.querySelector('.cursor-follower');
  
  if (!cursor || !follower) return;

  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  });

  // Smooth follower animation
  function animateFollower() {
    const distX = mouseX - followerX;
    const distY = mouseY - followerY;
    
    followerX += distX * 0.1;
    followerY += distY * 0.1;
    
    follower.style.left = followerX + 'px';
    follower.style.top = followerY + 'px';
    
    requestAnimationFrame(animateFollower);
  }
  
  animateFollower();

  // Expand cursor on hover
  const interactiveElements = document.querySelectorAll('a, button, .magnetic');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(2)';
      follower.style.transform = 'translate(-50%, -50%) scale(1.5)';
    });
    
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      follower.style.transform = 'translate(-50%, -50%) scale(1)';
    });
  });
}

/* ============================================
   PARTICLE ANIMATION
   ============================================ */
function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const particleCount = 80;
  const maxDistance = 150;

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.radius = Math.random() * 2 + 1;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 212, 255, 0.5)';
      ctx.fill();
    }
  }

  // Create particles
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw particles
    particles.forEach(particle => {
      particle.update();
      particle.draw();
    });

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 212, 255, ${0.2 * (1 - distance / maxDistance)})`;
          ctx.lineWidth = 1;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();

  // Resize handler
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

/* ============================================
   TYPING ANIMATION
   ============================================ */
function initTypingAnimation() {
  const typingElement = document.getElementById('typingText');
  if (!typingElement) return;

  const roles = portfolioData.personal.roles;
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseDuration = 2000;

  function type() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    let timeout = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentRole.length) {
      timeout = pauseDuration;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(type, timeout);
  }

  type();
}

/* ============================================
   NAVIGATION
   ============================================ */
function initNavigation() {
  const navbar = document.querySelector('.navbar');
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const indicators = document.querySelectorAll('.indicator-dot');

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Update active section
    updateActiveSection();
  });

  // Mobile menu toggle
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu on link click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // Smooth scroll
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Indicator dots click
  indicators.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      const sections = document.querySelectorAll('.section, .hero-section');
      if (sections[index]) {
        sections[index].scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  function updateActiveSection() {
    const sections = document.querySelectorAll('.section, .hero-section');
    const scrollPos = window.scrollY + 200;

    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        // Update nav links
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });

        // Update indicators
        indicators.forEach((dot, dotIndex) => {
          dot.classList.remove('active');
          if (dotIndex === index) {
            dot.classList.add('active');
          }
        });
      }
    });
  }
}

/* ============================================
   THEME TOGGLE
   ============================================ */
function initThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  if (!themeToggle) return;

  const themeIcon = themeToggle.querySelector('.theme-icon');
  let isDark = true;

  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    themeIcon.textContent = '☀️';
    isDark = false;
  }

  themeToggle.addEventListener('click', () => {
    isDark = !isDark;
    
    if (isDark) {
      document.body.classList.remove('light-theme');
      themeIcon.textContent = '🌙';
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.add('light-theme');
      themeIcon.textContent = '☀️';
      localStorage.setItem('theme', 'light');
    }
  });
}

/* ============================================
   SCROLL ANIMATIONS (AOS Alternative)
   ============================================ */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('[data-aos]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  animatedElements.forEach(el => observer.observe(el));
}

/* ============================================
   MAGNETIC BUTTONS
   ============================================ */
function initMagneticButtons() {
  const magneticElements = document.querySelectorAll('.magnetic');

  magneticElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translate(0, 0)';
    });
  });

  // Button actions
  const buttons = document.querySelectorAll('[data-action]');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const action = btn.getAttribute('data-action');
      const target = document.getElementById(action);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Resume download
  const downloadBtn = document.getElementById('downloadResume');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      if (portfolioData.personal.resumeUrl !== '#') {
        window.open(portfolioData.personal.resumeUrl, '_blank');
      } else {
        alert('Resume URL not configured. Please update portfolioData.personal.resumeUrl');
      }
    });
  }
}

/* ============================================
   STAT COUNTERS
   ============================================ */
function initStatCounters() {
  const statValues = document.querySelectorAll('.stat-value');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute('data-count'));
        animateCounter(entry.target, target);
        observer.unobserve(entry.target);
      }
    });
  });

  statValues.forEach(stat => observer.observe(stat));

  function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const duration = 2000;
    const stepTime = duration / 50;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target + (target > 100 ? '+' : '');
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current);
      }
    }, stepTime);
  }
}

/* ============================================
   BACK TO TOP BUTTON
   ============================================ */
function initBackToTop() {
  const backToTop = document.getElementById('backToTop');
  if (!backToTop) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ============================================
   CONTACT FORM
   ============================================ */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Here you would typically send data to a server
    console.log('Form submitted:', data);
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    form.reset();
  });
}

/* ============================================
   3D CARD TILT EFFECT
   ============================================ */
function initCardTilt() {
  const cards = document.querySelectorAll('.project-card, .glass-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
  });
}

/* ============================================
   POPULATE CONTENT FROM DATA OBJECT
   ============================================ */
function populateContent() {
  // Personal Info
  document.getElementById('heroName').textContent = portfolioData.personal.name;
  document.getElementById('heroDescription').textContent = portfolioData.personal.description;
  document.getElementById('footerName').textContent = portfolioData.personal.name;
  
  // About
  document.getElementById('aboutSubtitle').textContent = portfolioData.about.subtitle;
  document.getElementById('aboutText').textContent = portfolioData.about.text;
  
  // Update stat counters
  const statCards = document.querySelectorAll('.stat-card');
  if (statCards.length >= 3) {
    statCards[0].querySelector('.stat-value').setAttribute('data-count', portfolioData.about.stats.projects);
    statCards[1].querySelector('.stat-value').setAttribute('data-count', portfolioData.about.stats.certifications);
    statCards[2].querySelector('.stat-value').setAttribute('data-count', portfolioData.about.stats.codingHours);
  }
  
  // Contact Info
  document.getElementById('contactEmail').textContent = portfolioData.personal.email;
  document.getElementById('contactPhone').textContent = portfolioData.personal.phone;
  document.getElementById('contactLocation').textContent = portfolioData.personal.location;
  
  // Profile photo (with fallback if image fails to load)
  const profileImg = document.getElementById('profilePhoto') || document.querySelector('.profile-photo');
  if (profileImg && portfolioData.personal.profileImageUrl) {
    const placeholderSvg = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%2300d4ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"><circle cx="12" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/></svg>');
    profileImg.src = portfolioData.personal.profileImageUrl;
    profileImg.onerror = function() { this.src = placeholderSvg; this.onerror = null; };
  }
  
  // Skills
  populateSkills();
  
  // Projects
  populateProjects();
  
  // Certifications
  populateCertifications();
  
  // Achievements
  populateAchievements();
  
  // Education
  populateEducation();
  
  // Timeline
  populateTimeline();
}

function populateSkills() {
  const skillsGrid = document.getElementById('skillsGrid');
  if (!skillsGrid) return;

  skillsGrid.innerHTML = portfolioData.skills.map(skill => `
    <div class="skill-card" data-aos="fade-up">
      <div class="skill-icon">${skill.icon}</div>
      <div class="skill-name">${skill.name}</div>
      <div class="skill-level">${skill.level}%</div>
      <div class="skill-bar">
        <div class="skill-progress" style="width: ${skill.level}%"></div>
      </div>
    </div>
  `).join('');
}

function populateProjects() {
  const projectsGrid = document.getElementById('projectsGrid');
  if (!projectsGrid) return;

  projectsGrid.innerHTML = portfolioData.projects.map(project => `
    <div class="project-card" data-aos="fade-up">
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}" loading="lazy">
        <div class="project-overlay">
          <a href="${project.github}" class="project-link" target="_blank" rel="noopener" aria-label="View on GitHub">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          ${(project.demo && project.demo !== '#') ? `<a href="${project.demo}" class="project-link" title="Live Demo" target="_blank" rel="noopener" aria-label="Live Demo"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>` : ''}
        </div>
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tags" style="margin-bottom: 15px;">
          ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
        </div>
        <div class="project-actions" style="display: flex; gap: 10px; flex-wrap: wrap;">
          ${(project.apk && project.apk !== '#') ? `<a href="${project.apk}" class="btn" style="flex: 1; text-align: center; padding: 8px 15px; font-size: 14px; display: inline-flex; justify-content: center; align-items: center; gap: 5px;" target="_blank" rel="noopener"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg> Download APK</a>` : ''}
          ${(project.video && project.video !== '#') ? `<a href="${project.video}" class="btn btn-outline" style="flex: 1; justify-content: center; text-align: center; padding: 8px 15px; font-size: 14px; display: inline-flex; align-items: center; gap: 5px;" target="_blank" rel="noopener"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg> Watch Demo Video</a>` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

function populateCertifications() {
  const certificationsGrid = document.getElementById('certificationsGrid');
  if (!certificationsGrid) return;

  certificationsGrid.innerHTML = portfolioData.certifications.map(cert => `
    <div class="project-card" data-aos="fade-up" style="height: 100%;">
      <div class="project-image" style="height: 180px;">
        <img src="${cert.image}" alt="${cert.title}" loading="lazy" style="object-fit: cover; width: 100%; height: 100%;">
      </div>
      <div class="project-content" style="padding: 20px;">
        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
          <div class="cert-icon" style="font-size: 24px; position: static; transform: none; box-shadow: none;">${cert.icon}</div>
          <h3 class="cert-title" style="margin: 0; font-size: 1.1rem;">${cert.title}</h3>
        </div>
        <div class="cert-issuer" style="color: rgba(255,255,255,0.7); font-size: 0.9rem; margin-bottom: 5px;">${cert.issuer}</div>
        <div class="cert-date" style="color: #00d4ff; font-weight: bold; font-size: 0.8rem;">${cert.date}</div>
      </div>
    </div>
  `).join('');
}

function populateAchievements() {
  const achievementsGrid = document.getElementById('achievementsGrid');
  if (!achievementsGrid) return;

  achievementsGrid.innerHTML = portfolioData.achievements.map(achievement => `
    <div class="project-card" data-aos="fade-up" style="height: 100%;">
      <div class="project-image" style="height: 200px;">
        <img src="${achievement.image}" alt="${achievement.title}" loading="lazy" style="object-fit: cover; width: 100%; height: 100%;">
      </div>
      <div class="project-content" style="padding: 20px;">
        <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px;">
          <div class="achievement-icon" style="font-size: 32px; position: static; transform: none; box-shadow: none;">${achievement.icon}</div>
          <h3 class="achievement-title" style="margin: 0; font-size: 1.2rem; line-height: 1.4;">${achievement.title}</h3>
        </div>
        <p class="achievement-description" style="color: rgba(255,255,255,0.7); font-size: 0.95rem; line-height: 1.6;">${achievement.description}</p>
      </div>
    </div>
  `).join('');
}

function populateEducation() {
  const educationTimeline = document.getElementById('educationTimeline');
  if (!educationTimeline) return;

  educationTimeline.innerHTML = portfolioData.education.map((edu, index) => `
    <div class="timeline-item" data-aos="fade-up">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-date">${edu.date}</div>
        <h3 class="timeline-title">${edu.degree}</h3>
        <div class="timeline-subtitle">${edu.institution}</div>
        <p class="timeline-description">${edu.description}</p>
      </div>
    </div>
  `).join('');
}

function populateTimeline() {
  const timelineContainer = document.getElementById('timelineContainer');
  if (!timelineContainer) return;

  timelineContainer.innerHTML = portfolioData.timeline.map((item, index) => `
    <div class="timeline-item" data-aos="fade-up">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-date">${item.date}</div>
        <h3 class="timeline-title">${item.title}</h3>
        <div class="timeline-subtitle">${item.subtitle}</div>
        <p class="timeline-description">${item.description}</p>
      </div>
    </div>
  `).join('');
}

// Export for use in React
export default initPortfolio;
