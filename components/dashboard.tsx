"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { SkillMapping } from "@/components/skill-mapping"
import { StudyPlan } from "@/components/study-plan"
import { ProgressAnalytics } from "@/components/progress-analytics"
import { TaskReminders } from "@/components/task-reminders"
import { DecisionSupport } from "@/components/decision-support"
import { BrainLogo } from "@/components/brain-logo"
import { CommandCenter } from "@/components/command-center"
import { LayoutDashboard, BookOpen, FlaskConical, User, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [theme, setTheme] = useState<"light" | "dark">("dark")

  useEffect(() => {
    // Check if user has a saved theme preference
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle("dark", savedTheme === "dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <BrainLogo className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">CyberPath</h1>
                <p className="text-xs text-muted-foreground">Personalized Learning Platform</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={toggleTheme}
                className="h-10 w-10 bg-transparent"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Card className="px-4 py-2">
                <p className="text-sm text-muted-foreground">Overall Progress</p>
                <p className="text-2xl font-bold text-primary">68%</p>
              </Card>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Labs Completed</span>
                    <span className="text-2xl font-bold text-primary">24</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Current Streak</span>
                    <span className="text-2xl font-bold text-chart-2">7 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Skills Mastered</span>
                    <span className="text-2xl font-bold text-chart-4">12</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="text-lg">Today's Focus</CardTitle>
                  <CardDescription>Recommended activities based on your learning path</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3 rounded-lg border border-border bg-muted/50 p-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                      1
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Complete SQL Injection Lab</p>
                      <p className="text-sm text-muted-foreground">Web Security • 45 min</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-border bg-muted/50 p-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                      2
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Review Network Protocols</p>
                      <p className="text-sm text-muted-foreground">Network Security • 20 min</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <CommandCenter className="lg:col-span-2" />
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">System Pulse</CardTitle>
                  <CardDescription>Live signals from your learning environment</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg border border-border bg-muted/40 p-3">
                    <p className="text-xs text-muted-foreground">Focus readiness</p>
                    <p className="text-2xl font-bold text-chart-2">82%</p>
                    <p className="text-xs text-muted-foreground">Peak window at 7:30 PM</p>
                  </div>
                  <div className="rounded-lg border border-border bg-muted/40 p-3">
                    <p className="text-xs text-muted-foreground">Risk alerts</p>
                    <p className="text-2xl font-bold text-chart-5">2</p>
                    <p className="text-xs text-muted-foreground">Pending lab dependencies</p>
                  </div>
                  <div className="rounded-lg border border-border bg-muted/40 p-3">
                    <p className="text-xs text-muted-foreground">Mentor nudges</p>
                    <p className="text-2xl font-bold text-primary">5</p>
                    <p className="text-xs text-muted-foreground">AI hints ready to review</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Upcoming Tasks</CardTitle>
                </CardHeader>
                <CardContent>
                  <TaskReminders compact />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">AI Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <DecisionSupport compact />
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <SkillMapping />
              <ProgressAnalytics />
            </div>
          </TabsContent>

          <TabsContent value="learning" className="space-y-6">
            <StudyPlan />
            <DecisionSupport />
          </TabsContent>

          <TabsContent value="lab" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Active Labs</CardTitle>
                <CardDescription>Continue your hands-on cybersecurity training</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between rounded-lg border border-border bg-muted/50 p-4">
                  <div className="flex-1">
                    <p className="font-medium">SQL Injection Fundamentals</p>
                    <p className="text-sm text-muted-foreground">Web Security • Intermediate</p>
                    <div className="mt-2 h-2 w-full rounded-full bg-muted">
                      <div className="h-2 w-3/4 rounded-full bg-primary"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-border bg-muted/50 p-4">
                  <div className="flex-1">
                    <p className="font-medium">Network Scanning & Enumeration</p>
                    <p className="text-sm text-muted-foreground">Network Security • Advanced</p>
                    <div className="mt-2 h-2 w-full rounded-full bg-muted">
                      <div className="h-2 w-1/4 rounded-full bg-primary"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-border bg-muted/50 p-4">
                  <div className="flex-1">
                    <p className="font-medium">Buffer Overflow Exploits</p>
                    <p className="text-sm text-muted-foreground">Binary Exploitation • Expert</p>
                    <div className="mt-2 h-2 w-full rounded-full bg-muted">
                      <div className="h-2 w-1/2 rounded-full bg-primary"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <TaskReminders />
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Overview</CardTitle>
                <CardDescription>Your learning journey and achievements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <User className="h-10 w-10" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">Security Learner</h3>
                    <p className="text-sm text-muted-foreground">Member since January 2025</p>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <Card>
                    <CardContent className="pt-6 text-center">
                      <p className="text-3xl font-bold text-primary">24</p>
                      <p className="text-sm text-muted-foreground">Labs Completed</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6 text-center">
                      <p className="text-3xl font-bold text-chart-2">156</p>
                      <p className="text-sm text-muted-foreground">Hours Learned</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6 text-center">
                      <p className="text-3xl font-bold text-chart-4">12</p>
                      <p className="text-sm text-muted-foreground">Certifications</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold">Achievements</h4>
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="flex items-center gap-3 rounded-lg border border-border bg-muted/50 p-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-chart-1 text-chart-1-foreground">
                        🏆
                      </div>
                      <div>
                        <p className="font-medium text-sm">First Lab Complete</p>
                        <p className="text-xs text-muted-foreground">January 2025</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg border border-border bg-muted/50 p-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-chart-2 text-chart-2-foreground">
                        🔥
                      </div>
                      <div>
                        <p className="font-medium text-sm">7 Day Streak</p>
                        <p className="text-xs text-muted-foreground">Keep it up!</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg border border-border bg-muted/50 p-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-chart-3 text-chart-3-foreground">
                        ⭐
                      </div>
                      <div>
                        <p className="font-medium text-sm">Web Security Expert</p>
                        <p className="text-xs text-muted-foreground">Mastered 8 skills</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg border border-border bg-muted/50 p-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-chart-4 text-chart-4-foreground">
                        🎯
                      </div>
                      <div>
                        <p className="font-medium text-sm">Top Performer</p>
                        <p className="text-xs text-muted-foreground">Top 10% this month</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 border-t border-border bg-card">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-around py-3">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`flex flex-col items-center gap-1 px-4 py-2 transition-colors ${
                activeTab === "dashboard" ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <LayoutDashboard className="h-5 w-5" />
              <span className="text-xs font-medium">Dashboard</span>
            </button>
            <button
              onClick={() => setActiveTab("learning")}
              className={`flex flex-col items-center gap-1 px-4 py-2 transition-colors ${
                activeTab === "learning" ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <BookOpen className="h-5 w-5" />
              <span className="text-xs font-medium">Learning</span>
            </button>
            <button
              onClick={() => setActiveTab("lab")}
              className={`flex flex-col items-center gap-1 px-4 py-2 transition-colors ${
                activeTab === "lab" ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <FlaskConical className="h-5 w-5" />
              <span className="text-xs font-medium">Lab</span>
            </button>
            <button
              onClick={() => setActiveTab("profile")}
              className={`flex flex-col items-center gap-1 px-4 py-2 transition-colors ${
                activeTab === "profile" ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <User className="h-5 w-5" />
              <span className="text-xs font-medium">Profile</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}
