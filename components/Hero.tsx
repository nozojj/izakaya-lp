"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden text-white bg-[url('/images/hero/hero.jpg')] bg-cover bg-center">
      
      <div className="absolute inset-0 bg-black/55" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />

      <div className="relative z-10 text-center px-4 max-w-3xl">
        <p className="mb-3 text-sm md:text-base tracking-[0.3em] text-white/80">
          SAKABA KOMOREBI
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight drop-shadow-lg">
          仕事帰りに、
          <br className="sm:hidden" />
          ほっと一息
        </h1>

        <p className="mb-8 text-base md:text-xl leading-relaxed text-white/90">
          落ち着いた和空間で、炭火料理とお酒を。
        </p>

        <Button
          onClick={() => router.push("/reservation")}
          className="bg-green-700 hover:bg-green-800 transition px-8 py-6 rounded-full text-base md:text-lg font-semibold shadow-lg"
        >
          予約する
        </Button>
      </div>
    </section>
  );
}