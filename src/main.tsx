
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Performance measurements
if (process.env.NODE_ENV === 'development') {
  const startTime = performance.now();
  console.log('App starting...');
  
  window.addEventListener('load', () => {
    const loadTime = performance.now() - startTime;
    console.log(`App fully loaded in ${loadTime.toFixed(2)}ms`);
  });
}

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
