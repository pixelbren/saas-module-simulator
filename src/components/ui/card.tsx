import * as React from "react";

import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow dark:bg-gray-600/30",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

export { Card };
