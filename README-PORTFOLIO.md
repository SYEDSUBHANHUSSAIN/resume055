# 🚀 Ultra-Modern Portfolio Website

## Overview
A jaw-dropping, cinematic portfolio website featuring:
- **Futuristic Cyberpunk Design** with glassmorphism effects
- **Interactive Animations** including particles, typing effects, and 3D card tilts
- **Custom Cursor** that follows mouse movement
- **Dark/Light Mode Toggle** with smooth transitions
- **Magnetic Buttons** with hover effects
- **Scroll-based Animations** for reveal effects
- **Fully Responsive** design for all devices
- **Single Data Object** for easy content management

---

## 🎨 Features

### Design Elements
- ✨ Particle background animation
- 💎 Glassmorphism cards with blur effects
- 🌈 Neon gradients (cyan, purple, pink)
- 🔮 3D card tilt on hover
- ✨ Glowing borders and shadows
- 🎭 Custom cursor with magnetic effects
- 📱 Fully responsive mobile design

### Interactions
- ⌨️ Typing animation for role titles
- 🧲 Magnetic button effects
- 📊 Animated stat counters
- 🎯 Section indicator dots
- 🔄 Smooth scroll navigation
- ⬆️ Back-to-top button
- 🌓 Dark/Light theme toggle

### Sections
1. **Hero** - Animated background with particle effects
2. **About** - Personal introduction with stats
3. **Skills** - Tech stack with progress bars
4. **Projects** - Portfolio showcase with 3D cards
5. **Certifications** - Professional credentials
6. **Achievements** - Milestones and awards
7. **Education** - Academic timeline
8. **Experience Timeline** - Career journey
9. **Contact** - Contact form with info cards
10. **Footer** - Social links and copyright

---

## 📝 Customization Guide

### Update Your Information

All content is managed through a single JavaScript object in `/src/app/portfolio-script.js`:

\`\`\`javascript
const portfolioData = {
  personal: {
    name: "Your Name",
    roles: ["Role 1", "Role 2", "Role 3"],
    description: "Your bio",
    email: "your.email@example.com",
    phone: "+1 234 567 8900",
    location: "Your City, Country",
    resumeUrl: "link-to-your-resume.pdf"
  },
  // ... more sections
};
\`\`\`

### Key Areas to Update:

1. **Personal Information** (`portfolioData.personal`)
   - Change name, roles, email, phone, location
   - Add your resume URL

2. **About Section** (`portfolioData.about`)
   - Update your bio and description
   - Modify stats (projects, certifications, coding hours)

3. **Skills** (`portfolioData.skills`)
   - Add/remove skills
   - Update skill levels (0-100)
   - Change skill icons (emojis)

4. **Projects** (`portfolioData.projects`)
   - Add your project details
   - Include project images (use Unsplash or your own)
   - Add GitHub and demo links

5. **Certifications** (`portfolioData.certifications`)
   - List your certifications
   - Include issuer and date

6. **Achievements** (`portfolioData.achievements`)
   - Showcase your accomplishments
   - Add relevant icons

7. **Education** (`portfolioData.education`)
   - Add your educational background

8. **Timeline** (`portfolioData.timeline`)
   - Update your work experience
   - Include internships and positions

---

## 🎨 Color Customization

Colors are defined in CSS variables in `/src/app/portfolio.css`:

\`\`\`css
:root {
  --accent-primary: #00d4ff;    /* Cyan */
  --accent-secondary: #7000ff;  /* Purple */
  --bg-primary: #0a0a0f;        /* Dark background */
  /* Change these to customize colors */
}
\`\`\`

---

## 🖼️ Adding Your Own Images

### For Projects
Replace the Unsplash URLs in the \`projects\` array with your own images:

\`\`\`javascript
projects: [
  {
    title: "Your Project",
    image: "https://your-image-url.com/image.jpg",
    // or use a relative path: "/images/project1.jpg"
  }
]
\`\`\`

### For Profile Picture
Update the `.profile-placeholder` in the About section to use your photo:

\`\`\`html
<div class="profile-placeholder">
  <img src="your-photo.jpg" alt="Your Name">
</div>
\`\`\`

---

## 📱 Social Media Links

Update social media links in the HTML (search for social-link):

\`\`\`html
<a href="https://github.com/yourusername" class="social-link">
  <!-- GitHub Icon -->
</a>
\`\`\`

---

## 🚀 Performance Tips

1. **Optimize Images**: Compress images before uploading
2. **Lazy Loading**: Images already use \`loading="lazy"\`
3. **Minimize Animations**: Reduce particle count if needed
4. **Font Loading**: Uses system fonts for faster loading

---

## 📋 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ⚠️ IE11 (not supported)

---

## 🛠️ Technical Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern features (Grid, Flexbox, Custom Properties)
- **JavaScript (ES6+)** - Vanilla JS, no frameworks
- **Canvas API** - Particle animations
- **Intersection Observer** - Scroll animations

---

## 📦 File Structure

\`\`\`
/src/app/
├── App.tsx              # Main React component
├── portfolio.css        # All styles
└── portfolio-script.js  # All functionality + data
\`\`\`

---

## 🎯 SEO Optimization

Add these meta tags to your HTML \`<head>\`:

\`\`\`html
<meta name="description" content="Your portfolio description">
<meta name="keywords" content="Your, Keywords, Here">
<meta name="author" content="Your Name">
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your description">
<meta property="og:image" content="your-og-image.jpg">
\`\`\`

---

## 📸 Adding Favicon

Add to your HTML \`<head>\`:

\`\`\`html
<link rel="icon" type="image/png" href="/favicon.png">
\`\`\`

---

## 🐛 Common Issues & Fixes

### Cursor not showing
- Check if you're on mobile (cursor is hidden on mobile)
- Ensure custom cursor CSS is loaded

### Animations not working
- Check browser console for errors
- Ensure JavaScript is enabled

### Theme toggle not working
- Clear localStorage: \`localStorage.clear()\`
- Check if theme toggle button exists

---

## 📱 Mobile Responsiveness

The design is fully responsive with breakpoints at:
- **1024px** - Tablet
- **768px** - Mobile
- **480px** - Small mobile

---

## 🎓 Learning Resources

This portfolio demonstrates:
- Advanced CSS (Grid, Flexbox, Custom Properties)
- Canvas API for animations
- Intersection Observer for scroll effects
- CSS transforms and transitions
- Event handling and DOM manipulation

---

## 🤝 Support

If you need help customizing:
1. Read through the comments in the code
2. Check the \`portfolioData\` object structure
3. Experiment with CSS variables for styling
4. Use browser DevTools to inspect elements

---

## 📄 License

Feel free to use this portfolio template for your own website!

---

## 🌟 Credits

- **Design**: Inspired by modern tech company landing pages
- **Icons**: SVG icons included
- **Fonts**: System fonts for optimal performance

---

**Made with ❤️ for Computer Science students**

Ready to showcase your skills to the world! 🚀
