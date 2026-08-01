import { createContext } from "react";

export interface Photo {
  id: number;
  src: string;
  alt: string;
}

export interface PhotoModalContextValue {
  selectedPhoto: Photo | null;
  isClosing: boolean;
  openPhoto: (photo: Photo) => void;
  closePhoto: () => void;
}

export const PhotoModalContext = createContext<PhotoModalContextValue | null>(null);