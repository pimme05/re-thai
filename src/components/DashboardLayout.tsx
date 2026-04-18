import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Search,
  Briefcase,
  Award,
  BarChart3,
  Settings,
  Bell,
  MessageSquare,
  Monitor,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const navItems = [
  { title: "Dashboard", url: "/student", icon: LayoutDashboard },
  { title: "Marketplace", url: "/marketplace", icon: Search },
  { title: "Workspace", url: "/workspace", icon: Monitor },
  { title: "Credentials", url: "/credentials", icon: Award },
  { title: "Opportunities", url: "/opportunities", icon: Briefcase },
  { title: "Analytics", url: "/admin", icon: BarChart3 },
  { title: "Settings", url: "/settings", icon: Settings },
];

type UserRole = "Student" | "Company" | "University" | "Admin";

export function DashboardLayout({
  children,
  role = "Student",
}: {
  children: ReactNode;
  role?: UserRole;
}) {
  const location = useLocation();
  const isActive = (url: string) => location.pathname === url;

  return (
    <div className="min-h-screen flex flex-col bg-secondary/30">
      {/* Top Nav */}
      <header className="h-14 border-b bg-card flex items-center px-4 gap-4 shrink-0 sticky top-0 z-50">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-xs font-bold text-primary-foreground">S</span>
          </div>
          <div className="hidden md:block">
            <span className="font-bold text-sm">AETHER</span>
            <span className="text-[10px] text-muted-foreground ml-2 uppercase tracking-wider">
              Workforce for Next-Gen Industries
            </span>
          </div>
        </Link>

        <div className="flex-1 max-w-xl mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              className="pl-10 h-9 bg-secondary/50 border-0"
              placeholder="Search simulations, companies, credentials..."
            />
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Badge variant="outline" className="text-xs">
            Role: <strong className="ml-1">{role}</strong>
          </Badge>
          <button className="relative p-1.5 rounded-md hover:bg-secondary">
            <Bell className="h-4 w-4 text-muted-foreground" />
            <span className="absolute top-0.5 right-0.5 h-2 w-2 bg-primary rounded-full" />
          </button>
          <button className="p-1.5 rounded-md hover:bg-secondary">
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </button>
          <div className="h-8 w-8 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
            <span className="text-xs font-medium text-primary">A</span>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-[170px] border-r bg-card shrink-0 py-3 hidden md:block">
          <nav className="space-y-0.5 px-2">
            {navItems.map((item) => {
              const active = isActive(item.url);
              return (
                <Link
                  key={item.url}
                  to={item.url}
                  className={cn(
                    "flex items-center gap-2.5 px-3 py-2 rounded-md text-sm transition-colors",
                    active
                      ? "bg-primary text-primary-foreground font-medium"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  )}
                >
                  <item.icon className="h-4 w-4 shrink-0" />
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-auto min-w-0">{children}</main>
      </div>
    </div>
  );
}
