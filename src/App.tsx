import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Landing from "./pages/Landing";
import Marketplace from "./pages/Marketplace";
import SimulationDetail from "./pages/SimulationDetail";
import StudentDashboard from "./pages/StudentDashboard";
import Credentials from "./pages/Credentials";
import Opportunities from "./pages/Opportunities";
import CompanyDashboard from "./pages/CompanyDashboard";
import UniversityDashboard from "./pages/UniversityDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Workspace from "./pages/Workspace";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/simulation/:id" element={<SimulationDetail />} />
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/credentials" element={<Credentials />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/company" element={<CompanyDashboard />} />
          <Route path="/university" element={<UniversityDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/workspace" element={<Workspace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
