import { useState, type ReactNode } from "react";
import { PhotoModalContext, type Photo } from "./PhotoModalContext";

export function PhotoModalProvider({ children }: { children: ReactNode }) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const openPhoto = (photo: Photo) => {
    setIsClosing(false);
    setSelectedPhoto(photo);
  };

  const closePhoto = () => {
    setIsClosing(true);
    window.setTimeout(() => {
      setSelectedPhoto(null);
      setIsClosing(false);
    }, 220);
  };

  return (
    <PhotoModalContext.Provider value={{ selectedPhoto, isClosing, openPhoto, closePhoto }}>
      {children}
    </PhotoModalContext.Provider>
  );
}