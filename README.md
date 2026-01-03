# Shopify Landing Page

A modern, responsive landing page built with **Vite**, **React**, **TypeScript**, and **Tailwind CSS**. Deployed on GitHub Pages with a custom domain.

## 🌐 Live Website

**https://shopify-landing.rhytmelo.com/**

## 📋 Prerequisites

Before you start, ensure you have the following installed:
- **Node.js** 18.x or higher
- **npm** or **yarn**
- **Git**

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/vite-react-typescript-starter.git
cd vite-react-typescript-starter
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

This will start a local development server at `http://localhost:5173`

## 📚 Available Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start local development server with hot reload |
| `npm run build` | Build for production (creates `dist/` folder) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |
| `npm run typecheck` | Run TypeScript type checking |

## 📁 Project Structure

```
├── src/
│   ├── components/        # React components
│   ├── pages/            # Page components
│   ├── styles/           # CSS/Tailwind styles
│   ├── App.tsx           # Main App component
│   └── main.tsx          # Entry point
├── public/               # Static assets
├── index.html           # HTML entry point
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── eslint.config.js     # ESLint configuration
└── package.json         # Project dependencies
```

## 🛠 Tech Stack

- **Vite** - Ultra-fast build tool and dev server
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code quality linting
- **Supabase JS** - Backend integration (optional)
- **Lucide React** - Icon library

## 📝 Development Workflow

### Code Quality

Before committing, make sure your code passes all checks:

```bash
# Type check
npm run typecheck

# Lint code
npm run lint
```

### Commits with Skip Deploy

To run code checks without deploying to production, add `[skip ci]` to your commit message:

```bash
git commit -m "WIP: Feature X [skip ci]"
```

This will:
- ✅ Run TypeScript checks
- ✅ Run ESLint
- ✅ Build the project
- ❌ Skip deployment to GitHub Pages

### Normal Deployment

Push commits without `[skip ci]` to automatically deploy:

```bash
git commit -m "Fix: Update landing page"
git push origin main
```

This will automatically:
1. Run type checks
2. Lint code
3. Build the project
4. Deploy to GitHub Pages
5. Update https://shopify-landing.rhytmelo.com/

## 🌍 GitHub Pages Configuration

The project is configured to deploy to GitHub Pages with:
- **Custom Domain:** https://shopify-landing.rhytmelo.com/
- **Base Path:** `/` (root path for custom domain)
- **Automatic Deployment:** On push to `main` branch

### GitHub Pages Setup

1. Go to **Settings** → **Pages**
2. Ensure **Source** is set to "GitHub Actions"
3. Custom domain is configured as `shopify-landing.rhytmelo.com`

## 🔄 CI/CD Pipeline

The project uses GitHub Actions for automated testing and deployment. The workflow:

1. **Check Stage** - TypeScript and ESLint validation
2. **Build Stage** - Vite build and output verification
3. **Deploy Stage** - Deploy to GitHub Pages (skipped if `[skip ci]` in commit)

Check workflow status in the **Actions** tab of your repository.

## 🎨 Styling

This project uses **Tailwind CSS** for styling. To customize:

1. Edit `tailwind.config.js` for configuration
2. Use Tailwind utility classes in your JSX
3. Add custom CSS in `src/styles/` if needed

Example:
```jsx
<div className="bg-blue-500 text-white p-4 rounded-lg">
  Styled with Tailwind
</div>
```

## 🐛 Troubleshooting

### Blank Screen on Production

**Issue:** Website shows blank page after deployment

**Solutions:**
1. Clear browser cache (Ctrl+Shift+Delete)
2. Check browser console for errors (F12)
3. Verify `base` in `vite.config.ts` is set to `/`
4. Check GitHub Pages settings point to correct domain

### Build Fails

**Issue:** `npm run build` fails

**Solutions:**
1. Run `npm install` to ensure all dependencies are installed
2. Run `npm run typecheck` to check for TypeScript errors
3. Run `npm run lint` to check for linting issues
4. Delete `node_modules/` and `.npm` cache, then reinstall

### Hot Reload Not Working

**Issue:** Changes don't reflect in dev server

**Solutions:**
1. Restart dev server: `npm run dev`
2. Check file is being saved
3. Ensure you're editing in `src/` folder, not `dist/`

## 📖 Documentation

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

## 🤝 Contributing

1. Create a new branch: `git checkout -b feature/your-feature`
2. Make your changes and commit: `git commit -m "Add: Your feature"`
3. Push to branch: `git push origin feature/your-feature`
4. Submit a Pull Request

All code must pass linting and type checks before merging.

## 📞 Support

For issues or questions:
1. Check existing GitHub Issues
2. Create a new Issue with details
3. Include error messages and steps to reproduce

## 📄 License

This project is private and for internal use only.

---

**Happy coding! 🚀**