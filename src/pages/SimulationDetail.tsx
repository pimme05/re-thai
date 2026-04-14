import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, BarChart2, Award, Briefcase, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { simulations } from "@/lib/mockData";
import { DashboardLayout } from "@/components/DashboardLayout";

export default function SimulationDetail() {
  const { id } = useParams();
  const sim = simulations.find((s) => s.id === id);

  if (!sim) {
    return (
      <DashboardLayout>
        <div className="p-6">Simulation not found.</div>
      </DashboardLayout>
    );
  }

  const modules = [
    { title: "Introduction & Context", duration: "15 min", done: false },
    { title: "Data Analysis Task", duration: "45 min", done: false },
    { title: "Problem Identification", duration: "30 min", done: false },
    { title: "Solution Proposal", duration: "30 min", done: false },
    { title: "Final Submission & Review", duration: "20 min", done: false },
  ];

  return (
    <DashboardLayout role="Student">
      <div className="p-6 max-w-4xl">
        <Link to="/marketplace" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to Marketplace
        </Link>

        <div className="bg-card rounded-xl border p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className={`h-12 w-12 rounded-xl ${sim.color} flex items-center justify-center text-lg font-bold`}>
              {sim.logo}
            </div>
            <div>
              <h1 className="text-2xl font-bold">{sim.role}</h1>
              <p className="text-muted-foreground text-sm">{sim.company} • {sim.industry}</p>
            </div>
            {sim.fastTrack && (
              <Badge className="ml-auto bg-primary/10 text-primary border-0">🔓 Interview Unlock</Badge>
            )}
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">{sim.description}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-secondary/50 rounded-lg p-4 text-center">
              <Clock className="h-5 w-5 mx-auto mb-1 text-primary" />
              <div className="text-sm font-medium">{sim.duration}</div>
              <div className="text-xs text-muted-foreground">Duration</div>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4 text-center">
              <BarChart2 className="h-5 w-5 mx-auto mb-1 text-primary" />
              <div className="text-sm font-medium">{sim.difficulty}</div>
              <div className="text-xs text-muted-foreground">Level</div>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4 text-center">
              <Award className="h-5 w-5 mx-auto mb-1 text-primary" />
              <div className="text-sm font-medium truncate">{sim.badge}</div>
              <div className="text-xs text-muted-foreground">Badge</div>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4 text-center">
              <Briefcase className="h-5 w-5 mx-auto mb-1 text-primary" />
              <div className="text-sm font-medium">{sim.fastTrack ? "Yes" : "No"}</div>
              <div className="text-xs text-muted-foreground">Fast-track</div>
            </div>
          </div>

          <h2 className="text-lg font-semibold mb-3">Skills You'll Gain</h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {sim.skills.map((s) => (
              <Badge key={s} variant="secondary">{s}</Badge>
            ))}
          </div>

          <h2 className="text-lg font-semibold mb-3">Simulation Modules</h2>
          <div className="space-y-3 mb-8">
            {modules.map((mod, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">{mod.title}</div>
                  <div className="text-xs text-muted-foreground">{mod.duration}</div>
                </div>
              </div>
            ))}
          </div>

          <Button size="lg" className="w-full">Enroll Now</Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
