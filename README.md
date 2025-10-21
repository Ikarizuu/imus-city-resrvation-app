
# Imus City Reservation App
**A project for the semester for ITWB311 “Web Development” subject**

This README (README.md) is for contributors and reviewers who clone the repository and want a quick way to run, test, and contribute to the Imus City Reservation App React project.

Contents
- **Prerequisites**
- **Install**
- **Run (development)**
- **Build (production)**
- **What to test (quick checklist)**
- **Project structure & important files (with page details)**

## Prerequisites
- Node.js (>= 16 recommended) and npm
- Git (for branching and PRs)

## Install
1. Clone the repo:

```bash
git clone https://github.com/Ikarizuu/imus-city-resrvation-app
cd imus-city-resrvation-app
```

2. Install dependencies:

```bash
npm install
```

## Run (development)

Start the React development server (hot-reloads on change):

```bash
npm start
```

Open http://localhost:3000 in your browser.

## Build (production)

Create an optimized production build (output in `build/`):

```bash
npm run build
```

## Serve the build locally (optional):

```bash
npm install -g serve
serve -s build
```

## What to test (quick checklist)
- Confirm all main pages render without console errors (non-clones): ReservationSlot, ReservationSlot | EmployeeLogIn, EmployeeHome, EmployeeViewTable
- Test modals: Reservation, Reschedule.
- Employee login: go to /employee-login and check the form UI and validation.
- Reservation flow: try making and rescheduling a reservation.
- Verify header and footer appear across pages and links use client-side routing (no full page reload).
- Confirm assets (images/CSS) load and styles are applied.

## Project structure
imus-city-resrvation-app/
├── public/                      # Static public assets (index.html, manifest, robots.txt)
├── src/
│   ├── App.js                   # Main router and layout
│   ├── index.js                 # App entry and global imports
│   ├── Pages/                   # React pages grouped by feature
│   │   ├── UserPages/
│   │   │   ├── Home.js               # Clone of Imus City Government Website landing page
│   │   │   ├── ReservationSlot.js    # Lets users choose a form and reserve a slot (calls ReservationModal)
│   │   │   └── ReservationResult.js  # Displays reservation result, QR (soon), and print option
│   │   └── EmployeePages/
│   │       ├── EmployeeLogIn.js      # Employee login page
│   │       ├── EmployeeHome.js       # Choose office, view reservations
│   │       └── EmployeeTableView.js  # Table of records, status updates, remarks, rescheduling
│   │
│   ├── Components/              # Shared UI components
│   │   ├── Header.js            # User topbar + navbar (date/time, navigation dropdowns)
│   │   ├── HeaderEmployee.js    # Employee topbar + navbar (logo = home, logout button)
│   │   ├── Footer.js            # Clone of Imus City Website footer
│   │   ├── TopBtn.js            # Back-to-top button (site-wide)
│   │   ├── AnnouncementModal.js # Clone of the Announcement Modal from Imus City Website
│   │   ├── ReservationModal.js  # Used in ReservationSlot.js for reservation input
│   │   └── RescheduleModal.js   # Used in EmployeeTableView.js for rescheduling reservations
│   │
│   ├── ClonePages/              # Other clone pages from Imus City Government Website
│   ├── Media/                   # Images and materials from Imus City Website
│   ├── App.css                  # Global styles
│   └── index.css                # Global styles

