# Insight.IO Robotics Dashboard Assignment

## Candidate Information

**Full Name:** Vivek Biradar

**Email ID:** biradarvivek03@gmail.com

**Contact Number:** +91 8454980236


---

# Project Overview

This project is a recreation of the Insight.IO Robotics Dashboard provided as part of the ERIC Robotics Full Stack Developer assignment.

The dashboard is built using React and Tailwind CSS and includes:

* Interactive dashboard UI
* Camera feed visualization using MP4 video stream
* 3D point cloud visualization using Three.js and PCDLoader
* Emergency Stop control
* Mission status management
* Auto / Manual mode switching
* Interactive joystick controls
* Zoom controls
* Picture-in-Picture view switching between Camera and Map

---

# Tech Stack

## Frontend

* React.js
* Tailwind CSS
* Lucide React
* Three.js

## Backend

* Node.js
* Express.js
* CORS

## Visualization

* Three.js
* PCDLoader
* OrbitControls

---

# Features Implemented

### Dashboard Layout

* Sidebar navigation
* Mission status panel
* System health indicators
* Auto / Manual mode switch

### Camera View

* MP4 video feed integration
* Zoom controls
* Live feed status indicator

### 3D Map View

* Point cloud visualization using .pcd files
* Three.js rendering
* Orbit controls for navigation
* Zoom support

### Controls

* Emergency Stop button
* Mission initiation control
* Interactive joystick controls
* Active navigation state management

### User Experience

* Responsive layout
* Smooth animations
* Interactive controls
* Picture-in-Picture view switching

---

# Architecture Decisions

### Why React?

React provides reusable components and maintainable UI architecture for complex dashboards.

### Why Tailwind CSS?

Tailwind enables rapid development while maintaining consistent styling and responsiveness.

### Why Three.js?

Three.js provides efficient rendering and interaction capabilities for point cloud visualization.

### Why PCD Instead of ROS?

The assignment requirements allow either:

* Point Cloud Data (.pcd) visualization
* ROS integration

This implementation uses a .pcd-based approach with Three.js and PCDLoader to satisfy the 3D Map View requirement while keeping the solution lightweight and maintainable.

---

# Project Structure

```text
project-root
│
├── backend
│   ├── public
│   │   └── assets
│   │       ├── sample_video.mp4
│   │       └── simple_map.pcd
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── assets
│   │   └── App.jsx
│   └── package.json
│
└── README.md
```

# Setup Instructions

## Backend Setup

Navigate to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Run server:

```bash
npm start
```

Backend runs on:

```text
http://localhost:5000
```

---

## Frontend Setup

Navigate to frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# Usage

1. Start backend server.
2. Start frontend server.
3. Open the frontend URL in your browser.
4. Explore:

   * Camera View
   * Map View
   * Auto / Manual modes
   * Emergency Stop
   * Mission Initiation
   * Joystick Controls
   * Zoom Controls


---

# Assignment Submission

This project was completed as part of the ERIC Robotics Full Stack Developer assignment.
