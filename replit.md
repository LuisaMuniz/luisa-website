# CV Website - Replit Project Guide

## Overview

This is a modern, responsive CV/portfolio website built with React and Express. The application features a single-page design showcasing a professional's background, experience, and contact information. It includes a contact form with backend storage capabilities and is styled with Tailwind CSS using shadcn/ui components.

## User Preferences

Preferred communication style: Simple, everyday language.
Design preferences: Clean, professional design with solid colors instead of gradients. Poppins font for modern, readable typography.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack Query for server state
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build Tool**: Vite with custom configuration for development and production

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM (currently using in-memory storage as fallback)
- **Session Management**: Configured for PostgreSQL sessions
- **API**: RESTful endpoints for contact form functionality

## Key Components

### Frontend Components
1. **Navigation System**: Fixed header with smooth scrolling to sections
2. **Hero Section**: Landing area with call-to-action buttons
3. **About Section**: Professional overview with cards
4. **Experience Section**: Skills and work history display
5. **Portfolio Section**: Project showcase with images and tags
6. **Interests Section**: Personal interests and hobbies
7. **Contact Section**: Form with validation and submission
8. **Footer**: Quick links and social media connections

### Backend Components
1. **API Routes**: Contact form submission and retrieval endpoints
2. **Storage Layer**: Abstracted storage interface with in-memory implementation
3. **Middleware**: Request logging and error handling
4. **Database Schema**: Contact messages table with Drizzle ORM

## Data Flow

### Contact Form Submission
1. User fills out contact form with name, email, subject, and message
2. Frontend validates data using Zod schema
3. Form submission triggers POST request to `/api/contact`
4. Backend validates data and stores in database/memory
5. Success/error response sent back to frontend
6. Toast notification displayed to user

### Data Retrieval
1. Admin can access all contact messages via GET `/api/contact`
2. Messages are sorted by creation date (newest first)
3. In-memory storage provides fallback when database is unavailable

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **UI Components**: Radix UI primitives, shadcn/ui components
- **State Management**: TanStack Query
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React, React Icons
- **Utilities**: date-fns, embla-carousel-react

### Backend Dependencies
- **Server**: Express.js, Node.js
- **Database**: Drizzle ORM, @neondatabase/serverless
- **Session**: connect-pg-simple
- **Validation**: Zod
- **Development**: tsx, esbuild

## Deployment Strategy

### Development Environment
- **Frontend**: Vite dev server with HMR
- **Backend**: tsx for TypeScript execution
- **Database**: PostgreSQL (configured but falls back to in-memory)
- **Environment**: Replit-optimized with cartographer plugin

### Production Build
1. **Frontend**: Vite builds static assets to `dist/public`
2. **Backend**: esbuild bundles server code to `dist/index.js`
3. **Assets**: Static files served by Express in production
4. **Database**: PostgreSQL connection via DATABASE_URL environment variable

### Configuration Notes
- Database schema located in `shared/schema.ts`
- Drizzle migrations output to `./migrations` directory
- Environment variables required: `DATABASE_URL` for PostgreSQL
- Fallback to in-memory storage when database unavailable
- Replit-specific configurations for development environment

### Build Commands
- `npm run dev`: Development server
- `npm run build`: Production build
- `npm run start`: Production server
- `npm run db:push`: Push database schema changes

The application is designed to be resilient with graceful fallbacks and can operate with or without a database connection, making it suitable for various deployment scenarios.