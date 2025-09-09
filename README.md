# Portfolio - Rickson Lima

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases my projects, skills, and provides ways to get in touch.

## 🚀 Features

- **Modern Design**: Clean, responsive layout with dark/light mode support
- **Project Showcase**: Display of key projects with descriptions and links
- **Contact Information**: Easy access to GitHub, LinkedIn, and Cal.com scheduling
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Vite**: Fast build tool and development server

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Build Tool**: Vite
- **Linting**: ESLint
- **Package Manager**: npm

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18.0 or higher)
- **npm** (comes with Node.js)

You can check your versions by running:
```bash
node --version
npm --version
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

### 4. Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### 5. Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
│   ├── dev.jpg           # Favicon
│   ├── github.png        # GitHub icon
│   ├── linkedin.png      # LinkedIn icon
│   ├── lemonfy.svg       # Project logo
│   └── ...
├── src/
│   ├── components/       # React components
│   │   ├── about.tsx     # About section
│   │   ├── contact.tsx   # Contact links
│   │   ├── project.tsx   # Project cards
│   │   └── section.tsx   # Section wrapper
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
├── vite.config.ts       # Vite configuration
└── tsconfig.json        # TypeScript configuration
```

## 🎨 Customization

### Adding New Projects

To add a new project, edit the `src/App.tsx` file and add a new `Project` component:

```tsx
<Project
  title="Your Project Name"
  description="Project description"
  href="https://your-project-url.com"
  image="/path-to-image.png"
/>
```

### Modifying Contact Information

Update the contact links in `src/App.tsx`:

```tsx
<Contact
  label="Your Platform"
  href="https://your-profile-url.com"
  icon="/your-icon.png"
/>
```

### Styling

The project uses Tailwind CSS for styling. You can:

- Modify `src/index.css` for global styles
- Update `tailwind.config.js` for custom theme configuration
- Use Tailwind utility classes directly in components

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

This project can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect your repository
- **GitHub Pages**: Use GitHub Actions to build and deploy
- **Any static hosting**: Upload the contents of the `dist` folder


## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. Feel free to fork it and style on your own way ✨

## 📞 Contact

- **GitHub**: [@rickson-lima](https://github.com/rickson-lima)
- **LinkedIn**: [Rickson Lima](https://www.linkedin.com/in/rickson-lima/)
- **Schedule a meeting**: [Cal.com](https://cal.com/rickson-lima-6tlawq/meeting?overlayCalendar=true)

---

Made with ❤️ by Rickson Lima