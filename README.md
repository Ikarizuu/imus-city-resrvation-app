# Imus City Reservation App
**A project for the semester for ITWB311 “Web Development” subject**

This README (README.md) is for contributors and reviewers who clone the repository and want a quick way to run, test, and contribute to the Imus City Reservation App React project.

## Contents
- **Prerequisites**
- **Install**
- **Dependencies**
- **Run (development)**
- **Build (production)**
- **What to test (quick checklist)**
- **Project structure & important files (with page details)**

---

## Prerequisites
- Node.js (>= 16 recommended) and npm  
- Git (for branching and PRs)

---

## Install
1. Clone the repo:
   ```bash
   git clone https://github.com/Ikarizuu/imus-city-reservation-app
   cd imus-city-reservation-app
   ```

2. Navigate to the React app directory and install dependencies:
   ```bash
   cd imus-city-reservation-app
   npm install
   ```

---

## Dependencies
The project uses the following key dependencies:

- **React** (`react`, `react-dom`): Core library for building the user interface.
- **React Router** (`react-router`): Handles client-side routing for navigation between pages.
- **Axios** (`axios`): HTTP client for making API requests to the PHP backend.
- **Bootstrap** (`bootstrap`, `react-bootstrap`): CSS framework and React components for responsive design and UI elements.
- **FontAwesome** (`@fortawesome/*`): Icon library for visual elements throughout the app.
- **AOS** (`aos`): Library for animate-on-scroll effects.
- **QR Code Libraries** (`qrcode.react`, `qr-scanner`, `jsqr`): For generating and scanning QR codes in reservations.
- **Recharts** (`recharts`): Chart library for displaying statistics and data visualizations.
- **Testing Library** (`@testing-library/*`): Utilities for writing and running tests.
- **React Scripts** (`react-scripts`): Build and development scripts provided by Create React App.
- **Web Vitals** (`web-vitals`): Library for measuring and reporting web performance metrics.

---

## Run (development)
Start the React development server (hot-reloads on change):
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Build (production)
Create an optimized production build (output in `build/`):
```bash
npm run build
```

### Serve the build locally (optional)
```bash
npm install -g serve
serve -s build
```

---

## What to test (quick checklist)
- Confirm all main pages render without console errors: `Home`, `ReservationSlot`, `ReservationResult`, `EmployeeLogIn`, `EmployeeHome`, `EmployeeTableView`, `EmployeeAdmin`, `EmployeeAdminNews`, `EmployeeAdminStats`, `SearchReservation`.
- Test modals: **Reservation**, **Reschedule**, **Announcement**.
- Employee login: go to `/EmployeeLogIn` and check the form UI and validation.
- Reservation flow: try making and rescheduling a reservation.
- Verify header and footer appear across pages and links use client-side routing (no full page reload).
- Confirm assets (images/CSS) load and styles are applied.
- Test QR code generation and scanning functionality.
- Check news carousel and upload features in admin sections.

---

## Project structure
```
imus-city-reservation-app/
├── README.md                     # This file
├── SQLTableCreation              # SQL Commands for Table Creation
├── imus-city-reservation-app/    # React frontend application
│   ├── package.json              # Project dependencies and scripts
│   ├── build/                    # Production build output
│   │   ├── asset-manifest.json
│   │   ├── index.html
│   │   ├── manifest.json
│   │   ├── robots.txt
│   │   └── static/
│   │       ├── css/
│   │       ├── js/
│   │       └── media/
│   ├── public/                   # Static assets for the React app
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── robots.txt
│   └── src/                      # Source code
│       ├── App.css               # Global styles
│       ├── App.js                # Main app component with routing
│       ├── App.test.js           # Tests for App component
│       ├── index.css             # Base styles
│       ├── index.js              # App entry point
│       ├── reportWebVitals.js    # Performance monitoring
│       ├── setupTests.js         # Test configuration
│       ├── UserLayout.js         # Layout component for user pages
│       ├── api/
│       │   └── axiosConfig.js    # Axios configuration for API calls
│       ├── ClonePages/           # Cloned pages from Imus City Government Website
│       │   ├── assisstance.js
│       │   ├── barangayofficials.js
│       │   ├── business.js
│       │   ├── citizenscharacter.js
│       │   ├── citycouncil.js
│       │   ├── citymayor.js
│       │   ├── CityProfile.js
│       │   ├── departmentsandunits.js
│       │   ├── eboss.js
│       │   ├── heroesofimus.js
│       │   ├── history.js
│       │   ├── historyandculture.js
│       │   ├── notableperson.js
│       │   ├── pastmayors.js
│       │   ├── services.js
│       │   └── visitingimus.js
│       ├── Components/            # Reusable UI components
│       │   ├── AnnouncementModal.js  # Modal for announcements
│       │   ├── Footer.js         # Site footer
│       │   ├── Header.js         # User header with navigation
│       │   ├── HeaderEmployee.js # Employee header
│       │   ├── RescheduleModal.js    # Modal for rescheduling reservations
│       │   ├── ReservationModal.js   # Modal for making reservations
│       │   └── TopBtn.js         # Back-to-top button
│       ├── Media/                # Images and media assets
│       │   ├── Banner/
│       │   ├── CityOfficials/
│       │   ├── EBoss/
│       │   └── News/
│       └── Pages/                # Main application pages
│           ├── EmployeeAdmin.js      # Admin dashboard for employees
│           ├── EmployeeAdminNews.js  # News management for admins
│           ├── EmployeeAdminStats.js # Statistics view for admins
│           ├── EmployeeHome.js       # Employee home page
│           ├── EmployeeLogIn.js      # Employee login page
│           ├── EmployeeTableView.js  # Table view of reservations for employees
│           ├── Home.js               # Main landing page
│           ├── ReservationResult.js  # Reservation confirmation/result page
│           ├── ReservationSlot.js    # Page for selecting reservation slots
│           └── SearchReservation.js  # Page for searching reservations
└── php-backend/                  # PHP backend for API and data handling
    ├── config.php                # Database and configuration
    ├── api/                      # API endpoints
    │   ├── auth.php
    │   ├── check_slot.php
    │   ├── employees.php
    │   ├── generate_queue_id.php
    │   ├── get_reservation.php
    │   ├── get_statistics.php
    │   ├── news_handler.php
    │   ├── news-carousel-display.php
    │   ├── reschedule.php
    │   ├── reservations.php
    │   ├── statistics.php
    │   ├── update_status.php
    │   └── upload.php
    └── uploads/                  # Uploaded files
        └── news-carousel/
```

---
