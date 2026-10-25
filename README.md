# 🧺 Laundry Service Website

## Project Overview

This is a modern, interactive, single-page web application for a **Laundry & Dry Cleaning Service** built with HTML5, CSS3, and JavaScript (ES6).

The application features a smooth scroll-down architecture where users can explore available cleaning services, dynamically add items to an interactive cart with real-time price calculations, and submit booking requests directly through a validated booking form. It is fully responsive across desktop, tablet, and mobile devices.

---

## Key Features

- **Single-Page Scroll-Down Architecture**: Smooth scrolling (`scroll-behavior: smooth`) across all sections when clicking header links or CTA buttons like *"Book a Service Today!"*.
- **Interactive Laundry Services Catalog**: Dynamically rendered service items with individual pricing and "Add Item" buttons.
- **Real-Time Added Items Cart**:
  - Live calculation of total costs in Rupees (₹).
  - Instant updating of item count and serial numbers.
  - Ability to remove individual items from the cart.
- **Interactive Booking Form**: Form submission handling with cart validation (requires at least one service before booking) and interactive feedback alerts.
- **Responsive Mobile Navigation**: Collapsible drawer menu toggled smoothly via JavaScript for smaller screen sizes.
- **Hero Section with Animations**: Engaging visual design featuring CTA button interactions and an orbit keyframe animation on the hero image.
- **Achievements Metrics Banner**: Highlighted company stats (Services offered, Happy Customers, Years of Experience).
- **Features / Value Propositions**: Grid-based section utilizing FontAwesome vector icons to highlight core business strengths.
- **Newsletter Subscription Form**: Clean newsletter signup with feedback handling.
- **Footer**: Includes quick links, contact info, and social media channels.

---

## Technologies Used

- **HTML5**: Semantic document structure and anchor targets.
- **CSS3**:
  - **Flexbox & CSS Grid**: Layout alignment and responsive column arrangements.
  - **Keyframe Animations & Transitions**: Smooth button scales, hover states, and image orbits.
  - **Media Queries**: Custom breakpoint styling for desktop, tablet, and mobile displays.
- **JavaScript (Vanilla ES6)**:
  - **DOM Manipulation**: Dynamic rendering of service lists and cart items.
  - **State Management**: Reactive cart array using array methods (`map`, `reduce`, `splice`).
  - **Event Handling**: Smooth scrolling, mobile drawer toggles, and form submit events.
- **FontAwesome (CDN)**: Vector icons for service categories, features, and social links.

---

## Detailed Component Breakdown

### 1. Interactive Cart & Service Logic (JavaScript)

#### How It Works
- The service catalog is generated dynamically from a JavaScript array of service objects.
- Clicking **"Add Item"** appends the selected item into the cart array and triggers a UI update.
- The cart recalculates the total price using `Array.prototype.reduce()`.
- Users can click the remove button (`X`) on any row to remove that specific item from the cart.
- Submitting the booking form checks if the cart contains items before displaying a confirmation alert and resetting the form.

#### What I Learned
- Managing state using JavaScript arrays.
- Dynamically injecting HTML templates with template literals (`${...}`).
- Using higher-order array methods (`map`, `reduce`, `splice`).
- Validating dynamic user input before processing forms.

---

### 2. Navigation & Mobile Drawer

#### How It Works
- On desktop, traditional navigation links are displayed across the header.
- On smaller screens, navigation links hide and a hamburger menu button (`☰`) appears.
- Clicking the hamburger button toggles an `.active` class on the mobile dropdown menu using JavaScript.
- Selecting any link automatically closes the mobile drawer and smoothly scrolls to the chosen section on the page.

#### What I Learned
- Toggling CSS classes dynamically using JavaScript `classList.toggle()`.
- Implementing smooth scroll behavior with CSS `scroll-behavior: smooth` and JavaScript `scrollIntoView()`.
- Building touch-friendly mobile drawer menus.

---

### 3. CSS Animations & Transforms

#### Key Visual Effects
- **Hero Image Orbit**: Keyframe animation that rotates and scales the hero illustration on hover.
- **Hover Transitions**: Smooth color shifts and scaling on buttons, service rows, and navigation links.

#### What I Learned
- Defining multi-step keyframe sequences using `@keyframes`.
- Combining `transform` properties (`scale`, `rotate`, `translate`) for smooth UI interactions.
- Improving perceived performance with CSS `transition` properties.

---

## Responsive Layout Design

- **Desktop**: 2-column grid layout pairing the service catalog side-by-side with the active cart and booking form.
- **Tablet**: Adjusted padding, font sizing, and multi-column grids for medium viewports.
- **Mobile**: Single-column layout stack, full-width touch-friendly buttons, and collapsible navigation menu.

---

## How to Run the Project

1. Clone or download the repository to your local computer.
2. Ensure the following file structure is maintained in your project directory:
   ```
   laundry-service/
   │
   ├── index.html     # Page markup and layout
   ├── style.css      # Styling, layout grids, and animations
   ├── script.js      # Cart state, event listeners, and DOM logic
   └── README.md      # Project documentation
   ```
3. Open `index.html` in any web browser by double-clicking the file or serving it via a local development server (e.g., Live Server extension in VS Code).
