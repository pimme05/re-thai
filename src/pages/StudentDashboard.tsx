import { Award, Briefcase, CheckCircle2, TrendingUp, ArrowRight, Clock, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { studentProgress } from "@/lib/mockData";
import { DashboardLayout } from "@/components/DashboardLayout";

export default function StudentDashboard() {
  const p = studentProgress;

  return (
    <DashboardLayout role="Student">
      <div className="p-6">
        <div className="mb-6">
          <Badge variant="secondary" className="mb-2 text-xs">Student Dashboard</Badge>
          <h1 className="text-2xl font-bold mb-1">Welcome back, Alex!</h1>
          <p className="text-muted-foreground text-sm">
            You are making excellent progress in the <strong className="text-foreground">Next-Gen Semiconductor Pilot</strong>.
            2 more simulations to unlock your first top-tier interview.
          </p>
        </div>

        <div className="flex gap-2 mb-6">
          <Link to="/marketplace"><Button variant="outline" size="sm">📦 Marketplace</Button></Link>
          <Button size="sm">⚡ Resume Simulation</Button>
        </div>

        {/* KPI Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { icon: CheckCircle2, label: "Simulations Completed", value: `0${p.completedSimulations}`, sub: "↗ +1 this month", tag: "Real-time" },
            { icon: Briefcase, label: "Unlocked Interviews", value: `0${p.interviews}`, sub: "↗ Priority access active", tag: "Real-time" },
            { icon: Award, label: "Industry Credentials", value: `0${p.credentials}`, sub: "↗ TSMC & WD verified", tag: "Real-time" },
            { icon: TrendingUp, label: "Skills Performance", value: p.skillsPerformance, sub: "↗ Top 5% of your cohort", tag: "Real-time" },
          ].map((kpi) => (
            <div key={kpi.label} className="bg-card rounded-xl border p-5">
              <div className="flex items-center justify-between mb-2">
                <kpi.icon className="h-5 w-5 text-muted-foreground" />
                <Badge variant="secondary" className="text-[9px]">{kpi.tag}</Badge>
              </div>
              <div className="text-xs text-muted-foreground mb-1">{kpi.label}</div>
              <div className="text-2xl font-bold">{kpi.value}</div>
              <div className="text-[11px] text-muted-foreground mt-1">{kpi.sub}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left column - 2 cols */}
          <div className="lg:col-span-2 space-y-6">
            {/* Competency Map */}
            <div className="bg-card rounded-xl border p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="font-semibold">Competency Map</h2>
                  <p className="text-xs text-muted-foreground">Verified skills breakdown from completed tasks.</p>
                </div>
                <Button variant="ghost" size="sm" className="text-xs text-primary">View Analysis</Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {p.competencyMap.map((c) => (
                  <div key={c.name} className="p-3 rounded-lg bg-secondary/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">{c.name}</span>
                      <Badge variant="outline" className="text-[10px]">{c.level}</Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-muted-foreground uppercase">Progress</span>
                      <Progress value={c.progress} className="h-1.5 flex-1" />
                      <span className="text-xs font-medium">{c.progress}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Credential Gallery */}
            <div className="bg-card rounded-xl border p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold">Verified Credential Gallery</h2>
                <Link to="/credentials">
                  <Button variant="ghost" size="sm" className="text-xs text-primary">View All</Button>
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {p.badges.map((badge) => (
                  <div key={badge.name} className="text-center p-4 rounded-lg bg-secondary/50">
                    <div className="relative inline-block mb-2">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      {badge.verified && (
                        <CheckCircle2 className="absolute -top-1 -right-1 h-4 w-4 text-accent" />
                      )}
                    </div>
                    <div className="text-xs font-semibold">{badge.name}</div>
                    <div className="text-[10px] text-muted-foreground">{badge.company} • {badge.date}</div>
                    <div className="flex flex-wrap gap-1 mt-2 justify-center">
                      {badge.skills.map((s) => (
                        <Badge key={s} variant="secondary" className="text-[9px]">{s}</Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Goal Card */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="text-lg font-bold text-primary">80%</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-sm">Goal: Senior Design Intern at Sony</h3>
                <p className="text-xs text-muted-foreground">
                  One more verification in <strong className="text-foreground">FPGA Systems</strong> to meet the hiring threshold.
                </p>
              </div>
              <Button size="sm">Explore FPGA Simulations</Button>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {/* Timeline */}
            <div className="bg-card rounded-xl border p-6">
              <h2 className="font-semibold mb-4">Learning Timeline</h2>
              <p className="text-xs text-muted-foreground mb-4">Your journey through the SkillForge pilot.</p>
              <div className="space-y-4">
                {p.timeline.map((t, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div className={`h-6 w-6 rounded-full flex items-center justify-center text-[10px] ${
                        i === 0 ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                      }`}>
                        {i === 0 ? "🔓" : i === 1 ? "✓" : i === 2 ? "📄" : "⏱"}
                      </div>
                      {i < p.timeline.length - 1 && <div className="w-px h-full bg-border mt-1" />}
                    </div>
                    <div className="pb-4">
                      <div className="text-[10px] text-muted-foreground">{t.time}</div>
                      <div className="text-sm font-medium">{t.title}</div>
                      <div className="text-xs text-muted-foreground">{t.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full mt-2">Load More History</Button>
            </div>

            {/* Top Opportunities */}
            <div className="bg-card rounded-xl border p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold">Top Opportunities</h2>
                <Briefcase className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="text-xs text-muted-foreground mb-4">Career matches based on your badges.</p>
              <div className="space-y-3">
                {p.opportunities.map((opp) => (
                  <div key={opp.role} className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-secondary flex items-center justify-center text-xs font-bold">
                      {opp.company.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">{opp.role}</div>
                      <div className="text-[10px] text-muted-foreground">{opp.company}</div>
                    </div>
                    <Badge variant={opp.status === "UNLOCKED" ? "default" : "secondary"} className="text-[9px]">
                      {opp.status}
                    </Badge>
                  </div>
                ))}
              </div>
              <Link to="/opportunities">
                <Button variant="ghost" size="sm" className="w-full mt-3 text-xs">
                  Go to Career Hub <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </Link>
            </div>

            {/* Industry Insight */}
            <div className="bg-card rounded-xl border p-5">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent text-xs">🌐</span>
                </div>
                <h3 className="font-semibold text-sm">Industry Insight</h3>
              </div>
              <p className="text-xs text-muted-foreground">
                Thailand's EEC zone is seeing a 40% spike in demand for <strong className="text-foreground">Packaging Specialists</strong>.
                Check out new simulations from Amkor.
              </p>
              <Button variant="link" size="sm" className="text-xs p-0 mt-2 text-primary">Read More</Button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
