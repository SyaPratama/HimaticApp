"use client"

import { use } from "react";
import { Palette, Laptop, Trophy } from "lucide-react";
type CompType = "uiux" | "cp";

interface Props {
  params: Promise<{ slug: CompType }>;
}

const data = {
  uiux: {
    icon: <Palette className="w-6 h-6" />,
    iconBg: "bg-mono-600/25",
    title: "UI/UX Design",
    desc: "Wujudkan kreativitasmu dalam desain antarmuka yang indah, intuitif, dan berpusat pada pengguna. Tunjukkan bahwa desain yang baik adalah jembatan antara manusia dan teknologi.",
    meta: [
      { label: "Tim", value: "2–3 Orang" },
      { label: "Durasi", value: "72 Jam" },
      { label: "Total Hadiah", value: "Rp 10 Juta" },
      { label: "Kuota", value: "100 Tim" },
    ],
    overview:
      "NexusComp UI/UX Design mengajak peserta untuk merancang solusi digital yang memecahkan permasalahan nyata. Tema kompetisi akan diumumkan saat Technical Meeting. Peserta akan membuat desain lengkap mulai dari user research, wireframe, hingga prototype interaktif.\n\nKarya terbaik akan dinilai oleh panel juri yang terdiri dari UI/UX designer profesional dari perusahaan teknologi terkemuka di Indonesia.",
    requirements: [
      "Mahasiswa aktif D3/S1 dengan KTM yang masih berlaku",
      "Tim terdiri dari 2-3 orang dari universitas yang sama",
      "Menggunakan tools desain standar industri (Figma, Adobe XD, dsb)",
      "Mengumpulkan file Figma + PDF presentasi + video prototype",
      "Karya merupakan buatan sendiri, bebas dari plagiarisme",
    ],
    stages: [
      {
        num: "01",
        title: "Penyisihan Online",
        desc: "Pengumpulan karya desain berdasarkan tema yang diberikan saat Technical Meeting. Dilakukan secara remote selama 72 jam.",
      },
      {
        num: "02",
        title: "Semifinal",
        desc: "Top 20 tim mempresentasikan karya mereka secara online kepada panel juri. Durasi presentasi 15 menit + sesi tanya jawab.",
      },
      {
        num: "03",
        title: "Grand Final",
        desc: "Top 5 tim bersaing secara offline. Desain akhir dipresentasikan di depan juri dan tamu undangan di acara penutupan.",
      },
    ],
    tags: [
      "Figma",
      "User Research",
      "Prototyping",
      "Usability",
      "Accessibility",
      "Design Thinking",
    ],
    tagCls: "bg-mono-600/25 text-mono-300",
  },
  cp: {
    icon: <Laptop className="w-6 h-6" />,
    iconBg: "bg-mono-600/25",
    title: "Competitive Programming",
    desc: "Uji kemampuan algoritmamu dalam format ICPC yang menantang. Selesaikan sebanyak mungkin soal dalam waktu terbatas bersama tim terbaikmu.",
    meta: [
      { label: "Tim", value: "3 Orang" },
      { label: "Durasi", value: "5 Jam" },
      { label: "Total Hadiah", value: "Rp 10 Juta" },
      { label: "Kuota", value: "80 Tim" },
    ],
    overview:
      "Kategori Competitive Programming menggunakan format ICPC (International Collegiate Programming Contest). Tiga anggota tim bekerja sama menggunakan satu komputer untuk menyelesaikan serangkaian soal algoritmik dalam 5 jam.\n\nSoal-soal dirancang oleh tim problemsetter berpengalaman dan mencakup berbagai topik algoritma dan struktur data tingkat lanjut.",
    requirements: [
      "Mahasiswa aktif D3/S1 dengan KTM yang masih berlaku",
      "Tim terdiri dari tepat 3 orang dari universitas yang sama",
      "Menguasai minimal satu bahasa: C, C++, Java, atau Python",
      "Hadir secara fisik untuk babak final (offline)",
      "Tidak menggunakan sumber eksternal selama kompetisi",
    ],
    stages: [
      {
        num: "01",
        title: "Babak Penyisihan Online",
        desc: "10 soal, dikerjakan secara online selama 3 jam. Tim dengan soal terbanyak dan penalti terendah lolos ke semifinal.",
      },
      {
        num: "02",
        title: "Babak Final Offline",
        desc: "Top 20 tim bersaing dalam format ICPC selama 5 jam menggunakan komputer yang disediakan panitia. 15-20 soal.",
      },
    ],
    tags: [
      "Dynamic Programming",
      "Graph Theory",
      "Data Structures",
      "Greedy",
      "Binary Search",
      "Number Theory",
      "Segment Tree",
      "Combinatorics",
    ],
    tagCls: "bg-mono-600/25 text-mono-300",
  },
};

const prizes = [
  {
    medal: <Trophy className="inline-block w-6 h-6 text-mono-100" />,
    amount: "Rp 1.250.000",
    label: "Juara 1 + Trofi + Sertifikat",
    gold: true,
  },
  {
    medal: <Trophy className="inline-block w-6 h-6 text-mono-300" />,
    amount: "Rp 750.000",
    label: "Juara 2 + Trofi + Sertifikat",
    gold: false,
  },
  {
    medal: <Trophy className="inline-block w-6 h-6 text-mono-300" />,
    amount: "Rp 500.000",
    label: "Juara 3 + Trofi + Sertifikat",
    gold: false,
  },
];

export default function CompetitionDetailPage({ params }: Props) {
  const { slug } = use(params);
  const d = data[slug];

  return (
    <div className="min-h-screen pt-[70px] bg-mono-900">
      {/* Hero */}
      <div className="bg-mono-800 border-b border-mono-700 py-20 px-[5%]">
        <div className="max-w-[900px] mx-auto flex gap-8 items-center">
          <div
            className={`w-20 h-20 ${d.iconBg} text-mono-300 rounded-2xl flex items-center justify-center text-4xl shrink-0`}
          >
            {d.icon}
          </div>
          <div>
            <h1 className="font-extrabold text-white text-4xl mb-2 tracking-tight">
              {d.title}
            </h1>
            <p className="text-mono-300 text-sm leading-relaxed max-w-xl mb-6">
              {d.desc}
            </p>
            <div className="flex gap-8">
              {d.meta.map((m) => (
                <div key={m.label}>
                  <span className="block text-xs text-mono-300 uppercase tracking-wider mb-0.5">
                    {m.label}
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-[900px] mx-auto px-[5%] py-12">
        {/* Overview */}
        <section className="mb-10">
          <h3 className="text-lg font-bold text-white mb-4">
            Tentang Kategori Ini
          </h3>
          {d.overview.split("\n\n").map((p, i) => (
            <p key={i} className="text-mono-300 text-sm leading-relaxed mb-3">
              {p}
            </p>
          ))}
        </section>

        {/* Tags */}
        <section className="mb-10">
          <h3 className="text-lg font-bold text-white mb-4">
            {slug === "cp" ? "Topik yang Diujikan" : "Tools & Skills"}
          </h3>
          <div className="flex flex-wrap gap-2">
            {d.tags.map((t) => (
              <span
                key={t}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold ${d.tagCls}`}
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Requirements */}
        <section className="mb-10">
          <h3 className="text-lg font-bold text-white mb-4">Persyaratan</h3>
          <div className="flex flex-col gap-2">
            {d.requirements.map((r) => (
              <div
                key={r}
                className="flex items-start gap-3 px-4 py-3 bg-mono-800 border border-mono-700 rounded-xl text-sm text-mono-100"
              >
                <div className="w-5 h-5 rounded-full bg-mono-600/25 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-mono-300 text-xs">✓</span>
                </div>
                {r}
              </div>
            ))}
          </div>
        </section>

        {/* Stages */}
        <section className="mb-10">
          <h3 className="text-lg font-bold text-white mb-4">
            Tahapan Kompetisi
          </h3>
          <div className="flex flex-col gap-4">
            {d.stages.map((s) => (
              <div
                key={s.num}
                className="flex gap-5 items-start bg-mono-800 border border-mono-700 rounded-xl p-5"
              >
                <div className="font-extrabold text-[2rem] text-mono-300 leading-none min-w-8">
                  {s.num}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">
                    {s.title}
                  </h4>
                  <p className="text-xs text-mono-300 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Prizes */}
        <section className="mb-10">
          <h3 className="text-lg font-bold text-white mb-4">
            Hadiah & Penghargaan
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {prizes.map((p) => (
              <div
                key={p.label}
                className={`text-center p-6 rounded-xl border ${
                  p.gold
                    ? "bg-mono-700 border-mono-600"
                    : "bg-mono-800 border-mono-700"
                }`}
              >
                <div className="text-3xl mb-3">{p.medal}</div>
                <div className="font-extrabold text-white text-xl mb-1">
                  {p.amount}
                </div>
                <div className="text-xs text-mono-300 leading-relaxed">
                  {p.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        <button className="bg-mono-600 text-white px-10 py-4 rounded-xl font-bold text-base hover:opacity-90 hover:-translate-y-0.5 transition-all">
          Daftar Kategori Ini →
        </button>
      </div>
    </div>
  );
}
