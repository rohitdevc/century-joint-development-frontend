# Century Joint Developers — Frontend

The frontend application for the Century Joint Developers website, built with Next.js, React, TypeScript, and Tailwind CSS.

- **Repository:** https://github.com/rohitdevc/century-joint-development-frontend
- **Netlify Website:** https://century-cjd.netlify.app/

## Overview

Century Joint Developers Frontend is a web application built with the Next.js App Router. It presents company information, objectives, leadership details, and investor relations content through a responsive interface powered by API-provided data.

The application uses reusable React components, interactive sliders, scroll-triggered animations, and dynamic metadata to support the website experience.

## Features

- **Dynamic Homepage:** Displays slider content, company information, objectives, leadership, and investor relations.
- **API-Driven Content:** Retrieves homepage content and metadata through application service functions.
- **Interactive Sliders:** Supports navigation, pagination, and autoplay using Swiper.
- **Scroll Animations:** Uses GSAP and ScrollTrigger to animate homepage sections.
- **Investor Relations:** Organizes investor information and reports into interactive categories and accordions.
- **Responsive Navigation:** Includes navigation interactions and smooth scrolling to page sections.
- **SEO Metadata:** Generates page titles, descriptions, canonical URLs, Open Graph metadata, and Twitter card metadata.
- **Analytics:** Integrates Google Analytics.
- **Docker Support:** Includes a multi-stage Dockerfile and Docker Compose configuration for deployment.
- **Netlify Deployment** — Hosted on Netlify with deployment-aware Next.js configuration.

## Technology Stack

| Technology | Purpose |
| --- | --- |
| Next.js 16 | React framework and application routing |
| React 19 | User interface |
| TypeScript | Type-safe development |
| Tailwind CSS 4 | Styling |
| GSAP | Animations and scroll-triggered effects |
| Swiper | Sliders and carousels |
| React Icons | Icon library |
| html-react-parser | Rendering HTML content |
| nl2br | Formatting line breaks |
| ESLint 9 | Code linting |
| npm | Dependency management |
| Docker | Containerized deployment |

## Prerequisites

- Node.js 22 or a compatible version supported by the project
- npm
- Access to the backend API and its required content
- Docker and Docker Compose, if using containerized deployment

The Dockerfile uses Node.js 22 Alpine.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/rohitdevc/century-joint-development-frontend.git
cd century-joint-development-frontend
```

### 2. Install dependencies

```bash
npm ci
```

### 3. Configure environment variables

The Docker Compose configuration loads environment variables from a `.env` file in the project root.

Create a `.env` file and add the configuration required by the application's API integration and deployment environment.

Use the application's configuration and API service files to identify the exact required variables and values. Do not commit credentials, private tokens, or production secrets to the repository.

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:2971](http://localhost:2971) in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Next.js development server on port 2971. |
| `npm run build` | Creates an optimized production build. |
| `npm run start` | Starts the production server on port 2971. |
| `npm run lint` | Runs ESLint. |

## Project Structure

```text
century-joint-development-frontend/
├── .github/
│   └── workflows/       # GitHub Actions workflows
├── app/                 # Next.js routes, layouts, and global styles
├── components/          # Homepage and reusable UI components
├── lib/                 # API services and shared utilities
├── public/              # Static assets
├── types/               # TypeScript definitions
├── Dockerfile           # Multi-stage Docker build
├── docker-compose.yml   # Docker Compose configuration
├── next.config.ts       # Next.js configuration
├── package.json         # Dependencies and npm scripts
├── package-lock.json    # Dependency lockfile
├── postcss.config.mjs   # PostCSS configuration
├── eslint.config.mjs    # ESLint configuration
└── tsconfig.json        # TypeScript configuration
```

## Production Build

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

The npm scripts configure the application to use port `2971`.

## Docker Deployment

The repository includes a multi-stage Dockerfile that creates a standalone Next.js production application.

After configuring the required environment variables, build and start the container:

```bash
docker compose up --build -d
```

View container logs:

```bash
docker compose logs -f cjd
```

Stop the application:

```bash
docker compose down
```

Docker Compose maps host port `2971` to container port `2971` and restarts the container unless it is stopped.

## Code Quality

Run ESLint before submitting changes:

```bash
npm run lint
```

Also verify the production build:

```bash
npm run build
```

## Contributing

Before submitting changes:

1. Follow the existing project structure and coding conventions.
2. Run ESLint and verify the production build.
3. Test affected pages, animations, navigation, and API integrations.
4. Keep secrets and environment-specific configuration out of version control.

## License

No license information has been verified for this repository. Contact the repository owner for permission before redistributing or reusing project code.

---

Built with Next.js, React, TypeScript, and Tailwind CSS.
