import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const Card = forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      data-slot="card"
      className={cn(className)}
      ref={ref}
      {...props}
    />
  ),
);
Card.displayName = "Card";

export { Card };
