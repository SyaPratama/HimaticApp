"use client"

import { Button } from "@/components/ui/button";
import { ArrowRight, Palette, Laptop } from "lucide-react";
import { ReactElement } from "react";

const cards = [
  {
    id: "uiux" as const,
    icon: <Palette className="w-8 h-8 text-mono-300" />,
    iconBg: "bg-mono-600/25",
    title: "UI/UX Design",
    subtitle: "Desain antarmuka yang indah dan fungsional",
    tags: [
      { label: "Figma", cls: "bg-mono-600/25 text-mono-300" },
      { label: "User Research", cls: "bg-mono-600/25 text-mono-300" },
      { label: "Prototyping", cls: "bg-mono-600/25 text-mono-300" },
      { label: "Usability", cls: "bg-mono-600/25 text-mono-300" },
    ],
    meta: [
      { label: "Tim", value: "2-3 Orang" },
      { label: "Durasi", value: "72 Jam" },
      { label: "Hadiah", value: "Rp 10 jt" },
    ],
    hoverBorder: "hover:border-mono-600",
    hoverBg: "hover:bg-mono-700/10",
    btnCls: "bg-mono-600/25 text-mono-300 border border-mono-500 hover:bg-mono-500 hover:text-mono-100",
  },

  {
    id: "cp" as const,
    icon: <Laptop className="w-8 h-8 text-mono-300" />,
    iconBg: "bg-mono-600/25",
    title: "Competitive Programming",
    subtitle: "Algoritma, logika, dan problem solving",
    tags: [
      { label: "C++", cls: "bg-mono-600/25 text-mono-300" },
      { label: "Algorithm", cls: "bg-mono-600/25 text-mono-300" },
      { label: "Data Structure", cls: "bg-mono-600/25 text-mono-300" },
      { label: "ICPC Style", cls: "bg-mono-600/25 text-mono-300" },
    ],
    meta: [
      { label: "Tim", value: "3 Orang" },
      { label: "Durasi", value: "5 Jam" },
      { label: "Hadiah", value: "Rp 10 jt" },
    ],
    hoverBorder: "hover:border-mono-600",
    hoverBg: "hover:bg-mono-700/10",
    btnCls: "bg-mono-600/25 text-mono-300 border border-mono-500 hover:bg-mono-500 hover:text-mono-100",
  },

];

const CompetitionsSection = (): ReactElement => {
  return (
    <section className="py-24 px-[5%] bg-mono-800">
      <div className="text-center mb-16">
        <span className="inline-block bg-mono-500/25 border border-mono-500 text-mono-500 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-4">
          Categories
        </span>
        <h2 className="font-extrabold text-mono-100 text-4xl tracking-tight mb-3">
          Kategori Kompetisi
        </h2>
        <p className="text-mono-300 max-w-md mx-auto leading-relaxed">
          Dua kategori bergengsi menanti kamu. Pilih bidangmu, buktikan kemampuanmu.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1100px] mx-auto">
        {cards.map((c) => (
          <div
            key={c.id}
            className={`bg-mono-800 border border-mono-700 rounded-2xl p-8 transition-all duration-300 cursor-pointer hover:-translate-y-1 ${c.hoverBorder} ${c.hoverBg}`}
          >
            <div className={`w-14 h-14 ${c.iconBg} rounded-xl flex items-center justify-center text-2xl mb-6`}>
              {c.icon}
            </div>
            <h3 className="font-extrabold text-mono-100 text-xl mb-1">{c.title}</h3>
            <p className="text-xs text-mono-300 mb-5">{c.subtitle}</p>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {c.tags.map((t) => (
                <span key={t.label} className={`px-3 py-1 rounded-full text-xs font-semibold ${t.cls}`}>
                  {t.label}
                </span>
              ))}
            </div>
            <div className="flex justify-between pt-4 border-t border-mono-700 mb-5">
              {c.meta.map((m) => (
                <div key={m.label}>
                  <span className="block text-xs text-mono-300 mb-0.5">{m.label}</span>
                  <span className="text-sm font-semibold text-white">{m.value}</span>
                </div>
              ))}
            </div>
            <Button
              className={`w-full inline-flex py-6 rounded-xl text-sm font-semibold transition-all ${c.btnCls}`}>
              Lihat Detail 
              <ArrowRight className="w-4 h-4 ml-2"/>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CompetitionsSection