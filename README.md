# Vamshi Krishna Portfolio

A modern, responsive portfolio website showcasing UI/UX design and full-stack development work.

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Netlify

## 🛠️ Features

- Responsive design for all device sizes
- Smooth scrolling navigation
- Modern gradient designs and animations
- Portfolio showcase with filtering
- Contact form integration
- Optimized for performance and SEO

## 📁 Project Structure

```
portfolio/
├── public/               # Static assets
│   ├── dp.jpg           # Profile picture
│   ├── nike.png         # Nike project image
│   ├── mc.png           # McDonald's project image
│   └── _redirects       # Netlify redirects
├── src/
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── netlify.toml         # Netlify configuration
└── package.json         # Dependencies and scripts
```

## 🏃‍♂️ Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🚀 Deployment on Netlify

### Method 1: Git Integration (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Netlify](https://netlify.com) and sign in
3. Click "New site from Git"
4. Connect your repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 18
6. Deploy!

The `netlify.toml` file will automatically configure the build settings.

### Method 2: Manual Deployment

1. Build the project locally:
   ```bash
   npm run build
   ```
2. Go to [Netlify](https://netlify.com)
3. Drag and drop the `dist` folder to deploy

## 📝 Build Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🔧 Configuration Files

- `netlify.toml` - Netlify deployment configuration
- `public/_redirects` - Routing for single-page application
- `vite.config.ts` - Vite build configuration
- `tailwind.config.js` - Tailwind CSS configuration

## 🌟 Portfolio Sections

1. **Hero Section** - Introduction and call-to-action
2. **About** - Personal information and skills
3. **Services** - Available services (UI/UX, Development, Video Editing)
4. **Portfolio** - Project showcase with filtering
5. **Contact** - Contact information and social links

## 📧 Contact

- **Email**: vamshikrishnavilasagar@gmail.com
- **LinkedIn**: [Vamshi Krishna Vilasagar](https://linkedin.com/in/vamshi-krishna-vilasagar)
- **GitHub**: [Vamshivvkrishna](https://github.com/Vamshivvkrishna)

## 📄 License

This project is personal portfolio - All rights reserved.
