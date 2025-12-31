# BUILD Innovation Website

Professional innovation consulting website for BUILD Innovation, led by PJ Mason - former P&G Senior Director with 25+ years of experience building world-class innovation capabilities.

## Tech Stack

- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Forms**: Formspree (configurable)

## Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ SEO optimized (meta tags, sitemap, robots.txt)
- ✅ Fast page loads and performance
- ✅ Professional design with P&G/Harvard caliber quality
- ✅ Contact form integration ready
- ✅ 6 complete pages: Home, About, Services, Results, Approach, Contact

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/pjmason1220/build-innovation.git
cd build-innovation
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` and configure:
- Formspree form ID (for contact form)
- Google Analytics ID (optional)
- Site URL

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Site Structure

```
/               - Home page with value proposition and services overview
/about          - PJ Mason background, credentials, and philosophy
/services       - Three service offerings with detailed descriptions
/results        - Case studies (Oral-B iO, Digital Design Capability)
/approach       - Methodology and capability building framework
/contact        - Contact form and information
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/pjmason1220/build-innovation.git
git push -u origin main
```

2. Go to [Vercel](https://vercel.com)
   - Sign up / Log in with GitHub
   - Click "New Project"
   - Import your repository
   - Configure environment variables in Vercel dashboard
   - Deploy!

3. Connect custom domain:
   - In Vercel project settings → Domains
   - Add `buildinnovation.co`
   - Follow DNS configuration instructions

### Build for Production

```bash
npm run build
npm start
```

## Contact Form Setup

The contact form currently uses a placeholder. To enable it:

### Option 1: Formspree (Recommended)

1. Sign up at [https://formspree.io](https://formspree.io)
2. Create a new form
3. Copy your form ID
4. Update `app/contact/page.tsx` line 25:
   ```typescript
   const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
   ```
   Replace `YOUR_FORM_ID` with your actual form ID

### Option 2: Netlify Forms

If deploying to Netlify:
1. Add `netlify` attribute to the form element
2. Form submissions will appear in Netlify dashboard

### Option 3: Custom API Route

Create a custom API route in `app/api/contact/route.ts` to handle form submissions with your preferred email service.

## Customization

### Colors

Colors are defined in `tailwind.config.ts`:
- **Primary Blue**: #1F4E78
- **Secondary Blue**: #2E75B5
- **Gold Accents**: #D4AF37

### Content

All content can be edited directly in the page files:
- `app/page.tsx` - Home page
- `app/about/page.tsx` - About page
- `app/services/page.tsx` - Services page
- `app/results/page.tsx` - Results page
- `app/approach/page.tsx` - Approach page
- `app/contact/page.tsx` - Contact page

### Logo

Replace `public/logo.png` with your updated logo (keep the same filename or update references in components).

## Performance Optimization

- Images are automatically optimized by Next.js Image component
- Pages are statically generated where possible
- Code splitting is automatic with Next.js App Router
- Tailwind CSS is purged in production

## SEO

- Meta tags configured in each page's `metadata` export
- Sitemap auto-generated at `/sitemap.xml`
- Robots.txt at `/robots.txt`
- Structured for good crawlability

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive down to 320px width

## License

© 2025 BUILD Innovation. All rights reserved.

## Support

For questions or issues:
- Email: pjmason1220@gmail.com
- Phone: 513-282-8775

## Development Notes

### Next Steps After Deployment

1. Set up Formspree or alternative form handler
2. Add Google Analytics tracking code
3. Test contact form submissions
4. Verify all links work correctly
5. Test on multiple devices and browsers
6. Set up SSL certificate (automatic with Vercel)
7. Configure DNS for buildinnovation.co domain
8. Add professional photo to About page
9. Consider adding client testimonials as they come in
10. Monitor site performance and analytics

### Future Enhancements

- Blog/thought leadership section
- Case study templates for future projects
- Client testimonials section
- Newsletter signup integration
- Calendar integration for scheduling
- Enhanced analytics and conversion tracking
