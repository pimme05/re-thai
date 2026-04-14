import { DashboardLayout } from "@/components/DashboardLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Clock, Download, Eye, MessageSquare, Send, FileText } from "lucide-react";

export default function Workspace() {
  return (
    <DashboardLayout role="Student">
      <div className="flex h-[calc(100vh-3.5rem)]">
        {/* Left Panel - Task Brief */}
        <div className="w-[280px] border-r bg-card p-5 overflow-y-auto shrink-0">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="outline" className="text-[10px]">Task 03 of 05</Badge>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="h-3 w-3" /> 45m Estimated
            </span>
          </div>
          <h2 className="text-lg font-bold mb-2">Die-Level Defect Analysis & Classification</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Using the AOI (Automated Optical Inspection) terminal, identify structural micro-fractures in the silicon wafer batch #882-X.
          </p>

          <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Technical Docs</h3>
          <div className="space-y-2 mb-6">
            {[
              { name: "AOI_Standards_v4.pdf", size: "1.2 MB" },
              { name: "Defect_Library_Reference.pdf", size: "4.8 MB" },
            ].map((doc) => (
              <div key={doc.name} className="flex items-center gap-2 p-2 rounded-lg border bg-secondary/30">
                <FileText className="h-4 w-4 text-muted-foreground shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-medium truncate">{doc.name}</div>
                  <div className="text-[10px] text-muted-foreground">{doc.size}</div>
                </div>
                <Download className="h-3 w-3 text-muted-foreground" />
              </div>
            ))}
          </div>

          <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Procedure Steps</h3>
          <div className="space-y-2">
            {[
              { title: "1. Initial Calibration", done: true },
              { title: "2. Wafer Loading", done: true },
              { title: "3. Defect Mapping", done: false, active: true },
            ].map((step) => (
              <div key={step.title} className={`p-2 rounded-lg text-xs ${
                step.active ? "bg-primary/10 border border-primary/20 font-medium" : "bg-secondary/30"
              }`}>
                <div className="flex items-center gap-2">
                  {step.done ? <CheckCircle2 className="h-3.5 w-3.5 text-accent" /> : <span className="h-3.5 w-3.5" />}
                  {step.title}
                </div>
              </div>
            ))}
          </div>

          {/* Active step details */}
          <div className="mt-3 ml-4 text-xs text-muted-foreground space-y-1">
            <p>• Toggle 'Dark Field' mode in the inspection terminal.</p>
            <p>• Identify at least 5 instances of 'Bird's Beak' encroachment.</p>
            <p>• Tag coordinates in the submission manifest.</p>
          </div>
        </div>

        {/* Center Panel - Workspace */}
        <div className="flex-1 flex flex-col bg-[#0a0e27] min-w-0">
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-4 py-2 bg-[#0d1230] border-b border-[#1a2050]">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-destructive" />
              <span className="text-xs text-[#8090c0] font-mono">APEX_AOI_SYSTEM_V2.04</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1 w-8 bg-primary rounded-full" />
              <span className="text-[10px] text-[#8090c0]">SIGNAL: STRONG</span>
            </div>
          </div>

          {/* Simulated Workspace Area */}
          <div className="flex-1 flex items-center justify-center relative">
            <div className="text-center">
              <div className="h-48 w-48 rounded-full border-2 border-[#1a3060] mx-auto mb-4 flex items-center justify-center relative">
                <div className="h-32 w-32 rounded-full border border-[#1a3060]/60 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full border border-[#1a3060]/40" />
                </div>
                {/* Defect markers */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2">
                  <span className="h-5 w-5 rounded-full border-2 border-destructive flex items-center justify-center text-[8px] text-destructive font-bold">D-1</span>
                </div>
                <div className="absolute bottom-12 right-8">
                  <span className="text-[9px] text-accent bg-accent/20 px-1.5 py-0.5 rounded-full">SCANNING</span>
                </div>
              </div>
              <p className="text-xs text-[#4060a0] tracking-widest">LIVE FEED: BATCH #882-X SILICON CARRIER</p>
            </div>

            {/* Coordinates overlay */}
            <div className="absolute top-4 left-4 bg-[#0d1230]/80 rounded-lg p-3 text-[#6080b0] text-[10px] font-mono space-y-1">
              <div className="text-[8px] text-[#4060a0] uppercase">Coordinates</div>
              <div>X: 124.23 | Y: 88.012</div>
              <div className="text-[8px] text-[#4060a0] uppercase mt-2">Zoom</div>
              <div>400,000x (MAX)</div>
              <button className="mt-2 bg-[#1a2050] px-2 py-1 rounded text-[10px] flex items-center gap-1">
                🔍 Auto-Center
              </button>
            </div>

            {/* Terminal output */}
            <div className="absolute bottom-4 right-4 bg-[#0d1230]/80 rounded-lg p-2 text-[9px] font-mono text-[#4080a0] max-w-[200px]">
              <p>&gt; ANALYZING SPECTRAL NOISE...</p>
              <p>&gt; DETECTING CRYSTALLINE FLAWS...</p>
              <p className="text-yellow-500">&gt; [WARN] OXYGEN CONTENT HIGH</p>
              <p className="text-accent">&gt; SCAN READY.</p>
            </div>
          </div>

          {/* Controls bar */}
          <div className="flex items-center gap-4 px-4 py-3 bg-[#0d1230] border-t border-[#1a2050]">
            <button className="text-[10px] text-[#8090c0] flex items-center gap-1">
              <Eye className="h-3 w-3" /> Bright Field
            </button>
            <button className="text-[10px] bg-accent/20 text-accent px-2 py-1 rounded flex items-center gap-1">
              <Eye className="h-3 w-3" /> Dark Field
            </button>
            <div className="flex-1 flex items-center gap-2">
              <span className="text-[10px] text-[#8090c0]">Sensitivity:</span>
              <div className="flex-1 h-1.5 bg-[#1a2050] rounded-full relative">
                <div className="h-1.5 bg-primary rounded-full" style={{ width: "75%" }} />
                <div className="absolute top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-primary-foreground border-2 border-primary" style={{ left: "75%" }} />
              </div>
              <span className="text-[10px] text-[#8090c0]">75%</span>
            </div>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-4 bg-card border-t">
            {[
              { label: "Integrity Score", value: "98.2%" },
              { label: "Defects Found", value: "3/5" },
              { label: "System Uptime", value: "14:22" },
              { label: "Session XP", value: "+450", highlight: true },
            ].map((s) => (
              <div key={s.label} className="p-3 text-center border-r last:border-0">
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{s.label}</div>
                <div className={`text-lg font-bold ${s.highlight ? "text-accent" : ""}`}>{s.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel - Progress */}
        <div className="w-[220px] border-l bg-card p-5 overflow-y-auto shrink-0">
          <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">Your Progress</h3>
          <div className="space-y-3 mb-6">
            {["Setup", "Loading", "Defect Analysis", "Report Finalization", "Peer Review"].map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <div className={`h-3 w-3 rounded-full ${
                  i < 2 ? "bg-accent" : i === 2 ? "bg-primary ring-2 ring-primary/20" : "bg-secondary"
                }`} />
                <span className={`text-xs ${i === 2 ? "font-semibold" : "text-muted-foreground"}`}>{step}</span>
              </div>
            ))}
          </div>

          <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Simulation Rewards</h3>
          <div className="bg-secondary/50 rounded-lg p-4 text-center mb-4">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2">
              <span className="text-primary text-lg">🏆</span>
            </div>
            <div className="text-xs font-semibold">QA Specialist Badge</div>
            <div className="text-[10px] text-muted-foreground mb-2">Unlocked at 100% completion</div>
            <div className="flex items-center justify-between text-[10px]">
              <span className="uppercase tracking-wider text-muted-foreground">XP Potential</span>
              <span className="font-bold text-primary">+1,200</span>
            </div>
            <Progress value={60} className="h-1.5 mt-1" />
          </div>

          <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Support</h3>
          <div className="space-y-2">
            <Button variant="outline" size="sm" className="w-full text-xs justify-start">
              <MessageSquare className="mr-2 h-3 w-3" /> Ask AI Mentor
            </Button>
            <Button variant="outline" size="sm" className="w-full text-xs justify-start">
              ⚠ Report Issue
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="h-12 border-t bg-card flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-xs">AC</div>
          <div>
            <div className="text-xs font-medium">Aria Chen</div>
            <div className="text-[10px] text-muted-foreground">Technical Mentor (Apex Silicon)</div>
          </div>
        </div>
        <span className="text-xs text-muted-foreground">ⓘ Changes are saved automatically to your workspace cloud.</span>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="text-xs">💾 Save Draft</Button>
          <Button variant="outline" size="sm" className="text-xs">💬 Feedback</Button>
          <Button size="sm" className="text-xs">✈ Submit Task</Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
