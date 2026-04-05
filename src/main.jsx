// Main entry point for the Finance Dashboard application
// Built with React 18 and Vite for modern web development
// This file initializes the React application and mounts it to the DOM
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";

// Create a root container and render the App component
// React 18 uses createRoot for concurrent features and better performance
createRoot(document.getElementById("root")).render(<App />);

