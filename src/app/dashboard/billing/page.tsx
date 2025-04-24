"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { CreditCardIcon, CheckIcon } from "@heroicons/react/24/outline";

const plans = [
  {
    name: "Basic",
    price: "$9",
    description: "Perfect for getting started",
    features: ["Up to 5 projects", "Basic analytics", "Email support"],
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    description: "Best for professionals",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "API access",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    description: "For large organizations",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "API access",
      "Custom integrations",
      "Dedicated account manager",
    ],
    popular: false,
  },
];

const billingHistory = [
  {
    id: "1",
    date: "2023-01-15",
    amount: "$29.00",
    status: "Paid",
    description: "Pro Plan - Monthly",
  },
  {
    id: "2",
    date: "2022-12-15",
    amount: "$29.00",
    status: "Paid",
    description: "Pro Plan - Monthly",
  },
  {
    id: "3",
    date: "2022-11-15",
    amount: "$29.00",
    status: "Paid",
    description: "Pro Plan - Monthly",
  },
];

export default function Billing() {
  const [selectedPlan, setSelectedPlan] = useState("Pro");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (plan: string) => {
    setIsLoading(true);
    try {
      // Mock implementation - replace with actual Stripe integration
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSelectedPlan(plan);
      toast.success(`Successfully subscribed to ${plan} plan`);
    } catch (err) {
      console.error("Subscription error:", err);
      toast.error("Failed to process subscription");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
          Billing & Subscription
        </h2>
      </div>

      {/* Current Plan */}
      <div className="rounded-xl bg-white dark:bg-gray-800 p-6 shadow-lg dark:shadow-gray-900/20">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white flex items-center">
            <CreditCardIcon className="h-5 w-5 mr-2 text-primary-600 dark:text-primary-400" />
            Current Plan
          </h3>
          <div className="mt-5">
            <div className="rounded-lg bg-primary-400/5 dark:bg-primary-500/5 px-6 py-5 sm:flex sm:items-center sm:justify-between">
              <div className="sm:flex sm:items-center">
                <div>
                  <h4 className="text-lg font-medium text-primary-600 dark:text-primary-400">
                    Pro Plan
                  </h4>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Your subscription will renew on January 15, 2024
                  </p>
                </div>
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-6">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-500 dark:bg-primary-500 dark:hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Update Payment Method
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subscription Plans */}
      <div className="rounded-xl bg-white dark:bg-gray-800 p-6 shadow-lg dark:shadow-gray-900/20">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
            Available Plans
          </h3>
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-lg border ${
                  plan.popular
                    ? "border-primary-500"
                    : "border-gray-200 dark:border-gray-700"
                } bg-white dark:bg-gray-800 shadow-sm overflow-hidden`}
              >
                <div className="px-6 py-8">
                  {plan.popular && (
                    <p className="text-xs font-semibold text-primary-600 dark:text-primary-400 tracking-wide uppercase">
                      Most Popular
                    </p>
                  )}
                  <h4 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
                    {plan.name}
                  </h4>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {plan.description}
                  </p>
                  <p className="mt-4">
                    <span className="text-4xl font-extrabold text-gray-900 dark:text-white">
                      {plan.price}
                    </span>
                    <span className="text-base font-medium text-gray-500 dark:text-gray-400">
                      /mo
                    </span>
                  </p>
                  <ul className="mt-6 space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <div className="flex-shrink-0">
                          <CheckIcon
                            className="h-5 w-5 text-primary-600 dark:text-primary-400"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="ml-3 text-sm text-gray-700 dark:text-gray-300">
                          {feature}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => handleSubscribe(plan.name)}
                    disabled={isLoading || selectedPlan === plan.name}
                    className={`mt-8 block w-full rounded-lg border ${
                      plan.popular
                        ? "border-transparent bg-primary-600 text-white hover:bg-primary-500 dark:bg-primary-500 dark:hover:bg-primary-400"
                        : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                    } px-4 py-2 text-center text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2`}
                  >
                    {selectedPlan === plan.name ? "Current Plan" : "Subscribe"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Billing History */}
      <div className="rounded-xl bg-white dark:bg-gray-800 p-6 shadow-lg dark:shadow-gray-900/20">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
            Billing History
          </h3>
          <div className="mt-5">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Description
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {billingHistory.map((item) => (
                    <tr
                      key={item.id}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700/50"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {item.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        {item.description}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        {item.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-success-50 dark:bg-success-900/30 text-success-700 dark:text-success-400">
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
