import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Admin from "@/pages/Admin";

import Kashi from "@/pages/Kashi";
import Ayodhya from "@/pages/Ayodhya";
import Prayagraj from "@/pages/Prayagraj";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />

      <Route path="/kashi" component={Kashi} />
      <Route path="/ayodhya" component={Ayodhya} />
      <Route path="/prayagraj" component={Prayagraj} />

      <Route path="/admin" component={Admin} />

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
