import { Card } from "@/components/ui/card";
import { LineChart } from "@/components/charts/LineChart";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export default function GameDashboard() {
  return (
    <div className="min-h-screen max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] lg:grid-cols-[minmax(300px,1fr)_auto_minmax(300px,1fr)] gap-6 min-h-[calc(100vh-2rem)]">
        {/* Left Column */}
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl md:text-5xl font-semibold font-alumni-sans text-[#202049] dark:text-white">
            Welcome, Bren
          </h1>

          {/* Level Card */}
          <Card className="bg-white dark:bg-gray-800">
            <div className="flex items-center gap-4">
              <div className="text-[#FFA00F]">
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M16 4L4 12L16 20L28 12L16 4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-2xl font-alumni-sans font-semibold text-[#202049] dark:text-white">
                    LVL 20
                  </span>
                  <span className="text-xs text-[#737580] dark:text-gray-400">
                    1320/2000
                  </span>
                </div>
                <div className="h-2 w-full bg-[#EDF3FF] dark:bg-gray-700 rounded-full">
                  <div className="h-full w-[66%] bg-[#383AD8] rounded-full"></div>
                </div>
              </div>
            </div>
          </Card>

          {/* Rank Card */}
          <Card className="bg-white dark:bg-gray-800">
            <div className="flex items-center gap-4">
              <div className="text-[#FFA00F]">
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M16 4L20 12L28 13L22 19L24 27L16 23L8 27L10 19L4 13L12 12L16 4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <span className="text-2xl font-alumni-sans font-semibold text-[#202049] dark:text-white block">
                  14th
                </span>
                <span className="text-xs text-[#737580] dark:text-gray-400">
                  Current rank
                </span>
              </div>
            </div>
          </Card>

          {/* Badges Card */}
          <Card className="h-[120px] items-center bg-white dark:bg-gray-800">
            <div className="flex gap-3 justify-center items-center">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <Image
                  src="/badge-power.png"
                  alt="Power Badge"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div className="relative w-12 h-12 flex items-center justify-center">
                <Image
                  src="/badge-learning.png"
                  alt="Learning Badge"
                  width={48}
                  height={48}
                  className="object-contain"
                />
                <div className="absolute -top-2 -right-2 bg-[#FFA00F] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  +5
                </div>
              </div>
              <div className="relative w-12 h-12 flex items-center justify-center">
                <Image
                  src="/badge-speed.png"
                  alt="Speed Badge"
                  width={48}
                  height={48}
                  className="object-contain opacity-40"
                />
              </div>
            </div>
          </Card>

          {/* Training Chart */}
          <Card className="bg-white dark:bg-gray-800">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-alumni-sans font-semibold text-[#202049] dark:text-white">
                  Your Training
                </h2>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 text-xs text-[#737580] dark:text-gray-400"
                >
                  This Month
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </div>
              <div className="h-[140px]">
                <LineChart />
              </div>
            </div>
          </Card>
        </div>

        {/* Center Column - Character */}
        <div className="hidden md:flex justify-center items-start h-[calc(100vh-2rem)]">
          <div className="relative h-full flex items-start pt-4">
            <Image
              src="/character.png"
              alt="Your character"
              width={300}
              height={500}
              className="w-[180px] lg:w-[230px] height-[400px]"
              priority
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-3">
          {/* Weekly Streak */}
          <Card className="bg-white dark:bg-gray-800">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-alumni-sans font-semibold text-[#202049] dark:text-white">
                  Weekly Streak
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium text-xs text-[#202049] dark:text-white">
                    January 2025
                  </h4>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="p-1 text-[#737580] hover:text-[#202049] dark:text-gray-400 dark:hover:text-white"
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M10 12L6 8L10 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="p-1 text-[#737580] hover:text-[#202049] dark:text-gray-400 dark:hover:text-white"
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M6 12L10 8L6 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Button>
                  </div>
                </div>

                <div className="flex justify-between text-xs font-medium text-[#737580] dark:text-gray-400">
                  <span>MON</span>
                  <span>TUE</span>
                  <span>WED</span>
                  <span>THU</span>
                  <span>FRI</span>
                </div>

                <div className="flex justify-between">
                  <div className="w-8 h-8 rounded-full bg-[#FFA00F] flex items-center justify-center text-white text-xs font-medium">
                    26
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#FFA00F] flex items-center justify-center text-white text-xs font-medium">
                    27
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#15A0E5] flex items-center justify-center text-white text-xs font-medium relative">
                    1
                    <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#15A0E5] border-2 border-white dark:border-gray-800"></div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#FFA00F] flex items-center justify-center text-white text-xs font-medium">
                    29
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#FFA00F] flex items-center justify-center text-white text-xs font-medium">
                    30
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Daily Quest */}
          <Card className="bg-white dark:bg-gray-800">
            <h3 className="text-lg font-alumni-sans font-semibold text-[#202049] dark:text-white mb-4">
              Daily Quest
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#15A0E5] flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2L2 7L12 12L22 7L12 2Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#202049] dark:text-white mb-1">
                    Finish onboarding
                  </p>
                  <div className="h-2 w-full bg-[#EDF3FF] dark:bg-gray-700 rounded-full">
                    <div className="h-full w-[75%] bg-[#383AD8] rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#383AD8] flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 15L7 10L17 10L12 15Z" fill="white" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#202049] dark:text-white mb-1">
                    Earn 100 XP
                  </p>
                  <div className="h-2 w-full bg-[#EDF3FF] dark:bg-gray-700 rounded-full">
                    <div className="h-full w-[45%] bg-[#383AD8] rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F68555] flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <path
                      d="M12 6V12L16 14"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#202049] dark:text-white mb-1">
                    Spend 10 mins
                  </p>
                  <div className="h-2 w-full bg-[#EDF3FF] dark:bg-gray-700 rounded-full">
                    <div className="h-full w-[25%] bg-[#383AD8] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Current Training */}
          <Card className="bg-white dark:bg-gray-800">
            <div className="space-y-3">
              <div>
                <h3 className="text-sm font-medium text-[#202049] dark:text-white">
                  Tactical Empathy
                </h3>
                <p className="text-xs text-[#737580] dark:text-gray-400">
                  Lesson 1 - Active Listening
                </p>
              </div>
              <div className="relative h-2 w-full bg-[#EDF3FF] dark:bg-gray-700 rounded-full">
                <div className="absolute left-0 top-0 h-full w-[25%] bg-[#383AD8] rounded-full"></div>
                <span className="absolute -top-5 left-[25%] text-xs text-[#383AD8] dark:text-blue-400">
                  25%
                </span>
              </div>
            </div>
            <Button
              className="mt-4 w-full"
              variant="primary"
              size="md"
              fullWidth
            >
              Start lesson
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
