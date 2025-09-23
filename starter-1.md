# Next.js Fullstack Starter Kit

This is a feature-rich starter kit for building modern, full-stack web applications with Next.js. It comes pre-configured with a collection of popular and powerful libraries to accelerate your development process.

## Features

- **Framework**: [Next.js](https://nextjs.org/) 15 (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn/ui](https://ui.shadcn.com/) - A collection of beautifully designed, accessible, and customizable components.
- **State Management**:
  - **Server State**: [TanStack Query (React Query)](https://tanstack.com/query/latest) for data fetching, caching, and synchronization.
  - **Client State**: [Zustand](https://github.com/pmndrs/zustand) for lightweight and flexible global state management.
- **HTTP Client**: [Axios](https://axios-http.com/) for making promise-based HTTP requests.
- **Forms**: [React Hook Form](https://react-hook-form.com/) for performant and flexible forms, with schema validation using [Zod](https://zod.dev/).
- **Linting**: [ESLint](https://eslint.org/) for code quality and consistency.
- **Package Manager**: [pnpm](https://pnpm.io/) for fast and efficient package management.

## Getting Started

### Prerequisites

- Node.js (v20 or later)
- pnpm

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd fullstack-starter
    ```
3.  Install the dependencies:
    ```bash
    pnpm install
    ```

### Running the Development Server

To start the development server, run:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The project is organized with a focus on scalability and maintainability:

```
.
├── app/                # Next.js App Router: contains all routes and pages
│   ├── (auth)/         # Route group for authentication pages
│   ├── (dashboard)/    # Route group for protected dashboard pages
│   └── (landing)/      # Route group for public landing pages
├── apis/               # API client functions for interacting with backend services
├── components/         # Shared UI components
│   ├── custom-ui/      # Custom components built for this project
│   └── ui/             # Components from shadcn/ui (do not edit directly)
├── hooks/              # Custom React hooks
├── lib/                # Utility functions, schemas, and configurations
│   ├── schemas/        # Zod schemas for form validation
│   └── utils.ts        # General utility functions
├── public/             # Static assets (images, fonts, etc.)
└── store/              # Zustand stores for global client-side state management
```

## Available Scripts

- `pnpm dev`: Starts the development server with Turbopack.
- `pnpm build`: Creates a production build of the application.
- `pnpm start`: Starts the production server.
- `pnpm lint`: Lints the codebase using ESLint.
- `pnpm type-check`: Checks for TypeScript errors.