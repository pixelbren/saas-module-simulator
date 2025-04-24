"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import {
  BellIcon,
  ShieldCheckIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

export default function Settings() {
  const [isLoading, setIsLoading] = useState(false);
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    twoFactorAuth: false,
    marketingEmails: true,
  });

  const handleToggle = async (key: keyof typeof settings) => {
    setIsLoading(true);
    try {
      // TODO: Implement settings update logic
      // This is a mock implementation
      await new Promise((resolve) => setTimeout(resolve, 500));
      setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
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
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Settings
        </h2>
      </div>

      {/* Account Settings */}
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
            <UserCircleIcon className="h-5 w-5 mr-2 text-gray-400" />
            Account Settings
          </h3>
          <div className="mt-5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">
                  Delete Account
                </h4>
                <p className="text-sm text-gray-500">
                  Permanently delete your account and all data
                </p>
              </div>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
            <BellIcon className="h-5 w-5 mr-2 text-gray-400" />
            Notification Settings
          </h3>
          <div className="mt-5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">
                  Email Notifications
                </h4>
                <p className="text-sm text-gray-500">
                  Receive email notifications about your account
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleToggle("emailNotifications")}
                disabled={isLoading}
                className={`${
                  settings.emailNotifications ? "bg-indigo-600" : "bg-gray-200"
                } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
              >
                <span
                  className={`${
                    settings.emailNotifications
                      ? "translate-x-5"
                      : "translate-x-0"
                  } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">
                  Push Notifications
                </h4>
                <p className="text-sm text-gray-500">
                  Receive push notifications on your devices
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleToggle("pushNotifications")}
                disabled={isLoading}
                className={`${
                  settings.pushNotifications ? "bg-indigo-600" : "bg-gray-200"
                } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
              >
                <span
                  className={`${
                    settings.pushNotifications
                      ? "translate-x-5"
                      : "translate-x-0"
                  } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">
                  Marketing Emails
                </h4>
                <p className="text-sm text-gray-500">
                  Receive emails about new features and promotions
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleToggle("marketingEmails")}
                disabled={isLoading}
                className={`${
                  settings.marketingEmails ? "bg-indigo-600" : "bg-gray-200"
                } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
              >
                <span
                  className={`${
                    settings.marketingEmails ? "translate-x-5" : "translate-x-0"
                  } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Security Settings */}
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
            <ShieldCheckIcon className="h-5 w-5 mr-2 text-gray-400" />
            Security Settings
          </h3>
          <div className="mt-5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">
                  Two-Factor Authentication
                </h4>
                <p className="text-sm text-gray-500">
                  Add an extra layer of security to your account
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleToggle("twoFactorAuth")}
                disabled={isLoading}
                className={`${
                  settings.twoFactorAuth ? "bg-indigo-600" : "bg-gray-200"
                } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
              >
                <span
                  className={`${
                    settings.twoFactorAuth ? "translate-x-5" : "translate-x-0"
                  } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
