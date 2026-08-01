import Background from "./components/Background"
import CursorTrail from "./components/CursorTrail"
import JustBecauseLetter from "./components/JustBecauseLetter"
import WithLoveBadge from "./components/WithLoveBadge"
import PhotoModal from "./components/PhotoModal"
import { PhotoModalProvider } from "./components/PhotoModalProvider"


const App = () => {
  return (
    <PhotoModalProvider>
      <div className="min-h-screen">
        <Background />
        <CursorTrail />

        <main
          style={{
            position: "relative",
            zIndex: 2,
            minHeight: "100vh",
            display: "grid",
            placeItems: "center",
            padding: "48px 20px 100px",
            fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
            color: "#1a1225",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "720px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "28px",
            }}
          >
            <WithLoveBadge />
            <JustBecauseLetter />
          </div>
        </main>

        <PhotoModal />
      </div>
    </PhotoModalProvider>
  )
}

export default App