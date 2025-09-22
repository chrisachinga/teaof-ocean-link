import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-background to-muted px-3 sm:px-6">
      <div className="text-center space-y-4 sm:space-y-6 max-w-md mx-auto">
        <div className="glass-ocean rounded-2xl sm:rounded-3xl p-6 sm:p-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gradient-ocean mb-3 sm:mb-4">
            404
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8">
            Oops! Page not found
          </p>
          <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button 
            asChild 
            className="btn-ocean w-full sm:w-auto"
            size="lg"
          >
            <a href="/">
              Return to Home
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
