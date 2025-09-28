# Personal Portfolio Website

A modern, responsive portfolio website built with React and TailwindCSS. Features smooth animations, clean design, and full responsiveness across all devices.

## Features

- **Modern Design**: Clean, minimal, and professional aesthetic
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Interactive Navigation**: Smooth scrolling navigation with active states
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Featured and regular project displays
- **Achievements Section**: Awards, certifications, and milestones
- **Resume Download**: Easy access to downloadable resume

## Sections

- **Home**: Welcome message with name, tagline, and call-to-action buttons
- **About Me**: Personal bio, skills, and experience statistics
- **Projects**: Project cards with descriptions, technologies, and links
- **Achievements**: Awards, certificates, and professional milestones
- **Contact**: Contact form and social media links
- **Resume**: Download section for resume PDF

## Technologies Used

- **React 18**: Modern React with hooks
- **TailwindCSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for smooth transitions
- **React Icons**: Icon library for consistent iconography
- **Responsive Design**: Mobile-first approach

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd myportfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Customization

### Personal Information

Update the following files with your personal information:

1. **Home Component** (`src/components/Home.js`):
   - Change name and tagline
   - Update social media links
   - Modify description text

2. **About Component** (`src/components/About.js`):
   - Update bio text
   - Modify skills array
   - Change statistics

3. **Projects Component** (`src/components/Projects.js`):
   - Replace with your actual projects
   - Update project images, descriptions, and links
   - Modify technology tags

4. **Achievements Component** (`src/components/Achievements.js`):
   - Replace with your actual achievements
   - Update dates and descriptions

5. **Contact Component** (`src/components/Contact.js`):
   - Update contact information
   - Modify social media links

### Styling

- Colors can be customized in `tailwind.config.js`
- Fonts can be changed in `src/index.css`
- Component-specific styles are in individual component files

### Adding Your Resume

1. Place your resume PDF in the `public` folder
2. Rename it to `resume.pdf`
3. Update the download filename in `src/components/Resume.js`

## Deployment

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Configure custom domain if needed

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "homepage": "https://yourusername.github.io/your-repo-name",
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
3. Run: `npm run deploy`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/myportfolio](https://github.com/yourusername/myportfolio)
