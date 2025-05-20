"use client";
import * as React from "react";
import * as PhosphorIcons from "@phosphor-icons/react";

export type IconWeight =
  | "thin"
  | "light"
  | "regular"
  | "bold"
  | "fill"
  | "duotone";

export interface IconProps {
  name: keyof typeof PhosphorIcons;
  color?: string;
  size?: number | string;
  weight?: IconWeight;
  className?: string;
  "aria-label"?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  color,
  size = 24,
  weight = "regular",
  className,
  ...props
}) => {
  const IconComponent = PhosphorIcons[name] as React.ElementType;
  if (!IconComponent) return null;
  return (
    <IconComponent
      color={color}
      size={size}
      weight={weight}
      className={className}
      {...props}
    />
  );
};
