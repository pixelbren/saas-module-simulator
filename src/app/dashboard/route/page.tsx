"use client";

import { useState } from "react";
import { MapPinIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/Button";

interface Site {
  id: number;
  name: string;
  address: string;
  time: string;
  status: "completed" | "todo";
}

export default function RouteDashboard() {
  const [showAll, setShowAll] = useState(true);
  const activeLocation = "Brisbane";

  const sites: Site[] = [
    {
      id: 1,
      name: "TechSprint Systems",
      address: "45 Darley St, Sydney",
      time: "9:00 AM - 9:15 AM",
      status: "completed",
    },
    {
      id: 2,
      name: "DownUnder Solutions",
      address: "12 Queen St, Brisbane",
      time: "9:30 AM - 9:45 AM",
      status: "completed",
    },
    {
      id: 3,
      name: "Great Barrier Tech Co.",
      address: "56 Elizabeth St, Adelaide",
      time: "10:00 AM - 10:15 AM",
      status: "completed",
    },
    {
      id: 4,
      name: "AussieTech Innovations",
      address: "78 King St, Melbourne",
      time: "9:15 AM - 9:30 AM",
      status: "todo",
    },
    {
      id: 5,
      name: "Kangaroo Cloud Services",
      address: "33 George St, Perth",
      time: "9:45 AM - 10:00 AM",
      status: "todo",
    },
  ];

  const completedSites = sites.filter((site) => site.status === "completed");
  const progressPercentage = (completedSites.length / sites.length) * 100;

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Left Panel */}
      <div className="w-[449px] bg-white dark:bg-gray-800 shadow-lg flex flex-col">
        {/* Navigation Header */}
        <div className="border-b border-gray-200 dark:border-gray-700 px-6 py-4">
          <div className="flex items-center gap-1">
            <span className="font-semibold text-gray-600 dark:text-gray-400">
              QLD
            </span>
            <ChevronRightIcon className="h-4 w-4 text-gray-400 dark:text-gray-500" />
            <span className="font-semibold text-gray-900 dark:text-gray-100">
              {activeLocation}
            </span>
            <ChevronRightIcon className="h-4 w-4 text-gray-400 dark:text-gray-500" />
            <span className="font-semibold text-gray-600 dark:text-gray-400">
              Today
            </span>
          </div>
        </div>

        {/* Sites Schedule Header */}
        <div className="px-6 py-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Sites Schedule
            </h2>
            <div className="flex items-center gap-3">
              <Button
                onClick={() => setShowAll(!showAll)}
                variant={showAll ? "default" : "outline"}
                size="sm"
              >
                Show all
              </Button>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-4 flex gap-3">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                3 completed
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                2 to do&apos;s
              </span>
            </div>
          </div>
        </div>

        {/* Sites List */}
        <div className="flex-1 overflow-y-auto px-6">
          <div className="space-y-3">
            {sites.map((site) => (
              <div
                key={site.id}
                className="flex items-start gap-3 rounded-lg border border-gray-200 dark:border-gray-700 p-4"
              >
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-full ${
                    site.status === "completed"
                      ? "bg-green-500"
                      : "bg-gray-400 dark:bg-gray-600"
                  }`}
                >
                  <span className="font-semibold text-white">{site.id}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                    {site.name}
                  </h3>
                  <div className="mt-1 flex items-center gap-1.5">
                    <MapPinIcon className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {site.address}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {site.time}
                  </p>
                </div>
                <div
                  className={`rounded-full px-2 py-1 text-xs font-medium ${
                    site.status === "completed"
                      ? "bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                      : "bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {site.status === "completed" ? "Completed" : "To do"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Map View */}
      <div className="flex-1 relative">
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-900">
          {/* Map will be implemented here */}
          <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-600">
            Map View
          </div>
        </div>

        {/* Floating Progress Card */}
        <div className="absolute bottom-6 right-6 w-64">
          <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-lg">
            <div className="flex flex-col items-center">
              <div className="relative h-24 w-24">
                <svg className="h-full w-full" viewBox="0 0 100 100">
                  <circle
                    className="text-gray-100 dark:text-gray-700"
                    strokeWidth="16"
                    stroke="currentColor"
                    fill="transparent"
                    r="42"
                    cx="50"
                    cy="50"
                  />
                  <circle
                    className="text-green-500"
                    strokeWidth="16"
                    strokeDasharray={`${progressPercentage} 100`}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="42"
                    cx="50"
                    cy="50"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {Math.round(progressPercentage)}%
                  </span>
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
                Today&apos;s Progress
              </h3>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                {completedSites.length} of {sites.length} visits completed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
