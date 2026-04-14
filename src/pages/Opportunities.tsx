import { Briefcase, MapPin, Clock, ArrowRight, Search, Filter, Building2, CheckCircle2, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DashboardLayout } from "@/components/DashboardLayout";

const opportunities = [
  {
    company: "TSMC Thailand",
    role: "Hardware Design Intern",
    location: "Chonburi, EEC",
    type: "Internship",
    salary: "฿25,000/mo",
    match: 95,
    status: "Interview Scheduled",
    statusColor: "bg-accent/10 text-accent",
    badges: ["PCB Design", "Signal Integrity"],
    deadline: "Dec 15, 2024",
  },
  {
    company: "Silicon Labs",
    role: "Junior Verification Engineer",
    location: "Bangkok",
    type: "Full-time",
    salary: "฿35,000/mo",
    match: 88,
    status: "Application Open",
    statusColor: "bg-primary/10 text-primary",
    badges: ["ASIC", "SystemVerilog"],
    deadline: "Jan 10, 2025",
  },
  {
    company: "Western Digital",
    role: "System-on-Chip Associate",
    location: "Nakhon Ratchasima",
    type: "Internship",
    salary: "฿22,000/mo",
    match: 82,
    status: "Fast-tracked",
    statusColor: "bg-primary/10 text-primary",
    badges: ["SoC", "FPGA"],
    deadline: "Dec 30, 2024",
  },
  {
    company: "Hana Microelectronics",
    role: "Junior Test Engineer",
    location: "Lamphun",
    type: "Full-time",
    salary: "฿30,000/mo",
    match: 78,
    status: "Shortlisted",
    statusColor: "bg-accent/10 text-accent",
    badges: ["QA", "Testing"],
    deadline: "Jan 20, 2025",
  },
];

export default function Opportunities() {
  return (
    <DashboardLayout role="Student">
      <div className="p-6">
        <div className="text-xs text-muted-foreground mb-4">Student &gt; Opportunities</div>
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-1">Career Opportunities</h1>
          <p className="text-sm text-muted-foreground">
            Your verified micro-credentials have unlocked these industry roles. Manage your applications and interview schedules below.
          </p>
        </div>

        <div className="flex gap-3 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input className="pl-10" placeholder="Search Jobs" />
          </div>
          <Button variant="outline" size="sm">Advanced Filters</Button>
        </div>

        <div className="space-y-4">
          {opportunities.map((opp) => (
            <div key={opp.role} className="bg-card rounded-xl border p-6 hover:shadow-card-hover transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-lg font-bold text-primary shrink-0">
                    {opp.company.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-lg">{opp.role}</h3>
                      <Badge className="text-[10px] bg-primary/10 text-primary border-0">{opp.match}% Match</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{opp.company}</p>
                    <div className="flex items-center flex-wrap gap-3 mt-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{opp.location}</span>
                      <span className="flex items-center gap-1"><Briefcase className="h-3 w-3" />{opp.type}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" />Deadline: {opp.deadline}</span>
                      <span className="font-medium text-foreground">{opp.salary}</span>
                    </div>
                    <div className="flex gap-1.5 mt-2">
                      {opp.badges.map((b) => (
                        <Badge key={b} variant="secondary" className="text-[10px]">{b}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${opp.statusColor}`}>
                    {opp.status}
                  </span>
                  <Button size="sm">
                    View Details <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
