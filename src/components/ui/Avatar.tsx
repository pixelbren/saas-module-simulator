import React from "react";
import { Icon, IconProps } from "@/components/ui/Icon";
import Image from "next/image";

export type AvatarVariant = "icon" | "text" | "image";
export type AvatarSize = "sm" | "md" | "lg" | number;

interface AvatarProps {
  variant: AvatarVariant;
  size?: AvatarSize;
  iconProps?: IconProps;
  text?: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

const sizeMap = {
  sm: 24,
  md: 32,
  lg: 40,
};

export const Avatar: React.FC<AvatarProps> = ({
  variant,
  size = "md",
  iconProps,
  text,
  imageSrc,
  imageAlt = "Avatar",
  className = "",
}) => {
  const resolvedSize =
    typeof size === "number" ? size : sizeMap[size] || sizeMap.md;
  const baseClass = `rounded-full flex items-center justify-center overflow-hidden bg-primary-600 dark:bg-gray-700 ${className}`;

  if (variant === "icon" && iconProps) {
    return (
      <div
        className={baseClass}
        style={{ width: resolvedSize, height: resolvedSize }}
      >
        <Icon {...iconProps} size={resolvedSize * 0.75} />
      </div>
    );
  }
  if (variant === "text" && text) {
    return (
      <div
        className={baseClass + " font-semibold text-white dark:text-white"}
        style={{
          width: resolvedSize,
          height: resolvedSize,
          fontSize: resolvedSize * 0.45,
        }}
      >
        {text}
      </div>
    );
  }
  if (variant === "image" && imageSrc) {
    return (
      <div
        className={baseClass}
        style={{ width: resolvedSize, height: resolvedSize }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={resolvedSize}
          height={resolvedSize}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>
    );
  }
  // fallback
  return (
    <div
      className={baseClass}
      style={{ width: resolvedSize, height: resolvedSize }}
    />
  );
};
