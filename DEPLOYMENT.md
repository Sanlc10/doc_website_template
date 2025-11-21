# Deployment Guide - MedCare Website

This guide will help you deploy the MedCare website to Vercel.

## Prerequisites

- ✅ GitHub repository: `https://github.com/Sanlc10/doc_website_template.git`
- ✅ Production build tested and working
- ✅ All documentation updated
- ✅ Vercel configuration file created (`vercel.json`)

## Quick Deploy to Vercel

### Option 1: Vercel Dashboard (Recommended)

1. **Visit Vercel**
   - Go to [https://vercel.com](https://vercel.com)
   - Sign in with your GitHub account

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Choose `Sanlc10/doc_website_template` from your repositories
   - Click "Import"

3. **Configure Project** (Auto-detected)
   Vercel will automatically detect:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
   - **Development Command**: `npm run dev`

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete (usually 1-2 minutes)
   - Your site will be live at `https://[project-name].vercel.app`

### Option 2: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

## Post-Deployment

### Custom Domain Setup

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Click "Add Domain"
4. Enter your custom domain
5. Follow DNS configuration instructions
6. Wait for DNS propagation (usually 24-48 hours)

### Environment Variables

If you need to add environment variables:
1. Go to Project Settings → Environment Variables
2. Add variables for Production, Preview, or Development
3. Redeploy for changes to take effect

## Deployment Configuration

The `vercel.json` file includes:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Configuration Explained

- **buildCommand**: Compiles TypeScript and builds optimized production bundle
- **outputDirectory**: Where Vite outputs the production build
- **rewrites**: Ensures all routes redirect to index.html for SPA routing
- **framework**: Tells Vercel to use Vite-specific optimizations

## Performance Optimizations

The build includes:
- ✅ Tree-shaking and dead code elimination
- ✅ Code splitting for better caching
- ✅ Minified CSS (15.77 kB gzipped)
- ✅ Minified JavaScript (86.98 kB gzipped)
- ✅ Optimized images (doctor.png)
- ✅ Google Fonts optimization

## Automatic Deployments

Once connected to Vercel:
- **Production Deployments**: Triggered by pushes to `main` branch
- **Preview Deployments**: Triggered by pull requests
- **Instant Rollbacks**: Available in Vercel dashboard

## Build Output

Current production build stats:
```
dist/index.html                   0.46 kB │ gzip:  0.29 kB
dist/assets/doctor-BbZoBeDb.png   180.89 kB
dist/assets/index-04dvSMlA.css    15.77 kB │ gzip:  3.87 kB
dist/assets/index-JFnm1tLu.js     294.37 kB │ gzip: 86.98 kB
```

## Troubleshooting

### Build Fails

If the build fails on Vercel:
1. Check that all dependencies are in `package.json`
2. Ensure Node.js version is 18+ (check in Project Settings)
3. Review build logs for specific errors
4. Test locally with `npm run build`

### Routing Issues

If pages don't load correctly:
1. Verify `vercel.json` rewrites are configured
2. Ensure all internal links use relative paths
3. Check browser console for errors

### Missing Assets

If images or fonts don't load:
1. Verify assets are in `public/` or `src/assets/`
2. Check import paths in components
3. Ensure Vite is processing assets correctly

## Monitoring

After deployment, monitor:
- **Analytics**: Vercel Analytics (available in dashboard)
- **Performance**: Core Web Vitals
- **Errors**: Real-time error tracking
- **Usage**: Bandwidth and function invocations

## Security

Recommended security headers (can be added to `vercel.json`):
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

## Next Steps

After successful deployment:
1. Test the live site thoroughly
2. Set up a custom domain (optional)
3. Enable Vercel Analytics
4. Configure automatic GitHub deployments
5. Set up preview environments for testing

## Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

---

## Current Repository

**GitHub**: `https://github.com/Sanlc10/doc_website_template.git`

**Branch**: `main`

**Status**: ✅ Ready for deployment

---

*Last Updated: 2025*
