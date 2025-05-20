"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { UserCircleIcon, KeyIcon, BellIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/Button";

export default function Profile() {
  const [name, setName] = useState("");
  const [email] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // No-op: No actual update logic
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Profile updated successfully (mock)");
    } catch (err) {
      toast.error("Failed to update profile");
      console.error("Profile update error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">
        Profile Settings
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personal Information - Full width on mobile, half on desktop */}
        <div className="md:col-span-2 rounded-xl bg-white dark:bg-gray-800 p-6 shadow-lg dark:shadow-gray-900/20">
          <div className="flex items-center gap-4 mb-6">
            <div className="rounded-full bg-gray-100 dark:bg-gray-700 p-2">
              <UserCircleIcon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Personal Information
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                value={email}
                disabled
                placeholder="your@email.com"
              />
            </div>
            <Button type="submit" variant="primary" loading={isLoading}>
              Save Changes
            </Button>
          </form>
        </div>

        {/* Notifications - Half width */}
        <div className="rounded-xl bg-white dark:bg-gray-800 p-6 shadow-lg dark:shadow-gray-900/20">
          <div className="flex items-center gap-4 mb-6">
            <div className="rounded-full bg-gray-100 dark:bg-gray-700 p-2">
              <BellIcon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Notifications
            </h2>
          </div>
          <div className="space-y-4">
            {[
              "Email Notifications",
              "Push Notifications",
              "SMS Notifications",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {item}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Receive notifications about account activity
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
