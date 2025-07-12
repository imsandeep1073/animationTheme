# Az Black Website Replica

A pixel-perfect replica of the Az Black website (https://az-black.webflow.io/) built with HTML, CSS, and JavaScript.

## Features

### 🎨 Design
- **Pixel-perfect recreation** of the original Az Black website
- **Modern dark theme** with gradient text effects
- **Responsive design** that works on all devices
- **Smooth animations** and transitions
- **Glassmorphism effects** in navigation and cards

### 🚀 Functionality
- **Smooth scrolling** navigation
- **Scroll-triggered animations** using Intersection Observer
- **Parallax effects** on hero section and elements
- **Interactive hover effects** on cards and buttons
- **Form validation** with success/error messages
- **Mobile-responsive** navigation menu
- **Active navigation** highlighting based on scroll position

### 📱 Sections
1. **Hero Section** - Large gradient text with iPhone mockup
2. **Experience Section** - Interactive cards with hover effects
3. **Integration Section** - Logo grid with blur effects
4. **Features Section** - Statistics with sticky content
5. **Download Section** - App store badges
6. **Dark/Light Mode** - iPhone mockups in different themes
7. **Sign Up Section** - Feature cards with animations
8. **Footer** - Social links and company information

## File Structure

```
├── index.html          # Main HTML structure
├── styles.css          # Complete CSS styling
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## How to Use

1. **Open the website**: Simply open `index.html` in your web browser
2. **Navigate**: Use the navigation menu to scroll to different sections
3. **Interact**: Hover over cards, buttons, and logos to see animations
4. **Form**: Try the email signup form in the hero section
5. **Mobile**: Resize your browser or view on mobile to see responsive design

## Key Features Explained

### Gradient Text Effects
The hero section uses CSS gradients with `-webkit-background-clip: text` to create the colorful text effect.

### Parallax Scrolling
JavaScript calculates scroll position and applies transforms to create depth effects.

### Intersection Observer
Used for performance-optimized scroll animations that trigger when elements enter the viewport.

### Glassmorphism
Navigation and cards use `backdrop-filter: blur()` with semi-transparent backgrounds.

### Responsive Design
CSS Grid and Flexbox with media queries ensure the site works on all screen sizes.

## Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ Internet Explorer (limited support)

## Performance Optimizations

- **Throttled scroll events** using `requestAnimationFrame`
- **Intersection Observer** for efficient scroll animations
- **CSS transforms** instead of layout changes
- **Optimized images** with proper sizing
- **Minimal JavaScript** with efficient event handling

## Customization

### Colors
Main colors used:
- Primary: `#000` (black background)
- Secondary: `#81859f` (gray text)
- Accent: `#eec5bd`, `#f3b1a5`, `#c6caf6`, `#dad9e9` (gradient colors)

### Fonts
- **Manrope**: Used for headings and hero text
- **Inter**: Used for body text and navigation

### Animations
All animations are CSS-based with JavaScript triggers for scroll effects.

## Credits

This is a replica of the original Az Black website template by Azwedo on Webflow. All images and assets are sourced from the original website.

## License

This project is for educational purposes. The original design belongs to Azwedo.

---

**Note**: This is a static website replica. For a production version, you would need to:
- Host the files on a web server
- Optimize images for web
- Add proper meta tags for SEO
- Implement proper form handling
- Add analytics tracking
