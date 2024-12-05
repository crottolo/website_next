# Persevida SL Website

A modern, responsive website built with Next.js 15 for Persevida SL, a software development company specializing in Odoo solutions.

## Technologies

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with shadcn/ui
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Authentication**: NextAuth.js
- **Deployment**: Vercel

## Features

- 🌙 Dark/Light mode support
- 📱 Fully responsive design
- ⚡ Server-side rendering
- 🎨 Modern UI with gradient animations
- 🔒 Authentication system
- 🌍 SEO optimized

## Project Structure

```plaintext
src/
├── app/                    # Next.js app router pages
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── odoo/              # Odoo solutions page
│   └── ...
├── components/            # Reusable components
│   ├── ui/               # UI components
│   ├── site-header.tsx   # Main navigation
│   └── site-footer.tsx   # Footer component
├── lib/                   # Utility functions
├── styles/               # Global styles
└── types/                # TypeScript types
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/persevida-website.git
cd persevida-website
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set up environment variables

```bash
cp .env.example .env.local
```

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development Guidelines

- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Keep components modular and reusable
- Follow Next.js App Router conventions
- Write meaningful commit messages

## Deployment

The project is configured for deployment on Vercel. Push to the main branch will automatically trigger a deployment.

## Environment Variables

Required environment variables:

```plaintext
NEXT_PUBLIC_SITE_URL=https://www.persevida.com
NEXTAUTH_SECRET=your-secret-here
DATABASE_URL=your-database-url
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

This project is private and proprietary to Persevida SL.

## Contact

For any queries regarding the project, contact:

- **Email**: info@persevida.com
- **Location**: Santa Cruz de Tenerife, Canary Islands
