import { useNavigate } from "react-router-dom";
import FloatingHearts from "@/components/FloatingHearts";
import LolitaButton from "@/components/LolitaButton";

const TryAgain = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-dreamy flex items-center justify-center relative overflow-hidden px-4">
      <FloatingHearts />
      
      <div className="text-center z-10 fade-in-up max-w-lg">
        <div className="lolita-card p-8 md:p-12">
          {/* Emoji */}
          <div className="text-7xl mb-6 animate-wiggle">
            🥺
          </div>
          
          {/* Main Message */}
          <h1 className="text-4xl md:text-5xl font-cursive text-gradient mb-4 leading-tight">
            Come onnnn
          </h1>
          
          <p className="text-2xl md:text-3xl font-cursive text-foreground mb-6">
            that's it???
          </p>
          
          {/* Subtext */}
          <p className="text-lg text-muted-foreground font-body mb-8">
            I know you have more to say 💗
          </p>

          {/* Encouraging message */}
          <div className="bg-soft-white rounded-2xl p-4 mb-8 border border-border">
            <p className="text-sm text-muted-foreground font-body italic">
              "Every word you write makes my heart flutter even more..."
            </p>
          </div>
          
          {/* Button */}
          <LolitaButton onClick={() => navigate("/question")}>
            Try Again ♡
          </LolitaButton>
        </div>

        {/* Broken heart decoration */}
        <div className="mt-8 flex justify-center gap-4 opacity-60">
          <span className="text-2xl">💔</span>
          <span className="text-xl">→</span>
          <span className="text-2xl">❤️‍🩹</span>
          <span className="text-xl">→</span>
          <span className="text-2xl">💗</span>
        </div>
      </div>
    </div>
  );
};

export default TryAgain;
