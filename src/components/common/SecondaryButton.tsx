import {
  type ButtonHTMLAttributes,
  type ReactNode,
  cloneElement,
  isValidElement,
} from "react";
import { cn } from "@/src/lib/utils";

interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
}

export function SecondaryButton({
  children,
  className,
  asChild = false,
  ...props
}: SecondaryButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-[18px] border border-primary bg-white px-7 py-3 text-sm font-semibold text-primary transition duration-300 ease-in-out hover:bg-surface";

  if (asChild && isValidElement(children)) {
    return cloneElement(children as any, {
      className: cn(base, (children as any).props.className, className),
      ...props,
    });
  }

  return (
    <button className={cn(base, className)} {...props}>
      {children}
    </button>
  );
}
