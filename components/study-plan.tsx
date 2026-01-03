"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, BookOpen, Code, FileText, RefreshCw } from "lucide-react"

const studySchedule = [
  {
    date: "Today",
    activities: [
      {
        time: "09:00 AM",
        title: "SQL Injection Lab",
        type: "lab",
        duration: "45 min",
        difficulty: "intermediate",
        priority: "high",
      },
      {
        time: "02:00 PM",
        title: "CSRF Protection Reading",
        type: "reading",
        duration: "20 min",
        difficulty: "beginner",
        priority: "high",
      },
      {
        time: "04:00 PM",
        title: "Network Protocols Quiz",
        type: "quiz",
        duration: "15 min",
        difficulty: "intermediate",
        priority: "medium",
      },
    ],
  },
  {
    date: "Tomorrow",
    activities: [
      {
        time: "10:00 AM",
        title: "Buffer Overflow Challenge",
        type: "challenge",
        duration: "60 min",
        difficulty: "advanced",
        priority: "medium",
      },
      {
        time: "03:00 PM",
        title: "Firewall Configuration Lab",
        type: "lab",
        duration: "40 min",
        difficulty: "intermediate",
        priority: "medium",
      },
    ],
  },
  {
    date: "This Week",
    activities: [
      {
        time: "Wed 10:00 AM",
        title: "IDS/IPS Deep Dive",
        type: "reading",
        duration: "30 min",
        difficulty: "intermediate",
        priority: "high",
      },
      {
        time: "Thu 02:00 PM",
        title: "Reconnaissance Techniques Lab",
        type: "lab",
        duration: "50 min",
        difficulty: "advanced",
        priority: "medium",
      },
      {
        time: "Fri 11:00 AM",
        title: "Weekly Assessment",
        type: "quiz",
        duration: "25 min",
        difficulty: "mixed",
        priority: "high",
      },
    ],
  },
]

const typeIcons = {
  lab: Code,
  reading: BookOpen,
  quiz: FileText,
  challenge: Code,
}

const typeColors = {
  lab: "bg-chart-1 text-chart-1",
  reading: "bg-chart-2 text-chart-2",
  quiz: "bg-chart-4 text-chart-4",
  challenge: "bg-chart-5 text-chart-5",
}

export function StudyPlan() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Personalized Study Plan</h2>
          <p className="text-muted-foreground">AI-generated schedule based on your goals and performance</p>
        </div>
        <Button variant="outline" size="sm">
          <RefreshCw className="mr-2 h-4 w-4" />
          Regenerate Plan
        </Button>
      </div>

      <Card className="bg-primary/5">
        <CardHeader>
          <CardTitle className="text-lg">Study Goal</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Calendar className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <p className="font-medium">Complete Web Security Track</p>
              <p className="text-sm text-muted-foreground">Target completion: 4 weeks • 12 labs remaining</p>
              <div className="mt-2 flex items-center gap-2">
                <Badge>On Track</Badge>
                <span className="text-sm text-muted-foreground">3.5 hours/week</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        {studySchedule.map((day) => (
          <Card key={day.date}>
            <CardHeader>
              <CardTitle className="text-lg">{day.date}</CardTitle>
              <CardDescription>
                {day.activities.length} activities •{" "}
                {day.activities.reduce((sum, a) => sum + Number.parseInt(a.duration), 0)} minutes total
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {day.activities.map((activity, idx) => {
                const Icon = typeIcons[activity.type as keyof typeof typeIcons]
                const colorClass = typeColors[activity.type as keyof typeof typeColors]
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-4 rounded-lg border border-border bg-muted/30 p-4 transition-colors hover:bg-muted/50"
                  >
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg ${colorClass.split(" ")[0]}/10`}
                    >
                      <Icon className={`h-5 w-5 ${colorClass.split(" ")[1]}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-medium">{activity.title}</p>
                          <div className="mt-1 flex items-center gap-3 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {activity.time}
                            </span>
                            <span>{activity.duration}</span>
                            <Badge variant="outline" className="text-xs">
                              {activity.difficulty}
                            </Badge>
                          </div>
                        </div>
                        {activity.priority === "high" && (
                          <Badge variant="destructive" className="text-xs">
                            Priority
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
