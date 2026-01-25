import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import Sparkles from "@/components/Sparkles";
import LolitaButton from "@/components/LolitaButton";

const letterParagraphs = [
  "My dearest love,",
  "I love you so much in a way that feels calm, warm and reassuring at the same time. I appreciate you more than I can ever explain— for the way you listen to me, the way you care for me, and the way you're always just there.",
  "Being with you makes me feel safe in a way I've never felt before. It's like being at home, like I can finally breathe and be myself without worrying about anything.",
  "You make even the smallest moments special just by being in it, and your presence alone is enough to comfort me on days that feel heavy.",
  "I'm so grateful for your patience, your kindness, and the way you love me. You don't even realize how much peace you bring into my life, but you truly mean everything to me.",
  "I cherish every moment I get to spend with you.",
  "I love you forever and ever. 💗",
  "Mahal kita, sinta ♡",
  "— Your love 🎀",
];

const Letter = () => {
  const navigate = useNavigate();
  const [visibleParagraphs, setVisibleParagraphs] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleParagraphs((prev) => {
        if (prev >= letterParagraphs.length) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 800);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-dreamy relative overflow-hidden">
      <FloatingHearts />
      <Sparkles />

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-3xl opacity-30 animate-float-slow">💌</div>
      <div className="absolute top-20 right-16 text-2xl opacity-30 animate-float-slow" style={{ animationDelay: "1s" }}>✨</div>
      <div className="absolute bottom-20 left-20 text-3xl opacity-30 animate-float-slow" style={{ animationDelay: "2s" }}>🎀</div>
      <div className="absolute bottom-10 right-10 text-2xl opacity-30 animate-float-slow" style={{ animationDelay: "0.5s" }}>💕</div>

      <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 fade-in-up">
          <span className="text-5xl mb-4 block">💌</span>
          <h1 className="text-4xl md:text-5xl font-cursive text-gradient">
            A Letter For You
          </h1>
        </div>

        {/* Letter Content */}
        <div className="max-w-2xl mx-auto">
          <div className="lolita-card relative p-6 md:p-10">
            {/* Decorative corner */}
            <div className="absolute top-4 right-4 text-2xl opacity-40">🎀</div>
            <div className="absolute bottom-4 left-4 text-2xl opacity-40">♡</div>

            {/* Letter paper texture effect */}
            <div 
              className="absolute inset-0 opacity-5 pointer-events-none rounded-2xl"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  transparent,
                  transparent 30px,
                  hsl(var(--primary) / 0.1) 30px,
                  hsl(var(--primary) / 0.1) 31px
                )`
              }}
            />

            <div className="relative z-10 space-y-6">
              {letterParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={`
                    font-body text-foreground leading-relaxed text-base md:text-lg
                    transition-all duration-700
                    ${index === 0 || index >= letterParagraphs.length - 2 
                      ? 'font-cursive text-xl md:text-2xl text-gradient' 
                      : ''
                    }
                    ${index === letterParagraphs.length - 1 ? 'text-right' : ''}
                    ${visibleParagraphs > index 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                    }
                  `}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Heart decoration below letter */}
          <div 
            className={`text-center mt-8 transition-all duration-700 ${
              visibleParagraphs >= letterParagraphs.length 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-50'
            }`}
          >
            <div className="flex justify-center items-center gap-2">
              <span className="text-3xl animate-float" style={{ animationDelay: "0s" }}>💗</span>
              <span className="text-2xl animate-float" style={{ animationDelay: "0.3s" }}>💕</span>
              <span className="text-3xl animate-float" style={{ animationDelay: "0.6s" }}>💗</span>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div 
          className={`text-center mt-12 transition-all duration-700 ${
            visibleParagraphs >= letterParagraphs.length 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          }`}
        >
          <LolitaButton variant="outline" onClick={() => navigate("/gifts")}>
            ← Back to Gifts
          </LolitaButton>
        </div>
      </div>
    </div>
  );
};

export default Letter;
