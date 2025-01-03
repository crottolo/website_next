# Website Next.js with Odoo Integration

A modern, responsive website built with Next.js 15 that integrates with Odoo ERP system. Features a secure authentication system and dashboard for Odoo users.

## Technologies

- **Framework**: Next.js 15 (App Router)
- **Runtime**: Node.js
- **Language**: TypeScript
- **Styling**: 
  - Tailwind CSS
  - shadcn/ui components
  - CSS Modules
- **State Management**: React Context
- **Authentication**: Custom Odoo authentication
- **Development Tools**:
  - ESLint
  - Turbopack
  - PostCSS

## Features

- 🔒 Secure Odoo authentication system
- 🌙 Dark/Light mode support with next-themes
- 📱 Fully responsive design
- ⚡ Server-side rendering and Server Actions
- 🎨 Modern UI with shadcn/ui components
- 🔄 Real-time session management
- 🌍 SEO optimized with dynamic sitemap and robots.txt
- 🎭 Framer Motion animations

## Project Structure

```plaintext
.
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── about/             # About page
│   │   ├── dashboard/         # User dashboard
│   │   ├── login/            # Authentication pages
│   │   ├── odoo/             # Odoo integration pages
│   │   ├── register/         # Registration pages
│   │   └── services/         # Services pages
│   ├── components/           # Reusable components
│   ├── context/              # React Context providers
│   └── lib/                  # Utility functions and services
├── public/                   # Static assets
└── ...config files
```

## Getting Started

### Prerequisites

- Node.js 18.x or later
- pnpm (recommended) or npm
- Odoo server instance

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd website_next
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Required environment variables:
```plaintext
ODOO_API_URL=your-odoo-server-url  # Example: http://localhost:8069
```

4. Start the development server:
```bash
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Development

- Uses Next.js 15 App Router for routing
- Server Components and Server Actions for optimal performance
- TypeScript for type safety
- Tailwind CSS for styling
- shadcn/ui for UI components

### Key Features Implementation

- **Authentication**: Custom implementation using Odoo's authentication endpoints
- **Dashboard**: Real-time user data display with session management
- **Theme**: Dark/Light mode with system preference detection
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## Building for Production

```bash
pnpm build
```

To start the production server:
```bash
pnpm start
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

This project is proprietary software.

## Support

For support and queries:
- Create an issue in the repository
- Contact the development team
