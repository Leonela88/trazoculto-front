# Trazoculto - Editorial Services Platform

Trazoculto is a full-stack web application designed for Trazoculto, an editorial services brand. The platform serves as both a professional portfolio for authors seeking editorial expertise and a management tool for the editor to streamline her workflow.

## Table of Contents
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Key Features](#key-features)
4. [Installation](#installation)

## General Info
***
**Status:** In Development.

Trazoculto provides a comprehensive solution for managing the editorial lifecycle. The application is divided into two main areas:

1.  **Public Landing Page:** A professional showcase where authors can explore the editor's background, learn about specific services such as reading reports and style corrections, and initiate contact directly through an integrated form.
2.  **Private Dashboard:** A secure management interface where the editor can log in to organize projects, track progress, and manage her client database effectively.

The project focuses on delivering a polished user experience for authors while providing powerful organizational tools for the editor, all under a cohesive brand identity.

## Technologies
***
The frontend of this application is built with the following technologies:
* **React** (v18.x) - UI Library
* **TypeScript** - For type safety and better developer experience
* **Vite** - Modern frontend build tool
* **React Router** (v7.0) - Declarative routing for React applications
* **CSS Modules** - Scoped styling to ensure component isolation
* **Axios** - Promise-based HTTP client for API communication

*Note: The backend is powered by a separate **Spring Boot** repository.*

## Key Features
***
* **Service Showcase:** Detailed presentation of editorial services (Reading Reports, Style Corrections).
* **Biography & Experience:** A dedicated section highlighting the editor's professional trajectory.
* **Contact Integration:** Functional contact form for authors to reach out.
* **Secure Authentication:** Private access to the dashboard for project management.
* **Project & Client Management:** Tools for the editor to create, view, and organize editorial tasks and client information.
* **Atomic Design Architecture:** Built using a modular system of reusable UI components for consistency.

## Installation
***
To run the frontend project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Leonela88/trazoculto-front.git
   cd trazoculto-front
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173` (or the port specified by Vite). Ensure you have the backend service running if you need to test full-stack functionality.
