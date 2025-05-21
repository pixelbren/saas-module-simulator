"use client";

import {
  ChartBarIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ArrowTrendingUpIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/outline";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/card";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const stats = [
  {
    name: "Active Modules",
    value: "34",
    icon: ChartBarIcon,
    change: "+2.08%",
    changeType: "positive",
    color: "from-primary-400 to-primary-600",
    subtitle: "Modules vs last month",
  },
  {
    name: "Total API Calls",
    value: "2.4M",
    icon: ArrowTrendingUpIcon,
    change: "+12.4%",
    changeType: "positive",
    color: "from-primary-400 to-primary-600",
    subtitle: "Calls vs last month",
  },
  {
    name: "Active Users",
    value: "14,987",
    icon: UserGroupIcon,
    change: "+5.08%",
    changeType: "positive",
    color: "from-primary-400 to-primary-600",
    subtitle: "Users vs last month",
  },
  {
    name: "Module Usage",
    value: "98.2%",
    icon: CurrencyDollarIcon,
    change: "+12.1%",
    changeType: "positive",
    color: "from-primary-400 to-primary-600",
    subtitle: "Usage vs last month",
  },
];

const softwareList = [
  {
    name: "Authentication Module",
    status: "Active",
    users: 5234,
    lastUpdated: "2h ago",
  },
  {
    name: "Payment Gateway",
    status: "Active",
    users: 3890,
    lastUpdated: "1h ago",
  },
  {
    name: "User Management",
    status: "Active",
    users: 4341,
    lastUpdated: "30m ago",
  },
  {
    name: "Analytics Engine",
    status: "Maintenance",
    users: 2432,
    lastUpdated: "5h ago",
  },
  {
    name: "File Storage",
    status: "Active",
    users: 3543,
    lastUpdated: "1h ago",
  },
  {
    name: "Email Service",
    status: "Inactive",
    users: 1432,
    lastUpdated: "1d ago",
  },
];

const monthlyData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Module Activations",
      data: [10, 15, 12, 18, 25, 28, 30],
      borderColor: "#E2E8F0",
      backgroundColor: "#F8FAFC",
      fill: true,
      tension: 0.4,
    },
    {
      label: "Active Usage",
      data: [8, 12, 15, 20, 22, 25, 28],
      borderColor: "rgb(99, 102, 241)",
      backgroundColor: "rgba(99, 102, 241, 0.1)",
      fill: true,
      tension: 0.4,
    },
  ],
};

const revenueData = {
  labels: ["Auth Module", "Payment Module", "User Management"],
  datasets: [
    {
      label: "API Calls (thousands)",
      data: [2487, 1828, 1463],
      backgroundColor: [
        "rgba(99, 102, 241, 0.8)",
        "rgba(16, 185, 129, 0.8)",
        "rgba(239, 68, 68, 0.8)",
      ],
    },
  ],
};

const usageData = {
  labels: ["Authentication", "Payment", "User Mgmt", "Storage"],
  datasets: [
    {
      data: [2417, 2281, 812, 287],
      backgroundColor: [
        "rgba(99, 102, 241, 0.8)",
        "rgba(16, 185, 129, 0.8)",
        "rgba(239, 68, 68, 0.8)",
        "rgba(245, 158, 11, 0.8)",
      ],
    },
  ],
};

const baseOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
      align: "start" as const,
      labels: {
        boxWidth: 8,
        usePointStyle: true,
        pointStyle: "circle",
      },
    },
  },
};

const lineOptions = {
  ...baseOptions,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        color: "#F1F5F9",
      },
      beginAtZero: true,
    },
  },
};

const barOptions = {
  ...baseOptions,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        color: "#F1F5F9",
      },
      beginAtZero: true,
    },
  },
};

const doughnutOptions = {
  ...baseOptions,
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard() {
  return (
    <div className="space-y-6 max-w-[1440px] mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className=" text-black dark:text-white">
            Your modules are running smoothly
          </h1>
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

      {/* Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <Card key={item.name}>
            <dt>
              <div className="absolute rounded-xl p-3 bg-primary-600 dark:from-primary-500 dark:to-primary-700">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div className="ml-16">
                <p className="truncate text-sm font-medium text-black dark:text-gray-400">
                  {item.name}
                </p>
                <p className="text-xs mt-1 text-gray-400 dark:text-gray-500">
                  {item.subtitle}
                </p>
              </div>
            </dt>
            <dd className="ml-16 mt-6 flex items-baseline">
              <p className="text-xl font-bold text-black dark:text-white">
                {item.value}
              </p>
              <p
                className={classNames(
                  item.changeType === "positive"
                    ? "bg-success-50 dark:bg-success-900/30 text-success-700 dark:text-success-400"
                    : "bg-error-50 dark:bg-error-900/30 text-error-700 dark:text-error-400",
                  "ml-2 inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium"
                )}
              >
                {item.changeType === "positive" ? (
                  <ArrowUpIcon
                    className="h-4 w-4 flex-shrink-0 self-center"
                    aria-hidden="true"
                  />
                ) : (
                  <ArrowDownIcon
                    className="h-4 w-4 flex-shrink-0 self-center"
                    aria-hidden="true"
                  />
                )}
                <span className="ml-1">{item.change}</span>
              </p>
            </dd>
          </Card>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Module Usage Trends
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Track module activation and usage
              </p>
            </div>
            <select className="form-select text-sm rounded-xl bg-white dark:bg-gray-700 px-3 py-2 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6E62E5] transition-all duration-200">
              <option>This year</option>
              <option>Last year</option>
            </select>
          </div>
          <div className="h-80">
            <Line data={monthlyData} options={lineOptions} />
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                API Usage by Module
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Track API consumption
              </p>
            </div>
            <select className="form-select text-sm rounded-xl bg-white dark:bg-gray-700 px-3 py-2 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6E62E5] transition-all duration-200">
              <option>Today</option>
              <option>This week</option>
            </select>
          </div>
          <div className="h-80">
            <Bar data={revenueData} options={barOptions} />
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Module Distribution
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Track module usage distribution
              </p>
            </div>
            <select className="form-select text-sm rounded-xl bg-white dark:bg-gray-700 px-3 py-2 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6E62E5] transition-all duration-200">
              <option>Today</option>
              <option>This week</option>
            </select>
          </div>
          <div className="h-64">
            <Doughnut data={usageData} options={doughnutOptions} />
          </div>
        </Card>

        {/* Software Status Table */}
        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Module Status
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Track module health and performance
              </p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-500 dark:text-gray-400">
                    Name
                  </th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-500 dark:text-gray-400">
                    Status
                  </th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-500 dark:text-gray-400">
                    API Calls
                  </th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-500 dark:text-gray-400">
                    Last Updated
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 dark:divide-gray-700">
                {softwareList.map((software) => (
                  <tr
                    key={software.name}
                    className="hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-colors duration-150"
                  >
                    <td className="py-3 px-6 text-sm font-medium text-gray-900 dark:text-white">
                      {software.name}
                    </td>
                    <td className="py-3 px-6">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          software.status === "Active"
                            ? "bg-success-50 dark:bg-success-900/30 text-success-700 dark:text-success-400"
                            : software.status === "Maintenance"
                            ? "bg-error-50 dark:bg-error-900/30 text-error-700 dark:text-error-400"
                            : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                        }`}
                      >
                        {software.status}
                      </span>
                    </td>
                    <td className="py-3 px-6 text-sm text-gray-500 dark:text-gray-400">
                      {software.users.toLocaleString()}
                    </td>
                    <td className="py-3 px-6 text-sm text-gray-500 dark:text-gray-400">
                      {software.lastUpdated}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
