# ExploraHead Travel Agency - Deployment Guide

This document covers the complete deployment workflow, environment configuration, and management strategies for the ExploraHead Travel Agency website on Vercel.

---

## Table of Contents

1. [Initial Vercel Setup](#initial-vercel-setup)
2. [Environment Variables](#environment-variables)
3. [Branch Strategy & Deployment Flow](#branch-strategy--deployment-flow)
4. [Managing Updates](#managing-updates)
5. [Rollback Strategy](#rollback-strategy)
6. [Monitoring & Alerts](#monitoring--alerts)
7. [Troubleshooting](#troubleshooting)

---

## Initial Vercel Setup

### Step 1: Connect Repository

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Select the `explorahead-travel-agency-website` repository
4. Vercel auto-detects Next.js settings:
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
   - **Install Command:** `npm ci`

### Step 2: Configure Environment Variables

Before deploying, add all required environment variables in the Vercel dashboard:

1. Go to **Project Settings** → **Environment Variables**
2. Add each variable (see [Environment Variables](#environment-variables) section)
3. Select which environments need each variable (Production, Preview, Development)

### Step 3: Configure Domain

1. Go to **Project Settings** → **Domains**
2. Add your custom domain: `explorahead.com`
3. Add `www.explorahead.com` and configure redirect to root domain
4. Vercel automatically provisions SSL certificates

### Step 4: Enable Required Features

1. **Analytics** (optional): Project Settings → Analytics → Enable
2. **Speed Insights** (optional): Project Settings → Speed Insights → Enable

---

## Environment Variables

### Required Variables

| Variable | Environment | Description |
|----------|-------------|-------------|
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT` | All | Contact form submission endpoint |

### Recommended Variables

| Variable | Environment | Description |
|----------|-------------|-------------|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Production | Google Analytics 4 ID |
| `NEXT_PUBLIC_SENTRY_DSN` | All | Client-side error tracking |
| `SENTRY_DSN` | All | Server-side error tracking |
| `SENTRY_ORG` | All | Sentry organization slug |
| `SENTRY_PROJECT` | All | Sentry project name |
| `SENTRY_AUTH_TOKEN` | All | Auth token for source maps |

### Optional Variables

| Variable | Environment | Description |
|----------|-------------|-------------|
| `NEXT_PUBLIC_BASE_URL` | Production | Override default base URL |
| `NEXT_PUBLIC_CAMPAIGN` | All | Active campaign for media |

### Setting Variables via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Add environment variable
vercel env add NEXT_PUBLIC_FORMSPREE_ENDPOINT

# Pull variables to local .env.local
vercel env pull .env.local
```

---

## Branch Strategy & Deployment Flow

This project uses a **staging → production promotion** workflow:

```
feature/* ──┬──> staging ──> main (production)
            │
hotfix/*  ──┘
```

### Branches

| Branch | Purpose | Vercel Environment |
|--------|---------|-------------------|
| `main` | Production releases | Production |
| `staging` | Pre-production testing | Preview |
| `feature/*` | New features | Preview |
| `hotfix/*` | Emergency fixes | Preview |

### Workflow

1. **Feature Development**
   ```bash
   git checkout -b feature/new-feature staging
   # Make changes, commit
   git push origin feature/new-feature
   # Create PR to staging
   ```

2. **Testing on Staging**
   - Merge feature PRs into `staging`
   - Vercel creates preview deployment automatically
   - Test at: `staging-explorahead.vercel.app`

3. **Production Deployment**
   ```bash
   # After staging is tested and approved
   git checkout main
   git merge staging
   git push origin main
   # Vercel auto-deploys to production
   ```

### GitHub Branch Protection Rules

Configure these in **GitHub → Settings → Branches → Add rule**:

**For `main` branch:**
- ✅ Require pull request reviews before merging
- ✅ Require status checks to pass (CI workflow)
- ✅ Require branches to be up to date before merging
- ✅ Do not allow bypassing the above settings

**For `staging` branch:**
- ✅ Require status checks to pass (CI workflow)

---

## Managing Updates

### Content Updates (Translations)

1. Edit files in `messages/` directory
2. Commit and push to `staging`
3. Test preview deployment
4. Merge to `main`

```bash
# Example: Update English translations
git checkout staging
# Edit messages/en.json
git add messages/en.json
git commit -m "content: update homepage hero text"
git push origin staging
# After testing, merge to main
```

### Dependency Updates

1. Update dependencies locally
2. Run full test suite
3. Push to staging
4. Test preview deployment
5. Merge to main

```bash
# Check for updates
npm outdated

# Update dependencies
npm update

# Or update specific package
npm install package-name@latest

# Test locally
npm run build
npm run test
npm run test:e2e

# Push to staging
git checkout staging
git add package.json package-lock.json
git commit -m "chore: update dependencies"
git push origin staging
```

### Code Changes

1. Create feature branch from `staging`
2. Make changes and test locally
3. Push and create PR to `staging`
4. CI runs automatically
5. Review and merge to `staging`
6. Test preview deployment
7. Create PR from `staging` to `main`
8. Merge to production

---

## Rollback Strategy

Vercel maintains a history of all deployments, making rollbacks instant.

### Option 1: Instant Rollback (Recommended)

1. Go to **Vercel Dashboard** → **Deployments**
2. Find the last working deployment
3. Click the **"..."** menu → **"Promote to Production"**
4. Confirm the rollback

This takes effect immediately (< 1 second).

### Option 2: Git Revert

If you need to fix the issue in code:

```bash
# Revert the problematic commit
git checkout main
git revert <commit-hash>
git push origin main

# Vercel auto-deploys the reverted code
```

### Option 3: Redeploy Previous Commit

```bash
# Find the last good commit
git log --oneline

# Reset main to that commit (careful!)
git checkout main
git reset --hard <good-commit-hash>
git push --force origin main
```

⚠️ **Warning:** Force pushing rewrites history. Use Option 1 or 2 when possible.

### Post-Rollback Checklist

- [ ] Verify production site is working
- [ ] Check error monitoring (Sentry) for new issues
- [ ] Notify team of rollback
- [ ] Create issue to track the fix
- [ ] Investigate root cause

---

## Monitoring & Alerts

### Sentry Error Monitoring

1. **Dashboard:** [sentry.io](https://sentry.io) → Your Project
2. **Alerts:** Configure in Sentry → Alerts → Create Alert Rule
3. **Recommended alerts:**
   - High error volume (> 10 errors/hour)
   - New error types
   - Performance degradation

### Vercel Analytics

1. **Web Vitals:** Project → Analytics
2. **Metrics tracked:**
   - LCP (Largest Contentful Paint)
   - FID (First Input Delay)
   - CLS (Cumulative Layout Shift)
   - TTFB (Time to First Byte)

### Google Analytics

1. **Dashboard:** [analytics.google.com](https://analytics.google.com)
2. **Key metrics:**
   - Real-time visitors
   - Page views
   - User demographics
   - Conversion tracking

### Uptime Monitoring (Recommended)

Consider adding external monitoring:
- [UptimeRobot](https://uptimerobot.com) (free tier available)
- [Pingdom](https://pingdom.com)
- [Better Uptime](https://betteruptime.com)

---

## Troubleshooting

### Build Failures

1. Check build logs in Vercel dashboard
2. Common issues:
   - Missing environment variables
   - TypeScript errors
   - Dependency conflicts

```bash
# Test build locally
npm run build

# Check for TypeScript errors
npx tsc --noEmit
```

### Environment Variable Issues

1. Verify variables are set in Vercel dashboard
2. Check correct environment (Production/Preview/Development)
3. Variables starting with `NEXT_PUBLIC_` are exposed to browser

```bash
# Pull production env vars locally
vercel env pull .env.local --environment=production
```

### Preview Deployment Not Working

1. Check branch protection rules
2. Verify GitHub integration is connected
3. Check Vercel deployment logs

### SSL/Domain Issues

1. Go to Vercel → Project Settings → Domains
2. Check DNS configuration
3. Wait for SSL provisioning (can take up to 24 hours)

### Cache Issues

```bash
# Force redeploy without cache
vercel --force

# Or in dashboard: Deployments → Redeploy → Clear Cache
```

---

## Quick Reference

### Useful Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server

# Testing
npm run test         # Run unit tests
npm run test:e2e     # Run E2E tests
npm run lint         # Run linter

# Vercel CLI
vercel               # Deploy preview
vercel --prod        # Deploy production
vercel env pull      # Pull env vars
vercel logs          # View logs
```

### Important URLs

| Resource | URL |
|----------|-----|
| Production | https://explorahead.com |
| Vercel Dashboard | https://vercel.com/dashboard |
| Sentry | https://sentry.io |
| Google Analytics | https://analytics.google.com |
| Formspree | https://formspree.io |

---

## Checklist: Pre-Launch

- [ ] All environment variables configured
- [ ] Domain configured and SSL active
- [ ] Sentry project created and DSN added
- [ ] Google Analytics property created
- [ ] Formspree form created
- [ ] Privacy/Terms/Cookies pages reviewed by legal
- [ ] Contact form tested
- [ ] All pages tested on mobile
- [ ] Lighthouse score > 90 for all metrics
- [ ] Sitemap accessible at /sitemap.xml
- [ ] Robots.txt accessible at /robots.txt
