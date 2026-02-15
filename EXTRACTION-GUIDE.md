# 📦 Pure HTML/CSS/JS Extraction Guide

## How to Extract Standalone Files

If you want to use this portfolio as pure HTML/CSS/JS without React, follow these steps:

---

## Method 1: Copy from Source Files (Recommended)

### Step 1: Create Your Project Structure

```
my-portfolio/
├── index.html
├── style.css
├── script.js
└── images/
```

### Step 2: Extract HTML

1. Open `/src/app/App.tsx`
2. Copy everything **inside** the `dangerouslySetInnerHTML` content (between the backticks)
3. Paste into your `index.html`
4. Add the HTML boilerplate:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Name - Portfolio</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<!-- PASTE THE COPIED CONTENT HERE -->

<script src="script.js"></script>
</body>
</html>
```

### Step 3: Extract CSS

1. Open `/src/app/portfolio.css`
2. Copy **entire content**
3. Paste into your `style.css`

### Step 4: Extract JavaScript

1. Open `/src/app/portfolio-script.js`
2. Copy **entire content**
3. Paste into your `script.js`
4. **Important**: At the end of the file, add:

```javascript
// Initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
```

---

## Method 2: Quick Start Template

Use the pre-configured files in this repository:

1. **HTML Structure**: Check `/standalone-portfolio.html` for the template
2. **CSS Styles**: Use `/src/app/portfolio.css` as-is
3. **JavaScript**: Use `/src/app/portfolio-script.js` as-is

---

## 🎯 Customization After Extraction

### Update Content

In your `script.js`, find the `portfolioData` object:

```javascript
const portfolioData = {
  personal: {
    name: "Your Name",           // ← Change this
    roles: ["Role 1", "Role 2"], // ← Change this
    email: "your@email.com",     // ← Change this
    // ... more fields
  },
  skills: [
    // Add your skills here
  ],
  projects: [
    // Add your projects here
  ],
  // ... more sections
};
```

### Update Colors

In your `style.css`, modify the CSS variables:

```css
:root {
  --accent-primary: #00d4ff;    /* Change to your color */
  --accent-secondary: #7000ff;  /* Change to your color */
  --bg-primary: #0a0a0f;       /* Change background */
}
```

---

## 🖼️ Adding Images

### Method 1: External URLs (Unsplash)
```javascript
projects: [
  {
    image: "https://images.unsplash.com/photo-xxxxx",
  }
]
```

### Method 2: Local Images
```javascript
projects: [
  {
    image: "./images/project1.jpg",  // Relative path
  }
]
```

Don't forget to create an `images/` folder and add your images there.

---

## 🚀 Deployment Options

### Option 1: GitHub Pages
1. Create a repository
2. Upload `index.html`, `style.css`, `script.js`
3. Enable GitHub Pages in repository settings
4. Your site will be live at `https://username.github.io/repo-name`

### Option 2: Netlify
1. Drag and drop your folder to [Netlify Drop](https://app.netlify.com/drop)
2. Your site is instantly live!

### Option 3: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project folder
3. Follow the prompts

### Option 4: Traditional Hosting
Upload files via FTP to any web hosting service (GoDaddy, Bluehost, etc.)

---

## ✅ Checklist Before Going Live

- [ ] Update all personal information in `portfolioData`
- [ ] Replace placeholder images with your own
- [ ] Add your actual project links (GitHub, demos)
- [ ] Update social media links in HTML
- [ ] Add your resume PDF and update the link
- [ ] Test contact form (add backend if needed)
- [ ] Update meta tags (title, description, OG image)
- [ ] Add Google Analytics (optional)
- [ ] Test on multiple devices and browsers
- [ ] Optimize images for web (compress, resize)
- [ ] Add favicon
- [ ] Check all links work
- [ ] Proofread all text content

---

## 🐛 Common Issues After Extraction

### Issue: JavaScript not working
**Fix**: Make sure you're calling the init function:
```javascript
// At the end of script.js
initPortfolio();
```

### Issue: Animations not showing
**Fix**: Check browser console for errors. Ensure all CSS is copied.

### Issue: Custom cursor not visible
**Fix**: The cursor is hidden on mobile devices. Test on desktop.

### Issue: Particles not animating
**Fix**: Check if canvas element exists:
```html
<canvas id="particleCanvas" class="particle-canvas"></canvas>
```

---

## 📱 Testing Checklist

Test your portfolio on:
- [ ] Desktop Chrome
- [ ] Desktop Firefox
- [ ] Desktop Safari
- [ ] Mobile Chrome (Android)
- [ ] Mobile Safari (iOS)
- [ ] Tablet devices
- [ ] Different screen sizes

---

## 🎨 Advanced Customization

### Change Particle Colors
In `script.js`, find the Particle class:
```javascript
ctx.fillStyle = 'rgba(0, 212, 255, 0.5)';  // Change color here
```

### Modify Typing Speed
In `script.js`, find:
```javascript
const typingSpeed = 100;     // Type speed
const deletingSpeed = 50;    // Delete speed
const pauseDuration = 2000;  // Pause between words
```

### Adjust Animation Speeds
In `style.css`, find:
```css
--transition-fast: 0.2s ease;
--transition-normal: 0.4s ease;
--transition-slow: 0.6s ease;
```

---

## 📊 Adding Analytics

### Google Analytics
Add before closing `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

---

## 🔒 Contact Form Backend

The contact form currently prevents default submission. To make it functional:

### Option 1: Formspree
```html
<form action="https://formspree.io/f/YOUR-ID" method="POST">
```

### Option 2: Netlify Forms
Add `netlify` attribute:
```html
<form name="contact" method="POST" data-netlify="true">
```

### Option 3: Custom Backend
Connect to your own API endpoint in `script.js`:
```javascript
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  
  await fetch('https://your-api.com/contact', {
    method: 'POST',
    body: JSON.stringify(Object.fromEntries(data)),
  });
});
```

---

## 📦 File Size Optimization

### Minify CSS
Use [CSS Minifier](https://cssminifier.com/)

### Minify JavaScript
Use [JavaScript Minifier](https://javascript-minifier.com/)

### Compress Images
Use [TinyPNG](https://tinypng.com/)

---

## 🎓 What You'll Learn

By extracting and customizing this portfolio, you'll learn:
- Advanced CSS (Grid, Flexbox, Animations)
- JavaScript (DOM manipulation, Canvas API)
- HTML5 semantic markup
- Responsive design principles
- Performance optimization
- Deployment workflows

---

## 💡 Pro Tips

1. **Keep backups**: Save original files before making changes
2. **Test locally**: Open `index.html` in browser to test
3. **Use DevTools**: Browser DevTools help debug issues
4. **Version control**: Use Git to track changes
5. **Mobile-first**: Test on mobile devices regularly
6. **Performance**: Keep images under 200KB each
7. **Accessibility**: Add alt text to all images
8. **SEO**: Update meta tags before deployment

---

## 🆘 Need Help?

1. Check browser console for errors (F12)
2. Validate HTML: [W3C Validator](https://validator.w3.org/)
3. Validate CSS: [CSS Validator](https://jigsaw.w3.org/css-validator/)
4. Check JavaScript: Look for syntax errors in console

---

## 🎉 You're Ready!

Once you've extracted and customized everything:
1. Test thoroughly on multiple devices
2. Deploy to your preferred platform
3. Share your portfolio with the world!

**Good luck with your portfolio! 🚀**
