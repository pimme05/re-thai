import { Award, CheckCircle2, Download, ExternalLink, Shield, Building2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { studentProgress } from "@/lib/mockData";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Link } from "react-router-dom";

export default function Credentials() {
  const badge = studentProgress.badges[0];

  return (
    <DashboardLayout role="Student">
      <div className="p-6">
        <div className="text-xs text-muted-foreground mb-4">
          Dashboard &gt; My Credentials &gt; Advanced PCB Specialist
        </div>

        {/* Main Credential Card */}
        <div className="bg-card rounded-xl border p-8 mb-6">
          <div className="flex items-start gap-6">
            <div className="relative shrink-0">
              <div className="h-24 w-24 rounded-full bg-secondary flex items-center justify-center">
                <Award className="h-12 w-12 text-muted-foreground" />
              </div>
              <CheckCircle2 className="absolute -bottom-1 -right-1 h-6 w-6 text-accent" />
            </div>
            <div className="flex-1">
              <Badge className="bg-primary/10 text-primary border-0 text-[10px] mb-2">
                Verified Professional Micro-Credential
              </Badge>
              <h1 className="text-2xl font-bold mb-1">Advanced PCB Signal Integrity Specialist</h1>
              <p className="text-sm text-muted-foreground mb-2">
                Issued by <strong className="text-foreground">Innodigital Semiconductors Ltd.</strong> ✓
              </p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span>📅 Date Earned: <strong className="text-foreground">October 12, 2024</strong></span>
                <span>🌐 Verification ID: <strong className="text-foreground">AETH-SIG-2024-8842</strong></span>
              </div>
            </div>
            <div className="space-y-2 shrink-0">
              <Button size="sm" className="w-full">
                <Download className="mr-1 h-3 w-3" /> Download PDF
              </Button>
              <Button size="sm" variant="outline" className="w-full">
                Share to LinkedIn <ExternalLink className="ml-1 h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Validated Skills */}
            <div className="bg-card rounded-xl border p-6">
              <h2 className="font-semibold mb-1">Validated Skills <span className="text-muted-foreground font-normal text-xs">8 Skills</span></h2>
              <div className="flex flex-wrap gap-2 mt-3">
                {["High-Speed Design", "Impedance Matching", "Differential Pairs", "Cross-talk Analysis",
                  "Layer Stackup Optimization", "EMI/EMC Mitigation", "Altium Designer", "Signal Integrity Simulation"].map((s) => (
                  <Badge key={s} variant="secondary" className="text-xs">{s}</Badge>
                ))}
              </div>
            </div>

            {/* Credential Details */}
            <div className="bg-card rounded-xl border p-6">
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-semibold">Credential Details</h2>
                <Button variant="ghost" size="sm" className="text-xs text-primary">View Syllabus</Button>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                The <strong className="text-foreground">Advanced PCB Signal Integrity Specialist</strong> micro-credential
                verifies that the earner has mastered complex signal integrity issues inherent in modern high-speed digital designs.
                Through 40+ hours of simulated lab work in the SkillForge Immersive Workspace, the student completed tasks involving
                crosstalk mitigation, PDN analysis, and impedance-controlled routing for high-density interconnects.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This certification is recognized by the <strong className="text-foreground">Thailand Semiconductor Industry Alliance (TSIA)</strong> and
                satisfies the foundational hardware engineering requirements for Junior RF and PCB Design roles.
              </p>
            </div>

            {/* Project Evidence */}
            <div className="bg-card rounded-xl border p-6">
              <h2 className="font-semibold mb-1">Project Evidence & Tasks</h2>
              <p className="text-xs text-muted-foreground mb-4">Direct evidence from the Simulation Workspace #4421</p>
              <div className="space-y-3">
                {[
                  { title: "Differential Pair Routing for DDR4", level: "Advanced", desc: "Implemented length matching within 5mil tolerance and controlled impedance of 90Ω.", time: "12h Lab Time", xp: "+450 XP" },
                  { title: "Crosstalk Simulation & Analysis", level: "Intermediate", desc: "Performed Near-End and Far-End crosstalk simulations using HyperLynx.", time: "12h Lab Time", xp: "+380 XP" },
                  { title: "Power Integrity Optimization", level: "Expert", desc: "Optimized decoupling capacitor placement to minimize PDN impedance below 100mΩ.", time: "12h Lab Time", xp: "+520 XP" },
                ].map((task) => (
                  <div key={task.title} className="p-4 rounded-lg border bg-secondary/30">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        <h3 className="font-medium text-sm">{task.title}</h3>
                      </div>
                      <Badge variant="outline" className="text-[10px]">{task.level}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground ml-4 mb-2">{task.desc}</p>
                    <div className="flex items-center gap-4 ml-4 text-[10px] text-muted-foreground">
                      <span>⏱ {task.time}</span>
                      <span>✓ Peer Reviewed</span>
                      <span className="ml-auto font-semibold text-primary">{task.xp}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="ghost" size="sm" className="w-full mt-3 text-xs">View Full Project Repository &gt;</Button>
            </div>

            {/* Issuer Verification */}
            <div className="bg-secondary/50 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-5 w-5 text-muted-foreground" />
                <h3 className="font-semibold text-sm">Issuer Verification Statement</h3>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Confirmed by Sarah Tan, Head of Hardware Engineering at Innodigital</p>
              <blockquote className="border-l-2 border-primary pl-3 text-sm italic text-muted-foreground">
                "The candidate demonstrated exceptional attention to detail in differential pair length matching.
                Their final submission for the DDR4 routing module surpassed our internal bench standards for entry-level engineers."
              </blockquote>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="space-y-6">
            {/* Interview Unlock */}
            <div className="bg-primary rounded-xl p-5 text-primary-foreground">
              <h3 className="font-semibold flex items-center gap-2 mb-2">
                🔓 Interview Unlock
              </h3>
              <p className="text-xs text-primary-foreground/80 mb-4">
                Based on your performance, you have been fast-tracked for interviews at these partner companies.
              </p>
              <div className="space-y-3">
                {[
                  { company: "TSMC Thailand", role: "Hardware Design Intern", status: "Ready to Schedule", action: "Schedule Now", top: true },
                  { company: "Silicon Labs", role: "Junior Verification Engineer", status: "Application Unlocked", action: "Apply", top: false },
                  { company: "Western Digital", role: "System-on-Chip Associate", status: "Ready to Schedule", action: "Schedule Now", top: true },
                ].map((opp) => (
                  <div key={opp.company} className="bg-primary-foreground/10 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="h-6 w-6 rounded bg-primary-foreground/20 flex items-center justify-center text-[10px] font-bold">
                        {opp.company.charAt(0)}
                      </div>
                      <div>
                        <div className="text-xs font-medium">{opp.company}
                          {opp.top && <Badge className="ml-1 bg-primary-foreground/20 text-primary-foreground text-[8px]">TOP PICK</Badge>}
                        </div>
                        <div className="text-[10px] text-primary-foreground/70">{opp.role}</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-[10px] text-primary-foreground/70">STATUS: ✓ {opp.status}</span>
                      <Button size="sm" variant="secondary" className="h-6 text-[10px] px-2">{opp.action}</Button>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-primary-foreground/60 mt-3">
                ⏱ This unlock expires in <strong>14 days</strong>. Interviews are conducted through the SkillForge Priority Pipeline.
              </p>
            </div>

            {/* Public Verification */}
            <div className="bg-card rounded-xl border p-6 text-center">
              <h3 className="font-semibold text-sm mb-3">Public Verification</h3>
              <div className="h-24 w-24 mx-auto bg-secondary rounded-lg flex items-center justify-center mb-3">
                <Shield className="h-10 w-10 text-muted-foreground" />
              </div>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-2">Scan to verify authenticity</p>
              <Button variant="ghost" size="sm" className="text-xs text-primary">Copy Verification URL <ExternalLink className="ml-1 h-3 w-3" /></Button>
            </div>

            {/* Next Steps */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
              <h3 className="font-semibold text-sm mb-3">→ Next Steps</h3>
              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-2">
                  <span className="bg-primary text-primary-foreground rounded-full h-5 w-5 flex items-center justify-center text-[10px] shrink-0">1</span>
                  <span>Review the company interview rubrics on the <strong>Opportunity Page</strong></span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="bg-primary text-primary-foreground rounded-full h-5 w-5 flex items-center justify-center text-[10px] shrink-0">2</span>
                  <span>Complete the <strong>AI Mock Interview</strong> module for Hardware roles.</span>
                </div>
              </div>
              <Link to="/opportunities">
                <Button variant="link" size="sm" className="text-xs p-0 mt-3 text-primary">Go to Opportunities</Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Partnership */}
        <div className="mt-8 bg-card rounded-xl border p-6 text-center">
          <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-4">In Partnership With</h3>
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><Building2 className="h-4 w-4" /> NECTEC Thailand</span>
            <span className="flex items-center gap-2"><Shield className="h-4 w-4" /> TSIA Alliance</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> ISO 27001 Certified</span>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
