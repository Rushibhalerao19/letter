import { useState, useEffect } from "react";
import LetterContent from "./LetterContent";

export default function JustBecauseLetter() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBubbleWrap, setShowBubbleWrap] = useState(false);
  const [bubbleWrapDone, setBubbleWrapDone] = useState(false);

  const toggleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setShowBubbleWrap(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <div className="relative flex flex-col items-center w-full">
      {!isOpen && <div className="relative w-full max-w-140 aspect-5/3 perspective-[1400px] mb-8">
        <div
          role="button"
          tabIndex={0}
          aria-label="Open letter"
          onClick={toggleOpen}
          className="relative w-full h-full"
          style={{ cursor: "pointer" }}
        >
          <div
            className="absolute inset-0 rounded-[14px] overflow-hidden"
            style={{
              background:
                "linear-gradient(180deg, #ffeef3 0%, #ffd9e4 100%)",
              boxShadow:
                "0 18px 50px -10px rgba(232,51,109,0.35), 0 6px 14px rgba(26,18,37,0.08)",
            }}
          >
            <div
              className="absolute inset-0 opacity-[0.85]"
              style={{
                background:
                  "linear-gradient(45deg, #ffc6d6 0%, #ffc6d6 50%, transparent 50.5%), linear-gradient(-45deg, #ffc6d6 0%, #ffc6d6 50%, transparent 50.5%)",
                backgroundSize: "50% 100%, 50% 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left bottom, right bottom",
              }}
            />

            <div
              className="jb-stamp absolute rounded-sm flex items-center justify-center z-30"
              style={{
                top: "18px",
                right: "18px",
                width: "64px",
                height: "78px",
                background: "white",
                border: "2px dashed rgba(232,51,109,0.25)",
                color: "#e8336d",
                fontSize: "30px",
                lineHeight: 1,
                transform: "rotate(6deg)",
                boxShadow:
                  "inset 0 -2px 0 rgba(0,0,0,.18), inset 0 1px 0 rgba(255,255,255,.35), 0 2px 6px rgba(232,51,109,.35)",
              }}
            >
              ♥
            </div>

            <div
              className="absolute z-30"
              style={{ left: "28px", bottom: "24px", right: "110px" }}
            >
              <div
                className="text-[11px] font-bold"
                style={{
                  letterSpacing: "0.2em",
                  color: "#e8336d",
                  textTransform: "uppercase",
                }}
              >
                For
              </div>
              <div
                className="jb-envelope-name font-serif text-[30px] leading-none mt-1"
                style={{ color: "#1a1225" }}
              >
                Mishthi <em className="italic" style={{ color: "#e8336d" }}>dearly</em>
              </div>
            </div>
          </div>

          <div
            className="absolute top-0 left-0 right-0 h-[60%] z-40"
            style={{
              background: "linear-gradient(180deg, #ffc6d6 0%, #ff9fb8 100%)",
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              transformOrigin: "top center",
              boxShadow: "0 4px 10px rgba(0,0,0,0.06)",
              transform: isOpen ? "rotateX(-100deg)" : "rotateX(0deg)",
              opacity: isOpen ? "0.2" : "1",
              transition:
                "transform 800ms cubic-bezier(0.22, 1, 0.36, 1), opacity 400ms ease",
            }}
          />

          <div
            className="absolute left-1/2 z-50 flex items-center justify-center font-serif italic text-[26px]"
            style={{
              bottom: "calc(60% - 30px)",
              left: "50%",
              width: "60px",
              height: "60px",
              borderRadius: "999px",
              background: "#e8336d",
              color: "white",
              transform: isOpen
                ? "translateX(-50%) translateY(-50px) scale(0.8)"
                : "translateX(-50%)",
              boxShadow:
                "0 8px 24px rgba(232,51,109,.45), inset 0 0 0 3px rgba(255,255,255,.3)",
              opacity: isOpen ? "0" : "1",
              transition:
                "transform 500ms cubic-bezier(0.22, 1, 0.36, 1), opacity 400ms ease",
            }}
          >
            M
          </div>

          <div
            className="absolute left-1/2 -translate-x-1/2 text-[12px] text-gray-400 uppercase flex items-center gap-2 whitespace-nowrap"
            style={{
              bottom: "-34px",
              opacity: isOpen ? "0" : "1",
              transition: "opacity 400ms ease",
            }}
          >
            ↓ Tap to open ↓
          </div>
        </div>
      </div>}

      {isOpen && (
        <div
          className="jb-letter-wrapper w-full"
          style={{
            animation: "jbRise 600ms ease 300ms both",
            maxWidth: "560px",
          }}
        >
          <LetterContent
            showBubbleWrap={showBubbleWrap}
            bubbleWrapDone={bubbleWrapDone}
            setBubbleWrapDone={setBubbleWrapDone}
          />
        </div>
      )}
    </div>
  );
}
