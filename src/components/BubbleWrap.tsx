import { useState } from "react";

interface BubbleWrapProps {
  onComplete?: () => void;
}

export default function BubbleWrap({ onComplete }: BubbleWrapProps) {
  const [popped, setPopped] = useState<Set<number>>(new Set());
  const [isExiting, setIsExiting] = useState(false);

  const totalBubbles = 20;

  const handlePop = (id: number) => {
    setPopped((prev) => {
      const next = new Set(prev);
      next.add(id);

      if (next.size === totalBubbles) {
        // let them read the "every bubble holds a wish" message first
        setTimeout(() => {
          setIsExiting(true);
          // then wait for the fade-out animation to finish before swapping in the gallery
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 600);
        }, 2200);
      }

      return next;
    });
  };

  return (
    <div className={isExiting ? "jb-bw-exit" : ""}>
      <div className="mt-6 mb-2 text-center text-[#1a1225]/80 text-sm font-serif italic">
        <p>!Tap on the bubble to pop them!</p>
      </div>
      <div className="flex flex-col items-center gap-6">
        <div
          className="jb-bw-grid grid grid-cols-5 gap-6 p-6 bg-white/50 rounded-xl"
          style={{ maxWidth: "520px" }}
        >
          {Array.from({ length: totalBubbles }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => handlePop(i)}
              disabled={popped.has(i)}
              className={`relative flex items-center justify-center rounded-full transition-all ${
                popped.has(i) ? "jb-bubble-popped" : "hover:scale-105"
              }`}
              style={{
                width: "60px",
                height: "60px",
                background: popped.has(i)
                  ? "transparent"
                  : "radial-gradient(circle at 30% 30%, #ff7a9e, #c81f56)",
                boxShadow: popped.has(i)
                  ? "none"
                  : "inset 0 -2px 0 rgba(0,0,0,.18), inset 0 1px 0 rgba(255,255,255,.35), 0 2px 6px rgba(232,51,109,.4)",
                cursor: popped.has(i) ? "default" : "pointer",
              }}
              aria-label={`Pop bubble ${i + 1}`}
            >
              {popped.has(i) && (
                <span
                  className="flex items-center justify-center rounded-full border"
                  style={{
                    width: "60px",
                    height: "60px",
                    fontSize: "12px",
                    color: "#e8336d",
                    animation: "jbNoteIn 280ms ease 120ms both",
                  }}
                >
                  Love ♥
                </span>
              )}
            </button>
          ))}
        </div>

        {popped.size === totalBubbles && (
          <div className="text-center font-serif italic text-[#e8336d]">
            Every bubble holds a wish — and every pop, a memory of us. 💖
            <div className="mt-2 text-sm text-pink-500">✨ All popped! ✨</div>
          </div>
        )}
      </div>
    </div>
  );
}