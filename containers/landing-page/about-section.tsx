"use client"

import { ReactElement } from "react";
import { Globe, PuzzleIcon, TrophyIcon } from "lucide-react";

const features = [
  {
    icon: <PuzzleIcon className="text-mono-100 w-1/2"/>,
    bg: "bg-mono-600",
    title: "Kompetisi Bergengsi",
    desc: "Dinilai oleh praktisi industri dan pakar akademik terkemuka di Indonesia.",
  },
  {
    icon: <TrophyIcon className="text-mono-100 w-1/2"/>,
    bg: "bg-mono-600",
    title: "Hadiah Menarik",
    desc: "Total hadiah hingga Rp 30 juta beserta sertifikat dan kesempatan magang.",
  },
  {
    icon: <Globe className="text-mono-100 w-1/2"/>  ,
    bg: "bg-mono-600",
    title: "Terbuka Nasional",
    desc: "Untuk mahasiswa aktif D3/S1 dari seluruh perguruan tinggi di Indonesia.",
  },
];

const prizes = [
  { medal: <TrophyIcon className="inline-block w-6 h-6 text-yellow-400" />, amount: "Rp 5jt", place: "Juara 1" },
  { medal: <TrophyIcon className="inline-block w-6 h-6 text-slate-300" />, amount: "Rp 3jt", place: "Juara 2" },
  { medal: <TrophyIcon className="inline-block w-6 h-6 text-amber-500" />, amount: "Rp 2jt", place: "Juara 3" },
];

const AboutSection = (): ReactElement => {
  return (
    <section id="about" className="py-24 px-[5%] bg-mono-900">
      <div className="grid grid-cols-2 gap-16 items-center max-w-[1100px] mx-auto">
        {/* Left */}
        <div>
          <span className="inline-block bg-mono-500/25 border border-mono-500 text-mono-500  px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-4">
            About
          </span>
          <h2 className="font-extrabold text-mono-100 text-4xl tracking-tight mb-4">
            Apasih Himatic?
          </h2>
          <p className="text-mono-300 leading-relaxed mb-6">
            Himatic adalah kompetisi teknologi tahunan yang dirancang untuk mengasah
            kemampuan mahasiswa dalam dunia desain dan pemrograman. Kami percaya bahwa
            inovasi dimulai dari kompetisi yang sehat.
          </p>
          <div className="flex flex-col gap-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex items-start gap-4 p-4 bg-mono-800 border border-mono-700 rounded-xl hover:border-mono-700/50 transition-colors"
              >
                <div className={`w-10 h-10 ${f.bg} rounded-lg flex items-center justify-center text-xl shrink-0`}>
                  {f.icon}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-mono-100 mb-1">{f.title}</h4>
                  <p className="text-xs text-mono-400 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Card */}
        <div>
          <div className="bg-mono-800 border border-mono-700 rounded-2xl p-8 text-center">
            <h3 className="font-extrabold text-mono-100 text-2xl mb-2">Himatic 2026</h3>
            <p className="text-mono-300 text-sm leading-relaxed mb-6">
              Mempertemukan talenta terbaik dalam satu panggung kompetisi yang adil dan transparan.
            </p>
            <div className="flex gap-2 justify-center flex-wrap mb-6">
              {[
                { label: "UI/UX Design", cls: "bg-mono-600 text-mono-300 border border-mono-500" },
                { label: "Competitive Programming", cls: "bg-mono-600 text-mono-300 border border-mono-500" },
                { label: "Terbuka Nasional", cls: "bg-mono-600 text-mono-300 border border-mono-500" },
              ].map((b) => (
                <span key={b.label} className={`px-4 py-1 rounded-full text-xs font-semibold ${b.cls}`}>
                  {b.label}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-3">
              {prizes.map((p) => (
                <div key={p.place} className="bg-mono-700 border border-mono-600/50 rounded-xl p-3 text-center">
                      <div className="text-sm font-bold text-mono-200">{p.amount}</div>
                  <div className="text-xs text-mono-400">{p.place}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection