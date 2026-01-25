import { useNavigate } from "react-router-dom";
import FloatingHearts from "@/components/FloatingHearts";
import LolitaButton from "@/components/LolitaButton";

import gf1 from "@/assets/gf_1.jpg";
import gf2 from "@/assets/gf_2.jpg";
import gf3 from "@/assets/gf_3.jpg";
import gf4 from "@/assets/gf_4.jpg";
import gf5 from "@/assets/gf_5.jpg";
import gf6 from "@/assets/gf_6.jpg";

const photos = [gf1, gf2, gf3, gf4, gf5, gf6];

interface PolaroidProps {
  src: string;
  rotation: number;
  className?: string;
}

const Polaroid = ({ src, rotation, className = "" }: PolaroidProps) => (
  <div 
    className={`polaroid ${className}`}
    style={{ transform: `rotate(${rotation}deg)` }}
  >
    <img 
      src={src} 
      alt="My beautiful girl" 
      className="w-32 h-40 md:w-40 md:h-48 object-cover rounded-sm"
    />
    <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
      <span className="text-rose text-sm">♡</span>
    </div>
  </div>
);

const AboutYou = () => {
  const navigate = useNavigate();

  const rotations = [-5, 3, -2, 4, -3, 2];

  return (
    <div className="min-h-screen bg-dreamy relative overflow-hidden">
      <FloatingHearts />
      
      {/* Lace pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 20px,
            hsl(var(--primary) / 0.3) 20px,
            hsl(var(--primary) / 0.3) 21px
          )`
        }}
      />

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 fade-in-up">
          <span className="text-4xl mb-2 block">🎀</span>
          <h1 className="text-4xl md:text-5xl font-cursive text-gradient">
            About You
          </h1>
        </div>

        {/* Photo Collage Top */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8">
          {photos.slice(0, 3).map((photo, i) => (
            <div key={i} className="fade-in-up" style={{ animationDelay: `${i * 200}ms` }}>
              <Polaroid src={photo} rotation={rotations[i]} />
            </div>
          ))}
        </div>

        {/* Love Letter */}
        <div className="max-w-2xl mx-auto mb-8 fade-in-up" style={{ animationDelay: "400ms" }}>
          <div className="lolita-card relative">
            {/* Decorative tape */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-lavender/60 transform rotate-2 rounded-sm" />
            
            <div className="pt-4 text-center">
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed text-left md:text-center px-2 md:px-8">
                <p>
                  When I look at you, I genuinely forget about everything else for a second. The way your eyes pull me in, the softness in your expressions, the way you look effortlessly adorable without even trying — it all completely mesmerizes me. 💗
                </p>
                
                <p>
                  You have this beautiful, calm nature around you that makes me feel so comfortable with you. I feel at home. And I always catch myself staring at the videos you send me or replaying the VMs you send me way too many times.
                </p>
                
                <p>
                  Everything about you feels so warm and gentle, like you're made of this bright light and softness. You look like the stars up in the skies.
                </p>
                
                <p>
                  You don't realize how truly beautiful you are, and I hope one day I could help you see yourself from my very own eyes, so you realize what I see everyday.
                </p>

                <p>
                  Loving you feels easy and natural. For once, I don't have to force that feeling in order to feel loved. I'll never get tired of admiring you, sinta 💕
                </p>
              </div>

              <div className="mt-8 text-2xl font-cursive text-rose">
                Forever yours, with all my heart 💕
              </div>
            </div>
          </div>
        </div>

        {/* Photo Collage Bottom */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
          {photos.slice(3, 6).map((photo, i) => (
            <div key={i + 3} className="fade-in-up" style={{ animationDelay: `${(i + 5) * 200}ms` }}>
              <Polaroid src={photo} rotation={rotations[i + 3]} />
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="text-center fade-in-up" style={{ animationDelay: "1000ms" }}>
          <LolitaButton variant="outline" onClick={() => navigate("/gifts")}>
            ← Back to Gifts
          </LolitaButton>
        </div>

        {/* Decorative bows */}
        <div className="flex justify-center gap-8 mt-8 opacity-50">
          <span className="text-2xl">🎀</span>
          <span className="text-2xl">♡</span>
          <span className="text-2xl">🎀</span>
        </div>
      </div>
    </div>
  );
};

export default AboutYou;
