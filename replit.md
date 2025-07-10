# Replit Configuration - Thomas Johnen CV Portfolio Website

## Overview

This is a professional CV/portfolio website for Thomas Johnen, a Test Engineer & Full Stack Developer based in Brussels, Belgium. The application is built as a modern single-page application showcasing professional experience, skills, education, and portfolio projects with responsive design and dark/light theme toggle.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Styling**: Tailwind CSS with custom CSS variables for consistent theming
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React hooks (useState, useContext) with React Query for server state
- **Form Handling**: React Hook Form with Zod validation for robust form management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **API Design**: RESTful API endpoints for contact form submission
- **Database**: Drizzle ORM configured for PostgreSQL (via Neon serverless)
- **Storage**: In-memory storage implementation with interface for database abstraction
- **Validation**: Shared Zod schemas between frontend and backend
- **Session Management**: Connect-pg-simple for PostgreSQL session storage

### Theme System
- **Implementation**: CSS custom properties with class-based dark/light mode switching
- **Persistence**: LocalStorage for theme preference retention
- **Design**: Professional color scheme with orange primary (#E78525) and blue secondary (#296CA6)

## Key Components

### User Interface Components
1. **Header**: Sticky navigation with theme toggle and responsive mobile menu
2. **Hero Section**: Professional introduction with call-to-action buttons
3. **Skills Section**: Categorized technical skills with visual grouping
4. **Experience Section**: Timeline-based professional experience display
5. **Education Section**: Academic background and certifications
6. **Portfolio Section**: Featured projects with technology tags
7. **Contact Section**: Form with real-time validation and backend integration

### Backend Components
- **Contact API**: POST /api/contact for form submissions with validation
- **Storage Layer**: Abstracted storage interface supporting both memory and database
- **Error Handling**: Centralized error handling with appropriate HTTP status codes

## Data Flow

1. **Contact Form Submission**:
   - Frontend validates form data using Zod schema
   - React Query manages API request state
   - Backend validates and stores contact information
   - Success/error feedback displayed via toast notifications

2. **Theme Management**:
   - Theme provider manages global theme state
   - LocalStorage persists user preference
   - CSS variables update for seamless theme switching

3. **Component Communication**:
   - Context providers for theme and query client
   - Shared schemas ensure type safety across frontend/backend boundary

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form, TanStack Query
- **UI Framework**: Radix UI primitives, Tailwind CSS, Lucide React icons
- **Backend**: Express.js, Drizzle ORM, Neon Database serverless client
- **Development**: Vite, TypeScript, ESBuild for production builds
- **Validation**: Zod for runtime type checking and form validation

### Database Integration
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon serverless PostgreSQL
- **Migration**: Drizzle Kit for schema management
- **Session Storage**: Connect-pg-simple for Express sessions

## Deployment Strategy

### Development
- **Dev Server**: Vite development server with Hot Module Replacement
- **Backend**: tsx for TypeScript execution in development
- **Database**: Drizzle push for schema synchronization

### Production
- **Frontend Build**: Vite builds optimized static assets to dist/public
- **Backend Build**: ESBuild bundles server code to dist/index.js
- **Process**: NODE_ENV=production node dist/index.js
- **Static Serving**: Express serves built frontend assets

### Environment Configuration
- **Database**: DATABASE_URL environment variable required
- **Replit Integration**: Cartographer plugin for development environment
- **Error Handling**: Runtime error overlay in development

## Changelog

```
Changelog:
- June 27, 2025. Initial setup
- June 27, 2025. Removed internationalization system - back to French-only version
- June 27, 2025. Implemented separate FR/EN pages with language switcher in header
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```