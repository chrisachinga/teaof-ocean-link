import partnersData from "@/partners.json";

type Partner = {
  logo: string;
  alt?: string;
  href?: string;
};

type PartnersPayload = {
  sponsors?: Partner[];
};

const { sponsors = [] } = partnersData as PartnersPayload;

const buildAltText = ({ logo, alt }: Partner) => {
  if (alt) return alt;
  const filename = logo.replace(/\.[^.]+$/, "");
  return filename
    .split(/[-_]/)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(" ");
};

export const SponsorLogos = () => {
  return (
    <div className="w-full">
      <h3 className="text-center text-lg font-semibold mb-6 text-muted-foreground">
        Our Partners & Sponsors
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {sponsors.map((sponsor) => {
          const cardContent = (
            <div className="bg-card rounded-lg p-4 shadow-gentle hover:shadow-ocean transition-all duration-300 hover:scale-105 border border-border">
              <div className="aspect-video bg-muted rounded flex items-center justify-center">
                <img
                  src={`/partners/${sponsor.logo}`}
                  alt={`${buildAltText(sponsor)} – Official Partner`}
                  className="max-h-16 w-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          );

          return sponsor.href ? (
            <a
              key={sponsor.logo}
              href={sponsor.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              {cardContent}
            </a>
          ) : (
            <div key={sponsor.logo} className="group">
              {cardContent}
            </div>
          );
        })}
      </div>
    </div>
  );
};
