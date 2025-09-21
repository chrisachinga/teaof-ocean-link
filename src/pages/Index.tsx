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
      
      <main className="container mx-auto px-4 py-16">
        {/* Event Links Section */}
        <section className="mb-20" aria-labelledby="festival-resources">
          <div className="text-center mb-12">
            <h2 id="festival-resources" className="text-3xl md:text-4xl font-bold mb-4 text-gradient-ocean">
              Festival Resources
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to experience the magic of TEAOF 2025
            </p>
          </div>
          
          <div className="grid gap-6 max-w-4xl mx-auto">
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

      <footer className="bg-card border-t border-border py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4 text-gradient-ocean">
              Stay Connected
            </h3>
            <p className="text-muted-foreground mb-8">
              Follow us for the latest updates and behind-the-scenes content
            </p>
            <SocialIcons />
          </div>
          
          <div className="mb-12">
            <SponsorLogos />
          </div>
          
          <div className="border-t border-border pt-8 text-center">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <h4 className="font-semibold mb-2">Contact</h4>
                <p className="text-sm text-muted-foreground">
                  <a href="mailto:info@teaof.org" className="hover:text-primary transition-colors">
                    info@teaof.org
                  </a>
                </p>
                <p className="text-sm text-muted-foreground">
                  <a href="tel:+254700222263" className="hover:text-primary transition-colors">
                    +254 700 222 263
                  </a>
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Location</h4>
                <p className="text-sm text-muted-foreground">
                  Tudor Creek<br />
                  Mombasa, Kenya
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Office</h4>
                <p className="text-sm text-muted-foreground">
                  Epic Business Centre, Block A<br />
                  5th Floor, Nyali, Mombasa
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 East African Ocean Festival Limited. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
