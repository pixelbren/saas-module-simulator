"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar
        isMobile={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        isCollapsed={isCollapsed}
        onCollapse={setIsCollapsed}
      />

      <div
        className={`transition-all duration-300 ${
          isCollapsed ? "lg:pl-20" : "lg:pl-72"
        }`}
      >
        <TopNav isCollapsed={isCollapsed} onCollapse={setIsCollapsed} />

        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
