import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoveQuestion from "./pages/LoveQuestion";
import TryAgain from "./pages/TryAgain";
import GiftMenu from "./pages/GiftMenu";
import AboutYou from "./pages/gifts/AboutYou";
import Crossword from "./pages/gifts/Crossword";
import CrosswordComplete from "./pages/gifts/CrosswordComplete";
import Challenge from "./pages/gifts/Challenge";
import Letter from "./pages/gifts/Letter";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/question" element={<LoveQuestion />} />
          <Route path="/try-again" element={<TryAgain />} />
          <Route path="/gifts" element={<GiftMenu />} />
          <Route path="/gift/about-you" element={<AboutYou />} />
          <Route path="/gift/crossword" element={<Crossword />} />
          <Route path="/gift/crossword-complete" element={<CrosswordComplete />} />
          <Route path="/gift/challenge" element={<Challenge />} />
          <Route path="/gift/letter" element={<Letter />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
