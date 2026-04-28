"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center text-white bg-[url('/images/hero/hero.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          仕事帰りに、ほっと一息
        </h1>

        <p className="mb-6 text-lg md:text-xl">
          落ち着いた和空間で、炭火料理とお酒を。
        </p>

        <Button
          onClick={() => router.push("/reservation")}
          className="bg-green-700 hover:bg-green-800 transition px-8 py-3 rounded-lg text-lg"
        >
          予約する
        </Button>
      </div>
    </section>
  );
}
