# 🎨 Quick Customization Reference

## 5-Minute Setup Guide

### 1. Update Personal Info (2 minutes)
Open `/src/app/portfolio-script.js` and modify:

```javascript
const portfolioData = {
  personal: {
    name: "YOUR NAME HERE",
    roles: ["YOUR ROLE 1", "YOUR ROLE 2", "YOUR ROLE 3"],
    email: "your.email@example.com",
    phone: "+1 234 567 8900",
    location: "Your City, Country",
  }
}
```

### 2. Change Colors (1 minute)
Open `/src/app/portfolio.css` and find:

```css
:root {
  --accent-primary: #00d4ff;    /* Main color */
  --accent-secondary: #7000ff;  /* Secondary color */
}
```

**Popular Color Schemes:**
- **Neon Green**: `#00ff88` + `#00d4ff`
- **Purple/Pink**: `#a855f7` + `#ec4899`
- **Orange/Red**: `#f97316` + `#ef4444`
- **Blue/Teal**: `#3b82f6` + `#14b8a6`

### 3. Add Your Projects (2 minutes)
In `portfolioData.projects`:

```javascript
projects: [
  {
    title: "Your Project Name",
    description: "Brief description of what it does",
    tags: ["Tech1", "Tech2", "Tech3"],
    image: "https://images.unsplash.com/photo-xxxxx",
    github: "https://github.com/yourusername/repo",
    demo: "https://your-demo-link.com"
  },
  // Add more projects...
]
```

---

## Content Update Locations

| What to Update | Where to Find It |
|----------------|------------------|
| **Name** | `portfolioData.personal.name` |
| **Bio** | `portfolioData.about.text` |
| **Skills** | `portfolioData.skills` array |
| **Projects** | `portfolioData.projects` array |
| **Experience** | `portfolioData.timeline` array |
| **Education** | `portfolioData.education` array |
| **Contact** | `portfolioData.personal.email/phone/location` |
| **Social Links** | HTML in App.tsx (search for `.social-link`) |
| **Colors** | CSS variables in `portfolio.css` |
| **Resume Link** | `portfolioData.personal.resumeUrl` |

---

## Image Sources

### Free High-Quality Images:
1. **Unsplash** - https://unsplash.com
2. **Pexels** - https://pexels.com
3. **Pixabay** - https://pixabay.com

### How to Use:
```javascript
// In portfolioData.projects:
image: "https://images.unsplash.com/photo-1234567890"
```

### Get Unsplash URLs:
1. Go to Unsplash.com
2. Search for your image (e.g., "cybersecurity")
3. Right-click image → Copy Image Address
4. Paste URL in your project data

---

## Common Customizations

### Change Font
Add to `portfolio.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}
```

### Adjust Particle Count
In `portfolio-script.js`:
```javascript
const particleCount = 80;  // Lower = better performance
```

### Change Typing Speed
In `portfolio-script.js`:
```javascript
const typingSpeed = 100;      // Milliseconds per character
const deletingSpeed = 50;     // Milliseconds when deleting
const pauseDuration = 2000;   // Pause between roles
```

### Modify Animation Speed
In `portfolio.css`:
```css
:root {
  --transition-fast: 0.2s ease;    /* Quick interactions */
  --transition-normal: 0.4s ease;  /* Standard animations */
  --transition-slow: 0.6s ease;    /* Smooth transitions */
}
```

### Change Section Padding
In `portfolio.css`:
```css
:root {
  --section-padding: 120px 0;  /* Vertical spacing */
}
```

---

## Skills Icons Reference

Use emoji or icon libraries:

```javascript
skills: [
  { name: "Python", icon: "🐍", level: 90 },
  { name: "JavaScript", icon: "⚡", level: 85 },
  { name: "React", icon: "⚛️", level: 88 },
  { name: "Node.js", icon: "🟢", level: 85 },
  { name: "Docker", icon: "🐳", level: 80 },
  { name: "AWS", icon: "☁️", level: 75 },
  { name: "Security", icon: "🔐", level: 90 },
  { name: "Blockchain", icon: "⛓️", level: 85 },
]
```

**Popular Tech Emojis:**
- Frontend: ⚛️ 🎨 💅 ✨
- Backend: 🟢 🔧 ⚙️ 🔌
- Database: 🗄️ 💾 📊
- DevOps: 🐳 ☁️ 🚀 ⚡
- Security: 🔐 🛡️ 🔒 🔑
- Mobile: 📱 📲 🤳
- AI/ML: 🤖 🧠 🎯

---

## Social Media Links

Find in HTML (App.tsx) and replace `#` with your URLs:

```html
<!-- GitHub -->
<a href="https://github.com/yourusername" class="social-link">

<!-- LinkedIn -->
<a href="https://linkedin.com/in/yourusername" class="social-link">

<!-- Twitter -->
<a href="https://twitter.com/yourusername" class="social-link">

<!-- Email -->
<a href="mailto:your.email@example.com" class="social-link">
```

---

## Resume Button

In `portfolio-script.js`:
```javascript
personal: {
  resumeUrl: "https://drive.google.com/file/d/YOUR-FILE-ID"
}
```

**Where to host resume:**
1. Google Drive (get shareable link)
2. Dropbox
3. GitHub repository
4. Your own server

---

## Project Tags

Good tag categories:
- **Languages**: Python, JavaScript, Solidity, Rust
- **Frameworks**: React, Node.js, Django, Flask
- **Technologies**: Blockchain, IoT, AI, ML
- **Concepts**: Security, DeFi, Smart Contracts
- **Tools**: Docker, AWS, Firebase

```javascript
tags: ["React", "Blockchain", "Security", "Web3"]
```

---

## Theme Customization

### Dark Theme Only
Remove theme toggle button from HTML

### Light Theme Default
In `portfolio-script.js`:
```javascript
// Change isDark initial value
let isDark = false;
document.body.classList.add('light-theme');
```

### Custom Theme Colors
In `portfolio.css`:
```css
/* Dark Theme */
:root {
  --bg-primary: #0a0a0f;
  --text-primary: #ffffff;
}

/* Light Theme */
body.light-theme {
  --bg-primary: #ffffff;
  --text-primary: #1a1a1f;
}
```

---

## Mobile Menu Logo

To change the logo text:
```html
<a href="#home" class="nav-logo">&lt;/&gt; Portfolio</a>
```

Replace with:
```html
<a href="#home" class="nav-logo">YourName</a>
```

---

## Performance Optimization

### Reduce Animations
```javascript
// Reduce particle count
const particleCount = 40;  // Default is 80
```

### Lazy Load Images
Already implemented:
```html
<img loading="lazy" />
```

### Disable Custom Cursor on Mobile
Already handled in CSS:
```css
@media (max-width: 768px) {
  .custom-cursor,
  .cursor-follower {
    display: none;
  }
}
```

---

## Testing Checklist

Before deploying:
- [ ] All personal info updated
- [ ] All social links work
- [ ] Resume downloads correctly
- [ ] Images load properly
- [ ] Contact form configured
- [ ] Mobile responsive
- [ ] Dark/Light theme works
- [ ] All animations smooth
- [ ] No console errors
- [ ] Meta tags updated

---

## Quick Color Presets

Copy-paste these into `:root` in CSS:

### Cyber Blue (Default)
```css
--accent-primary: #00d4ff;
--accent-secondary: #7000ff;
```

### Matrix Green
```css
--accent-primary: #00ff88;
--accent-secondary: #00d4aa;
```

### Sunset Orange
```css
--accent-primary: #ff6b35;
--accent-secondary: #f7931e;
```

### Royal Purple
```css
--accent-primary: #a855f7;
--accent-secondary: #ec4899;
```

### Electric Blue
```css
--accent-primary: #3b82f6;
--accent-secondary: #14b8a6;
```

---

## File Structure Reference

```
Project
├── /src/app/
│   ├── App.tsx              ← HTML structure
│   ├── portfolio.css        ← All styles
│   └── portfolio-script.js  ← All functionality
├── index.html               ← Entry point
├── README-PORTFOLIO.md      ← Full documentation
├── EXTRACTION-GUIDE.md      ← HTML/CSS/JS extraction
└── QUICK-REFERENCE.md       ← This file
```

---

## Get Help

1. **Browser Console** (F12) - Check for errors
2. **Read Comments** - Code is heavily commented
3. **Test Locally** - Changes reflect immediately
4. **Backup First** - Save original before editing

---

## Next Steps

1. ✅ Customize content (5 min)
2. ✅ Update colors (1 min)
3. ✅ Add your images (5 min)
4. ✅ Test on mobile (2 min)
5. ✅ Deploy to web (5 min)

**Total Time: ~20 minutes to have your portfolio live!** 🚀

---

**Pro Tip**: Start with small changes and test frequently. Don't change everything at once!
