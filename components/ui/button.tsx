import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-xs font-bold uppercase tracking-[0.17em] transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold",
  {
    variants: {
      variant: {
        default: "bg-gold text-navy shadow-gold hover:bg-gold-light",
        outline:
          "border border-gold/55 bg-navy/35 text-cream hover:border-gold hover:bg-gold/10",
        quiet: "text-cream/75 hover:text-gold",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        data-slot="button"
        className={cn(buttonVariants({ variant }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
