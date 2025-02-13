//src\app\page.tsx

import NavigationBar from "@/components/NavigationBar";
import Link from "next/link";



export default function Home() {
  return (
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <h1>bienvenido</h1>
      <button>
        <Link href={"/home"}>
          ¡Vamos!
        </Link>
      </button>
      </main>
  );
}
