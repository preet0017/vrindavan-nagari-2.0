import Navbar from "../components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main
        className="
        relative
        h-screen
        overflow-hidden
        bg-[#050608]
        "
      >

        {/* Hero Overlay */}

        <div
          className="
          absolute
          inset-0
          bg-gradient-to-b
          from-[#0f1b32]/40
          via-[#050608]/10
          to-[#050608]
          "
        />

      </main>
    </>
  );
}