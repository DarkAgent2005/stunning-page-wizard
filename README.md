
# AI Productivity Platform

A modern productivity platform powered by AI, featuring a beautiful dark theme UI with gold accents and OAuth2 authentication.

## Project Setup for Windows

### Prerequisites

1. **Node.js and npm**
   - Install [nvm-windows](https://github.com/coreybutler/nvm-windows/releases)
   - After installing nvm-windows, open Command Prompt as administrator and run:
     ```
     nvm install latest
     nvm use latest
     ```

2. **Git**
   - Download and install from [git-scm.com](https://git-scm.com/download/win)

### Setup Instructions

1. **Clone the repository**
   ```
   git clone https://github.com/your-username/ai-productivity-platform.git
   cd ai-productivity-platform
   ```

2. **Install dependencies**
   ```
   npm install
   ```

3. **Set up environment variables**
   - Create a file named `.env.local` in the root directory
   - Add your Clerk publishable key:
     ```
     VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
     ```

4. **Run the development server**
   ```
   npm run dev
   ```

5. **Access the application**
   - Open your browser and navigate to: `http://localhost:8080`

## Authentication

This project uses [Clerk](https://clerk.com) for authentication, with support for:
- Email/password authentication
- Google OAuth
- GitHub OAuth
- Twitter OAuth

## Available Scripts

In the project directory, you can run:

### `npm run dev`
Runs the app in development mode.

### `npm run build`
Builds the app for production to the `dist` folder.

### `npm run preview`
Locally preview the production build.

## Technologies Used

- React with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Clerk for authentication
- React Router for navigation
- Tanstack Query for data fetching
- Lucide React for icons
- Shadcn/UI for component library

