# Huda Noor - Professional Portfolio

A modern, responsive portfolio showcasing AI automation expertise, built with Next.js 15, React 18, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

### Prerequisites
- **Node.js 18+** (check with `node -v`)
- **npm 9+** (check with `npm -v`)
- Git
- Code editor (VS Code recommended)

### Local Setup

1. **Clone or download the project**
   ```bash
   cd huda-noor-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to: `http://localhost:3000`
   - Should see portfolio with working animations
   - Changes auto-refresh as you edit

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Main page
│   │   └── globals.css        # Global styles
│   └── components/
│       ├── Navbar.tsx         # Navigation
│       ├── Hero.tsx           # Hero section
│       ├── About.tsx          # About section
│       ├── Skills.tsx         # Skills section
│       ├── Projects.tsx       # Projects section
│       ├── Journey.tsx        # Timeline section
│       ├── Certifications.tsx # Certifications
│       ├── Services.tsx       # Services section
│       ├── Contact.tsx        # Contact form
│       ├── Footer.tsx         # Footer
│       └── Particles.tsx      # Animated particles
├── public/
│   └── images/               # Your photos/images
├── package.json              # Dependencies
├── tsconfig.json            # TypeScript config
├── tailwind.config.ts       # Tailwind config
├── postcss.config.js        # PostCSS config
├── next.config.js           # Next.js config
└── README.md               # This file
```

## 🛠️ Development

### Scripts
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

### Key Technologies
- **Next.js 15.0.3** - React framework
- **React 18.3.1** - UI library
- **Tailwind CSS 3.4.1** - Styling
- **Framer Motion 11.0.3** - Animations
- **TypeScript** - Type safety
- **react-intersection-observer** - Scroll animations

## 🎨 Customization

### Update Your Information

1. **Hero Section** (`src/components/Hero.tsx`)
   - Add your profile photo to `public/images/huda-noor.jpg`
   - Update name, title, description

2. **About Section** (`src/components/About.tsx`)
   - Update your story and background

3. **Projects** (`src/components/Projects.tsx`)
   - Edit project titles, descriptions, and links

4. **Contact** (`src/components/Contact.tsx`)
   - Update email and social links

### Update Styles

Edit `tailwind.config.ts` to customize:
- Colors (dark backgrounds, gold accents)
- Fonts (Cinzel, EB Garamond, etc.)
- Animations and keyframes
- Spacing and sizing

## 📱 Responsive Design

- ✅ Mobile (320px+)
- ✅ Tablet (768px+)
- ✅ Desktop (1024px+)
- ✅ Ultra-wide (2560px+)

Test responsiveness:
1. In browser DevTools (F12)
2. Click device toolbar icon
3. Select different screen sizes

## 🚢 Deployment

### Deploy to Vercel (Easiest)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Done! Your site is live

3. **Custom Domain (Optional)**
   - In Vercel dashboard → Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

### Environment Variables
- No environment variables needed for basic portfolio
- If adding backend services, add `.env.local` to root

## 🐛 Troubleshooting

### "npm: command not found"
- Install Node.js from https://nodejs.org/
- Restart terminal after installation

### Port 3000 already in use
```bash
# Mac/Linux
lsof -i :3000
kill -9 <PID>

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Tailwind classes not showing
- Restart dev server: `Ctrl+C`, then `npm run dev`
- Clear `.next` folder: `rm -rf .next`, then rebuild

### Build fails locally but works in Vercel
- Clear cache: `npm run build` after `rm -rf .next`
- Check Node version: should be 18+
- Verify all imports are correct

### Images not loading
- Place images in `public/images/`
- Use relative paths: `<Image src="/images/photo.jpg" />`

## 📦 Dependencies

All required dependencies are in `package.json`. Update with:
```bash
npm update
```

## 🔒 Security

- No sensitive data in code
- All API calls are client-side safe
- No authentication needed
- Static site, highly secure

## 📈 Performance

- ✅ Fast page loads
- ✅ Optimized images
- ✅ Code splitting
- ✅ CSS purging
- ✅ Smooth animations

Check performance:
- Google PageSpeed Insights: https://pagespeed.web.dev
- Lighthouse in DevTools

## 🎓 Learning Resources

- Next.js Docs: https://nextjs.org/docs
- React Docs: https://react.dev
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/
- TypeScript: https://www.typescriptlang.org/docs/

## 💡 Tips

1. **Local first**: Always test locally with `npm run dev` before deploying
2. **Commit changes**: Use Git to track changes
3. **Mobile test**: Test on phone before deployment
4. **Performance**: Check Lighthouse scores before deploying
5. **SEO**: Update metadata in `layout.tsx`

## 🤝 Support

If you encounter issues:

1. Check this README
2. Check browser console (F12)
3. Check terminal for error messages
4. Verify Node/npm versions
5. Try: `rm -rf node_modules && npm install`

## 📝 License

This portfolio is your personal project. You own all content.

## 🎉 Ready to Deploy!

```bash
# Local: npm run dev
# Build: npm run build
# Deploy: Push to GitHub, then deploy to Vercel
```

---

**Happy deploying! 🚀**

For questions or issues, check the documentation or reach out!
