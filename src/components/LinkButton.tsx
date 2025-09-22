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
        "w-full h-auto p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg sm:rounded-xl flex flex-col items-center gap-2 sm:gap-3 text-center group min-h-[80px] sm:min-h-[100px]",
        getButtonClasses(),
        className
      )}
    >
      <a href={href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 w-full">
        <div className="flex items-center justify-center gap-2 sm:gap-3 w-full">
          {Icon && <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:animate-wave flex-shrink-0" />}
          <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold leading-tight text-center break-words">{title}</span>
          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 opacity-70 flex-shrink-0" />
        </div>
        {description && (
          <p className="text-xs sm:text-sm opacity-90 leading-relaxed text-center max-w-full break-words px-1">
            {description}
          </p>
        )}
      </a>
    </Button>
  );
};
