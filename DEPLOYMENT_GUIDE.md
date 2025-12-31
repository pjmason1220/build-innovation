# BUILD Innovation - Deployment Guide

This guide will walk you through deploying your website to Vercel and connecting your custom domain.

## Prerequisites

- GitHub account
- Vercel account (free tier is fine)
- Access to buildinnovation.co domain DNS settings

## Step 1: Push to GitHub

Your repository is already initialized locally. Now push it to GitHub:

1. Create a new repository on GitHub:
   - Go to [https://github.com/new](https://github.com/new)
   - Repository name: `build-innovation`
   - Set to Public or Private (your choice)
   - Do NOT initialize with README (we already have one)
   - Click "Create repository"

2. Add GitHub as remote and push:
```bash
git remote add origin https://github.com/pjmason1220/build-innovation.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

1. Go to [https://vercel.com](https://vercel.com)
2. Sign up or log in with your GitHub account
3. Click "Add New..." → "Project"
4. Import your `build-innovation` repository
5. Configure project:
   - **Framework Preset**: Next.js (should auto-detect)
   - **Root Directory**: ./
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)

6. Click "Deploy"

Wait 2-3 minutes for deployment to complete. You'll get a URL like:
`https://build-innovation-xxxxx.vercel.app`

## Step 3: Set Up Contact Form (Formspree)

1. Go to [https://formspree.io](https://formspree.io)
2. Sign up for a free account
3. Click "New Form"
4. Name it "BUILD Innovation Contact"
5. Copy your form ID (looks like: `abc123xyz`)

6. In your Vercel project dashboard:
   - Go to Settings → Environment Variables
   - Add: `NEXT_PUBLIC_FORMSPREE_ID` = `your-form-id`
   - Click "Save"

7. Update the contact form code:
   - In Vercel dashboard, go to Deployments
   - Find your latest deployment, click the three dots → "Redeploy"
   - OR push a commit to trigger new deployment

8. Alternatively, edit `app/contact/page.tsx` locally:
   - Line 25: Replace `YOUR_FORM_ID` with your actual Formspree ID
   - Commit and push to trigger new deployment

## Step 4: Connect Custom Domain

### Part A: Add Domain in Vercel

1. In your Vercel project dashboard
2. Go to Settings → Domains
3. Enter `buildinnovation.co`
4. Click "Add"
5. Vercel will show you DNS records to configure

### Part B: Configure DNS

You'll see something like this from Vercel:

**For apex domain (buildinnovation.co):**
- Type: `A`
- Name: `@`
- Value: `76.76.21.21` (Vercel's IP - verify current IP in Vercel)

**For www subdomain (optional):**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

#### If using Namecheap:

1. Log in to Namecheap
2. Go to Domain List → Manage
3. Advanced DNS tab
4. Add/Edit records:
   - **A Record**: Host = `@`, Value = Vercel's IP, TTL = Automatic
   - **CNAME Record** (optional): Host = `www`, Value = `cname.vercel-dns.com`, TTL = Automatic
   - Remove any conflicting records

#### If using GoDaddy:

1. Log in to GoDaddy
2. My Products → DNS
3. Add records as above

#### If using Cloudflare:

1. Log in to Cloudflare
2. Select domain → DNS
3. Add records:
   - A record: `@` → Vercel IP
   - CNAME record: `www` → `cname.vercel-dns.com`
4. Set both to DNS only (gray cloud, not orange)

### Part C: Verify

1. DNS propagation takes 5 minutes to 48 hours (usually < 1 hour)
2. Check status in Vercel dashboard → Domains
3. Once verified, you'll see "Valid Configuration"
4. SSL certificate will be automatically provisioned

## Step 5: Test Your Website

Visit your website at:
- https://buildinnovation.co
- https://www.buildinnovation.co (if you set up www)

Test these critical items:

### Functionality Checklist:

- [ ] Home page loads correctly
- [ ] All navigation links work
- [ ] All 6 pages display properly on desktop
- [ ] All 6 pages display properly on mobile
- [ ] Contact form submits successfully
- [ ] Contact form confirmation appears
- [ ] Email, phone links work
- [ ] Logo displays correctly
- [ ] Footer links work
- [ ] Site loads over HTTPS (lock icon in browser)
- [ ] Site is fast (under 2 seconds to load)

### Browser Testing:

- [ ] Chrome (desktop)
- [ ] Safari (desktop)
- [ ] Firefox (desktop)
- [ ] Safari iOS (mobile)
- [ ] Chrome Android (mobile)

## Step 6: Set Up Google Analytics (Optional)

1. Create Google Analytics 4 property:
   - Go to [https://analytics.google.com](https://analytics.google.com)
   - Create new GA4 property
   - Get your Measurement ID (G-XXXXXXXXXX)

2. Add to Vercel environment variables:
   - Go to Vercel Settings → Environment Variables
   - Add: `NEXT_PUBLIC_GA_ID` = `G-XXXXXXXXXX`

3. Create Google Analytics component:
```typescript
// app/components/GoogleAnalytics.tsx
'use client';

import Script from 'next/script';

export default function GoogleAnalytics() {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
```

4. Add to layout:
```typescript
// app/layout.tsx
import GoogleAnalytics from './components/GoogleAnalytics';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
```

## Common Issues and Solutions

### Issue: DNS not propagating

**Solution**:
- Wait longer (can take up to 48 hours)
- Clear your browser cache
- Try incognito mode
- Check DNS propagation: [https://dnschecker.org](https://dnschecker.org)

### Issue: Contact form not working

**Solution**:
- Verify Formspree form ID is correct
- Check Vercel environment variables are set
- Redeploy after adding environment variables
- Check browser console for errors

### Issue: Site is slow

**Solution**:
- Check Vercel deployment logs for errors
- Verify images are optimized
- Check Vercel Analytics (free in dashboard)

### Issue: SSL certificate not working

**Solution**:
- Wait 24 hours for automatic provisioning
- Verify DNS is configured correctly
- Check Vercel dashboard for SSL status

## Ongoing Maintenance

### Regular Updates

```bash
# Make changes to your site
git add .
git commit -m "Describe your changes"
git push

# Vercel will automatically deploy within 1-2 minutes
```

### Monitoring

- Check Vercel Analytics (free tier)
- Monitor Google Analytics traffic
- Check Formspree for form submissions
- Review Vercel logs for any errors

### Backups

Your code is backed up on GitHub. Vercel keeps deployment history.

To download a backup:
```bash
git clone https://github.com/pjmason1220/build-innovation.git
```

## Need Help?

- Vercel Documentation: [https://vercel.com/docs](https://vercel.com/docs)
- Next.js Documentation: [https://nextjs.org/docs](https://nextjs.org/docs)
- Formspree Documentation: [https://help.formspree.io](https://help.formspree.io)

## Congratulations!

Your professional innovation consulting website is now live! 🎉

Visit it at: https://buildinnovation.co

Next steps:
1. Share your website URL with potential clients
2. Add the URL to your email signature
3. Update your LinkedIn profile with the website
4. Begin your outreach campaign

Good luck with BUILD Innovation!
