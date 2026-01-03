"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Bell, Calendar, Clock, Plus } from "lucide-react"
import { useState } from "react"

const initialTasks = [
  {
    id: 1,
    title: "Complete SQL Injection Lab",
    dueTime: "Today at 9:00 AM",
    priority: "high",
    category: "Lab",
    completed: false,
    reminder: true,
  },
  {
    id: 2,
    title: "Read CSRF Protection Guide",
    dueTime: "Today at 2:00 PM",
    priority: "high",
    category: "Reading",
    completed: false,
    reminder: true,
  },
  {
    id: 3,
    title: "Network Protocols Quiz",
    dueTime: "Today at 4:00 PM",
    priority: "medium",
    category: "Quiz",
    completed: false,
    reminder: false,
  },
  {
    id: 4,
    title: "Buffer Overflow Challenge",
    dueTime: "Tomorrow at 10:00 AM",
    priority: "medium",
    category: "Challenge",
    completed: false,
    reminder: true,
  },
  {
    id: 5,
    title: "Review Week 7 Materials",
    dueTime: "Tomorrow at 3:00 PM",
    priority: "low",
    category: "Review",
    completed: false,
    reminder: false,
  },
]

export function TaskReminders({ compact }: { compact?: boolean }) {
  const [tasks, setTasks] = useState(initialTasks)

  const toggleTask = (id: number) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  if (compact) {
    const upcomingTasks = tasks.filter((t) => !t.completed && t.reminder).slice(0, 3)
    return (
      <div className="space-y-3">
        {upcomingTasks.map((task) => (
          <div key={task.id} className="flex items-start gap-3">
            <Checkbox checked={task.completed} onCheckedChange={() => toggleTask(task.id)} className="mt-1" />
            <div className="flex-1">
              <p className="text-sm font-medium">{task.title}</p>
              <p className="text-xs text-muted-foreground">{task.dueTime}</p>
            </div>
            {task.priority === "high" && (
              <Badge variant="destructive" className="text-xs">
                High
              </Badge>
            )}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Tasks & Reminders</h2>
          <p className="text-muted-foreground">Manage your study schedule and stay on track</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Task
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Active Reminders</CardTitle>
            <CardDescription>You'll receive notifications for these tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {tasks
                .filter((t) => t.reminder && !t.completed)
                .map((task) => (
                  <div key={task.id} className="flex items-start gap-3 rounded-lg border border-border bg-muted/30 p-3">
                    <Bell className="h-5 w-5 text-primary" />
                    <div className="flex-1">
                      <p className="font-medium">{task.title}</p>
                      <p className="text-sm text-muted-foreground">{task.dueTime}</p>
                    </div>
                    {task.priority === "high" && <Badge variant="destructive">High</Badge>}
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Integration Options</CardTitle>
            <CardDescription>Connect with your favorite tools</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start bg-transparent">
              <Calendar className="mr-2 h-4 w-4" />
              Sync with Google Calendar
            </Button>
            <Button variant="outline" className="w-full justify-start bg-transparent">
              <Bell className="mr-2 h-4 w-4" />
              Enable Push Notifications
            </Button>
            <Button variant="outline" className="w-full justify-start bg-transparent">
              <Clock className="mr-2 h-4 w-4" />
              Set Reminder Preferences
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">All Tasks</CardTitle>
          <CardDescription>
            {tasks.filter((t) => t.completed).length} of {tasks.length} completed
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`flex items-start gap-4 rounded-lg border border-border p-4 transition-all ${
                task.completed ? "bg-muted/20 opacity-60" : "bg-card"
              }`}
            >
              <Checkbox checked={task.completed} onCheckedChange={() => toggleTask(task.id)} className="mt-1" />
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <p className={`font-medium ${task.completed ? "line-through" : ""}`}>{task.title}</p>
                    <div className="mt-1 flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {task.dueTime}
                      </span>
                      <Badge variant="outline" className="text-xs">
                        {task.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {task.reminder && <Bell className="h-4 w-4 text-primary" />}
                    {task.priority === "high" && !task.completed && <Badge variant="destructive">High</Badge>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
