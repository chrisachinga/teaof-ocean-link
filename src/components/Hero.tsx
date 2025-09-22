import heroImage from "@/assets/teaof-hero.jpg";

export const Hero = () => {
  return (
    <header className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(33, 150, 243, 0.7), rgba(33, 150, 243, 0.5)), url(${heroImage})`,
        }}
        role="img"
        aria-label="Tudor Creek waterfront in Mombasa, Kenya - venue for East African Ocean Festival 2025"
      />
      
      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-3 sm:px-4 md:px-6 max-w-4xl mx-auto animate-fade-up">
        <div className="glass-ocean rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12">
          <img
            src="/common-teaof-logo-1b.webp"
            alt="East African Ocean Festival logo"
            className="mx-auto mb-4 sm:mb-6 h-16 w-auto sm:h-20 md:h-24 lg:h-32"
          />
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4 animate-wave leading-tight">
            East African Ocean Festival
          </h1>
          <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 text-secondary">
            TEAOF 2025
          </div>
          <div className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 font-medium">
            October 9-11, 2025 • Tudor Creek, Mombasa
          </div>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed opacity-90 max-w-2xl mx-auto">
            Experience three days of maritime heritage celebration featuring traditional dhow races, 
            boat shows, live concerts, and ocean sporting competitions at the shimmering jewel of the Mombasa Coastline.
          </p>
        </div>
      </div>
    </header>
  );
};
