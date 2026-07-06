import {
  type ButtonHTMLAttributes,
  type ReactNode,
  cloneElement,
  isValidElement,
} from "react";
import { cn } from "@/src/lib/utils";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
}

export function PrimaryButton({
  children,
  className,
  asChild = false,
  ...props
}: PrimaryButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-[18px] bg-primary px-7 py-3 text-sm font-semibold text-white transition duration-300 ease-in-out hover:bg-primary-hover hover:shadow-card";

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
