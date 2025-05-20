"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

interface NavigationItem {
  name: string;
  href: string;
  icon: string; // emoji
  group?: string;
}

interface SidebarProps {
  isMobile?: boolean;
  onClose?: () => void;
  isCollapsed?: boolean;
  onCollapse?: (collapsed: boolean) => void;
}

const navigation: NavigationItem[] = [
  { name: "Overview", href: "/dashboard", icon: "🏠" },
  {
    name: "Game Dashboard",
    href: "/dashboard/game",
    icon: "🎮",
    group: "Dashboards",
  },
  {
    name: "Route Dashboard",
    href: "/dashboard/route",
    icon: "🗺️",
    group: "Dashboards",
  },
  {
    name: "Analytics",
    href: "/dashboard/analytics",
    icon: "📊",
    group: "Dashboards",
  },
  { name: "Profile", href: "/dashboard/profile", icon: "👤" },
  { name: "Billing", href: "/dashboard/billing", icon: "💳" },
  { name: "Settings", href: "/dashboard/settings", icon: "⚙️" },
];

export default function Sidebar({
  isMobile = false,
  onClose,
  isCollapsed: propIsCollapsed,
}: SidebarProps) {
  const pathname = usePathname();
  const [dashboardsOpen, setDashboardsOpen] = useState(true);
  const [localIsCollapsed] = useState(false);

  const isCollapsed = propIsCollapsed ?? localIsCollapsed;

  const content = (
    <div
      className={`flex h-full flex-col bg-white dark:bg-gray-800 transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-72"
      }`}
    >
      <div
        className={`flex h-16 items-center gap-2 px-6 border-b border-gray-100 dark:border-gray-700 ${
          isCollapsed ? "justify-center px-2" : ""
        }`}
      >
        <Link href="/dashboard" className="flex items-center gap-2">
          {!isCollapsed ? (
            <>
              <span className="text-xl font-semibold text-primary-600 dark:text-primary-400">
                YSaaS
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Simulator
              </span>
            </>
          ) : (
            <span className="text-xl font-semibold text-primary-600 dark:text-primary-400">
              Y
            </span>
          )}
        </Link>
        {isMobile && onClose && (
          <button
            aria-label="Close sidebar"
            onClick={onClose}
            className="ml-auto rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
          >
            <span className="text-lg">✖️</span>
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto">
        <nav
          role="navigation"
          aria-label="Sidebar navigation"
          className="space-y-1 px-4 py-4"
        >
          {/* Overview */}
          {navigation
            .filter((item) => !item.group && item.name === "Overview")
            .map((item) => {
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
                  <span className="text-lg">{item.icon}</span>
                  {!isCollapsed && item.name}
                </Link>
              );
            })}

          {/* Dashboards Group */}
          <div>
            <button
              className="w-full flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 focus:outline-none"
              onClick={() => setDashboardsOpen((open) => !open)}
              aria-expanded={dashboardsOpen}
              aria-controls="dashboards-menu"
              type="button"
            >
              <span className="text-lg">📂</span>
              {!isCollapsed && (
                <>
                  Dashboards
                  <Icon
                    name={dashboardsOpen ? "CaretDown" : "CaretRight"}
                    size={16}
                    className="ml-auto text-gray-400"
                  />
                </>
              )}
            </button>
            {dashboardsOpen && !isCollapsed && (
              <div id="dashboards-menu" className="ml-6 mt-1 space-y-1">
                {navigation
                  .filter((item) => item.group === "Dashboards")
                  .map((item) => {
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
                        <span className="text-lg">{item.icon}</span>
                        {item.name}
                      </Link>
                    );
                  })}
              </div>
            )}
          </div>

          {/* Profile, Billing, Settings */}
          {navigation
            .filter((item) => !item.group && item.name !== "Overview")
            .map((item) => {
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
                  <span className="text-lg">{item.icon}</span>
                  {!isCollapsed && item.name}
                </Link>
              );
            })}
        </nav>
      </div>

      {!isCollapsed && (
        <div className="mx-4 mb-4 rounded-xl bg-primary-400/5 p-4 dark:bg-primary-500/5">
          <h3 className="text-sm font-medium text-gray-900 dark:text-white">
            Help Center
          </h3>
          <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
            Have a problem?
            <br />
            How can we help you?
          </p>
          <Button
            className="mt-3 w-full"
            iconLeft="ChatCircleText"
            variant="primary"
            size="md"
            fullWidth
          >
            Send a message
          </Button>
        </div>
      )}
      {/* 
      <button
        onClick={() => handleCollapse(!isCollapsed)}
        className="mx-4 mb-4 flex items-center justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        <Icon
          name={isCollapsed ? "CaretRight" : "CaretLeft"}
          size={20}
          className="text-gray-400"
        />
      </button> */}
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
        <div className="fixed inset-y-0 left-0 z-50 transform overflow-y-auto bg-white dark:bg-gray-800 shadow-xl transition-transform duration-300 ease-in-out">
          {content}
        </div>
      </>
    );
  }

  return (
    <div
      className={`hidden lg:fixed lg:inset-y-0 lg:flex lg:flex-col transition-all duration-300 ${
        isCollapsed ? "lg:w-20" : "lg:w-72"
      }`}
    >
      {content}
    </div>
  );
}
