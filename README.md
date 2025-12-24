# BingeBox

A modern web application built with React and Vite for browsing and managing your favorite shows and movies.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
- [Building](#building)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)

## Features

- 🎬 Browse and discover movies and TV shows
- ⚡ Fast and responsive user interface
- 🎨 Modern UI/UX design
- 📱 Mobile-friendly layout
- 🔍 Search and filter functionality

## Tech Stack

- **Frontend Framework**: [React](https://react.dev) 19.2.0
- **Build Tool**: [Vite](https://vitejs.dev)
- **Styling**: CSS3
- **Linting**: ESLint
- **Package Manager**: npm

## Project Structure

```
BingeBox/
├── frontend/
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── assets/         # Images and icons
│   │   ├── App.jsx         # Main App component
│   │   ├── App.css         # App styling
│   │   ├── main.jsx        # Entry point
│   │   └── index.css       # Global styles
│   ├── index.html          # HTML entry point
│   ├── package.json        # Project dependencies
│   ├── vite.config.js      # Vite configuration
│   └── eslint.config.js    # ESLint configuration
```

## Prerequisites

- **Node.js** (v16.0.0 or higher)
- **npm** (v7.0.0 or higher)

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/YOUR_USERNAME/BingeBox.git
   cd BingeBox
   ```

2. **Navigate to the frontend directory**

   ```bash
   cd frontend
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

## Development

To start the development server with hot module replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Building

To create a production build:

```bash
npm run build
```

This generates an optimized build in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

## Available Scripts

In the `frontend` directory, you can run:

| Command           | Description                       |
| ----------------- | --------------------------------- |
| `npm run dev`     | Start development server with HMR |
| `npm run build`   | Build for production              |
| `npm run preview` | Preview production build locally  |
| `npm run lint`    | Run ESLint to check code quality  |

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy coding!** 🚀
