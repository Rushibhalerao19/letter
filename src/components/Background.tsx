import { useState } from "react";

interface Heart {
  id: number;
  size: number;
  left: number;
  top: number;
  delay: number;
  duration: number;
  opacity: number;
  tx: number;
  ty: number;
  rot: number;
}

export default function Background() {
  const generateHearts = (): Heart[] => {
    const newHearts: Heart[] = [];
    for (let i = 0; i < 30; i++) {
      const size = Math.random() * 40 + 14;
      newHearts.push({
        id: i,
        size,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 10,
        duration: Math.random() * 3 + 7,
        opacity: Math.random() * 0.1 + 0.08,
        tx: (Math.random() - 0.5) * 40,
        ty: -(Math.random() * 30 + 10),
        rot: (Math.random() - 0.5) * 50,
      });
    }
    return newHearts;
  };

  const [hearts] = useState<Heart[]>(generateHearts);

  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden"
      style={{
        background:
          "radial-gradient(1200px 600px at 80% -10%, #ffe2ec 0%, transparent 60%), radial-gradient(900px 500px at -10% 110%, #f3e8ff 0%, transparent 60%), linear-gradient(180deg, #fff9fa 0%, #fffdfd 50%, #fdf0f5 100%)",
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full opacity-35"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="jb-dots" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#e8336d" fillOpacity="0.15" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#jb-dots)" />
      </svg>

      <div className="absolute w-[320px] h-[320px] rounded-full filter blur-[40px] opacity-55 bg-[#ffd5e0] top-[10%] left-[-80px]"></div>
      <div className="absolute w-[260px] h-[260px] rounded-full filter blur-[40px] opacity-55 bg-[#e9d8fd] top-[60%] right-[-60px]"></div>
      <div className="absolute w-[200px] h-[200px] rounded-full filter blur-[40px] opacity-55 bg-[#ffe9b8] top-[75%] left-[25%]"></div>

      {hearts.map((heart) => {
        const style = {
          color: `rgba(232, 51, 109, ${heart.opacity})`,
          fontSize: heart.size + "px",
          left: heart.left + "vw",
          top: heart.top + "vh",
          animation: `jbFloat ${heart.duration}s ease-in-out infinite`,
          animationDelay: heart.delay + "s",
          "--rot": heart.rot + "deg",
          "--tx": heart.tx + "px",
          "--ty": heart.ty + "px",
        } as React.CSSProperties;
        return (
          <span
            key={heart.id}
            aria-hidden="true"
            className="absolute pointer-events-none select-none"
            style={style}
          >
            ♥
          </span>
        );
      })}
    </div>
  );
}
