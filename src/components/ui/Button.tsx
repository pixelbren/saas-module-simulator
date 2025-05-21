import * as React from "react";
import { cn } from "@/lib/utils";
import { Icon, IconProps } from "@/components/ui/Icon";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "tertiary";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  iconLeft?: React.ReactNode | IconProps["name"];
  iconRight?: React.ReactNode | IconProps["name"];
  fullWidth?: boolean;
  iconColor?: string;
  iconWeight?: IconProps["weight"];
  iconSize?: number | string;
}

const variantClasses = {
  primary: "bg-primary-600 text-white hover:bg-primary-700 rounded-full",
  secondary: "bg-secondary-600 text-white hover:bg-secondary-700 rounded-lg",
  outline: "border border-gray-300 hover:border-gray-400 rounded-lg",
  tertiary:
    "bg-transparent text-primary-600 hover:bg-primary-50 dark:text-primary-400 dark:hover:bg-primary-900/10 border-none rounded-lg shadow-none",
};

const sizeClasses = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      loading = false,
      iconLeft,
      iconRight,
      fullWidth = false,
      iconColor,
      iconWeight = "regular",
      iconSize = 18,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const renderIcon = (
      icon: React.ReactNode | IconProps["name"],
      position: "left" | "right"
    ) => {
      if (!icon) return null;
      if (typeof icon === "string") {
        return (
          <Icon
            name={icon as IconProps["name"]}
            color={iconColor}
            size={iconSize}
            weight={iconWeight}
            className={position === "left" ? "mr-2" : "ml-2"}
            aria-hidden="true"
          />
        );
      }
      return (
        <span className={position === "left" ? "mr-2" : "ml-2"}>{icon}</span>
      );
    };

    return (
      <button
        ref={ref}
        className={cn(
          variantClasses[variant],
          sizeClasses[size],
          fullWidth && "w-full",
          loading && "opacity-60 cursor-not-allowed",
          "relative font-sans font-medium flex items-center justify-center gap-2 transition-colors duration-200 cursor-pointer",
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <span className="absolute left-4 flex items-center">
            <svg
              className="animate-spin h-4 w-4 text-white dark:text-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
          </span>
        )}
        {!loading && renderIcon(iconLeft, "left")}
        <span className={cn(loading && "opacity-0")}>{children}</span>
        {!loading && renderIcon(iconRight, "right")}
      </button>
    );
  }
);
Button.displayName = "Button";
