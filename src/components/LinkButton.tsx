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
        "w-full h-auto p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl flex flex-col items-start gap-3 sm:gap-4 text-left group sm:items-center sm:text-center",
        getButtonClasses(),
        className
      )}
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap text-left sm:justify-center">
          {Icon && <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 group-hover:animate-wave" />}
          <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-tight">{title}</span>
          <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 opacity-70 shrink-0" />
        </div>
        {description && (
          <p className="text-xs sm:text-sm md:text-base opacity-90 leading-relaxed sm:max-w-lg sm:text-center">
            {description}
          </p>
        )}
      </a>
    </Button>
  );
};
