import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import { ROUTE_PATHS } from "@/lib/index";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import Appointments from "@/pages/Appointments";
import Gallery from "@/pages/Gallery";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <MotionConfig reducedMotion="user">
        <HashRouter>
          <Routes>
            <Route path={ROUTE_PATHS.HOME} element={<Home />} />
            <Route path={ROUTE_PATHS.ABOUT} element={<About />} />
            <Route path={ROUTE_PATHS.SERVICES} element={<Services />} />
            <Route path={ROUTE_PATHS.CONTACT} element={<Contact />} />
            <Route path={ROUTE_PATHS.GALLERY} element={<Gallery />} />
            <Route path={ROUTE_PATHS.APPOINTMENTS} element={<Appointments />} />
          </Routes>
        </HashRouter>
      </MotionConfig>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;