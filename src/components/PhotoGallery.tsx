  import { usePhotoModal } from "../hooks/usePhotoModal";


  interface Photo {
    id: number;
    src: string;
    alt: string;
  }

  const photos: Photo[] = [
    {
      id: 1,
      src: "./images/img1.jpg",
      alt: "A beautiful photo of you",
    },
    {
      id: 2,
      src: "./images/img2.jpg",
      alt: "Cute smile of you",
    },
    {
      id: 3,
      src: "./images/img3.jpg",
      alt: "A lovely moment",
    },
    {
      id: 4,
      src: "./images/img4.jpg",
      alt: "My flower holding a flower",
    },
    {
      id: 5,
      src: "./images/img1.jpg",
      alt: "Repeating coz i don't have enough photos of you 🥺",
    },
    {
      id: 6,
      src: "./images/img2.jpg",
      alt: "Repeating coz i don't have enough photos of you 🥺",
    },
  ];

  export default function PhotoGallery() {
    const { openPhoto } = usePhotoModal();

    return (
      <div className="mt-10">
        <h3 className="text-center text-[#1a1225]/80 mb-4 font-serif text-lg">
          Some of our favorite moments 📸
        </h3>
        <div className="grid grid-cols-3 gap-3 p-4">
          {photos.map((photo) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => openPhoto(photo)}
              className="relative group rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              style={{
                aspectRatio: "1/1",
                border: "2px solid rgba(232, 51, 109, 0.1)",
              }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                width={400}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>
      </div>
    );
  }