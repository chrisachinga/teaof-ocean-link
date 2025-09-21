import heroImage from "@/assets/teaof-hero.jpg";

export const Hero = () => {
  return (
    <header className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(33, 150, 243, 0.7), rgba(33, 150, 243, 0.5)), url(${heroImage})`,
        }}
      />
      
      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-fade-up">
        <div className="glass-ocean rounded-3xl p-8 md:p-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-wave">
            East African Ocean Festival
          </h1>
          <div className="text-xl md:text-2xl font-semibold mb-4 text-secondary">
            TEAOF 2025
          </div>
          <div className="text-lg md:text-xl mb-6 font-medium">
            October 9-11, 2025 • Tudor Creek, Mombasa
          </div>
          <p className="text-base md:text-lg leading-relaxed opacity-90 max-w-2xl mx-auto">
            Experience three days of maritime heritage celebration featuring traditional dhow races, 
            boat shows, live concerts, and ocean sporting competitions at the shimmering jewel of the Mombasa Coastline.
          </p>
        </div>
      </div>
    </header>
  );
};