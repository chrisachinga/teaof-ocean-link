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
        "w-full h-auto p-2 sm:p-3 md:p-4 lg:p-5 rounded-lg sm:rounded-xl flex flex-col items-center gap-1 sm:gap-2 text-center group min-h-[60px] sm:min-h-[80px] md:min-h-[100px]",
        getButtonClasses(),
        className
      )}
    >
      <a href={href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 sm:gap-2 w-full max-w-full">
        <div className="flex items-center justify-center gap-1 sm:gap-2 w-full max-w-full">
          {Icon && <Icon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:animate-wave flex-shrink-0" />}
          <span className="text-xs sm:text-sm md:text-base lg:text-lg font-bold leading-tight text-center break-words hyphens-auto flex-1 min-w-0">
            {title}
          </span>
          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 opacity-70 flex-shrink-0" />
        </div>
        {description && (
          <p className="text-xs sm:text-sm opacity-90 leading-relaxed text-center break-words hyphens-auto w-full px-1 sm:px-2">
            {description}
          </p>
        )}
      </a>
    </Button>
  );
};
