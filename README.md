# Prize Bond Checker - React Frontend

A modern React application for managing and checking prize bonds, built with Vite and TailwindCSS.

## Features

- 🔐 **Authentication**: Secure login, signup, and password reset
- 💼 **Bond Management**: Add, upload (CSV/TXT), and delete bond numbers
- 🎯 **Prize Checking**: Compare your bonds against official draw results
- 📅 **Draw Schedules**: View upcoming and past draw dates
- 📥 **Data Download**: Access official prize bond lists
- 🎨 **Modern UI**: Dark theme with responsive design

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **TailwindCSS** - Styling
- **React Router v6** - Routing
- **Axios** - HTTP client
- **React Toastify** - Notifications
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+
- Running FastAPI backend (run `uvicorn app:app --reload` in `../API`)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── api.js                 # Axios instance & interceptors
├── App.jsx                # Main app with routing
├── components/
│   ├── Layout.jsx         # Page wrapper
│   ├── Navbar.jsx         # Navigation bar
│   └── ProtectedRoute.jsx # Auth guard
├── context/
│   └── AuthContext.jsx    # Authentication state
└── pages/
    ├── Home.jsx           # Landing page
    ├── Login.jsx          # User login
    ├── Signup.jsx         # User registration
    ├── ForgotPassword.jsx # Password reset
    ├── Dashboard.jsx      # User dashboard
    ├── ManageBonds.jsx    # Bond management
    ├── Compare.jsx        # Check results
    ├── Dates.jsx          # Draw schedules
    └── Download.jsx       # Download data
```

## API Configuration

The API base URL is set in `src/api.js`:

```javascript
const API_BASE_URL = 'http://127.0.0.1:8000';
```

Update this URL if your backend runs on a different host/port.

## Environment Variables

Create a `.env` file (optional):

```env
VITE_API_BASE_URL=http://127.0.0.1:8000
```

## License

MIT
