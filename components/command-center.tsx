import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Mic, Send, Zap, TerminalSquare, Clock } from "lucide-react"

const suggestedCommands = [
  "Generate my weekly study plan",
  "Scan for weak skill areas",
  "Summarize my lab progress",
]

const recentCommands = [
  { label: "Queued weekly plan for Sunday", status: "scheduled", time: "2m ago" },
  { label: "Analyzed Web Security weaknesses", status: "completed", time: "38m ago" },
  { label: "Optimized study schedule", status: "running", time: "1h ago" },
]

const statusStyles = {
  scheduled: "bg-chart-4/15 text-chart-4",
  completed: "bg-chart-2/15 text-chart-2",
  running: "bg-chart-1/15 text-chart-1",
}

type CommandCenterProps = {
  className?: string
}

export function CommandCenter({ className }: CommandCenterProps) {
  return (
    <Card className={cn("flex h-full flex-col", className)}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <TerminalSquare className="h-5 w-5 text-primary" />
          Command Center
        </CardTitle>
        <CardDescription>Issue voice or text commands to orchestrate your learning system.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-6">
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Input placeholder="Try: “Plan my labs for next week”" className="pr-10" />
            <Mic className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          </div>
          <Button className="gap-2">
            Send
            <Send className="h-4 w-4" />
          </Button>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground">Suggested commands</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {suggestedCommands.map((command) => (
              <Button key={command} variant="outline" size="sm" className="bg-muted/40">
                {command}
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-foreground">Recent automations</p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              Updated moments ago
            </div>
          </div>
          <div className="space-y-2">
            {recentCommands.map((command) => (
              <div
                key={command.label}
                className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-border bg-muted/40 px-3 py-2"
              >
                <span className="text-sm text-foreground">{command.label}</span>
                <div className="flex items-center gap-2">
                  <Badge className={cn("border-0 text-xs", statusStyles[command.status as keyof typeof statusStyles])}>
                    {command.status}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{command.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between rounded-lg border border-border bg-primary/5 px-4 py-3">
          <div>
            <p className="text-sm font-semibold text-foreground">Automation health</p>
            <p className="text-xs text-muted-foreground">3 active routines • 1 scheduled review</p>
          </div>
          <div className="flex items-center gap-2 text-sm font-semibold text-primary">
            <Zap className="h-4 w-4" />
            Stable
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
