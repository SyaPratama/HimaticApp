"use client"

import { Button } from "@/components/ui/button";
import { ReactElement, useState } from "react";

const tabs = ["Umum", "UI/UX Design", "Competitive Prog."] as const;
type Tab = (typeof tabs)[number];

const guidelines: Record<Tab, { num: string; title: string; desc: string }[]> = {
  Umum: [
    { num: "01", title: "Syarat Peserta", desc: "Mahasiswa aktif D3/S1 dengan menunjukkan kartu tanda mahasiswa (KTM) yang berlaku saat pendaftaran." },
    { num: "02", title: "Pendaftaran Tim", desc: "Setiap tim terdiri dari 2-3 anggota dari universitas yang sama. Pendaftaran dilakukan online melalui portal resmi." },
    { num: "03", title: "Biaya Pendaftaran", desc: "Biaya pendaftaran sebesar Rp 150.000 per tim, dibayar melalui transfer bank atau e-wallet yang tersedia." },
    { num: "04", title: "Kode Etik", desc: "Seluruh karya harus original. Plagiarisme dan kecurangan dalam bentuk apapun akan didiskualifikasi." },
    { num: "05", title: "Hak Kekayaan", desc: "Karya tetap menjadi milik peserta. Panitia berhak mempublikasikan karya untuk keperluan dokumentasi." },
    { num: "06", title: "Keputusan Juri", desc: "Keputusan dewan juri bersifat final dan tidak dapat diganggu gugat oleh pihak manapun." },
  ],
  "UI/UX Design": [
    { num: "01", title: "Tema Desain", desc: "Tema akan diumumkan saat Technical Meeting. Peserta wajib hadir untuk mendapatkan brief resmi kompetisi." },
    { num: "02", title: "Tools yang Dibolehkan", desc: "Figma, Adobe XD, Sketch, atau tools desain UI lainnya. Tidak diperkenankan menggunakan template berbayar." },
    { num: "03", title: "Format Pengumpulan", desc: "File Figma (link share) + PDF presentasi + Video prototype max 3 menit dalam format MP4 1080p." },
    { num: "04", title: "Kriteria Penilaian", desc: "Estetika (30%), Fungsionalitas (30%), User Experience (25%), Orisinalitas dan Inovasi (15%)." },
  ],
  "Competitive Prog.": [
    { num: "01", title: "Format Lomba", desc: "ICPC-style. Tim terdiri dari 3 orang menggunakan 1 komputer bersama selama 5 jam pengerjaan soal." },
    { num: "02", title: "Bahasa Pemrograman", desc: "C, C++, Java, dan Python. Sistem penilaian menggunakan judge online dengan batas waktu per soal." },
    { num: "03", title: "Sistem Penilaian", desc: "Rangking berdasarkan jumlah soal benar, lalu total penalti waktu (20 menit per wrong answer)." },
    { num: "04", title: "Materi Soal", desc: "Algoritma, Struktur Data, Graf, Matematika Kombinatorika, Dynamic Programming, dan lainnya." },
  ],
};

const GuidelineSection = (): ReactElement => {
  const [active, setActive] = useState<Tab>("Umum");

  return (
    <section id="guideline" className="py-24 px-[5%] bg-mono-800">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block  bg-mono-500/25 border border-mono-500 text-mono-500 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-4">
            Guideline
          </span>
          <h2 className="font-extrabold text-mono-200 text-4xl tracking-tight mb-3">
            Panduan Kompetisi
          </h2>
          <p className="text-mono-300 max-w-md mx-auto leading-relaxed">
            Baca panduan lengkap sebelum mendaftar untuk memastikan partisipasimu berjalan lancar.
          </p>
        </div>

        {/* Tab buttons */}
        <div className="flex gap-2 justify-center mb-10 flex-wrap">
          {tabs.map((tab) => (
            <Button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-5 py-2 rounded-lg text-sm font-medium border transition-all ${
                active === tab
                  ? "bg-mono-900 text-mono-200 border-mono-700"
                  : "bg-transparent text-mono-200 border-mono-700 hover:border-mono-600 hover:text-mono-300"
              }`}
            >
              {tab}
            </Button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {guidelines[active].map((g) => (
            <div
              key={g.num}
              className="bg-mono-900 border border-mono-700 rounded-2xl p-6 hover:border-mono-600 hover:-translate-y-0.5 transition-all"
            >
              <div className="font-extrabold text-[2.5rem] text-mono-400 leading-none mb-2">
                {g.num}
              </div>
              <h4 className="text-sm font-semibold text-mono-200 mb-2">{g.title}</h4>
              <p className="text-xs text-mono-400 leading-relaxed">{g.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GuidelineSection