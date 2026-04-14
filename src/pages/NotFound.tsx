import React from "react";
import { Link } from "react-router-dom";
import { Trees } from "lucide-react";

/**
 * Optimized and Themed 404 Page
 * Provides a premium user experience even when a page is not found.
 */
const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center animate-float">
            <Trees className="w-12 h-12 text-primary" />
          </div>
        </div>
        
        <h1 className="font-display text-6xl sm:text-7xl font-bold text-foreground mb-4">404</h1>
        
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
          Lost in the Forest?
        </h2>
        
        <p className="text-muted-foreground text-base sm:text-lg mb-10 leading-relaxed">
          The page you're looking for was either moved or doesn't exist. Let's get you back on the right path for humanity.
        </p>
        
        <Link 
          to="/" 
          className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
