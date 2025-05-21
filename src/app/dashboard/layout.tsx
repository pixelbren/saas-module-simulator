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
    <div className="min-h-screen bg-white dark:bg-gray-800">
      {/* Desktop Sidebar */}
      <Sidebar
        isMobile={false}
        isCollapsed={isCollapsed}
        onCollapse={setIsCollapsed}
      />
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <Sidebar isMobile={true} onClose={() => setSidebarOpen(false)} />
      )}
      <div
        className={`transition-all duration-300 ${
          isCollapsed ? "lg:pl-20" : "lg:pl-72"
        }`}
      >
        <TopNav
          isCollapsed={isCollapsed}
          onCollapse={setIsCollapsed}
          onShowSidebar={() => setSidebarOpen(true)}
        />
        <main className="pt-6 px-12 pb-10">
          <div className="">{children}</div>
        </main>
      </div>
    </div>
  );
}
