# NeonBloom Labs – Minimalist Launch Studio Landing Page

A crafted Next.js landing page for NeonBloom Labs, a minimalistic launch studio for visionary founders. The site features a refined hero, modular feature storytelling, founder testimonials, and a luminous CTA flow designed for high-converting contact capture.

## Tech Stack
- Next.js 14 (App Router)
- React 18
- Modern CSS (glassmorphism, responsive grid, custom gradients)

## Getting Started
```bash
npm install
npm run dev
```
The app runs on `http://localhost:3000`.

## Production Build
```bash
npm run build
npm start
```

## Deployment
Once the project builds without errors, deploy to Vercel:
```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-5b0dcb1f
```

## Structure
```
app/
  layout.js      # Global layout + font setup
  page.js        # Landing page content
  globals.css    # Site-wide styles
public/
```

## Customization
Adjust content and sections inside `app/page.js`, and refine the design system in `app/globals.css` to match your brand voice, palette, and motion language.
