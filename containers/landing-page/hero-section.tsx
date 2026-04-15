"use client"

import { Button } from "@/components/ui/button";
import GradientBackground from "@/components/ui/gradient-background";
import GridBackground from "@/components/ui/grid-background";
import { ReactElement } from "react";

const HeroSection = (): ReactElement => {
  return (
    <section className="min-h-screen bg-mono-900 flex items-center justify-center text-center px-[5%] pt-[100px] pb-[60px] relative overflow-hidden">
      {/* Background effects */}
        <GradientBackground/>
        <GridBackground/>
      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-mono-500/25 border border-mono-500 px-4 py-1.5 rounded-full text-xs text-mono-500 font-semibold tracking-widest mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-mono-500 animate-pulse" />
          OPEN REGISTRATION 2026
        </div>

        {/* Heading */}
        <h1 className=" font-extrabold leading-none tracking-tighter mb-6" style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}>
          <div className="text-mono-100">Buktikan</div>
          <div className="bg-mono-400 bg-clip-text text-transparent">
            Kemampuanmu
          </div>
        </h1>

        <p className="text-mono-500 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
          Kompetisi bergengsi di bidang UI/UX Design dan Competitive Programming
          untuk mahasiswa seluruh Indonesia. Tunjukkan talentamu, raih prestasi terbaik.
        </p>

        {/* CTAs */}
        <div className="flex gap-4 justify-center flex-wrap">
          <Button
            className="bg-mono-600 text-mono-100 px-8 py-7 rounded-xl font-semibold text-base hover:bg-mono-500 hover:-translate-y-0.5 transition-all"
          >
            Daftar Sekarang
          </Button>
          <Button
            className="bg-transparent text-mono-100 px-8 py-7 rounded-xl font-semibold text-base border border-mono-700 hover:border-mono-600 hover:text-mono-400 duration-300 transition-all"
          >
            Pelajari Lebih →
          </Button>
        </div>

        {/* Stats */}
        <div className="flex gap-12 justify-center mt-16 pt-12 border-t border-mono-700">
          {[
            { num: "200+", label: "Peserta Terdaftar" },
            { num: "2", label: "Kategori Lomba" },
            { num: "Rp 5jt", label: "Total Hadiah" },
            { num: "20+", label: "Universitas" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className=" font-extrabold text-[2rem] text-mono-200">{s.num}</div>
              <div className="text-xs text-mono-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection