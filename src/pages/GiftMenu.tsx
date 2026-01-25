import { useNavigate } from "react-router-dom";
import FloatingHearts from "@/components/FloatingHearts";
import Sparkles from "@/components/Sparkles";

interface GiftCardProps {
  emoji: string;
  title: string;
  description: string;
  onClick: () => void;
  delay: number;
}

const GiftCard = ({ emoji, title, description, onClick, delay }: GiftCardProps) => (
  <button
    onClick={onClick}
    className="lolita-card group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-glow-lg text-left w-full"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="text-center">
      {/* Emoji with glow effect */}
      <div className="text-5xl mb-4 transform transition-transform duration-300 group-hover:scale-125 group-hover:animate-wiggle">
        {emoji}
      </div>
      
      {/* Title */}
      <h3 className="text-2xl font-cursive text-gradient mb-2">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-sm text-muted-foreground font-body">
        {description}
      </p>
      
      {/* Hover indicator */}
      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-primary text-sm font-cursive">Click to open ♡</span>
      </div>
    </div>

    {/* Sparkle effect on hover */}
    <div className="absolute -top-2 -right-2 text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-float">
      ✨
    </div>
  </button>
);

const GiftMenu = () => {
  const navigate = useNavigate();

  const gifts = [
    {
      emoji: "💗",
      title: "About You",
      description: "Something beautiful, just for you",
      path: "/gift/about-you",
    },
    {
      emoji: "💭",
      title: "Crossword",
      description: "How well do you know me?",
      path: "/gift/crossword",
    },
    {
      emoji: "🎮",
      title: "Challenge",
      description: "Beat this for a special reward",
      path: "/gift/challenge",
    },
    {
      emoji: "✉️",
      title: "Letter",
      description: "Words from my heart",
      path: "/gift/letter",
    },
  ];

  return (
    <div className="min-h-screen bg-dreamy flex items-center justify-center relative overflow-hidden px-4 py-8">
      <FloatingHearts />
      <Sparkles />
      
      <div className="max-w-4xl w-full z-10">
        {/* Header */}
        <div className="text-center mb-12 fade-in-up">
          <span className="text-5xl mb-4 block animate-gentle-bounce">💝</span>
          <h1 className="text-4xl md:text-6xl font-cursive text-gradient mb-4">
            Pick Your First Surprise
          </h1>
          <p className="text-lg text-muted-foreground font-body">
            Each gift is made with love, just for you ♡
          </p>
        </div>

        {/* Gift Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gifts.map((gift, index) => (
            <div key={gift.path} className="fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
              <GiftCard
                emoji={gift.emoji}
                title={gift.title}
                description={gift.description}
                onClick={() => navigate(gift.path)}
                delay={index * 100}
              />
            </div>
          ))}
        </div>

        {/* Decorative ribbon */}
        <div className="text-center mt-12 opacity-50">
          <span className="text-3xl">🎀</span>
          <span className="text-xl mx-2">─────</span>
          <span className="text-2xl">♡</span>
          <span className="text-xl mx-2">─────</span>
          <span className="text-3xl">🎀</span>
        </div>
      </div>
    </div>
  );
};

export default GiftMenu;
