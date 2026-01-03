"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, CheckCircle2, TrendingUp, TrendingDown } from "lucide-react"

const skillCategories = [
  {
    name: "Web Security",
    skills: [
      { name: "SQL Injection", level: 85, trend: "up", status: "strong" },
      { name: "XSS Prevention", level: 72, trend: "up", status: "good" },
      { name: "CSRF Protection", level: 45, trend: "down", status: "weak" },
      { name: "Authentication", level: 90, trend: "stable", status: "strong" },
    ],
  },
  {
    name: "Network Security",
    skills: [
      { name: "Firewall Configuration", level: 65, trend: "up", status: "good" },
      { name: "VPN Setup", level: 55, trend: "stable", status: "developing" },
      { name: "IDS/IPS", level: 40, trend: "down", status: "weak" },
      { name: "Network Protocols", level: 78, trend: "up", status: "good" },
    ],
  },
  {
    name: "Penetration Testing",
    skills: [
      { name: "Reconnaissance", level: 82, trend: "up", status: "strong" },
      { name: "Exploitation", level: 68, trend: "stable", status: "good" },
      { name: "Post-Exploitation", level: 50, trend: "up", status: "developing" },
      { name: "Reporting", level: 75, trend: "up", status: "good" },
    ],
  },
]

export function SkillMapping() {
  const weakSkills = skillCategories.flatMap((cat) =>
    cat.skills.filter((s) => s.status === "weak").map((s) => ({ ...s, category: cat.name })),
  )

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Skill Mapping</h2>
        <p className="text-muted-foreground">Track your strengths and identify areas for improvement</p>
      </div>

      {weakSkills.length > 0 && (
        <Card className="border-destructive/50 bg-destructive/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg text-destructive">
              <AlertCircle className="h-5 w-5" />
              Needs Attention
            </CardTitle>
            <CardDescription>Focus on these skills to improve your overall performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {weakSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-between rounded-lg border border-border bg-card p-3"
                >
                  <div>
                    <p className="font-medium">{skill.name}</p>
                    <p className="text-sm text-muted-foreground">{skill.category}</p>
                  </div>
                  <Badge variant="destructive">{skill.level}%</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-6 lg:grid-cols-2">
        {skillCategories.map((category) => (
          <Card key={category.name}>
            <CardHeader>
              <CardTitle className="text-lg">{category.name}</CardTitle>
              <CardDescription>
                {category.skills.filter((s) => s.status === "strong").length} strong •{" "}
                {category.skills.filter((s) => s.status === "weak").length} weak
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {category.skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      {skill.trend === "up" && <TrendingUp className="h-3 w-3 text-chart-2" />}
                      {skill.trend === "down" && <TrendingDown className="h-3 w-3 text-destructive" />}
                      {skill.status === "strong" && <CheckCircle2 className="h-3 w-3 text-chart-4" />}
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
