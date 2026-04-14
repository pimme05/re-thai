import { Building2, Users, AlertTriangle, TrendingUp, Briefcase } from "lucide-react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { adminKPIs, talentForecastData, regionalDemand, skillGapData } from "@/lib/mockData";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function AdminDashboard() {
  const k = adminKPIs;

  const kpis = [
    { icon: Briefcase, label: "Active Job Openings", value: k.activeJobOpenings.toLocaleString(), change: `↗ +${k.jobOpeningsChange}%` },
    { icon: Users, label: "Total Student Pipeline", value: k.totalPipeline.toLocaleString(), change: `↗ +${k.pipelineChange}%` },
    { icon: AlertTriangle, label: "Skill Gap Severity", value: k.skillGapSeverity, change: `↘ ${k.skillGapChange}%`, negative: true },
    { icon: TrendingUp, label: "Avg. Starting Salary", value: k.avgStartingSalary, change: `↗ +${k.salaryChange}%` },
  ];

  return (
    <DashboardLayout role="Admin">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold mb-1">Workforce Intelligence</h1>
            <p className="text-sm text-muted-foreground">Real-time demand forecasting and skill gap analysis for Thailand's electronics sector.</p>
          </div>
          <div className="flex gap-2">
            {["3M", "6M", "12M", "24M"].map((p, i) => (
              <Button key={p} variant={i === 2 ? "default" : "outline"} size="sm" className="text-xs">{p}</Button>
            ))}
            <Button variant="outline" size="sm" className="text-xs">↓ Export Data</Button>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {kpis.map((kpi) => (
            <div key={kpi.label} className="bg-card rounded-xl border p-5">
              <div className="flex items-center justify-between mb-2">
                <kpi.icon className="h-5 w-5 text-muted-foreground" />
                <Badge variant={kpi.negative ? "destructive" : "secondary"} className="text-[9px]">
                  {kpi.change}
                </Badge>
              </div>
              <div className="text-xs text-muted-foreground">{kpi.label}</div>
              <div className="text-2xl font-bold">{kpi.value}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Talent Forecast Chart */}
          <div className="lg:col-span-2 bg-card rounded-xl border p-6">
            <h2 className="font-semibold mb-1">Talent Gap Forecast</h2>
            <p className="text-xs text-muted-foreground mb-4">Supply vs. Demand projections (Next 12 Months)</p>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={talentForecastData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 13% 91%)" />
                <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="demand" stroke="hsl(239 70% 58%)" fill="hsl(239 70% 58% / 0.1)" name="Projected Demand" strokeWidth={2} />
                <Area type="monotone" dataKey="supply" stroke="hsl(220 9% 46%)" fill="hsl(220 9% 46% / 0.05)" name="Talent Supply" strokeWidth={2} strokeDasharray="5 5" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Regional Demand */}
          <div className="bg-card rounded-xl border p-6">
            <h2 className="font-semibold mb-1">Regional Skill Demand</h2>
            <p className="text-xs text-muted-foreground mb-4">Intensity across Thailand's industrial zones</p>
            <div className="space-y-4">
              {regionalDemand.map((r) => (
                <div key={r.region}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">{r.region}</span>
                    <span className="text-xs font-semibold text-primary">{r.change} demand</span>
                  </div>
                  <Progress value={r.pct} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Openings by Specialization */}
          <div className="lg:col-span-2 bg-card rounded-xl border p-6">
            <h2 className="font-semibold mb-1">Openings by Specialization</h2>
            <p className="text-xs text-muted-foreground mb-4">Highest volume roles currently in marketplace</p>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={skillGapData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 13% 91%)" />
                <XAxis type="number" tick={{ fontSize: 11 }} />
                <YAxis dataKey="skill" type="category" width={120} tick={{ fontSize: 11 }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="demand" fill="hsl(239 70% 58%)" name="Demand" radius={[0, 4, 4, 0]} />
                <Bar dataKey="supply" fill="hsl(239 70% 58% / 0.3)" name="Supply" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Predictive Insights */}
          <div className="bg-card rounded-xl border p-6">
            <h2 className="font-semibold mb-4 flex items-center gap-2">
              ⚡ Predictive Insights
            </h2>
            <div className="space-y-4">
              <div className="p-3 rounded-lg bg-destructive/5 border border-destructive/10">
                <div className="flex items-center gap-2 mb-1">
                  <AlertTriangle className="h-4 w-4 text-destructive" />
                  <h3 className="text-sm font-semibold">Critical QA Talent Shortage</h3>
                </div>
                <p className="text-xs text-muted-foreground">
                  Semiconductor QA demand is outpacing university output by 320% in the Chonburi region. Forecast predicts a 1,200 person gap by Q2 2025.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <h3 className="text-sm font-semibold">Rising Demand: PCB Layout</h3>
                </div>
                <p className="text-xs text-muted-foreground">
                  Electronics testing and PCB design roles have seen a 22% increase in listing volume over the last 90 days.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                <div className="flex items-center gap-2 mb-1">
                  <Building2 className="h-4 w-4 text-primary" />
                  <h3 className="text-sm font-semibold">New Academic Partnership</h3>
                </div>
                <p className="text-xs text-muted-foreground">
                  Kasetsart University is launching a new pilot cohort in Analog IC Design. Expect 45 certified candidates by December.
                </p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full mt-4 text-xs">View All Recommendations</Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
