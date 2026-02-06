import HeroSection from "@/components/HeroSection";
import CursorHearts from "@/components/CursorHearts";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  return (
    <main className="min-h-screen bg-rose-50/50">
      <CursorHearts />
      <HeroSection />
      <MusicPlayer />
    </main>
  );
}
