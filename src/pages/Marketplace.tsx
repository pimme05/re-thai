import { useState } from "react";
import { Search, SlidersHorizontal, Zap } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { simulations } from "@/lib/mockData";
import { DashboardLayout } from "@/components/DashboardLayout";

export default function Marketplace() {
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState<string[]>([]);

  const filtered = simulations.filter((s) => {
    const matchSearch =
      s.company.toLowerCase().includes(search.toLowerCase()) ||
      s.role.toLowerCase().includes(search.toLowerCase());
    const matchDiff = difficulty.length === 0 || difficulty.includes(s.difficulty);
    return matchSearch && matchDiff;
  });

  const toggleDifficulty = (d: string) => {
    setDifficulty((prev) => prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d]);
  };

  return (
    <DashboardLayout role="Student">
      <div className="flex">
        {/* Filter Sidebar */}
        <aside className="w-[220px] border-r bg-card p-5 hidden lg:block shrink-0">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-sm">Filters</h3>
            <button
              className="text-xs text-primary hover:underline"
              onClick={() => setDifficulty([])}
            >
              Reset All
            </button>
          </div>

          <div className="mb-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Difficulty Level</h4>
            <div className="space-y-2.5">
              {["Beginner", "Intermediate", "Expert"].map((d) => (
                <label key={d} className="flex items-center gap-2 text-sm cursor-pointer">
                  <Checkbox
                    checked={difficulty.includes(d)}
                    onCheckedChange={() => toggleDifficulty(d)}
                  />
                  {d}
                </label>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Duration</h4>
            <div className="space-y-2.5">
              {["< 5 Hours", "5-15 Hours", "15-30 Hours", "30+ Hours"].map((d) => (
                <label key={d} className="flex items-center gap-2 text-sm cursor-pointer">
                  <Checkbox />
                  {d}
                </label>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Opportunities</h4>
            <label className="flex items-start gap-2 text-sm cursor-pointer">
              <Checkbox defaultChecked />
              <div>
                <div className="font-medium">Interview Unlock</div>
                <div className="text-xs text-muted-foreground">Verified by top employers</div>
              </div>
            </label>
          </div>

          <div className="mb-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Partner Companies</h4>
            {/* Placeholder */}
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Skill Tags</h4>
            {/* Placeholder */}
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-1">Simulation Marketplace</h1>
            <p className="text-muted-foreground">Bridge your skill gap with real-world industry tasks.</p>
          </div>

          <div className="flex gap-3 mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                className="pl-10"
                placeholder="Search keywords..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Button variant="outline" size="sm" className="gap-1">
              <SlidersHorizontal className="h-3.5 w-3.5" /> Sort: Popularity
            </Button>
          </div>

          {/* Pilot Banner */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Zap className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-sm">Pilot Program Special: Top Performers Wanted</h3>
              <p className="text-xs text-muted-foreground">Complete 3 "Interview Unlock" simulations to be fast-tracked to the National Talent Pool.</p>
            </div>
            <Badge className="bg-primary text-primary-foreground text-xs shrink-0">Active Pilot Phase</Badge>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {filtered.map((sim) => (
              <Link key={sim.id} to={`/simulation/${sim.id}`}>
                <div className="bg-card rounded-xl border p-5 hover:shadow-card-hover transition-shadow h-full flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`h-10 w-10 rounded-lg ${sim.color} flex items-center justify-center text-sm font-bold`}>
                      {sim.logo}
                    </div>
                    {sim.fastTrack && (
                      <Badge variant="outline" className="text-[10px] gap-1">
                        🔓 Interview Unlock
                      </Badge>
                    )}
                  </div>
                  <h3 className="font-semibold mb-1">{sim.role}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{sim.company}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {sim.skills.map((s) => (
                      <Badge key={s} variant="secondary" className="text-[10px]">{s}</Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mt-auto mb-4">
                    <span>📊 {sim.difficulty}</span>
                    <span>⏱ {sim.duration}</span>
                  </div>
                  <Button className="w-full" size="sm">Enroll Now</Button>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8 text-sm text-muted-foreground">
            Showing {filtered.length} of 42 industry simulations
          </div>
          <div className="text-center mt-3">
            <Button variant="outline">View More Opportunities</Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
