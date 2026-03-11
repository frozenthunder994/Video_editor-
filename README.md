# Video Editor Portfolio - Frame & Story

A fully functional, cinematic portfolio website built with Next.js, Framer Motion, and TypeScript. Converted from a premium UI design.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Vanilla CSS (Global Design System)
- **Deployment**: Optimized for Vercel/Netlify

## Project Structure

- `src/app`: Multi-page routes (Home, About, Portfolio, Services, Contact)
- `src/components`: Modular UI components including `Marquee`, `ProjectCard`, `ProjectModal`, and `AnimatedCounter`.
- `public/`: Placeholders for images and videos.

## Placeholders to Replace

Search for these placeholders in the codebase and replace them with your actual data:

- `[YOUR_NAME]`: Your full name (Contact Page)
- `[YOUR_EMAIL]`: Your professional email (Contact Page, Footer)
- `[YOUR_PHONE]`: Your contact number (Contact Page)
- `[YOUR_LOCATION]`: Your base location (Contact Page)
- `[PROFILE_PHOTO]`: Upload your photo to `public/` and update the `src` in `Contact/page.tsx`.
- `[PASTE_GOOGLE_DRIVE_PORTFOLIO_LINK]`: Link to your full portfolio archive (Portfolio Page).
- `[INSTAGRAM_LINK]`, `[YOUTUBE_LINK]`, `[LINKEDIN_LINK]`: Your social media links (Footer).

## Getting Started

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Deployment

This project is ready for instant deployment:

#### Vercel (Recommended)
1. Push your code to a GitHub repository.
2. Connect the repository to [Vercel](https://vercel.com/).
3. Vercel will automatically detect the Next.js project and deploy it.

#### Netlify
1. Push your code to a GitHub repository.
2. Connect to [Netlify](https://www.netlify.com/).
3. The contact form is already configured with `data-netlify="true"` for automatic form handling.

## Performance Optimization

- All images and videos use lazy loading where applicable.
- Framer Motion animations are hardware-accelerated.
- Next.js Font optimization handles the premium typography.
