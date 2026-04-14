import { Users, FileText, Star, Send, Plus, Download, Filter, MoreHorizontal, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { DashboardLayout } from "@/components/DashboardLayout";
import { recruiterData } from "@/lib/mockData";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export default function CompanyDashboard() {
  const r = recruiterData;

  return (
    <DashboardLayout role="Company">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold mb-1">Recruiter Dashboard</h1>
            <p className="text-sm text-muted-foreground">Welcome back. You have 12 new submissions to review today.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm"><Download className="mr-1 h-3 w-3" /> Export Data</Button>
            <Button size="sm"><Plus className="mr-1 h-3 w-3" /> Post New Simulation</Button>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-card rounded-xl border p-5">
            <div className="flex items-center justify-between mb-2">
              <FileText className="h-5 w-5 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">{r.simChange}</span>
            </div>
            <div className="text-xs text-muted-foreground">Active Simulations</div>
            <div className="text-2xl font-bold">{r.activeSimulations}</div>
            <div className="text-[10px] text-muted-foreground">Across 3 departments</div>
          </div>
          <div className="bg-card rounded-xl border p-5">
            <div className="flex items-center justify-between mb-2">
              <Users className="h-5 w-5 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">+12.5%</span>
            </div>
            <div className="text-xs text-muted-foreground">Candidates in Pipeline</div>
            <div className="text-2xl font-bold">{r.candidatesInPipeline.toLocaleString()}</div>
            <div className="text-[10px] text-muted-foreground">{r.candidateLabel}</div>
          </div>
          <div className="bg-card rounded-xl border p-5">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="h-5 w-5 text-muted-foreground" />
              <Badge variant="secondary" className="text-[9px]">-0.8d</Badge>
            </div>
            <div className="text-xs text-muted-foreground">Avg. Time-to-Shortlist</div>
            <div className="text-2xl font-bold">{r.avgTimeToShortlist}</div>
            <div className="text-[10px] text-muted-foreground">{r.timeLabel}</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Funnel + Table */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card rounded-xl border p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold">Candidate Journey Funnel</h2>
                <Badge variant="secondary" className="text-[10px]">Real-time Data</Badge>
              </div>
              <p className="text-xs text-muted-foreground mb-4">Conversion rates from enrollment to shortlist</p>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={r.funnelData} layout="vertical">
                  <XAxis type="number" hide />
                  <YAxis dataKey="stage" type="category" width={100} tick={{ fontSize: 11 }} />
                  <Tooltip />
                  <Bar dataKey="value" fill="hsl(239 70% 58%)" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
              <div className="grid grid-cols-4 gap-4 mt-4 pt-4 border-t">
                {Object.entries(r.stats).map(([key, val]) => (
                  <div key={key} className="text-center">
                    <div className="text-xs text-muted-foreground uppercase">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    <div className="text-lg font-bold">{val}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Submissions Table */}
            <div className="bg-card rounded-xl border p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold">Recent Submissions</h2>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="text-xs"><Filter className="mr-1 h-3 w-3" /> Filter</Button>
                  <Button variant="outline" size="sm" className="text-xs"><Users className="mr-1 h-3 w-3" /> All Candidates</Button>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mb-4">Review students who completed high-priority simulations</p>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-xs text-muted-foreground">
                    <th className="text-left py-2 font-medium">Candidate</th>
                    <th className="text-left py-2 font-medium">Simulation Role</th>
                    <th className="text-left py-2 font-medium">Sim Score</th>
                    <th className="text-left py-2 font-medium">Status</th>
                    <th className="text-left py-2 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {r.submissions.map((s) => (
                    <tr key={s.name} className="border-b last:border-0">
                      <td className="py-3">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-xs font-medium">
                            {s.name.charAt(0)}
                          </div>
                          <div>
                            <div className="text-sm font-medium">{s.name}</div>
                            <div className="text-[10px] text-muted-foreground">{s.university}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 text-sm">{s.simulation}</td>
                      <td className="py-3">
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="text-[10px]">Match</Badge>
                          <div className="flex items-center gap-1">
                            <span className="text-xs font-bold">{s.score}%</span>
                            <Progress value={s.score} className="h-1.5 w-16" />
                          </div>
                        </div>
                      </td>
                      <td className="py-3">
                        <Badge variant={s.status === "Shortlisted" ? "default" : "secondary"} className="text-[10px]">
                          {s.status}
                        </Badge>
                      </td>
                      <td className="py-3">
                        <Button variant="ghost" size="sm"><MoreHorizontal className="h-4 w-4" /></Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Button variant="ghost" size="sm" className="w-full mt-3 text-xs text-muted-foreground">
                View full pipeline (1,842 candidates) ↓
              </Button>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="space-y-6">
            {/* Candidate Profile Card */}
            <div className="bg-card rounded-xl border p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">A</div>
                <div>
                  <div className="font-semibold text-sm">Arisa Kittisiri</div>
                  <div className="text-[10px] text-primary">Chulalongkorn University</div>
                  <div className="text-[10px] text-muted-foreground uppercase">Reviewing: Semiconductor Wafer Inspection Simulation</div>
                </div>
              </div>

              <h3 className="text-xs font-semibold mb-3 flex items-center gap-1">
                <Star className="h-3 w-3" /> Interactive Rubric Scoring
              </h3>
              <div className="space-y-3">
                {[
                  { label: "Technical Accuracy", score: "8/10" },
                  { label: "Process Efficiency", score: "7/10" },
                  { label: "Safety Compliance", score: "9/10" },
                ].map((r) => (
                  <div key={r.label}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium">{r.label}</span>
                      <span className="text-xs font-bold">{r.score}</span>
                    </div>
                    <Progress value={parseInt(r.score) * 10} className="h-1.5" />
                    <p className="text-[10px] text-muted-foreground mt-0.5">
                      {r.label === "Technical Accuracy" && "Adherence to wafer mapping standards and defect categorization."}
                      {r.label === "Process Efficiency" && "Time taken versus simulation benchmark. Path optimization."}
                      {r.label === "Safety Compliance" && "Proper handling protocols in virtual cleanroom environment."}
                    </p>
                  </div>
                ))}
              </div>

              <Button className="w-full mt-4" size="sm">✓ Shortlist for Interview</Button>
              <div className="flex gap-2 mt-2">
                <Button variant="outline" size="sm" className="flex-1 text-xs">Request Feedback</Button>
                <Button variant="outline" size="sm" className="flex-1 text-xs text-destructive">✕ Reject</Button>
              </div>
            </div>

            {/* Platform Suggestion */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
              <Badge className="bg-primary text-primary-foreground text-[9px] mb-2">Platform Suggestion</Badge>
              <p className="text-xs text-muted-foreground">
                Based on Arisa's PCB scores, she might also be a strong fit for your <strong className="text-foreground">IC Design Lab</strong> internship.
              </p>
              <Button variant="link" size="sm" className="text-xs p-0 mt-2 text-primary">Invite to Simulation</Button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
