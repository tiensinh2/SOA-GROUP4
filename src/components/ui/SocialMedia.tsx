import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { Facebook, Github, Link, Linkedin, Slack, Youtube } from "lucide-react";
import React from "react";
interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}
const socialLink = [
  {
    title: "Youtube",
    href: "https://www.youtube.com/@reactjsBD",
    icon: <Youtube className="w-10 h-10" />,
  },
  {
    title: "Github",
    href: "https://www.youtube.com/@reactjsBD",
    icon: <Github className="w-10 h-10" />,
  },
  {
    title: "Linkedin",
    href: "https://www.youtube.com/@reactjsBD",
    icon: <Linkedin className="w-10 h-10" />,
  },
  {
    title: "Facebook",
    href: "https://www.youtube.com/@reactjsBD",
    icon: <Facebook className="w-10 h-10" />,
  },
  {
    title: "Slack",
    href: "https://www.youtube.com/@reactjsBD",
    icon: <Slack className="w-10 h-10" />,
  },
];
const SocialMedia = ({className, iconClassName, tooltipClassName}:Props) => {
    return <TooltipProvider>
        <div className = {cn("flex items-center gap-5", className)}>
            {socialLink?.map((item) => (
                <Tooltip key = {item?.title}>
                    <TooltipTrigger asChild>
                        <Link key={item?.title} target="_blank" href={item?.href}
                        className={cn("p-1 border rounded-b hover:text-shop-dark-blue hover:border-shop-accent hoverEffect", iconClassName)}
                        >
                            {item?.icon}
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent className={cn("bg-black text-shop-accent font-semibold border border-shop-dark-pink", tooltipClassName)}>
                        {item?.title}
                    </TooltipContent>
                </Tooltip>))}
        </div>
        
    </TooltipProvider>
};
export default SocialMedia;