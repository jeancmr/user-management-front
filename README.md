# User Management Frontend

A modern user management dashboard built with React, TypeScript, and Vite. This application provides authentication, user CRUD operations, analytics visualization and responsive UI.

## ✨ Features

- **Authentication System**
  - Login and registration with form validation
  - Protected routes for authenticated users
  - JWT-based session management

- **User Management**
  - View, edit, and delete users
  - Pagination and filtering (by plan, role, status, search)
  - Real-time data updates

- **Analytics Dashboard**
  - Summary statistics cards (total users, active, suspended, pro)
  - Interactive charts for user growth, plan distribution, and weekly activity
  - Built with Recharts

- **Modern UI/UX**
  - Light/Dark theme support
  - Responsive design with Tailwind CSS
  - Radix UI components (dialogs, selects, tabs, etc.)
  - Toast notifications with Sonner

## 🛠️ Tech Stack

| Category          | Technologies           |
| ----------------- | ---------------------- |
| **Framework**     | React 19, TypeScript   |
| **Build Tool**    | Vite                   |
| **Styling**       | Tailwind CSS 4         |
| **UI Components** | Radix UI, Lucide Icons |
| **Forms**         | React Hook Form, Zod   |
| **Routing**       | React Router 7         |
| **HTTP Client**   | Axios                  |
| **Charts**        | Recharts               |
| **Notifications** | Sonner                 |

## 📁 Project Structure

```
src/
├── auth/                 # Authentication module
│   ├── actions/          # Auth actions (login, logout, register, verify)
│   ├── api/              # Auth API calls
│   ├── components/       # Auth UI components
│   ├── context/          # Auth context & provider
│   ├── pages/            # Auth pages
│   ├── schemas/          # Zod validation schemas
│   └── types/            # TypeScript types
├── components/
│   ├── custom/           # Custom reusable components
│   └── ui/               # shadcn/ui components
├── context/              # Global context (Theme)
├── lib/                  # Utility functions
├── router/               # App routing configuration
└── user_management/      # User management module
    ├── actions/          # User CRUD actions
    ├── api/              # User API calls
    ├── components/       # User management UI
    ├── hooks/            # Custom hooks
    ├── pages/            # User management pages
    ├── types/            # TypeScript types
    └── utils/            # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Yarn (this project was built with Yarn)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd user-management-front
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Create a `.env` file based on the template:

   ```bash
   cp .env.template .env
   ```

   Then update the environment variables:

   ```env
   VITE_API_URL=http://localhost:3000  # Your backend API URL
   ```

4. Start the development server:

   ```bash
   yarn dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📜 Available Scripts

| Command        | Description                       |
| -------------- | --------------------------------- |
| `yarn dev`     | Start development server with HMR |
| `yarn build`   | Build for production              |
| `yarn preview` | Preview production build          |
| `yarn lint`    | Run ESLint                        |

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory based on `.env.template`:

| Variable       | Description          | Example                 |
| -------------- | -------------------- | ----------------------- |
| `VITE_API_URL` | Backend API base URL | `http://localhost:3000` |

> **Note:** All environment variables must be prefixed with `VITE_` to be exposed to the client-side code.

## 📄 License

This project is licensed under the **MIT License**.
