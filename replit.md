# CV Website - Replit Project Guide

## Overview

This is a modern, responsive CV/portfolio website built with React and Express. The application features a single-page design showcasing a professional's background, experience, and contact information. It includes a contact form with backend storage capabilities and is styled with Tailwind CSS using shadcn/ui components.

## Recent Changes (November 20, 2025)
- **Database Migration**: Migrated contact form storage from in-memory to PostgreSQL for permanent message persistence
- Added "What I can do for you" section with infographic images showcasing 20 skills/services
- Updated navigation to include "What I can do for you" tab (direct link, no dropdown)
- Fixed LSP errors in navigation component with proper TypeScript types
- Improved section title styling to match site theme (blue headings with descriptive subtitles)

## Previous Changes (July 17, 2025)
- Fixed SendGrid email functionality with proper API key configuration and dotenv loading
- Added comprehensive error logging for email delivery troubleshooting
- Implemented admin page at `/admin/messages` for viewing contact form submissions
- Enhanced email notifications with detailed delivery status logging
- Added troubleshooting tips in server logs for email delivery issues
- Updated contact form to show "Thank you for sending me a message!" after submission with field clearing
- Improved culinary adventures image sizing and formatting in interests section
- Updated social media meta tags for proper link sharing (Luisa Muniz, luisamunizsm.com)
- Created "LM" favicon with equal letter sizing for browser tabs
- Grammar and text corrections in About Me, Professional Timeline, Projects, Experience & Skills, and Personal Interests sections for professional presentation

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
- **Database**: PostgreSQL (Neon) with Drizzle ORM for permanent data storage
- **Session Management**: Configured for PostgreSQL sessions
- **API**: RESTful endpoints for contact form functionality
- **Email**: SendGrid integration for contact form notifications (requires SENDGRID_API_KEY)

## Key Components

### Frontend Components
1. **Navigation System**: Fixed header with smooth scrolling to sections - updated with custom tab names
2. **Hero Section**: Landing area with call-to-action buttons
3. **About Me Section**: Professional overview with cards (education moved to separate section)
4. **Education Section**: Academic background and international experience
5. **Experience & Skills Section**: Core competencies and skill overview
6. **Professional Timeline Section**: Chronological career progression
7. **Projects Section**: Project showcase with images and tags
8. **Global Experience and Languages Section**: Language proficiency and international exposure
9. **Personal Interests Section**: Personal interests and hobbies
10. **Let's Connect Section**: Contact form with validation and submission
11. **Footer**: Quick links and social media connections

### Backend Components
1. **API Routes**: Contact form submission and retrieval endpoints
2. **Storage Layer**: PostgreSQL database storage via Drizzle ORM (DbStorage class)
3. **Database Connection**: Neon serverless PostgreSQL with WebSocket support
4. **Middleware**: Request logging and error handling
5. **Database Schema**: Contact messages table with Drizzle ORM
6. **Admin Interface**: `/admin/messages` page for viewing all contact submissions

## Data Flow

### Contact Form Submission
1. User fills out contact form with name, email, subject, and message
2. Frontend validates data using Zod schema
3. Form submission triggers POST request to `/api/contact`
4. Backend validates data and stores in database/memory
5. Success/error response sent back to frontend
6. Toast notification displayed to user

### Data Retrieval
1. Admin can access all contact messages via GET `/api/contact` or `/admin/messages` page
2. Messages are permanently stored in PostgreSQL database
3. Messages are sorted by creation date (newest first)
4. SendGrid sends email notifications to lmunizsimas@gmail.com (requires SENDGRID_API_KEY)

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
- **Database**: PostgreSQL (Neon serverless) - fully operational and storing messages
- **Environment**: Replit-optimized with cartographer plugin

### Production Build
1. **Frontend**: Vite builds static assets to `dist/public`
2. **Backend**: esbuild bundles server code to `dist/index.js`
3. **Assets**: Static files served by Express in production
4. **Database**: PostgreSQL connection via DATABASE_URL environment variable

### Configuration Notes
- Database schema located in `shared/schema.ts`
- Database connection configured in `server/db.ts` using Neon serverless
- Storage implementation in `server/storage.ts` (DbStorage class)
- Environment variables required: 
  - `DATABASE_URL` for PostgreSQL (automatically set by Replit)
  - `SENDGRID_API_KEY` for email notifications (optional but recommended)
- Replit-specific configurations for development environment

### Build Commands
- `npm run dev`: Development server
- `npm run build`: Production build
- `npm run start`: Production server
- `npm run db:push`: Push database schema changes

The application uses PostgreSQL for permanent data storage. Contact form submissions are stored in the database and can be viewed at `/admin/messages`. Email notifications via SendGrid are optional and require the SENDGRID_API_KEY environment variable.