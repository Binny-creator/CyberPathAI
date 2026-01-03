"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Area, AreaChart } from "recharts"
import { TrendingUp, Award, Clock, Target } from "lucide-react"

const performanceData = [
  { week: "Week 1", score: 65, labs: 3, time: 4 },
  { week: "Week 2", score: 70, labs: 4, time: 5 },
  { week: "Week 3", score: 68, labs: 5, time: 6 },
  { week: "Week 4", score: 75, labs: 6, time: 5.5 },
  { week: "Week 5", score: 78, labs: 4, time: 4.5 },
  { week: "Week 6", score: 82, labs: 6, time: 6.5 },
  { week: "Week 7", score: 85, labs: 5, time: 5 },
  { week: "Week 8", score: 88, labs: 7, time: 7 },
]

const skillProgressData = [
  { skill: "Web Sec", current: 75, target: 90 },
  { skill: "Network", current: 60, target: 80 },
  { skill: "PenTest", current: 70, target: 85 },
  { skill: "Crypto", current: 55, target: 75 },
  { skill: "Forensics", current: 50, target: 70 },
]

export function ProgressAnalytics() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Progress Analytics</h2>
        <p className="text-muted-foreground">Visualize your learning journey and identify trends</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Avg Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <p className="text-3xl font-bold text-primary">82%</p>
              <TrendingUp className="h-5 w-5 text-chart-2" />
            </div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Study Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <p className="text-3xl font-bold text-primary">48h</p>
              <Clock className="h-5 w-5 text-chart-1" />
            </div>
            <p className="text-xs text-muted-foreground">Last 30 days</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Labs Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <p className="text-3xl font-bold text-primary">40</p>
              <Award className="h-5 w-5 text-chart-4" />
            </div>
            <p className="text-xs text-muted-foreground">8 week average: 5/week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Goal Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <p className="text-3xl font-bold text-primary">68%</p>
              <Target className="h-5 w-5 text-chart-5" />
            </div>
            <p className="text-xs text-muted-foreground">On track for completion</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Performance Trend</CardTitle>
            <CardDescription>Your quiz and lab scores over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                score: {
                  label: "Score",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="week" className="text-xs" />
                  <YAxis className="text-xs" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area
                    type="monotone"
                    dataKey="score"
                    stroke="var(--color-score)"
                    fill="var(--color-score)"
                    fillOpacity={0.2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Weekly Activity</CardTitle>
            <CardDescription>Labs completed and study hours</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                labs: {
                  label: "Labs",
                  color: "hsl(var(--chart-1))",
                },
                time: {
                  label: "Hours",
                  color: "hsl(var(--chart-2))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="week" className="text-xs" />
                  <YAxis className="text-xs" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="labs" fill="var(--color-labs)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="time" fill="var(--color-time)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Skill Gap Analysis</CardTitle>
          <CardDescription>Compare your current level with target goals</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              current: {
                label: "Current",
                color: "hsl(var(--chart-1))",
              },
              target: {
                label: "Target",
                color: "hsl(var(--chart-3))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={skillProgressData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis type="number" className="text-xs" />
                <YAxis dataKey="skill" type="category" className="text-xs" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="current" fill="var(--color-current)" radius={[0, 4, 4, 0]} />
                <Bar dataKey="target" fill="var(--color-target)" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
