# SaaS Module Simulator

A modern, modular SaaS application that demonstrates various software components commonly used in SaaS products. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🔐 **Authentication Module**

  - Email/Password authentication
  - OAuth integration (Google, GitHub)
  - Session management
  - Protected routes

- 📊 **Dashboard**

  - Real-time module statistics
  - Interactive charts and graphs
  - Module status monitoring
  - API usage tracking

- 👤 **User Profile**

  - Profile management
  - Avatar upload
  - Role-based access
  - User preferences

- ⚙️ **Settings**

  - Account settings
  - Notification preferences
  - Security settings
  - Two-factor authentication

- 💳 **Billing**
  - Subscription management
  - Payment processing
  - Usage tracking
  - Billing history

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js
- **Charts**: Chart.js with react-chartjs-2
- **Icons**: Heroicons
- **UI Components**: Custom components with Tailwind
- **State Management**: React Hooks
- **Form Handling**: React Hook Form
- **Notifications**: React Hot Toast

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/YOUR_USERNAME/saas-module-simulator.git
   cd saas-module-simulator
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory:

   ```env
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key

   # OAuth providers
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret

   GITHUB_ID=your-github-id
   GITHUB_SECRET=your-github-secret

   # Stripe
   STRIPE_PUBLIC_KEY=your-stripe-public-key
   STRIPE_SECRET_KEY=your-stripe-secret-key
   STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret
   ```

4. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js 14 app directory
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Dashboard and module pages
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
├── types/                 # TypeScript type definitions
└── middleware.ts         # NextAuth middleware
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Next.js team for the amazing framework
- Vercel for the deployment platform
- The open-source community for the incredible tools
