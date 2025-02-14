//src\app\page.tsx
import StartCard from "@/components/StartCard/StartCard"
import 'animate.css';

export default function Home() {
  return (
      <main className="flex h-screen justify-center items-center sm:items-center">
        <StartCard/>
      </main>
  );
}
