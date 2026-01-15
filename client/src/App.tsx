import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

/* PAGES */
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Admin from "@/pages/Admin";

import Kashi from "@/pages/Kashi";
import Ayodhya from "@/pages/Ayodhya";
import Prayagraj from "@/pages/Prayagraj";
import Kerala from "@/pages/Kerala";
import goa from "@/pages/goa";
import Kashmir from "@/pages/Kashmir";
import Jaipur from "@/pages/Jaipur";
import Manali from "@/pages/Manali";

/* ADMIN AUTH */
import AdminLogin from "@/pages/admin/AdminLogin";
import ProtectedAdmin from "@/pages/admin/ProtectedAdmin";

function Router() {
  return (
    <Switch>
      {/* PUBLIC ROUTES */}
      <Route path="/" component={Home} />

      <Route path="/kashi" component={Kashi} />
      <Route path="/ayodhya" component={Ayodhya} />
      <Route path="/prayagraj" component={Prayagraj} />
      <Route path="/Kerala" component={Kerala} />      
      <Route path="/goa" component={goa} /> 
      <Route path="/Kashmir" component={Kashmir} /> 
      <Route path="/Jaipur" component={Jaipur} /> 
      <Route path="/Manali" component={Manali} /> 



      {/* ADMIN LOGIN */}
      <Route path="/admin/login" component={AdminLogin} />

      {/* PROTECTED ADMIN DASHBOARD */}
      <Route path="/admin">
        <ProtectedAdmin>
          <Admin />
        </ProtectedAdmin>
      </Route>

      {/* 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
