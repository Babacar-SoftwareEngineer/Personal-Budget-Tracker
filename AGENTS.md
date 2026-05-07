# Agent Rules - Personal Budget Tracker Project

This document defines the rules and guidelines for all agents working on the Personal Budget Tracker project.

## 🛠 Project Overview

This project is a modern personal budget tracking application built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Supabase** (PostgreSQL). It allows users to manage their finances by tracking income, expenses, and budgets.

## ⚙ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **UI Components**: shadcn/ui
- **Authentication**: NextAuth.js (with Supabase adapter)
- **Validation**: Zod
- **Icons**: Lucide React
- **Package Manager**: pnpm
- **Linting**: ESLint

## 🎯 Core Features

### 1. Authentication
- Email/password sign-up and sign-in
- Password reset flow
- Social login (Google, GitHub)
- Secure session management

### 2. Dashboard
- Overview of monthly finances
- Quick stats (income, expenses, balance)
- Recent transactions
- Budget overview

### 3. Transactions Management
- Add, edit, delete transactions
- Categorization (Food, Transport, Bills, etc.)
- Tags for additional filtering
- Date filtering

### 4. Budgeting
- Create category-based budgets
- Track spending against budget limits
- Progress visualization
- Budget rollover (optional)

### 5. Reports
- Monthly spending reports
- Category breakdowns
- Trend analysis

### 6. User Profile
- Profile settings
- Currency preferences
- Notification settings

## 🧭 Project Structure

```
personal-budget-tracker/
├── app/                       # Next.js App Router
│   ├── (auth)/               # Authentication pages
│   │   ├── layout.tsx
│   │   ├── page.tsx           # Login/Register
│   │   └── forgot-password/   # Password reset flow
│   ├── (app)/                # Main application
│   │   ├── layout.tsx         # Root layout with navigation
│   │   ├── dashboard/page.tsx
│   │   ├── transactions/page.tsx
│   │   ├── budgets/page.tsx
│   │   ├── reports/page.tsx
│   │   └── profile/page.tsx
│   ├── api/                   # API routes
│   │   └── trpc/              # tRPC endpoints
│   └── favicon.ico            # Site favicon

├── components/
│   ├── auth/                  # Authentication components
│   ├── transactions/          # Transaction components
│   ├── budgets/               # Budget components
│   ├── dashboard/             # Dashboard components
│   ├── ui/                    # shadcn/ui components
│   ├── nav/                   # Navigation components
│   └── layout/                # Layout components

├── lib/
│   ├── db.ts                    # Supabase client initialization
│   ├── auth.ts                  # Auth configuration
│   ├── trpc.ts                  # tRPC setup
│   ├── utils.ts                 # Utility functions
│   └── constants.ts             # Constants and enums

├── schemas/
│   ├── auth.ts                  # Zod validation schemas
│   ├── transactions.ts
│   └── budgets.ts

├── types/
│   ├── index.ts                 # Shared types
│   └── database.types.ts        # Supabase generated types

├── public/                      # Public assets
└── package.json                 # Project dependencies
```

## 📋 Setup Instructions

1. **Clone the repository**
2. **Install dependencies**
   ```bash
   pnpm install
   ```
3. **Configure environment variables**
   - Create a `.env.local` file in the root directory:
     ```
     DATABASE_URL="postgresql://YOUR_USER:YOUR_PASSWORD@YOUR_HOST:5432/YOUR_DATABASE"
     NEXTAUTH_SECRET="your-secret-key"
     NEXTAUTH_URL="http://localhost:3000"
     GOOGLE_CLIENT_ID="your-google-client-id"
     GOOGLE_CLIENT_SECRET="your-google-client-secret"
     GITHUB_CLIENT_ID="your-github-client-id"
     GITHUB_CLIENT_SECRET="your-github-client-secret"
     ```
   - Run Supabase migration:
     ```bash
     npx supabase db reset
     ```
4. **Run development server**
   ```bash
   pnpm dev
   ```
   - The app will be available at `http://localhost:3000`

## 🔧 Development Rules

### Code Style
- **Always** use TypeScript
- **Strict** TypeScript configuration
- **Always** use `pnpm` for package management
- **ESLint** must pass without errors
- Use **Tailwind CSS** for all styling
- **Do not** use inline styles; use Tailwind classes instead
- **Do not** use `@import` in CSS files; use `@use` or `@import` with proper paths

### Next.js Best Practices
- Use **Server Components** by default
- Use **Client Components** only when necessary (marked with `'use client'`)
- Use **Server Actions** for mutations (form submissions, data updates)
- Use **`async`/`await`** for data fetching in Server Components
- Use **`prisma` or `supabase-js`** for database operations
- Use **Zod** for schema validation
- Use **shadcn/ui** components from the `components/ui` directory
- **Do not** create new components in `components/ui`; use the shadcn CLI
- **Always** include type annotations for function parameters and return values

### Database Rules
- Use the **Supabase client** for all database operations
- All database interactions must go through the `lib/db.ts` client
- Use **Server Actions** for database mutations
- Validate all user input using **Zod schemas** before database operations
- Handle **errors gracefully** with proper error messages
- Follow the Supabase **naming conventions** (snake_case for columns, PascalCase for tables)
- **Do not** perform database operations directly in components; use server actions or API routes

### Security Rules
- **Never** commit environment variables to version control
- Use **`async` Server Actions** for all data mutations
- **Validate** all user input using Zod schemas
- Use **secure defaults** for all configurations
- Handle **errors gracefully** with proper error messages
- Implement **rate limiting** for sensitive endpoints
- Use **HTTPS** in production
- **Sanitize** all user-generated content before rendering
- **Do not** expose sensitive information in client-side code

### UI/UX Rules
- Use **shadcn/ui** components for all UI elements
- Maintain **consistent styling** with Tailwind CSS
- Use **semantic HTML5** elements
- Ensure **accessibility** (ARIA labels, proper focus management)
- Maintain **responsive design** (mobile-first approach)
- Use **clear and concise** error messages
- Use **consistent** date and number formatting
- **Do not** use Bootstrap or other CSS frameworks
- **Do not** override shadcn/ui component styles; use them as intended

### Testing Rules
- Write **unit tests** for all utility functions
- Write **integration tests** for server actions
- Write **end-to-end tests** for critical user flows
- Use **Playwright** for end-to-end testing
- Use **vitest** for unit testing
- **Test all edge cases** (empty states, error states, large datasets)
- **Do not** commit code that fails tests
- **Do not** modify test files unless explicitly requested

## 🧪 Validation Rules

### Zod Schemas
- Use **Zod** for all input validation
- All schemas should be located in the `schemas/` directory
- **Validate** all user input before database operations
- **Validate** all form submissions
- **Validate** all API request payloads
- **Do not** skip validation for any user input

## 🎨 Design Rules

### Color Palette
- **Primary**: `#6366f1` (indigo-500)
- **Success**: `#10b98
