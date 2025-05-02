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
        "bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-800",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

export { Card };
