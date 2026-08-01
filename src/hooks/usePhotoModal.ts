import { useContext } from "react";
import { PhotoModalContext } from "../components/PhotoModalContext";

export function usePhotoModal() {
  const ctx = useContext(PhotoModalContext);
  if (!ctx) throw new Error("usePhotoModal must be used within PhotoModalProvider");
  return ctx;
}