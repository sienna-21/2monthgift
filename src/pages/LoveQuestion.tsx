import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FloatingHearts from "@/components/FloatingHearts";
import LolitaButton from "@/components/LolitaButton";

const LoveQuestion = () => {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState("");
  
  const wordCount = answer.trim().split(/\s+/).filter(word => word.length > 0).length;
  const isValid = wordCount >= 25;

  const handleSubmit = () => {
    if (isValid) {
      navigate("/gifts");
    } else {
      navigate("/try-again");
    }
  };

  return (
    <div className="min-h-screen bg-dreamy flex items-center justify-center relative overflow-hidden px-4 py-8">
      <FloatingHearts />
      
      <div className="max-w-2xl w-full z-10 fade-in-up">
        <div className="lolita-card">
          {/* Header */}
          <div className="text-center mb-8">
            <span className="text-5xl mb-4 block">💌</span>
            <h1 className="text-4xl md:text-5xl font-cursive text-gradient mb-4">
              Before you enter...
            </h1>
          </div>

          {/* Question */}
          <div className="text-center mb-8">
            <p className="text-2xl md:text-3xl font-cursive text-foreground mb-2">
              Do you love me?
            </p>
            <p className="text-xl font-cursive text-rose">
              And why? 💗
            </p>
          </div>

          {/* Text Area */}
          <div className="relative mb-6">
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Tell me everything in your heart..."
              className="w-full h-48 p-4 rounded-2xl bg-soft-white border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 resize-none font-body text-foreground placeholder:text-muted-foreground/50"
            />
            
            {/* Word Counter */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2">
              <span className={`text-sm font-body ${isValid ? 'text-rose' : 'text-muted-foreground'}`}>
                {wordCount} / 25 words
              </span>
              {isValid && <span className="text-rose">✓</span>}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-rose to-primary transition-all duration-300 rounded-full"
                style={{ width: `${Math.min((wordCount / 25) * 100, 100)}%` }}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <LolitaButton onClick={handleSubmit}>
              Submit My Love ♡
            </LolitaButton>
          </div>

          {/* Hint */}
          <p className="text-center text-sm text-muted-foreground mt-6 font-body">
            Write at least 25 words from your heart 💗
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-3xl opacity-40 animate-float-slow">✉️</div>
      <div className="absolute bottom-10 right-10 text-3xl opacity-40 animate-float-slow" style={{ animationDelay: "1.5s" }}>💕</div>
    </div>
  );
};

export default LoveQuestion;
