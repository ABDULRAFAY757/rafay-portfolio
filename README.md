# Abdul Rafay - Portfolio Website

A modern, responsive portfolio website showcasing my work as a Data Scientist, Machine Learning Engineer, and Full Stack Developer. Built with Next.js, React, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Modern UI/UX**: Beautiful, responsive design with smooth animations
- **Full Stack**: Built with Next.js 14 (App Router) for both frontend and backend
- **Performance Optimized**: Fast loading times and optimized for SEO
- **Interactive Components**: Animated sections, smooth scrolling, and interactive elements
- **Contact Form**: Ready-to-use contact form (can be integrated with EmailJS or backend API)
- **API Routes**: RESTful API endpoints for portfolio data
- **Mobile Responsive**: Works seamlessly on all devices

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment Ready**: Optimized for Vercel, Netlify, or any hosting platform

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
portfolio/
├── app/
│   ├── api/
│   │   └── portfolio/
│   │       └── route.ts          # API endpoint for portfolio data
│   ├── layout.tsx                 # Root layout with navbar and footer
│   ├── page.tsx                   # Home page
│   └── globals.css                # Global styles
├── components/
│   ├── Navbar.tsx                 # Navigation bar
│   ├── Footer.tsx                 # Footer component
│   ├── Hero.tsx                   # Hero section
│   ├── About.tsx                  # About section
│   ├── Skills.tsx                 # Skills section
│   ├── Experience.tsx             # Experience section
│   ├── Projects.tsx               # Projects section
│   └── Contact.tsx                # Contact section
├── public/                        # Static assets
├── package.json                   # Dependencies
├── tailwind.config.js             # Tailwind configuration
├── tsconfig.json                  # TypeScript configuration
└── next.config.js                 # Next.js configuration
```

## 🎨 Customization

### Update Personal Information

1. **Update portfolio data**: Edit `app/api/portfolio/route.ts` to update your information
2. **Update components**: Modify individual component files to customize content
3. **Update metadata**: Edit `app/layout.tsx` for SEO and metadata

### Styling

- **Colors**: Modify `tailwind.config.js` to change the color scheme
- **Fonts**: Update fonts in `app/layout.tsx`
- **Components**: Edit individual component files for styling changes

### Contact Form

To enable the contact form:

1. Set up EmailJS account (or use your own backend API)
2. Update `components/Contact.tsx` with your EmailJS credentials
3. Or create a backend API endpoint and update the form submission handler

## 📱 Sections

1. **Hero**: Introduction with call-to-action buttons
2. **About**: Personal information and background
3. **Skills**: Technical skills organized by category
4. **Experience**: Work experience timeline
5. **Projects**: Featured projects showcase
6. **Contact**: Contact form and information

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with default settings

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

### Deploy to Other Platforms

```bash
npm run build
npm start
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

- **Email**: rafayibrar2001@gmail.com
- **Phone**: +966 59 95 19592
- **Location**: Riyadh, Saudi Arabia
- **LinkedIn**: [abdulrafayhimself](https://www.linkedin.com/in/abdulrafayhimself/)
- **GitHub**: [ABDULRAFAY757](https://github.com/ABDULRAFAY757)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations with [Framer Motion](https://www.framer.com/motion/)

---

Made with ❤️ by Abdul Rafay

