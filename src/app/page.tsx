"use client";

import { CheeseView } from "@/components/CheeseView";

export default function Home() {
  return (
    <main>
      <div className="flex flex-row justify-center min-h-screen py-20">
        <CheeseView />
      </div>
    </main>
  );
}
