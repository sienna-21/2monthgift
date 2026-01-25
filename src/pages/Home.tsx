import { useNavigate } from "react-router-dom";
import FloatingHearts from "@/components/FloatingHearts";
import Sparkles from "@/components/Sparkles";
import LolitaButton from "@/components/LolitaButton";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-dreamy flex items-center justify-center relative overflow-hidden">
      <FloatingHearts />
      <Sparkles />
      
      {/* Decorative Bows */}
      <div className="absolute top-10 left-10 text-4xl animate-float-slow opacity-60">🎀</div>
      <div className="absolute top-20 right-16 text-3xl animate-float-slow opacity-50" style={{ animationDelay: "1s" }}>🎀</div>
      <div className="absolute bottom-20 left-20 text-2xl animate-float-slow opacity-40" style={{ animationDelay: "2s" }}>🎀</div>
      <div className="absolute bottom-32 right-10 text-4xl animate-float-slow opacity-60" style={{ animationDelay: "0.5s" }}>🎀</div>

      {/* Main Content */}
      <div className="text-center z-10 px-6 fade-in-up">
        <div className="mb-8">
          <span className="text-6xl animate-gentle-bounce inline-block">💗</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-cursive text-gradient mb-6 leading-tight">
          Our Second Month
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground font-body mb-12 max-w-md mx-auto">
          A little world I made just for you.
        </p>
        
        <LolitaButton onClick={() => navigate("/question")}>
          Enter ♡
        </LolitaButton>

        {/* Lace decoration */}
        <div className="mt-16 flex justify-center gap-2 opacity-40">
          {Array.from({ length: 7 }).map((_, i) => (
            <span key={i} className="text-primary">♡</span>
          ))}
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary/20 to-transparent rounded-tr-full" />
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-lavender/30 to-transparent rounded-bl-full" />
    </div>
  );
};

export default Home;
