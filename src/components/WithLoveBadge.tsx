export default function WithLoveBadge() {
  return (
    <div
      role="status"
      className="flex items-center gap-2 px-6 py-2.5 bg-white border border-white/20 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.04)] text-sm"
    >
      <span
        aria-hidden="true"
        className="w-7 h-7 rounded-full flex items-center justify-center bg-linear-to-br from-[#ff7a9e] to-[#c81f56]"
        style={{
          transform: "rotate(-8deg)",
          boxShadow:
            "inset 0 -2px 0 rgba(0,0,0,.18), inset 0 1px 0 rgba(255,255,255,.35), 0 2px 6px rgba(232,51,109,.35)",
        }}
      >
        ♥
      </span>
      <span className="font-serif italic text-[#1a1225] text-base">With Love</span>
    </div>
  );
}
