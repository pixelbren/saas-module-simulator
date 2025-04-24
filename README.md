# SaaS Module Simulator

A live, interactive library of reusable software modules that showcases UX/UI patterns and backend logic examples.

## Features

- Authentication (Email/Password, Google, GitHub)
- Dashboard with overview widgets
- User Profile Management
- Settings Management
- Payment Integration (Stripe)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn
- Google OAuth credentials
- GitHub OAuth credentials
- Stripe account (for payment features)

### Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory with the following variables:

   ```
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key-here

   # Google OAuth
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret

   # GitHub OAuth
   GITHUB_ID=your-github-client-id
   GITHUB_SECRET=your-github-client-secret

   # Stripe
   STRIPE_PUBLIC_KEY=your-stripe-public-key
   STRIPE_SECRET_KEY=your-stripe-secret-key
   STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `src/app/` - Next.js app router pages and layouts
- `src/components/` - Reusable UI components
- `src/lib/` - Utility functions and shared logic
- `src/types/` - TypeScript type definitions

## Authentication

The app supports multiple authentication methods:

- Email/Password
- Google OAuth
- GitHub OAuth

## Payment Integration

The app uses Stripe for payment processing. To enable payment features:

1. Create a Stripe account
2. Add your Stripe API keys to the `.env.local` file
3. Configure webhook endpoints in your Stripe dashboard

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
