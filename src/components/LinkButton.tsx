import { Button } from "@/components/ui/button";
import { ExternalLink, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface LinkButtonProps {
  title: string;
  description?: string;
  href: string;
  icon?: LucideIcon;
  variant?: "ocean" | "coral" | "default";
  className?: string;
}

export const LinkButton = ({ 
  title, 
  description, 
  href, 
  icon: Icon, 
  variant = "ocean",
  className 
}: LinkButtonProps) => {
  const getButtonClasses = () => {
    switch (variant) {
      case "ocean":
        return "btn-ocean";
      case "coral":
        return "btn-coral";
      default:
        return "";
    }
  };

  return (
    <Button
      asChild
      size="lg"
      className={cn(
        "w-full h-auto p-6 md:p-8 rounded-2xl flex flex-col items-center gap-3 group",
        getButtonClasses(),
        className
      )}
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        <div className="flex items-center gap-3 mb-2">
          {Icon && <Icon className="w-6 h-6 md:w-8 md:h-8 group-hover:animate-wave" />}
          <span className="text-xl md:text-2xl font-bold">{title}</span>
          <ExternalLink className="w-5 h-5 opacity-70" />
        </div>
        {description && (
          <p className="text-sm md:text-base opacity-90 text-center leading-relaxed">
            {description}
          </p>
        )}
      </a>
    </Button>
  );
};