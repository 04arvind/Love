# 💕 Valentine's Love Website

A beautiful, romantic, multi-page Valentine's Day website built with Next.js, featuring smooth animations, interactive elements, and heartfelt messages.

## ✨ Features

### 🏠 Landing Page
- Stunning hero section with gradient backgrounds
- Floating heart animations
- Smooth fade-in transitions
- "Open My Heart" call-to-action button

### 💖 Why I Love You Page
- Interactive timeline showcasing reasons why you're loved
- Scroll-triggered animations
- Beautiful romantic quotes
- Responsive card layouts

### 💬 Compliments Generator
- Random compliment generator (15+ unique compliments)
- Typewriter text effect
- Heart animations on completion
- Smooth transitions between compliments

### 💍 Proposal Page
- Interactive "Will you be my Valentine?" question
- Playful "No" button that runs away on hover
- Confetti celebration on "Yes" click
- Heartfelt acceptance message

### 📬 Love Letter Modal
- Floating envelope button (bottom-left)
- Beautiful modal with romantic letter
- Customizable content
- Smooth open/close animations

### 🎵 Music Player
- Floating music icon (bottom-right)
- Displays romantic messages on click
- Optional background music support
- Animated popup messages

### 🎨 Global Features
- Cursor heart trail effect
- Soft pastel color palette (pink, lavender, cream)
- Responsive design (mobile-first)
- Custom scrollbar styling
- Smooth page transitions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/04arvind/Love.git
cd Love
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: JavaScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Effects**: canvas-confetti
- **Fonts**: Google Fonts (Dancing Script, Outfit)

## 📁 Project Structure

```
/app
  /page.js                → Landing Page
  /story/page.js          → Why I Love You Page
  /compliments/page.js    → Compliment Generator
  /proposal/page.js       → Proposal Page
  /layout.js              → Global layout
  /globals.css            → Tailwind + global styles

/components
  HeroSection.js          → Landing hero section
  FloatingHearts.js       → Background heart animation
  Timeline.js             → Timeline container
  TimelineCard.js         → Individual timeline cards
  ComplimentBox.js        → Compliment display logic
  TypewriterText.js       → Typewriter effect
  ProposalButtons.js      → Yes/No button logic
  ConfettiEffect.js       → Confetti celebration
  LoveLetterModal.js      → Love letter popup
  CursorHearts.js         → Mouse trail hearts
  MusicPlayer.js          → Music/message player

/data
  content.js              → All text content (editable)

/styles
  animations.css          → Custom CSS animations

/public
  /music                  → Background music (optional)
  /icons                  → Heart SVG icons
```

## 🎨 Customization

### Edit Content
All text content is centralized in `data/content.js`:
- **memories**: Reasons why you love them
- **shayaris**: Romantic quotes
- **compliments**: Compliment messages
- **loveLetter**: Love letter content

### Change Colors
Modify the color scheme in `app/globals.css` and Tailwind classes throughout components.

### Add Background Music
Place an MP3 file at `/public/music/bgm.mp3` to enable background music.

## 🌐 Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click

### Other Platforms
- **Netlify**: Connect GitHub repo and deploy
- **GitHub Pages**: Use `next export` for static export
- **Railway/Render**: Deploy as Node.js app

## 💝 Made With Love

Created with care for someone special. Feel free to fork and customize for your own Valentine!

## 📄 License

MIT License - Feel free to use this for your own romantic gestures!

---

**Note**: This is a frontend-only project with no backend, database, or authentication. All interactions happen client-side for simplicity and ease of deployment.
