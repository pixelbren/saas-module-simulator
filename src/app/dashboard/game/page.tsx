import { Card } from "@/components/ui/card";
import { LineChart } from "@/components/charts/LineChart";

export default function GameDashboard() {
  return (
    <div className="min-h-screen p-4 max-w-[1200px] mx-auto">
      <div className="grid grid-cols-[minmax(300px,1fr)_auto_minmax(300px,1fr)] gap-4 min-h-[calc(100vh-2rem)]">
        {/* Left Column */}
        <div className="flex flex-col gap-3">
          <h1 className="text-5xl font-semibold font-alumni-sans">
            Welcome, Bren
          </h1>

          {/* Level Card */}
          <Card className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow">
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
                  <span className="text-2xl font-alumni-sans font-semibold text-[#202049]">
                    LVL 20
                  </span>
                  <span className="text-xs text-[#737580]">1320/2000</span>
                </div>
                <div className="h-2 w-full bg-[#EDF3FF] rounded-full">
                  <div className="h-full w-[66%] bg-[#383AD8] rounded-full"></div>
                </div>
              </div>
            </div>
          </Card>

          {/* Rank Card */}
          <Card className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow">
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
                <span className="text-2xl font-alumni-sans font-semibold text-[#202049] block">
                  14th
                </span>
                <span className="text-xs text-[#737580]">Current rank</span>
              </div>
            </div>
          </Card>

          {/* Badges Card */}
          <Card className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow h-[120px] items-center">
            <div className="flex gap-3 justify-center items-center">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <img
                  src="/badge-power.png"
                  alt="Power Badge"
                  className="w-auto h-auto object-contain"
                />
              </div>
              <div className="relative w-12 h-12 flex items-center justify-center">
                <img
                  src="/badge-learning.png"
                  alt="Learning Badge"
                  className="w-auto h-auto object-contain"
                />
                <div className="absolute -top-2 -right-2 bg-[#FFA00F] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  +5
                </div>
              </div>
              <div className="relative w-12 h-12 flex items-center justify-center">
                <img
                  src="/badge-speed.png"
                  alt="Speed Badge"
                  className="w-auto h-auto object-contain opacity-40"
                />
              </div>
            </div>
          </Card>

          {/* Training Chart */}
          <Card className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-alumni-sans font-semibold text-[#202049]">
                  Your Training
                </h2>
                <button className="flex items-center gap-2 text-xs text-[#737580]">
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
                </button>
              </div>
              <div className="h-[140px]">
                <LineChart />
              </div>
            </div>
          </Card>
        </div>

        {/* Center Column - Character */}
        <div className="flex justify-center items-start h-[calc(100vh-2rem)]">
          <div className="relative h-full flex items-start pt-4">
            <img
              src="/character.png"
              alt="Your character"
              className=" w-auto height-[100px] object-contain"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-3">
          {/* Weekly Streak */}
          <Card className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-alumni-sans font-semibold text-[#202049]">
                  Weekly Streak
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium text-xs text-[#202049]">
                    January 2025
                  </h4>
                  <div className="flex gap-2">
                    <button className="p-1 text-[#737580] hover:text-[#202049]">
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
                    </button>
                    <button className="p-1 text-[#737580] hover:text-[#202049]">
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
                    </button>
                  </div>
                </div>

                <div className="flex justify-between text-xs font-medium text-[#737580]">
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
                    <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#15A0E5] border-2 border-white"></div>
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
          <Card className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-alumni-sans font-semibold text-[#202049] mb-4">
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
                  <p className="text-sm font-medium text-[#202049] mb-1">
                    Finish onboarding
                  </p>
                  <div className="h-2 w-full bg-[#EDF3FF] rounded-full">
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
                  <p className="text-sm font-medium text-[#202049] mb-1">
                    Earn 100 XP
                  </p>
                  <div className="h-2 w-full bg-[#EDF3FF] rounded-full">
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
                  <p className="text-sm font-medium text-[#202049] mb-1">
                    Spend 10 mins
                  </p>
                  <div className="h-2 w-full bg-[#EDF3FF] rounded-full">
                    <div className="h-full w-[25%] bg-[#383AD8] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Current Training */}
          <Card className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow">
            <div className="space-y-3">
              <div>
                <h3 className="text-sm font-medium text-[#202049]">
                  Tactical Empathy
                </h3>
                <p className="text-xs text-[#737580]">
                  Lesson 1 - Active Listening
                </p>
              </div>
              <div className="relative h-2 w-full bg-[#EDF3FF] rounded-full">
                <div className="absolute left-0 top-0 h-full w-[25%] bg-[#383AD8] rounded-full"></div>
                <span className="absolute -top-5 left-[25%] text-xs text-[#383AD8]">
                  25%
                </span>
              </div>
            </div>
            <button className="mt-4 w-full bg-[#383AD8] text-white font-medium py-3 px-4 rounded-full hover:bg-[#2C2EA6] transition-colors text-sm">
              Start lesson
            </button>
          </Card>
        </div>
      </div>
    </div>
  );
}
