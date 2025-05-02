"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  CreditCardIcon,
  ChartBarIcon,
  XMarkIcon,
  MapPinIcon,
  PlayIcon,
} from "@heroicons/react/24/outline";

interface NavigationItem {
  name: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface SidebarProps {
  isMobile?: boolean;
  onClose?: () => void;
}

const navigation: NavigationItem[] = [
  { name: "Overview", href: "/dashboard", icon: HomeIcon },
  { name: "Route Dashboard", href: "/dashboard/route", icon: MapPinIcon },
  { name: "Game Dashboard", href: "/dashboard/game", icon: PlayIcon },
  { name: "Profile", href: "/dashboard/profile", icon: UserCircleIcon },
  { name: "Analytics", href: "/dashboard/analytics", icon: ChartBarIcon },
  { name: "Billing", href: "/dashboard/billing", icon: CreditCardIcon },
  { name: "Settings", href: "/dashboard/settings", icon: Cog6ToothIcon },
];

export default function Sidebar({ isMobile = false, onClose }: SidebarProps) {
  const pathname = usePathname();

  const content = (
    <div className="flex h-full flex-col bg-white dark:bg-gray-800">
      <div className="flex h-16 items-center gap-2 px-6 border-b border-gray-100 dark:border-gray-700">
        <Link href="/dashboard" className="flex items-center gap-2">
          <span className="text-xl font-semibold text-primary-600 dark:text-primary-400">
            YSaaS
          </span>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Simulator
          </span>
        </Link>
        {isMobile && onClose && (
          <button
            aria-label="Close sidebar"
            onClick={onClose}
            className="ml-auto rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto">
        <nav
          role="navigation"
          aria-label="Sidebar navigation"
          className="space-y-1 px-4 py-4"
        >
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={isMobile ? onClose : undefined}
                aria-current={isActive ? "page" : undefined}
                className={`group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary-400/10 text-primary-600 dark:bg-primary-500/10 dark:text-primary-400"
                    : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                }`}
              >
                <item.icon
                  className={`h-5 w-5 flex-shrink-0 ${
                    isActive
                      ? "text-primary-600 dark:text-primary-400"
                      : "text-gray-400 group-hover:text-gray-600 dark:text-gray-500 dark:group-hover:text-gray-400"
                  }`}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mx-4 mb-4 rounded-xl bg-primary-400/5 p-4 dark:bg-primary-500/5">
        <h3 className="text-sm font-medium text-gray-900 dark:text-white">
          Help Center
        </h3>
        <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
          Have a problem?
          <br />
          How can we help you?
        </p>
        <button className="mt-3 w-full rounded-lg bg-primary-600 px-3 py-2 text-sm font-medium text-white hover:bg-primary-500 dark:bg-primary-500 dark:hover:bg-primary-400">
          Send a message
        </button>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <>
        {/* Mobile sidebar backdrop */}
        <div
          className="fixed inset-0 z-40 bg-gray-900/50 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
        {/* Mobile sidebar */}
        <div className="fixed inset-y-0 left-0 z-50 w-72 transform overflow-y-auto bg-white dark:bg-gray-800 shadow-xl transition-transform duration-300 ease-in-out">
          {content}
        </div>
      </>
    );
  }

  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col">
      {content}
    </div>
  );
}
