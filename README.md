# Modern Resume Builder

[![Astro](https://img.shields.io/badge/Built%20with-Astro-FF5D01.svg?style=flat-square)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue.svg?style=flat-square)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-38B2AC.svg?style=flat-square)](https://tailwindcss.com/)
[![Bun](https://img.shields.io/badge/Package%20Manager-Bun-black.svg?style=flat-square)](https://bun.sh)

A modern, type-safe resume builder created with Astro, TypeScript, and TailwindCSS. Generate a beautiful, responsive resume from JSON data with strong type checking and component-based architecture.

## 🚀 Features

- **Type-Safe Resume Data**: Strongly typed resume structure using TypeScript and Zod validation
- **Component-Based Design**: Modular components for each resume section
- **Responsive Layout**: Mobile-first design using TailwindCSS
- **Easy Customization**: Simple JSON-based content management
- **Fast Performance**: Static site generation with Astro
- **SEO Optimized**: Built-in meta tags and semantic HTML

## 📋 Prerequisites

- [Bun](https://bun.sh) installed on your system
- Node.js 18.x or higher

## 🛠 Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/modern-resume-builder.git
cd modern-resume-builder
```

2. Install dependencies:

```bash
bun install
```

3. Start the development server:

```bash
bun run dev
```

Visit `http://localhost:4321` to see your resume.

## 📝 Usage

### 1. Configure Your Resume Data

Edit `src/resume.json` with your information:

```json
{
  "name": "Your Name",
  "title": "Your Title",
  "contact": {
    "email": "your.email@example.com",
    "website": "https://yourwebsite.com",
    "linkedin": "https://linkedin.com/in/yourprofile",
    "github": "https://github.com/yourusername"
  }
  // ... other sections
}
```

### 2. Validate Resume Data

The project includes a Zod validation script to ensure your resume data matches the expected schema:

```bash
bun run scripts/validate-resume.ts
```

This will:

- Validate all fields against the schema
- Check date formats (YYYY-MM-DD)
- Verify URL formats
- Validate email addresses
- Show resume statistics
- Exit with error if validation fails

### 3. Type Definitions

The resume data structure is defined in `src/types/Resume.d.ts`:

```typescript
export type Resume = {
  name: string;
  title: string;
  contact: {
    email: string;
    website: string;
    linkedin: string;
    github: string;
  };
  // ... other type definitions
};
```

### 4. Customize Components

Each section of the resume is a separate component in `src/components/`:

- `Header.astro`: Contact information and title
- `About.astro`: Professional summary
- `Experience.astro`: Work history
- `Education.astro`: Educational background
- `Projects.astro`: Portfolio projects
- `AfterHours.astro`: Additional activities and interests

## 🔧 Configuration

### Astro Configuration

The project uses Astro's configuration file (`astro.config.mjs`):

```javascript
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [react()],
  // Add custom configuration here
});
```

### TailwindCSS Configuration

Customize styling in `tailwind.config.js`:

```javascript
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      // Add custom theme configuration here
    },
  },
  plugins: [],
};
```

## 🚀 Deployment

1. Build the project:

```bash
bun run build
```

2. Preview the build:

```bash
bun run preview
```

3. Deploy the `dist` directory to your preferred hosting platform:

- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

## 🧪 Testing

The project includes type checking and data validation:

```bash
# Run type checking
bunx tsc --noEmit

# Validate resume data
bun run scripts/validate-resume.ts
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Roadmap

- [ ] Add PDF export functionality
- [ ] Implement additional resume templates
- [ ] Add dark mode support
- [ ] Include print-specific styling
- [ ] Add internationalization support

## 🐛 Known Issues

- None currently reported

## 📦 Dependencies

- Astro v5.2.5
- React v19.0.0
- TailwindCSS v4.0.3
- TypeScript (included with Astro)
- Zod (for schema validation)

## 🙏 Acknowledgments

- [Astro Documentation](https://docs.astro.build)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Bun Documentation](https://bun.sh/docs)
- [Zod Documentation](https://zod.dev)

## 📧 Contact

For questions and support, please open an issue in the GitHub repository.

---

Built with ❤️ using [Astro](https://astro.build) and [Bun](https://bun.sh)
