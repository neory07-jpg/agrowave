# AgroWave - Agribusiness Management Platform

A comprehensive single-page web application for agribusiness management featuring user authentication, subscription plans, customer dashboard, and admin order confirmation system.

## Features

- **User Signup & Authentication** - Farm registration with role-based access (User/Admin)
- **Dashboard** - Overview of orders, revenue, and farm statistics
- **Subscription Management** - Three-tier pricing plans (Starter, Professional, Enterprise)
- **Admin Panel** - Order management with confirmation/rejection capabilities
- **Order Tracking** - Real-time order status updates and history
- **Responsive Design** - Mobile-friendly interface with Tailwind CSS

## Tech Stack

- **Frontend**: React + Vite
- **Styling**: Tailwind CSS (CDN)
- **State Management**: React Hooks
- **Storage**: LocalStorage for user sessions

## Project Structure

```
├── index.html              # HTML entry point
├── src/
│   ├── main.jsx           # React DOM render
│   ├── App.jsx            # Main application component
│   ├── components/
│   │   └── Navigation.jsx # Navigation bar
│   └── pages/
│       ├── Signup.jsx     # User registration
│       ├── Dashboard.jsx  # User dashboard
│       ├── Subscriptions.jsx # Subscription plans
│       └── AdminPanel.jsx # Admin order management
├── package.json           # Dependencies
├── vite.config.js        # Vite configuration
└── .gitignore            # Git ignore rules
```

## Getting Started

1. Install dependencies
2. Start development server
3. Open browser to view the application

## Default Demo Access

- **User Role**: Create account with "Farmer / User" role
- **Admin Role**: Create account with "Admin" role to access the Admin Panel

## Key Pages

### Signup Page
- User registration form
- Role selection (User/Admin)
- Terms & conditions acceptance

### Dashboard
- Order statistics and metrics
- Recent order history
- Quick action buttons

### Subscriptions
- Three pricing tiers
- Feature comparison
- FAQ section
- Contact support information

### Admin Panel
- Order management interface
- Search and filter capabilities
- Confirm/reject pending orders
- System analytics and health metrics

## Product Name

**AgroWave** - Modern Agribusiness Management Platform