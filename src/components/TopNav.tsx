"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

interface TopNavProps {
  isCollapsed?: boolean;
  onCollapse?: (collapsed: boolean) => void;
}

export default function TopNav({
  isCollapsed = false,
  onCollapse,
}: TopNavProps) {
  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 sm:gap-x-6 sm:px-6 lg:px-8">
      <div className="flex flex-1 gap-x-2 self-stretch items-center lg:gap-x-2">
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
        <h3 className=" text-gray-900 dark:text-white">Welcome!</h3>
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
            size={24}
            className="text-gray-400 dark:text-gray-500"
            aria-hidden="true"
          />
        </Button>

        <ThemeToggle />

        <div
          className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200 dark:lg:bg-gray-700"
          aria-hidden="true"
        />

        <div className="relative">
          <div className="relative flex rounded-full bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900">
            <span className="sr-only">Open user menu</span>
            <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
              <Icon
                name="User"
                size={24}
                className="text-gray-300 dark:text-gray-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
