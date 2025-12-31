# Innovation Consulting Landing Page - Setup Guide

## 🚀 Quick Start

Your landing page is a single HTML file that's ready to deploy anywhere. No complicated setup required!

## 📁 What You Have

- **innovation-consulting-landing-page.html** - Your complete website in one file
- All styling (CSS) is embedded
- All functionality (JavaScript) is included
- No external dependencies needed

## 🌐 How to Use It

### Option 1: Test Locally (Right Now)
1. Double-click the HTML file
2. It will open in your web browser
3. Everything works immediately - no server needed!

### Option 2: Deploy to the Web (Best for Production)

**Easiest Options (Free):**

#### A) Netlify Drop (Recommended - 30 seconds)
1. Go to https://app.netlify.com/drop
2. Drag your HTML file into the drop zone
3. Get a live URL instantly (like: https://your-site-name.netlify.app)
4. Optional: Connect custom domain (like innovationbypj.com)

#### B) GitHub Pages (Free)
1. Create GitHub account (if you don't have one)
2. Create new repository called "consulting-site"
3. Upload the HTML file
4. Go to Settings > Pages
5. Enable GitHub Pages
6. Your site will be live at: https://yourusername.github.io/consulting-site

#### C) Vercel (Free)
1. Go to https://vercel.com
2. Sign up (free)
3. Click "New Project"
4. Upload your HTML file
5. Get instant live URL

## 📧 Form Integration Options

Currently, the contact form shows a success message but doesn't send emails. Here are your options:

### Option 1: Formspree (Easiest - $0-10/month)
1. Go to https://formspree.io
2. Sign up for free account
3. Create new form
4. Replace this line in the HTML:
```html
<form id="contactForm" onsubmit="handleSubmit(event)">
```
With:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```
5. Remove the JavaScript `handleSubmit` function
6. Emails will go to your inbox!

### Option 2: Netlify Forms (Free)
If hosting on Netlify:
1. Add `netlify` attribute to form tag:
```html
<form name="contact" method="POST" netlify>
```
2. Forms will appear in Netlify dashboard
3. Get email notifications automatically

### Option 3: Google Forms (Free but less professional)
1. Create Google Form
2. Use Google Forms iframe embed
3. Styling won't match perfectly

### Option 4: Email Service APIs (Most Professional)
- SendGrid
- Mailgun
- AWS SES
Requires backend setup but most reliable for business use.

## 🎨 Customization Guide

### Change Colors
Find this section near the top of the HTML (in the `<style>` section):
```css
:root {
    --primary-color: #1F4E78;  /* Main blue */
    --secondary-color: #2E75B5;  /* Lighter blue */
    --accent-color: #4472C4;  /* Accent blue */
    --text-dark: #2C3E50;  /* Dark text */
    --text-light: #5A6C7D;  /* Light text */
    --background-light: #F8F9FA;  /* Background gray */
    --white: #FFFFFF;
    --gold: #D4AF37;  /* Award gold */
}
```

**To change to green theme:**
```css
--primary-color: #0D5C3F;
--secondary-color: #10855C;
```

**To change to purple theme:**
```css
--primary-color: #5D3FD3;
--secondary-color: #7F5FE8;
```

### Update Your Information
Search for these and replace:
- Phone: `513-282-8775`
- Email: `pjmason1220@gmail.com`
- Address: `298 Forest Edge Drive, S. Lebanon, Ohio 45065`

### Add Your Photo
1. Save your professional headshot as `photo.jpg`
2. Upload it to the same folder as the HTML
3. Add this code in the "About" section:
```html
<img src="photo.jpg" alt="PJ Mason" style="width: 100%; max-width: 400px; border-radius: 8px;">
```

### Change Text Content
All text is plain HTML - just find and edit directly:
- Hero headline: Look for `<h1>Build Innovation Capabilities`
- About section: Find `<section class="about">`
- Services: Find `<section class="services">`

## 📱 Mobile Responsive

The site automatically adjusts for mobile devices. Test by:
1. Opening in browser
2. Right-click > Inspect
3. Click device icon (top left)
4. Select iPhone or Android device

## 🔍 SEO Optimization

The page includes:
- Meta description
- Proper heading hierarchy
- Clean URLs (when you deploy)

**To improve SEO further:**
1. Get a custom domain (innovationbypj.com)
2. Add to Google Search Console
3. Create Google Business Profile
4. Get listed on LinkedIn

## 🔒 Add SSL/HTTPS

All recommended hosting options (Netlify, Vercel, GitHub Pages) include free SSL automatically. Your site will be https:// by default.

## 📊 Add Analytics

### Google Analytics (Free)
1. Sign up at https://analytics.google.com
2. Get tracking code
3. Paste before `</head>` tag in HTML:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🎯 Custom Domain Setup

If you buy a domain (recommended):

**GoDaddy, Namecheap, Google Domains:**
1. Buy domain (innovationbypj.com) - ~$12/year
2. In domain settings, point to hosting:
   - Netlify: Add CNAME record
   - Vercel: Add A and CNAME records
3. Update in hosting dashboard
4. Wait 24-48 hours for DNS propagation

**Recommended domains:**
- innovationbypj.com
- pjmasondesign.com
- masoninnovation.com
- capabilitybuild.com

## 📧 Email Recommendations

**Professional Email Options:**

1. **Google Workspace** ($6/month)
   - yourname@yourdomain.com
   - Professional and trusted
   - Gmail interface

2. **Zoho Mail** ($1/month)
   - Budget friendly
   - Professional features

3. **ProtonMail** (Free/Paid)
   - Privacy focused
   - Professional appearance

## 🚦 Launch Checklist

Before going live:
- [ ] Test form submission
- [ ] Check all links work
- [ ] Test on mobile device
- [ ] Verify contact info is correct
- [ ] Proofread all text
- [ ] Test on different browsers (Chrome, Safari, Firefox)
- [ ] Set up email forwarding
- [ ] Add Google Analytics
- [ ] Test page load speed
- [ ] Check spelling/grammar

## 🔧 Troubleshooting

**Form not working?**
- Check if you integrated Formspree or Netlify Forms
- Verify email address is correct
- Test with different email providers

**Page looks broken?**
- Make sure you uploaded the complete HTML file
- Clear browser cache (Ctrl+Shift+R)
- Try different browser

**Not showing on mobile?**
- The site is responsive - it should work
- Test with Chrome DevTools device simulator
- Try actual mobile device

## 📈 Next Steps After Launch

1. **Add to LinkedIn**
   - Put URL in profile
   - Share post announcing launch
   - Update featured section

2. **Get Testimonials**
   - Ask former P&G colleagues
   - After first successful project, request testimonial
   - Add to "Results" section

3. **Create Content**
   - LinkedIn articles linking to site
   - Case studies as PDFs
   - Add "Resources" section

4. **Track Performance**
   - Monitor Google Analytics
   - Track form submissions
   - A/B test different headlines

## 💡 Advanced Enhancements (Optional)

Once live, you can add:
- Calendar scheduling (Calendly integration)
- Live chat (Drift, Intercom)
- Video background in hero
- Client logos section
- Blog/articles section
- Case study downloads

## 📞 Questions?

The HTML file is fully self-contained and ready to go. Just upload it anywhere and it works!

**Recommended First Step:**
1. Test locally by opening HTML file
2. Make any text changes you want
3. Deploy to Netlify Drop (30 seconds)
4. Share URL with colleagues for feedback
5. Get custom domain
6. Integrate contact form
7. Add to LinkedIn profile

---

**Your site will be live at one of these within 5 minutes:**
- https://your-site.netlify.app (Netlify)
- https://your-site.vercel.app (Vercel)
- https://yourusername.github.io/site (GitHub Pages)

Then optionally connect custom domain like: https://innovationbypj.com
