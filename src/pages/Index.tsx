import { Hero } from "@/components/Hero";
import { LinkButton } from "@/components/LinkButton";
import { SocialIcons } from "@/components/SocialIcons";
import { SponsorLogos } from "@/components/SponsorLogos";
import { 
  Ticket, 
  Calendar, 
  Users, 
  Map, 
  Heart, 
  Building2, 
  Mail 
} from "lucide-react";

const Index = () => {
  const eventLinks = [
    {
      title: "Buy Tickets",
      description: "Secure your spot at TEAOF 2025 - Early bird pricing available",
      href: "https://teaof.org/tickets",
      icon: Ticket,
      variant: "ocean" as const
    },
    {
      title: "Event Schedule", 
      description: "View the complete 3-day program of races, shows, and concerts",
      href: "https://teaof.org/schedule",
      icon: Calendar,
      variant: "coral" as const
    },
    {
      title: "Speakers & Artists",
      description: "Meet the performers and maritime heritage experts",
      href: "https://teaof.org/speakers",
      icon: Users,
      variant: "ocean" as const
    },
    {
      title: "Venue Map",
      description: "Navigate Tudor Creek and find all festival locations",
      href: "https://teaof.org/venue",
      icon: Map,
      variant: "coral" as const
    },
    {
      title: "Volunteer Signup",
      description: "Join our team and help make TEAOF 2025 unforgettable",
      href: "https://teaof.org/volunteer",
      icon: Heart,
      variant: "ocean" as const
    },
    {
      title: "Sponsor Information", 
      description: "Partnership opportunities and sponsor benefits",
      href: "https://teaof.org/sponsors",
      icon: Building2,
      variant: "coral" as const
    },
    {
      title: "Contact Us",
      description: "Get in touch with our team for any questions",
      href: "mailto:info@teaof.org",
      icon: Mail,
      variant: "ocean" as const
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <Hero />
      
      <main className="container mx-auto px-4 py-16">
        {/* Event Links Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-ocean">
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
