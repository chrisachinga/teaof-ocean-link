const sponsors = [
  { name: "Explore Mombasa", href: "https://exploremombasa.com" },
  { name: "National Museums of Kenya", href: "https://museums.or.ke" },
  { name: "Magical Kenya", href: "https://magicalkenya.com" },
  { name: "Kenya Ports Authority", href: "https://kpa.co.ke" },
  { name: "NSSF", href: "https://nssf.or.ke" },
  { name: "Kenya Maritime Authority", href: "https://kma.go.ke" },
  { name: "Yamaha", href: "https://yamaha-motor.com" },
  { name: "Skyward Airlines", href: "https://skyward.aero" }
];

export const SponsorLogos = () => {
  return (
    <div className="w-full">
      <h3 className="text-center text-lg font-semibold mb-6 text-muted-foreground">
        Our Partners & Sponsors
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {sponsors.map((sponsor) => (
          <a
            key={sponsor.name}
            href={sponsor.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-card rounded-lg p-4 shadow-gentle hover:shadow-ocean transition-all duration-300 hover:scale-105 border border-border">
              <div className="aspect-video bg-muted rounded flex items-center justify-center">
                <span className="text-xs md:text-sm font-medium text-muted-foreground text-center px-2 group-hover:text-primary transition-colors">
                  {sponsor.name}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};