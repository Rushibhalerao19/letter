import { useEffect } from "react";
import { usePhotoModal } from "../hooks/usePhotoModal";

export default function PhotoModal() {
  const { selectedPhoto, isClosing, closePhoto } = usePhotoModal();

  useEffect(() => {
    if (!selectedPhoto) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePhoto();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPhoto]);

  if (!selectedPhoto) return null;

  return (
    <div
      className={`jb-lightbox ${isClosing ? "jb-lightbox-out" : "jb-lightbox-in"}`}
      onClick={closePhoto}
    >
      <button
        type="button"
        onClick={closePhoto}
        className="jb-lightbox-close"
        aria-label="Close"
      >
        ×
      </button>

      <img
        src={selectedPhoto.src}
        alt={selectedPhoto.alt}
        className={`jb-lightbox-img ${isClosing ? "jb-modal-content-out" : "jb-modal-content-in"}`}
        onClick={(e) => e.stopPropagation()}
      />

      <div className="jb-lightbox-caption">{selectedPhoto.alt}</div>
    </div>
  );
}