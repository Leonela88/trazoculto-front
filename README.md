# Editorial Project Management System

A professional web application designed for publishing houses to manage editorial workflows, services, and client relationships. This platform streamlines the creation of new projects like reading reports and style corrections through a clean, centralized interface.

## Table of Contents
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Key Features](#key-features)
4. [Installation](#installation)

## General Info
***
**Status:** In Development.

This project is a dedicated tool for editors to organize and track their daily production. It features a robust project creation form that integrates client management directly into the workflow. The UI is built using a custom design system that ensures visual consistency across the entire editorial dashboard, focusing on clarity and ease of use for managing complex text-based services.

### Screenshot
![Editorial Dashboard](https://via.placeholder.com/800x450/729b88/ffffff?text=Editorial+Management+Interface)

## Technologies
***
A list of technologies and libraries used within the project:
* [React](https://reactjs.org/): Version 18.x
* [React Router](https://reactrouter.com/): Version 7.0 (Web Framework)
* [Axios](https://axios-http.com/): For API communication and data fetching
* [CSS Modules](https://github.com/css-modules/css-modules): For component-scoped styling and maintainability
* [Google Fonts](https://fonts.google.com/): Montserrat (300, 400, 600, 700) for professional typography

## Key Features
***
* **Editorial Service Management:** Specialized categories for Reading Reports and Style Corrections.
* **Secure Login System:** Protected routes and session management using credential-based authentication.
* **Integrated Client Directory:** Real-time synchronization with the client database.
* **Smart Modal System:** On-the-fly client registration via pop-up to avoid workflow interruption.
* **Atomic Design Architecture:** Built using reusable UI atoms.
* **Centralized API Services:** Decoupled logic using `apiClient` and `apiProject` for cleaner code maintenance.

## Installation
***
To run this project locally, follow these steps:

1. Clone the repository:
```bash
$ git clone [https://github.com/Leonela88/trazoculto-front.git]
$ cd trazoculto-front
$ npm run dev