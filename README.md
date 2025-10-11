
# Imus City Reservation App
**A project for the semester for ITWB311 “Web Development” subject**

This README (README.md) is for contributors and reviewers who clone the repository and want a quick way to run, test, and contribute to the Imus City Reservation App React project.

Contents
- **Prerequisites**
- **Install**
- **Run (development)**
- **Build (production)**
- **What to test (quick checklist)**
- **Project structure & important files**
- **How to contribute (PR process)**
- **Useful links and references**

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
- Confirm all main pages render without console errors: Home, Employee, Reservation, City Profile, etc.
- Test modals: Reservation, Reschedule, Announcement.
- Employee login: go to /employee-login and check the form UI and validation.
- Reservation flow: try making and rescheduling a reservation.
- Verify header and footer appear across pages and links use client-side routing (no full page reload).
- Confirm assets (images/CSS) load and styles are applied.

## Project structure
- imus-city-resrvation-app/
	- public/ -> static public assets (index.html, manifest, robots.txt)
	- src/
		- App.js -> main router and layout
		- index.js -> app entry and global imports
		- Pages/ -> React pages grouped by feature (Home, Employee, Reservation, etc.)
		- Components/ -> shared UI components (Header, Footer, Modals, etc.)
		- ClonePages/ -> clone pages from [Imus City Government Website](https://www.cityofimus.gov.ph/home)
		- Media/ -> images and banners
		- App.css, index.css -> global styles