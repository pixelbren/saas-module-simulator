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
    value: "12",
    icon: ChartBarIcon,
    change: "+2",
    changeType: "positive",
    color: "from-blue-400 to-blue-600",
  },
  {
    name: "Total Users",
    value: "8,439",
    icon: UserGroupIcon,
    change: "+15%",
    changeType: "positive",
    color: "from-emerald-400 to-emerald-600",
  },
  {
    name: "Module Usage",
    value: "92%",
    icon: ArrowTrendingUpIcon,
    change: "+4.3%",
    changeType: "positive",
    color: "from-purple-400 to-purple-600",
  },
  {
    name: "API Calls",
    value: "2.1M",
    icon: CurrencyDollarIcon,
    change: "+12%",
    changeType: "positive",
    color: "from-pink-400 to-pink-600",
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
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Module Activations",
      data: [1200, 1900, 2300, 2800, 3200, 3800],
      borderColor: "rgb(99, 102, 241)",
      backgroundColor: "rgba(99, 102, 241, 0.1)",
      fill: true,
      tension: 0.4,
    },
  ],
};

const revenueData = {
  labels: ["Auth", "Payment", "User Mgmt", "Analytics", "Storage", "Email"],
  datasets: [
    {
      label: "API Calls (thousands)",
      data: [350, 280, 420, 190, 250, 150],
      backgroundColor: "rgba(99, 102, 241, 0.8)",
    },
  ],
};

const usageData = {
  labels: [
    "Authentication",
    "Payment",
    "User Mgmt",
    "Analytics",
    "Storage",
    "Email",
  ],
  datasets: [
    {
      data: [30, 25, 20, 10, 10, 5],
      backgroundColor: [
        "rgba(99, 102, 241, 0.8)",
        "rgba(16, 185, 129, 0.8)",
        "rgba(168, 85, 247, 0.8)",
        "rgba(236, 72, 153, 0.8)",
        "rgba(245, 158, 11, 0.8)",
        "rgba(75, 85, 99, 0.8)",
      ],
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function getStatusColor(status: string) {
  switch (status.toLowerCase()) {
    case "active":
      return "bg-green-100 text-green-800";
    case "maintenance":
      return "bg-yellow-100 text-yellow-800";
    case "inactive":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Module Overview</h2>
        <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
          Download Report
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.name}
            className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <dt>
              <div
                className={`absolute rounded-xl bg-gradient-to-r ${item.color} p-3`}
              >
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">
                {item.name}
              </p>
            </dt>
            <dd className="ml-16 flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900">
                {item.value}
              </p>
              <p
                className={classNames(
                  item.changeType === "positive"
                    ? "text-green-600"
                    : "text-red-600",
                  "ml-2 flex items-baseline text-sm font-semibold"
                )}
              >
                {item.changeType === "positive" ? (
                  <ArrowUpIcon
                    className="h-5 w-5 flex-shrink-0 self-center text-green-500"
                    aria-hidden="true"
                  />
                ) : (
                  <ArrowDownIcon
                    className="h-5 w-5 flex-shrink-0 self-center text-red-500"
                    aria-hidden="true"
                  />
                )}
                <span className="ml-1">{item.change}</span>
              </p>
            </dd>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-lg">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Module Activation Trend
          </h3>
          <div className="h-80">
            <Line data={monthlyData} options={chartOptions} />
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-lg">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            API Usage by Module
          </h3>
          <div className="h-80">
            <Bar data={revenueData} options={chartOptions} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow-lg">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Module Usage Distribution
          </h3>
          <div className="h-64">
            <Doughnut data={usageData} options={chartOptions} />
          </div>
        </div>

        {/* Software Status Table */}
        <div className="lg:col-span-2 rounded-2xl bg-white p-6 shadow-lg">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Module Status
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Users
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Updated
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {softwareList.map((software, idx) => (
                  <tr
                    key={software.name}
                    className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {software.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                          software.status
                        )}`}
                      >
                        {software.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {software.users.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {software.lastUpdated}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
