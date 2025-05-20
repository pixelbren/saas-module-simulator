"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/Button";

export default function Settings() {
  const [isLoading, setIsLoading] = useState(false);
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    marketingEmails: true,
    twoFactorAuth: false,
  });
  const [theme, setTheme] = useState("system");

  const handleToggle = (key: keyof typeof settings) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // TODO: Implement settings update logic
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Settings updated successfully");
    } catch (err) {
      toast.error("Failed to update settings");
      console.error("Settings update error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
          Settings
        </h2>
      </div>

      <div className="rounded-xl bg-white dark:bg-gray-800 p-6 shadow-lg dark:shadow-gray-900/20">
        <div className="px-4 py-5 sm:p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Notifications */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Notifications
              </h3>
              <div className="mt-4 space-y-4">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="email-notifications"
                      name="email-notifications"
                      type="checkbox"
                      checked={settings.emailNotifications}
                      onChange={() => handleToggle("emailNotifications")}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-200 dark:border-gray-600 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="email-notifications"
                      className="font-medium text-gray-700 dark:text-gray-300"
                    >
                      Email notifications
                    </label>
                    <p className="text-gray-500 dark:text-gray-400">
                      Receive email notifications about your account activity
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="push-notifications"
                      name="push-notifications"
                      type="checkbox"
                      checked={settings.pushNotifications}
                      onChange={() => handleToggle("pushNotifications")}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-200 dark:border-gray-600 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="push-notifications"
                      className="font-medium text-gray-700 dark:text-gray-300"
                    >
                      Push notifications
                    </label>
                    <p className="text-gray-500 dark:text-gray-400">
                      Receive push notifications on your devices
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Privacy
              </h3>
              <div className="mt-4 space-y-4">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="profile-visibility"
                      name="profile-visibility"
                      type="checkbox"
                      checked={settings.marketingEmails}
                      onChange={() => handleToggle("marketingEmails")}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-200 dark:border-gray-600 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="profile-visibility"
                      className="font-medium text-gray-700 dark:text-gray-300"
                    >
                      Profile visibility
                    </label>
                    <p className="text-gray-500 dark:text-gray-400">
                      Make your profile visible to other users
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="activity-tracking"
                      name="activity-tracking"
                      type="checkbox"
                      checked={settings.twoFactorAuth}
                      onChange={() => handleToggle("twoFactorAuth")}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-200 dark:border-gray-600 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="activity-tracking"
                      className="font-medium text-gray-700 dark:text-gray-300"
                    >
                      Activity tracking
                    </label>
                    <p className="text-gray-500 dark:text-gray-400">
                      Allow tracking of your activity for analytics
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Theme */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Theme
              </h3>
              <div className="mt-4">
                <select
                  id="theme"
                  name="theme"
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="system">System</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                type="submit"
                disabled={isLoading}
                variant="primary"
                size="sm"
                iconRight="Save"
              >
                {isLoading ? "Saving..." : "Save Changes"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
