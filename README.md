
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
- imus-city-resrvation-app/
	- public/ -> static public assets (index.html, manifest, robots.txt)
	- src/
		- App.js -> main router and layout
		- index.js -> app entry and global imports
		- Pages/ -> React pages grouped by feature (Home, Employee, Reservation, etc.)
  			- UserPages:
	  			- Home.js -> is a clone page from the [Imus City Government Website](https://www.cityofimus.gov.ph/home) as a landing page.
	    		- ReservationSlot.js -> is a page that let the users choose what form to reserve (Calls ReservationModal where the users fill up ther information and chooses time and date).
	      		- ReservationResult.js -> is a page that shows users the result of what they filled up in the ReservationModal with a generated QR code(Soon), and a print button so users can save a pdf of their details.
         	- EmployeePages:
          		- EmployeeLogIn.js -> is a page where employees log on.
            	- EmployeeHome.js -> is a page where employees choose where and what office they are assigned to, to see the reservation list.
             	- EmployeeTableView.js -> is a page where the data for the selected form is displayed as shown on the text upper right of the page's body, employee can choose date to see past, present, and upcoming records, employees can change status, add remarks, reschedule reserved users to a different time and date (using RescheduleModal then redirects them to a new tab with the ResevationResult), and delete data.
		- Components/ -> shared UI components (Header, Footer, Modals, etc.)
				- Header.js -> is the user's topbar + navbar. top bar shows the date and time, and other stuffs, while the nav bar shows the navigation to "Home", "AboutImus(Dropdown)", "Services(Dropdown)", "Tourism(Dropdown)", "Business".
				- HeaderEmployee.js -> Is the employee's  topbar + navbar. employee's top bar only shows the date and time, and the employee's nav bar when they click the logo they'll go to EmployeeHome.js page and they have a LogOut button that will lead them back to EmployeeLogIn.js that is using the Header.js.
				- Footer.js -> a clone of the footer from [Imus City Government Website](https://www.cityofimus.gov.ph/home)
				- TopBtn.js -> Website wide back to top btn.
				- AnnouncementModal.js -> a clone of the Announcement Modal from [Imus City Government Website](https://www.cityofimus.gov.ph/home)
				- ReservationModal.js -> Accessible via Reservationslot.js. Users fill up ther information and chooses time and date.
				- RescheduleModal.js -> Accessible via EmployeeTableView.js. Employees can reschedule the reservations.	
		- ClonePages/ -> other clone pages from [Imus City Government Website](https://www.cityofimus.gov.ph/home)
		- Media/ -> contains images and matterials from [Imus City Government Website](https://www.cityofimus.gov.ph/home)
		- App.css, index.css -> global styles
