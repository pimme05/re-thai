import { Users, BookOpen, TrendingUp, Award, Download, BarChart2, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { DashboardLayout } from "@/components/DashboardLayout";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const courseData = [
  { course: "EE401 — Semiconductor Devices", simulations: 3, enrolled: 45, completion: 82, avgScore: 78 },
  { course: "ME302 — Manufacturing Systems", simulations: 2, enrolled: 38, completion: 71, avgScore: 74 },
  { course: "IE201 — Quality Engineering", simulations: 2, enrolled: 52, completion: 88, avgScore: 82 },
];

const departmentData = [
  { dept: "EE", enrolled: 120, completed: 92 },
  { dept: "ME", enrolled: 85, completed: 64 },
  { dept: "IE", enrolled: 95, completed: 78 },
  { dept: "CS", enrolled: 60, completed: 42 },
  { dept: "MatSci", enrolled: 40, completed: 28 },
];

export default function UniversityDashboard() {
  return (
    <DashboardLayout role="University">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <Badge variant="secondary" className="mb-2 text-[10px] uppercase tracking-wider">Institution Dashboard</Badge>
            <h1 className="text-2xl font-bold mb-1">University Oversight</h1>
            <p className="text-sm text-muted-foreground">
              Academic performance and industry alignment metrics for the Faculty of Engineering.
            </p>
          </div>
          <div className="flex gap-2">
            <Badge variant="outline" className="text-xs">Semester 2, 2024</Badge>
            <Button variant="outline" size="sm"><Download className="mr-1 h-3 w-3" /> Export Reports</Button>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { icon: Users, label: "Students Enrolled", value: "400", sub: "↗ +45 this semester" },
            { icon: BookOpen, label: "Integrated Courses", value: "7", sub: "3 departments" },
            { icon: TrendingUp, label: "Avg. Completion", value: "80%", sub: "↗ +5% vs last sem" },
            { icon: Award, label: "Employability Score", value: "87%", sub: "Top 3 in Thailand" },
          ].map((kpi) => (
            <div key={kpi.label} className="bg-card rounded-xl border p-5">
              <kpi.icon className="h-5 w-5 text-muted-foreground mb-2" />
              <div className="text-xs text-muted-foreground">{kpi.label}</div>
              <div className="text-2xl font-bold">{kpi.value}</div>
              <div className="text-[10px] text-muted-foreground">{kpi.sub}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Course Integrations */}
          <div className="lg:col-span-2 bg-card rounded-xl border p-6">
            <h2 className="font-semibold mb-1">Course-Simulation Integration</h2>
            <p className="text-xs text-muted-foreground mb-4">Map industry simulations into coursework for real-world learning</p>
            <div className="space-y-4">
              {courseData.map((c) => (
                <div key={c.course} className="p-4 rounded-lg bg-secondary/30">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-sm">{c.course}</h3>
                    <Badge variant="secondary" className="text-[10px]">{c.simulations} simulations</Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-xs text-muted-foreground mb-2">
                    <span>{c.enrolled} students</span>
                    <span>{c.completion}% completion</span>
                    <span>Avg score: {c.avgScore}%</span>
                  </div>
                  <Progress value={c.completion} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          {/* Department Chart */}
          <div className="bg-card rounded-xl border p-6">
            <h2 className="font-semibold mb-1">Enrollment by Department</h2>
            <p className="text-xs text-muted-foreground mb-4">Active participants across faculties</p>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={departmentData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 13% 91%)" />
                <XAxis dataKey="dept" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip />
                <Bar dataKey="enrolled" fill="hsl(239 70% 58%)" name="Enrolled" radius={[4, 4, 0, 0]} />
                <Bar dataKey="completed" fill="hsl(239 70% 58% / 0.3)" name="Completed" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Employability Outcome */}
        <div className="bg-card rounded-xl border p-6 border-l-4 border-l-primary">
          <h3 className="font-semibold mb-2">Employability Outcomes</h3>
          <p className="text-sm text-muted-foreground">
            Students who complete 2+ simulations are <strong className="text-foreground">3.2x more likely</strong> to receive
            interview offers within 30 days of graduation. 87% of credential holders reported the experience directly contributed
            to their hiring.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}
