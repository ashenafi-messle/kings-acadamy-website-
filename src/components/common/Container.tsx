import { type ReactNode } from "react";
import { cn } from "@/src/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto max-w-[1280px] px-6 sm:px-8", className)}>
      {children}
    </div>
  );
}
