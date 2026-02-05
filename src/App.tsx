import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { isLoggedIn } from "@/lib/storage";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import Accueil from "./pages/Accueil";
import Modules from "./pages/Modules";
import CheckIn from "./pages/CheckIn";
import Journal from "./pages/Journal";
import Communaute from "./pages/Communaute";
import NotFound from "./pages/NotFound";
import ExerciceJour from "./pages/ExerciceJour";

const queryClient = new QueryClient();

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  return isLoggedIn() ? <>{children}</> : <Navigate to="/" replace />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isLoggedIn() ? <Navigate to="/accueil" replace /> : <Login />} />
          <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
            <Route path="/accueil" element={<Accueil />} />
            <Route path="/modules" element={<Modules />} />
            <Route path="/checkin" element={<CheckIn />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/communaute" element={<Communaute />} />
            <Route path="/exercice-jour" element={<ExerciceJour />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
