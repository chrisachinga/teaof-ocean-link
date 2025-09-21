import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com/teaof",
    color: "hover:text-blue-600"
  },
  {
    name: "Instagram", 
    icon: Instagram,
    href: "https://instagram.com/teaof",
    color: "hover:text-pink-600"
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/teaof",
    color: "hover:text-blue-400"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/company/teaof",
    color: "hover:text-blue-700"
  }
];

export const SocialIcons = () => {
  return (
    <div className="flex gap-4 justify-center">
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <Button
            key={social.name}
            variant="ghost"
            size="icon"
            className={`rounded-full bg-card hover:scale-110 transition-all duration-300 ${social.color}`}
            asChild
          >
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow TEAOF on ${social.name}`}
            >
              <Icon className="w-6 h-6" />
            </a>
          </Button>
        );
      })}
    </div>
  );
};