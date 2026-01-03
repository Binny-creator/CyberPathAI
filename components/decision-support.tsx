"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, TrendingUp, AlertTriangle, Lightbulb, ChevronRight } from "lucide-react"

const aiInsights = [
  {
    type: "recommendation",
    priority: "high",
    title: "Focus on CSRF Protection",
    description:
      "Based on your recent lab performance, you may struggle with CSRF concepts. Recommended: Review fundamentals before the next quiz.",
    action: "View Study Materials",
    timeEstimate: "30 min",
    skillImpact: "+15% proficiency",
  },
  {
    type: "prediction",
    priority: "medium",
    title: "Buffer Overflow Challenge Difficulty",
    description:
      "Predicted difficulty: Hard. Your current skill level (68%) suggests you should complete 2 prerequisite labs first.",
    action: "See Prerequisites",
    timeEstimate: "1.5 hours",
    skillImpact: "Better preparation",
  },
  {
    type: "opportunity",
    priority: "medium",
    title: "Skill Diversification Opportunity",
    description: "You've mastered Web Security basics. Consider exploring Network Security to broaden your expertise.",
    action: "Explore Network Track",
    timeEstimate: "2-3 weeks",
    skillImpact: "+25% overall score",
  },
]

const upcomingChallenges = [
  {
    name: "IDS/IPS Configuration Lab",
    difficulty: "high",
    currentSkill: 40,
    recommendedSkill: 60,
    risk: "high",
    suggestion: "Postpone by 1 week and complete foundational labs",
  },
  {
    name: "Advanced XSS Prevention",
    difficulty: "medium",
    currentSkill: 72,
    recommendedSkill: 65,
    risk: "low",
    suggestion: "You're ready! Great time to tackle this.",
  },
]

const typeConfig = {
  recommendation: { icon: Lightbulb, color: "text-chart-1", bg: "bg-chart-1/10", border: "border-chart-1/20" },
  prediction: { icon: AlertTriangle, color: "text-chart-5", bg: "bg-chart-5/10", border: "border-chart-5/20" },
  opportunity: { icon: TrendingUp, color: "text-chart-2", bg: "bg-chart-2/10", border: "border-chart-2/20" },
}

export function DecisionSupport({ compact }: { compact?: boolean }) {
  if (compact) {
    const topInsight = aiInsights[0]
    const config = typeConfig[topInsight.type as keyof typeof typeConfig]
    const Icon = config.icon

    return (
      <div className="space-y-3">
        <div className={`rounded-lg border ${config.border} ${config.bg} p-4`}>
          <div className="flex items-start gap-3">
            <div className={`rounded-lg bg-card p-2`}>
              <Icon className={`h-5 w-5 ${config.color}`} />
            </div>
            <div className="flex-1">
              <p className="font-medium">{topInsight.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{topInsight.description}</p>
              <Button variant="link" className="mt-2 h-auto p-0 text-sm">
                {topInsight.action} <ChevronRight className="ml-1 h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">AI Decision Support</h2>
        <p className="text-muted-foreground">Get personalized recommendations and predictions</p>
      </div>

      <Card className="border-primary/50 bg-primary/5">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg">AI-Powered Insights</CardTitle>
          </div>
          <CardDescription>Recommendations tailored to your learning style and goals</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {aiInsights.map((insight, idx) => {
            const config = typeConfig[insight.type as keyof typeof typeConfig]
            const Icon = config.icon
            return (
              <div key={idx} className={`rounded-lg border ${config.border} ${config.bg} p-4`}>
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-card p-3">
                    <Icon className={`h-6 w-6 ${config.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-semibold">{insight.title}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{insight.description}</p>
                      </div>
                      {insight.priority === "high" && <Badge variant="destructive">High Priority</Badge>}
                    </div>
                    <div className="mt-3 flex items-center gap-4">
                      <Button size="sm">
                        {insight.action}
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span>{insight.timeEstimate}</span>
                        <span>•</span>
                        <span>{insight.skillImpact}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Predictive Analysis</CardTitle>
          <CardDescription>Upcoming challenges and readiness assessment</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {upcomingChallenges.map((challenge, idx) => {
            const isReady = challenge.currentSkill >= challenge.recommendedSkill
            return (
              <div
                key={idx}
                className={`rounded-lg border p-4 ${
                  isReady ? "border-chart-2/30 bg-chart-2/5" : "border-destructive/30 bg-destructive/5"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{challenge.name}</p>
                      <Badge variant="outline" className="text-xs">
                        {challenge.difficulty}
                      </Badge>
                    </div>
                    <div className="mt-2 space-y-1 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Your skill level:</span>
                        <span className="font-medium">{challenge.currentSkill}%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Recommended level:</span>
                        <span className="font-medium">{challenge.recommendedSkill}%</span>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">
                      <span className="font-medium">AI Suggestion:</span> {challenge.suggestion}
                    </p>
                  </div>
                  <Badge variant={isReady ? "default" : "destructive"} className="ml-4">
                    {challenge.risk === "low" ? "Ready" : "High Risk"}
                  </Badge>
                </div>
              </div>
            )
          })}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Learning Optimization</CardTitle>
          <CardDescription>Balance risk, time investment, and skill gain</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-muted/30 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Optimal Study Time</p>
                  <p className="text-sm text-muted-foreground">Based on your engagement patterns</p>
                </div>
                <p className="text-2xl font-bold text-primary">5.5h/week</p>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-muted/30 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Recommended Lab Pace</p>
                  <p className="text-sm text-muted-foreground">To meet your completion goal</p>
                </div>
                <p className="text-2xl font-bold text-primary">4-5 labs/week</p>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-muted/30 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Skill Growth Rate</p>
                  <p className="text-sm text-muted-foreground">Current trajectory</p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-2xl font-bold text-chart-2">+12%</p>
                  <TrendingUp className="h-5 w-5 text-chart-2" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
