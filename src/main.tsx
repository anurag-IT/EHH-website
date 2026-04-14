import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

// Cleanup initial loader and critical background after hydration
window.addEventListener('load', () => {
  const loader = document.getElementById('main-loader');
  if (loader) {
    loader.style.opacity = '0';
    setTimeout(() => loader.remove(), 500);
  }
  // The critical-hero-bg can stay or be replaced by React's HeroSection
});
