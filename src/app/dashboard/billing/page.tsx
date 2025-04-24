"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import {
  CreditCardIcon,
  CheckIcon,
  BanknotesIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

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
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">
        Billing & Subscription
      </h1>

      {/* Current Plan */}
      <div className="rounded-xl bg-white dark:bg-gray-800 p-6 shadow-lg dark:shadow-gray-900/20">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Current Plan
        </h2>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              You are currently on the
            </p>
            <p className="text-lg font-medium text-gray-900 dark:text-white">
              Pro Plan
            </p>
          </div>
          <button className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 dark:bg-primary-500 dark:hover:bg-primary-400">
            Upgrade Plan
          </button>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="rounded-xl bg-white dark:bg-gray-800 p-6 shadow-lg dark:shadow-gray-900/20">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Payment Methods
        </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-gray-100 dark:bg-gray-700 p-2">
                <CreditCardIcon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  •••• 4242
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Expires 12/24
                </p>
              </div>
            </div>
            <button className="text-sm font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300">
              Edit
            </button>
          </div>
          <button className="flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300">
            <BanknotesIcon className="h-5 w-5" />
            Add new payment method
          </button>
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
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Billing History
        </h2>
        <div className="space-y-4">
          {billingHistory.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-gray-100 dark:bg-gray-700 p-2">
                  <ClockIcon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {item.description}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.date}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900 dark:text-white">
                  {item.amount}
                </p>
                <button className="text-sm font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300">
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
