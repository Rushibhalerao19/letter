import BubbleWrap from "./BubbleWrap";
import PhotoGallery from "./PhotoGallery";

interface LetterContentProps {
  showBubbleWrap?: boolean;
  bubbleWrapDone?: boolean;
  setBubbleWrapDone?: (val: boolean) => void;
}

export default function LetterContent({
  showBubbleWrap = false,
  bubbleWrapDone = false,
  setBubbleWrapDone,
}: LetterContentProps) {
  const message = [
    "I'm writing this just to tell you how grateful I am to have you in my life. Thank you for being someone who is always supportive and understanding. Your presence doesn't just color my days, but also gives me the spirit to keep becoming the best version of myself.",
    "I really appreciate every little moment we've shared together — from our fun discussions, the laughter we've shared, to your support that never falters even when I'm busy. You have an amazing way of making everything feel easier and more meaningful.",
    "Thank you for choosing to walk beside me. I'm truly lucky to have known you this long and to have built so many stories with you. Keep being the great, loving Lisa that I know.",
  ];

  return (
    <div
      className="jb-letter relative flex flex-col items-center bg-white rounded-[14px] p-10 shadow-[0_18px_50px_-10px_rgba(232,51,109,0.15)]"
      style={{
        maxWidth: "560px",
        margin: "0 auto",
      }}
    >
      <div
        className="jb-letter-lines absolute -left-10 top-0 bottom-0 w-px"
        style={{
          background:
            "repeating-linear-gradient(to bottom, #e8336d, #e8336d 2px, transparent 2px, transparent 10px)",
          opacity: 0.1,
        }}
      />

      <div className="jb-letter-lines absolute -right-10 top-0 bottom-0 w-px">
        <div
          style={{
            background:
              "repeating-linear-gradient(to bottom, #e8336d, #e8336d 2px, transparent 2px, transparent 10px)",
            opacity: 0.1,
            height: "100%",
          }}
        />
      </div>

      <div className="relative z-10 w-full">
        {message.map((paragraph, index) => (
          <p
            key={index}
            className="mb-6 text-center text-[#1a1225]/80 text-lg leading-relaxed font-serif italic"
          >
            {paragraph}
          </p>
        ))}

        <div className="mt-8 text-center">
          <p className="font-serif italic text-[#e8336d]">
            With all my love,
            <br />
            Rushikesh
          </p>
        </div>
      </div>

      {showBubbleWrap && !bubbleWrapDone && (
        <div className="mt-8 w-full">
          <BubbleWrap
            onComplete={() => {
              if (setBubbleWrapDone) setBubbleWrapDone(true);
            }}
          />
        </div>
      )}

      {bubbleWrapDone && (
        <div className="jb-gallery-in">
          <PhotoGallery />
        </div>
      )}
    </div>
  );
}
