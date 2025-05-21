"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { usePathname } from "next/navigation";
import { Avatar } from "@/components/ui/Avatar";

interface TopNavProps {
  isCollapsed?: boolean;
  onCollapse?: (collapsed: boolean) => void;
  onShowSidebar?: () => void;
}

const navigation = [
  { name: "Overview", href: "/dashboard" },
  { name: "Game Dashboard", href: "/dashboard/game" },
  { name: "Route Dashboard", href: "/dashboard/route" },
  { name: "Analytics", href: "/dashboard/analytics" },
  { name: "Profile", href: "/dashboard/profile" },
  { name: "Billing", href: "/dashboard/billing" },
  { name: "Settings", href: "/dashboard/settings" },
];

export default function TopNav({
  isCollapsed = false,
  onCollapse,
  onShowSidebar,
}: TopNavProps) {
  const pathname = usePathname();
  const activePage =
    navigation.find((item) => item.href === pathname)?.name || "";
  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 sm:gap-x-6 sm:px-6 lg:px-8">
      <div className="flex flex-1 gap-x-2 self-stretch items-center lg:gap-x-2">
        <Button
          type="button"
          variant="tertiary"
          size="sm"
          className="inline-flex lg:hidden"
          aria-label="Open sidebar menu"
          onClick={onShowSidebar}
        >
          <Icon name="List" size={22} className="text-gray-400" />
        </Button>
        <Button
          type="button"
          variant="tertiary"
          size="sm"
          className="hidden lg:inline-flex"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          onClick={() => onCollapse && onCollapse(!isCollapsed)}
        >
          <Icon
            name={isCollapsed ? "List" : "List"}
            size={22}
            className="text-gray-400"
          />
        </Button>
        <h3 className=" text-gray-900 dark:text-white">{activePage}</h3>
      </div>

      <div className="flex flex-1 max-w-md">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon
              className="h-5 w-5 text-gray-400 dark:text-gray-500"
              aria-hidden="true"
            />
          </div>
          <input
            type="search"
            name="search"
            id="search"
            className="block w-full rounded-lg border border-gray-200 bg-white py-2 pl-10 pr-3 text-sm placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:placeholder:text-gray-500"
            placeholder="Search something..."
          />
        </div>
      </div>

      <div className="flex items-center gap-x-2 lg:gap-x-2">
        <Button type="button" variant="tertiary" size="sm">
          <span className="sr-only">View notifications</span>
          <Icon
            name="Bell"
            size={20}
            className="text-gray-400 dark:text-gray-500"
            aria-hidden="true"
          />
        </Button>

        <ThemeToggle />

        <div className="relative flex rounded-full bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ml-2">
          <span className="sr-only">Open user menu</span>
          <div className="h-8 w-8">
            <Avatar
              variant="text"
              size={32}
              text="JD"
              iconProps={{
                name: "User",
                className: "text-white dark:text-white",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
