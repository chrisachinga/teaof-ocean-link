import { Hero } from "@/components/Hero";
import { LinkButton } from "@/components/LinkButton";
import { SocialIcons } from "@/components/SocialIcons";
import { SponsorLogos } from "@/components/SponsorLogos";
import eventData from "@/data.json";
import {
  Ticket,
  Calendar,
  Users,
  Map,
  Heart,
  Building2,
  Mail,
  Trophy,
  Image,
  type LucideIcon
} from "lucide-react";

const Index = () => {
  const iconMap = {
    Ticket,
    Calendar,
    Users,
    Map,
    Heart,
    Building2,
    Mail,
    Trophy,
    Image
  } satisfies Record<string, LucideIcon>;

  type EventLinkFromJson = {
    title: string;
    description: string;
    href: string;
    icon: keyof typeof iconMap;
    variant: "ocean" | "coral" | "default";
  };

  type EventData = {
    eventLinks?: EventLinkFromJson[];
  };

  const { eventLinks: rawEventLinks = [] } = eventData as EventData;

  const eventLinks = rawEventLinks.map((link) => ({
    ...link,
    icon: iconMap[link.icon]
  }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <Hero />

      <main className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <section className="mb-12 sm:mb-16 lg:mb-20" aria-labelledby="festival-resources">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12 px-2">
            <h2
              id="festival-resources"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-gradient-ocean tracking-tight"
            >
              Festival Resources
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to experience the magic of TEAOF 2025
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {eventLinks.map((link, index) => (
              <div
                key={link.title}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <LinkButton {...link} />
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-card border-t border-border py-8 sm:py-12 lg:py-16">
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gradient-ocean tracking-tight">
              Stay Connected
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
              Follow us for the latest updates and behind-the-scenes content
            </p>
            <div className="flex justify-center">
              <SocialIcons />
            </div>
          </div>

          <div className="mb-8 sm:mb-12">
            <SponsorLogos />
          </div>

          <div className="border-t border-border pt-6 sm:pt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6">
              <div className="space-y-1">
                <h4 className="font-semibold mb-2 text-sm sm:text-base">Contact</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  <a href="mailto:info@teaof.org" className="hover:text-primary transition-colors">
                    info@teaof.org
                  </a>
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  <a href="tel:+254700222263" className="hover:text-primary transition-colors">
                    +254 700 222 263
                  </a>
                </p>
              </div>

              <div className="space-y-1">
                <h4 className="font-semibold mb-2 text-sm sm:text-base">Location</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Tudor Creek<br />
                  Mombasa, Kenya
                </p>
              </div>

              <div className="space-y-1">
                <h4 className="font-semibold mb-2 text-sm sm:text-base">Office</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Epic Business Centre, Block A<br />
                  5th Floor, Nyali, Mombasa
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground text-left sm:text-center">
              © 2025 East African Ocean Festival Limited. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
