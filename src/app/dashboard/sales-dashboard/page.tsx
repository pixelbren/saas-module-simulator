"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

const stats = [
  {
    name: "Total Sales",
    value: "$612,917",
    subtitle: "Products vs last month",
    change: "+2.08%",
    changeType: "positive",
    color: "from-primary-400 to-primary-600",
    icon: "CurrencyDollar",
    iconBg: "bg-primary-600",
  },
  {
    name: "Total Orders",
    value: "34,760",
    subtitle: "Orders vs last month",
    change: "+12.4%",
    changeType: "positive",
    color: "from-green-400 to-green-600",
    icon: "Package",
    iconBg: "bg-primary-600",
  },
  {
    name: "Visitor",
    value: "14,987",
    subtitle: "Users vs last month",
    change: "-2.08%",
    changeType: "negative",
    color: "from-gray-400 to-gray-600",
    icon: "Users",
    iconBg: "bg-primary-600",
  },
  {
    name: "Total Sold Products",
    value: "12,987",
    subtitle: "Products vs last month",
    change: "+12.1%",
    changeType: "positive",
    color: "from-green-400 to-green-600",
    icon: "ShoppingCart",
    iconBg: "bg-primary-600",
  },
];

const productStats = [
  { name: "Electronic", value: 2487, change: "+1.8%", changeType: "positive" },
  { name: "Games", value: 1828, change: "+2.3%", changeType: "positive" },
  { name: "Furniture", value: 1463, change: "-1.04%", changeType: "negative" },
];

const customerGrowth = [
  { name: "United States", value: 2417, color: "bg-primary-400", flag: "🇺🇸" },
  { name: "Germany", value: 2281, color: "bg-blue-400", flag: "🇩🇪" },
  { name: "Australia", value: 812, color: "bg-green-400", flag: "🇦🇺" },
  { name: "France", value: 287, color: "bg-pink-400", flag: "🇫🇷" },
];

export default function SalesDashboardPage() {
  return (
    <div className="space-y-6 max-w-[1440px] mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-black dark:text-white">Your sales insights</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Friday, December 15th 2023
          </p>
        </div>
        <Button
          variant="outline"
          size="md"
          iconRight="DownloadSimple"
          iconColor="text-primary-600 dark:text-primary-400"
        >
          Download Report
        </Button>
      </div>

      {/* Stats and Product Statistic Layout */}
      <div className="lg:flex lg:gap-6">
        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 lg:grid-rows-2 flex-1">
          {/* Total Sales */}
          <Card className="flex flex-col gap-2 justify-between h-full">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className={`rounded-xl p-2 ${stats[0].iconBg} text-white flex items-center justify-center w-10 h-10`}
                >
                  <Icon
                    name={
                      stats[0]
                        .icon as import("@/components/ui/Icon").IconProps["name"]
                    }
                    size={24}
                  />
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {stats[0].name}
                </span>
              </div>
              <span className="text-xs px-2 py-0.5 rounded-full font-semibold bg-green-100 text-green-700">
                {stats[0].change}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-2xl font-bold text-black dark:text-white">
                {stats[0].value}
              </div>
              <div className="text-xs text-gray-400 dark:text-gray-500">
                {stats[0].subtitle}
              </div>
            </div>
          </Card>
          {/* Total Orders */}
          <Card className="flex flex-col gap-2 justify-between h-full">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className={`rounded-xl p-2 ${stats[1].iconBg} text-white flex items-center justify-center w-10 h-10`}
                >
                  <Icon
                    name={
                      stats[1]
                        .icon as import("@/components/ui/Icon").IconProps["name"]
                    }
                    size={24}
                  />
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {stats[1].name}
                </span>
              </div>
              <span className="text-xs px-2 py-0.5 rounded-full font-semibold bg-green-100 text-green-700">
                {stats[1].change}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-2xl font-bold text-black dark:text-white">
                {stats[1].value}
              </div>
              <div className="text-xs text-gray-400 dark:text-gray-500">
                {stats[1].subtitle}
              </div>
            </div>
          </Card>
          {/* Visitor */}
          <Card className="flex flex-col gap-2 justify-between h-full">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className={`rounded-xl p-2 ${stats[2].iconBg} text-white flex items-center justify-center w-10 h-10`}
                >
                  <Icon
                    name={
                      stats[2]
                        .icon as import("@/components/ui/Icon").IconProps["name"]
                    }
                    size={24}
                  />
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {stats[2].name}
                </span>
              </div>
              <span className="text-xs px-2 py-0.5 rounded-full font-semibold bg-red-100 text-red-700">
                {stats[2].change}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-2xl font-bold text-black dark:text-white">
                {stats[2].value}
              </div>
              <div className="text-xs text-gray-400 dark:text-gray-500">
                {stats[2].subtitle}
              </div>
            </div>
          </Card>
          {/* Total Sold Products */}
          <Card className="flex flex-col gap-2 justify-between h-full">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className={`rounded-xl p-2 ${stats[3].iconBg} text-white flex items-center justify-center w-10 h-10`}
                >
                  <Icon
                    name={
                      stats[3]
                        .icon as import("@/components/ui/Icon").IconProps["name"]
                    }
                    size={24}
                  />
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {stats[3].name}
                </span>
              </div>
              <span className="text-xs px-2 py-0.5 rounded-full font-semibold bg-green-100 text-green-700">
                {stats[3].change}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-2xl font-bold text-black dark:text-white">
                {stats[3].value}
              </div>
              <div className="text-xs text-gray-400 dark:text-gray-500">
                {stats[3].subtitle}
              </div>
            </div>
          </Card>
        </div>
        {/* Product Statistic (separate grid/section) */}
        <div className="mt-6 lg:mt-0 lg:w-80 flex-shrink-0">
          <Card className="flex flex-col justify-between h-full">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Product Statistic
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Track your product sales
                </p>
              </div>
              <select className="form-select text-xs rounded-xl bg-white dark:bg-gray-700 px-2 py-1 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6E62E5] transition-all duration-200">
                <option>Today</option>
              </select>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              {/* Placeholder for donut/progress chart */}
              <svg width="120" height="120" viewBox="0 0 120 120">
                <circle
                  cx="60"
                  cy="60"
                  r="48"
                  stroke="#E5E7EB"
                  strokeWidth="12"
                  fill="none"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="48"
                  stroke="#6366F1"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray="301.59"
                  strokeDashoffset="60"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="36"
                  stroke="#F87171"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray="226.19"
                  strokeDashoffset="120"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="24"
                  stroke="#A5B4FC"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray="150.8"
                  strokeDashoffset="40"
                />
              </svg>
              <div className="text-3xl font-bold text-black dark:text-white">
                9,829
              </div>
              <div className="text-xs text-gray-400 dark:text-gray-500">
                Product Sales
              </div>
              <div className="text-xs px-2 py-0.5 rounded-full font-semibold bg-green-100 text-green-700 mt-1">
                +5.34%
              </div>
            </div>
            <div className="mt-4 space-y-2">
              {productStats.map((stat) => (
                <div
                  key={stat.name}
                  className="flex items-center justify-between text-sm"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gray-300 inline-block" />
                    <span className="text-gray-700 dark:text-gray-200">
                      {stat.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-black dark:text-white">
                      {stat.value.toLocaleString()}
                    </span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                        stat.changeType === "positive"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {stat.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Customer Habits and Customer Growth below, as a two-column grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mt-6">
        {/* Customer Habits (wide) */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Customer Habits
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Track your customer habits
              </p>
            </div>
            <select className="form-select text-xs rounded-xl bg-white dark:bg-gray-700 px-2 py-1 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6E62E5] transition-all duration-200">
              <option>This year</option>
            </select>
          </div>
          <div className="h-64 flex items-center justify-center">
            {/* Placeholder for bar chart */}
            <svg width="320" height="160" viewBox="0 0 320 160">
              <rect x="20" y="60" width="20" height="80" fill="#E5E7EB" />
              <rect x="50" y="100" width="20" height="40" fill="#6366F1" />
              <rect x="80" y="40" width="20" height="100" fill="#E5E7EB" />
              <rect x="110" y="80" width="20" height="60" fill="#6366F1" />
              <rect x="140" y="20" width="20" height="120" fill="#E5E7EB" />
              <rect x="170" y="60" width="20" height="80" fill="#6366F1" />
              <rect x="200" y="70" width="20" height="70" fill="#E5E7EB" />
              <rect x="230" y="110" width="20" height="30" fill="#6366F1" />
            </svg>
          </div>
          <div className="flex gap-4 mt-4">
            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
              <span className="w-3 h-3 rounded-full bg-gray-300 inline-block" />{" "}
              Seen product
            </div>
            <div className="flex items-center gap-2 text-xs text-blue-400">
              <span className="w-3 h-3 rounded-full bg-blue-400 inline-block" />{" "}
              Sales
            </div>
          </div>
        </Card>
        {/* Customer Growth (right) */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Customer Growth
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Track customer by locations
              </p>
            </div>
            <select className="form-select text-xs rounded-xl bg-white dark:bg-gray-700 px-2 py-1 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6E62E5] transition-all duration-200">
              <option>Today</option>
            </select>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            {/* Bubble chart and legend */}
            <div className="flex gap-2 mb-4">
              {customerGrowth.map((c, idx) => (
                <div
                  key={c.name}
                  className={`rounded-full flex items-center justify-center ${c.color} text-white font-bold`}
                  style={{ width: 40 + idx * 18, height: 40 + idx * 18 }}
                >
                  {c.value}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2 w-full max-w-xs mx-auto">
              {customerGrowth.map((c) => (
                <div key={c.name} className="flex items-center gap-2 text-xs">
                  <span>{c.flag}</span>
                  <span className="text-gray-700 dark:text-gray-200 w-20 inline-block">
                    {c.name}
                  </span>
                  <span className="ml-auto font-semibold text-black dark:text-white">
                    {c.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
