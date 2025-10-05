# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal visual resume website for Rhea Singh. It's a single-page HTML application with interactive eye-tracking avatar functionality, designed as a creative alternative to a traditional resume.

## Architecture

### Main Components

**index.html** - Primary landing page featuring:
- Interactive avatar with eye-tracking (pupils follow cursor on desktop/fine pointer devices)
- Card-based layout with name, subtitle, and navigation links
- Responsive design optimized for both mobile and desktop
- Accessibility considerations (reduced motion preferences, coarse pointer detection)

**archive/index.html** - Previous resume version with more traditional layout:
- Full resume content (education, experience, skills, extracurricular)
- Animated gradient background and card-based sections
- Profile image with floating animation

### Assets Structure

Avatar system uses layered PNG images in `/assets/`:
- `avatar_eyes-transparent.png` - Main avatar with transparent eye holes
- `avatar_eye-background.png` - Eye backgrounds
- `avatar_eye-pupil.png` - Pupil graphics
- `avatar_eyeliner.png` - Eye detail layer
- `avatar_base-complete.png` - Complete avatar base

## Interactive Features

### Eye-Tracking System

The current implementation uses:
- Separate positioned `.pupil` elements (left/right) underneath the transparent-eyed avatar
- Mouse movement within `.stage` triggers pupil repositioning
- Movement clamped to circular radius defined by `--pupil-radius` CSS variable
- requestAnimationFrame throttling for performance
- Respects `prefers-reduced-motion` and only activates on `pointer: fine` devices

Key CSS variables for eye positioning (in `:root`):
```css
--eye-left-x: 43.2%;
--eye-left-y: 35.3%;
--eye-right-x: 56.8%;
--eye-right-y: 35.3%;
--pupil-size: 12px;
--pupil-radius: 2.5px;
```

## Development

### No Build Process
This is a static HTML site with no build system, package.json, or dependencies. Simply open `index.html` in a browser.

### File Structure
```
/
├── index.html          # Current visual resume
├── archive/
│   └── index.html      # Previous traditional resume
└── assets/             # Avatar image layers
```

### Making Changes

When modifying the avatar or eye-tracking:
- Adjust CSS variables in `:root` if changing eye positions
- Pupil movement is calculated relative to stage center in `clampMove()` function
- Eye calibration requires testing cursor movement across different screen sizes

### Design System

Current page uses:
- Soft pink/purple radial gradient background
- Glassmorphic card (`rgba(255,255,255,0.75)` with `backdrop-filter: blur(8px)`)
- System font stack prioritizing native UI fonts
- 24px border radius for card, 12px for buttons

Archive page uses:
- Animated purple gradient background (`#667eea` to `#764ba2`)
- More traditional sectioned resume layout
- Hover effects on experience/education items
