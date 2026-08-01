import { useEffect, useState } from "react";

interface TrailHeart {
  id: number;
  x: number;
  y: number;
}

export default function CursorTrail() {
  const [hearts, setHearts] = useState<TrailHeart[]>([]);
  const [trailEnabled, setTrailEnabled] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!trailEnabled) return;

      const newHeart: TrailHeart = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };

      setHearts((prev) => {
        const updated = [...prev, newHeart];
        if (updated.length > 20) {
          return updated.slice(updated.length - 20);
        }
        return updated;
      });
    };

    const handleMouseEnter = () => setTrailEnabled(true);
    const handleMouseLeave = () => setTrailEnabled(false);

    document.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [trailEnabled]);

  return (
    <>
      {hearts.map((heart) => (
        <div
          key={heart.id}
          aria-hidden="true"
          className="fixed pointer-events-none z-100 text-pink-500"
          style={{
            left: heart.x + "px",
            top: heart.y + "px",
            fontSize: "14px",
            animation: "jbTrailUp 1.2s ease-in-out forwards",
          }}
        >
          ♥
        </div>
      ))}
    </>
  );
}
