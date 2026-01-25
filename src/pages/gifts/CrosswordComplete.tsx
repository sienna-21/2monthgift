import { useNavigate } from "react-router-dom";
import FloatingHearts from "@/components/FloatingHearts";
import Sparkles from "@/components/Sparkles";
import LolitaButton from "@/components/LolitaButton";

const CrosswordComplete = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-dreamy relative overflow-hidden px-4 py-8">
      <FloatingHearts />
      <Sparkles />
      
      {/* Floating petals animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-5%`,
              animation: `petal-fall ${8 + Math.random() * 6}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            🌸
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center justify-center min-h-[80vh]">
        {/* Congratulations Header */}
        <div className="text-center mb-8 fade-in-up">
          <span className="text-6xl mb-4 block animate-gentle-bounce">🎉</span>
          <h1 className="text-4xl md:text-6xl font-cursive text-gradient mb-4">
            Congratulations!
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-body">
            You know me so well, my love 💗
          </p>
        </div>

        {/* Bouquet Card */}
        <div className="lolita-card p-8 md:p-12 text-center mb-8 fade-in-up relative" style={{ animationDelay: "300ms" }}>
          {/* Decorative ribbon on top */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-4xl">🎀</div>
          
          <p className="text-lg md:text-xl font-cursive text-foreground mb-6">
            As a reward, here's a bouquet for you...
          </p>

          {/* Beautiful Flower Bouquet */}
          <div className="relative inline-block">
            {/* Bouquet wrapper/paper */}
            <div className="relative w-64 h-80 md:w-80 md:h-96 mx-auto">
              {/* Wrapper base */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 md:w-56 h-40 md:h-48 bg-gradient-to-b from-pink-100 to-pink-200 rounded-t-[100px] shadow-lg border-2 border-pink-200" />
              
              {/* Ribbon on wrapper */}
              <div className="absolute bottom-24 md:bottom-28 left-1/2 -translate-x-1/2 z-20">
                <div className="w-32 md:w-40 h-6 bg-rose rounded-full shadow-md flex items-center justify-center">
                  <span className="text-white text-xs font-cursive">for you ♡</span>
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-rose rotate-45" />
              </div>

              {/* Flowers arrangement */}
              <div className="absolute bottom-32 md:bottom-40 left-1/2 -translate-x-1/2 w-full">
                {/* Hibiscus flowers - main focal point */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-8 text-6xl md:text-7xl animate-float-slow">🌺</div>
                <div className="absolute left-1/4 -translate-x-1/2 top-4 text-5xl md:text-6xl animate-float-slow" style={{ animationDelay: "0.5s" }}>🌺</div>
                <div className="absolute right-1/4 translate-x-1/2 top-4 text-5xl md:text-6xl animate-float-slow" style={{ animationDelay: "1s" }}>🌺</div>
                
                {/* Roses */}
                <div className="absolute left-1/3 -translate-x-1/2 top-16 text-4xl md:text-5xl animate-float-slow" style={{ animationDelay: "0.3s" }}>🌹</div>
                <div className="absolute right-1/3 translate-x-1/2 top-16 text-4xl md:text-5xl animate-float-slow" style={{ animationDelay: "0.8s" }}>🌹</div>
                
                {/* Cherry blossoms */}
                <div className="absolute left-0 top-2 text-3xl md:text-4xl animate-float-slow" style={{ animationDelay: "1.2s" }}>🌸</div>
                <div className="absolute right-0 top-2 text-3xl md:text-4xl animate-float-slow" style={{ animationDelay: "0.7s" }}>🌸</div>
                <div className="absolute left-1/2 -translate-x-1/2 top-24 text-3xl md:text-4xl animate-float-slow" style={{ animationDelay: "1.5s" }}>🌸</div>
                
                {/* Tulips */}
                <div className="absolute left-8 top-10 text-4xl md:text-5xl animate-float-slow" style={{ animationDelay: "0.4s" }}>🌷</div>
                <div className="absolute right-8 top-10 text-4xl md:text-5xl animate-float-slow" style={{ animationDelay: "0.9s" }}>🌷</div>
                
                {/* White flowers */}
                <div className="absolute left-12 top-20 text-3xl animate-float-slow" style={{ animationDelay: "1.1s" }}>🤍</div>
                <div className="absolute right-12 top-20 text-3xl animate-float-slow" style={{ animationDelay: "0.6s" }}>🤍</div>
                
                {/* Leaves/greenery */}
                <div className="absolute left-4 top-28 text-2xl md:text-3xl">🌿</div>
                <div className="absolute right-4 top-28 text-2xl md:text-3xl">🌿</div>
                <div className="absolute left-16 top-30 text-xl md:text-2xl">🍃</div>
                <div className="absolute right-16 top-30 text-xl md:text-2xl">🍃</div>
              </div>
            </div>

            {/* Sparkle effects */}
            <div className="absolute -top-4 left-1/4 text-2xl animate-sparkle">✨</div>
            <div className="absolute -top-2 right-1/4 text-xl animate-sparkle" style={{ animationDelay: "0.5s" }}>✨</div>
            <div className="absolute top-1/4 -left-4 text-lg animate-sparkle" style={{ animationDelay: "1s" }}>✨</div>
            <div className="absolute top-1/4 -right-4 text-lg animate-sparkle" style={{ animationDelay: "1.5s" }}>✨</div>
          </div>

          <p className="mt-8 text-2xl font-cursive text-rose">
            Made with love, just for you 💕
          </p>
        </div>

        {/* Back Button */}
        <div className="text-center fade-in-up" style={{ animationDelay: "600ms" }}>
          <LolitaButton variant="outline" onClick={() => navigate("/gifts")}>
            ← Back to Gifts
          </LolitaButton>
        </div>

        {/* Bottom decoration */}
        <div className="flex justify-center gap-4 mt-8 opacity-50">
          <span className="text-xl">🌺</span>
          <span className="text-xl">♡</span>
          <span className="text-xl">🌸</span>
          <span className="text-xl">♡</span>
          <span className="text-xl">🌺</span>
        </div>
      </div>

      <style>{`
        @keyframes petal-fall {
          0% {
            transform: translateY(-10%) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default CrosswordComplete;
