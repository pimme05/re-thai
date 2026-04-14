import { motion } from "framer-motion";
import { ArrowRight, Search, Users, Building2, GraduationCap, Target, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { simulations } from "@/lib/mockData";
import heroImg from "@/assets/hero-semicon.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.4 } }),
};

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="border-b bg-card sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-xs font-bold text-primary-foreground">A</span>
            </div>
            <span className="font-bold">AETHER</span>
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider hidden sm:inline">
              Semicon & Advanced Electronics
            </span>
          </div>
          <div className="hidden md:flex flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input className="pl-10 h-9 bg-secondary/50 border-0" placeholder="Search simulations, companies, credentials..." />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/marketplace"><Button variant="ghost" size="sm">Sign In</Button></Link>
            <Link to="/student"><Button size="sm">Get Started</Button></Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-card border-b">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible">
              <motion.div variants={fadeUp} custom={0}>
                <Badge className="mb-4 bg-primary/10 text-primary border-0 font-medium">
                  National Workforce Pilot Program
                </Badge>
              </motion.div>
              <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-extrabold leading-tight">
                Build skills through{" "}
                <span className="text-primary">real company work</span>
              </motion.h1>
              <motion.p variants={fadeUp} custom={2} className="mt-4 text-muted-foreground leading-relaxed max-w-lg">
                Bridge the gap between education and industry. Complete task-based simulations,
                earn verified micro-credentials, and unlock your next career move.
              </motion.p>
              <motion.div variants={fadeUp} custom={3} className="mt-6 flex gap-3">
                <Link to="/marketplace">
                  <Button size="lg">Explore Simulations</Button>
                </Link>
                <Link to="/company">
                  <Button size="lg" variant="outline">Partner with Us</Button>
                </Link>
              </motion.div>
              <motion.p variants={fadeUp} custom={4} className="mt-4 text-xs text-muted-foreground">
                Joined by <strong>500+ students</strong> from top Thai universities
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <img
                src={heroImg}
                alt="Semiconductor clean room"
                className="rounded-xl shadow-lg w-full"
                width={1280}
                height={720}
              />
              {/* Floating cards */}
              <div className="absolute top-4 right-4 bg-card rounded-lg shadow-lg p-3 text-xs border">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded bg-primary/10 flex items-center justify-center">
                    <span className="text-primary text-[10px] font-bold">⚡</span>
                  </div>
                  <div>
                    <div className="font-semibold text-[11px]">New Simulation</div>
                    <div className="text-muted-foreground text-[10px]">VLSI Design Challenge</div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-card rounded-lg shadow-lg p-3 text-xs border">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-accent text-[10px]">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-[11px]">Credential Earned</div>
                    <div className="text-muted-foreground text-[10px]">Verified by Thai Electronics Council</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b bg-background">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Users, value: "1,000+", label: "STUDENT TARGET" },
              { icon: Building2, value: "25+", label: "INDUSTRY PARTNERS" },
              { icon: GraduationCap, value: "12", label: "PARTNER UNIS" },
              { icon: Target, value: "85%", label: "PLACEMENT GOAL" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <stat.icon className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-xl font-bold">{stat.value}</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Simulations */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold">Jumpstart your career</h2>
              <p className="text-muted-foreground mt-1">Experience real-world engineering challenges from the industry's most innovative companies.</p>
            </div>
            <Link to="/marketplace">
              <Button variant="ghost" size="sm">Browse Marketplace <ArrowRight className="ml-1 h-4 w-4" /></Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {simulations.slice(0, 3).map((sim, i) => (
              <motion.div
                key={sim.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <Link to={`/simulation/${sim.id}`}>
                  <div className="bg-card rounded-xl border p-6 hover:shadow-card-hover transition-shadow h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="text-xs">{sim.difficulty}</Badge>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`h-8 w-8 rounded-lg ${sim.color} flex items-center justify-center text-xs font-bold`}>
                        {sim.logo}
                      </div>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">{sim.company}</span>
                    </div>
                    <h3 className="font-semibold mb-3">{sim.role}</h3>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {sim.skills.map((s) => (
                        <Badge key={s} variant="secondary" className="text-[10px]">{s}</Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto pt-3 border-t">
                      <span>⏱ {sim.duration}</span>
                      <span className="text-primary font-medium">View Detail →</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flow */}
      <section className="py-16 bg-secondary/30 border-t">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-2">From simulation to employment</h2>
          <p className="text-center text-muted-foreground mb-12">A structured path designed to turn academic knowledge into industry-ready expertise.</p>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {[
              { num: "01", title: "Discover", desc: "Browse simulation marketplace and select tasks aligned with your career goals and major.", icon: Search },
              { num: "02", title: "Complete", desc: "Work through industry-vetted tasks in our immersive workspace with real-world constraints.", icon: Target },
              { num: "03", title: "Unlock", desc: "Earn micro-credentials that bypass standard screening and unlock direct interview paths.", icon: Star },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-xl border p-6"
              >
                <div className="text-xs text-primary font-bold mb-3">{step.num}</div>
                <step.icon className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/marketplace">
              <Button>Start Your Journey <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background border-t">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-10">Trusted by the next generation</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                quote: "The PCB design simulation was exactly like the work I'm doing now in my internship. It gave me the confidence to ace the technical interview.",
                name: "Ananya S.",
                role: "Electronics Engineering Student, CU",
              },
              {
                quote: "SkillForge allowed us to identify students with the specific technical troubleshooting skills we need, reducing our training time by 40%.",
                name: "Somchai P.",
                role: "Engineering Manager, ThaiSemi",
              },
            ].map((t) => (
              <div key={t.name} className="bg-card rounded-xl border p-6">
                <div className="flex gap-0.5 mb-3">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-sm font-medium">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-3">
            Ready to accelerate Thailand's industry?
          </h2>
          <p className="text-primary-foreground/80 mb-6">
            Join the pilot program today as a student or a corporate partner and help build the workforce of tomorrow.
          </p>
          <div className="flex gap-3 justify-center">
            <Link to="/student">
              <Button variant="secondary" size="lg">Join as a Student</Button>
            </Link>
            <Link to="/company">
              <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                Become a Partner
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="h-7 w-7 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-[10px] font-bold text-primary-foreground">A</span>
                </div>
                <span className="font-bold">SkillForge</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Upgrading existing industries and preparing a workforce for the next-gen industries in Thailand.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-3">Platform</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div><Link to="/marketplace" className="hover:text-foreground">Marketplace</Link></div>
                <div><Link to="/admin" className="hover:text-foreground">Workforce Analytics</Link></div>
                <div><Link to="/company" className="hover:text-foreground">For Companies</Link></div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-3">Resources</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Documentation</div>
                <div>Case Studies</div>
                <div>Help Center</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-3">Partner Pilot</h4>
              <p className="text-xs text-muted-foreground mb-3">
                Targeting 1,000 students & 25 companies over 24 months.
              </p>
              <Button size="sm" variant="destructive" className="bg-primary hover:bg-primary/90">Join the Pilot</Button>
            </div>
          </div>
          <div className="border-t pt-6 flex items-center justify-between text-xs text-muted-foreground">
            <span>© 2026 SkillForge</span>
            <div className="flex gap-4">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
