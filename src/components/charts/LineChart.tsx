"use client";

import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export function LineChart() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // Destroy previous chart instance
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [
          {
            label: "Training Progress",
            data: [40, 80, 65, 95],
            borderColor: "#383AD8",
            backgroundColor: "rgba(56, 58, 216, 0.1)",
            fill: true,
            tension: 0.4,
            pointBackgroundColor: "#383AD8",
            pointBorderColor: "#fff",
            pointBorderWidth: 2,
            pointRadius: 4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            max: 120,
            ticks: {
              stepSize: 20,
              font: {
                family: "Montserrat",
                size: 12,
              },
              color: "#202049",
            },
            grid: {
              color: "#E5E6E8",
              tickLength: 0,
            },
            border: {
              display: false,
            },
          },
          x: {
            grid: {
              display: false,
            },
            ticks: {
              font: {
                family: "Montserrat",
                size: 12,
              },
              color: "#202049",
            },
            border: {
              display: false,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} />;
}
