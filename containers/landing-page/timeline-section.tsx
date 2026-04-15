"use client"

import { ReactElement } from "react";

const items = [
  {
    date: "1 Januari 2025",
    title: "Pengumuman Kompetisi",
    desc: "Informasi resmi NexusComp 2025 dipublikasikan di seluruh platform media sosial dan website resmi.",
    status: "done" as const,
  },
  {
    date: "15 Jan – 28 Feb 2025",
    title: "Pendaftaran Peserta",
    desc: "Periode pendaftaran online bagi seluruh tim peserta. Kuota terbatas, segera daftar!",
    status: "done" as const,
  },
  {
    date: "1 – 15 Maret 2025",
    title: "Technical Meeting & Verifikasi",
    desc: "Penjelasan teknis kompetisi, verifikasi berkas peserta, dan pengumuman tema untuk kategori UI/UX.",
    status: "active" as const,
  },
  {
    date: "20 – 30 Maret 2025",
    title: "Tahap Penyisihan",
    desc: "Babak penyisihan dilaksanakan secara online. Tim dengan nilai terbaik melaju ke semifinal.",
    status: "soon" as const,
  },
  {
    date: "10 April 2025",
    title: "Pengumuman Semifinalis",
    desc: "Daftar tim yang lolos ke babak semifinal diumumkan melalui website dan email peserta.",
    status: "soon" as const,
  },
  {
    date: "20 April 2025",
    title: "Semifinal & Final",
    desc: "Babak final dilaksanakan secara offline. Top 10 tim bertanding untuk gelar juara.",
    status: "soon" as const,
  },
  {
    date: "25 April 2025",
    title: "Malam Penghargaan",
    desc: "Pengumuman pemenang dan penyerahan hadiah dalam acara gala dinner NexusComp 2025.",
    status: "soon" as const,
  },
];

const badgeMap = {
  done: "bg-mono-600/25 text-mono-300",
  active: "bg-mono-600/25 text-mono-300",
  soon: "bg-mono-500/25 text-mono-500",
};

const labelMap = {
  done: "Selesai",
  active: "Berlangsung",
  soon: "Akan Datang",
};

const dotMap = {
  done: "bg-mono-100",
  active: "bg-mono-800 border-mono-100 animate-ping-slow",
  soon: "bg-mono-400 border-mono-100",
};

const TimelineSection = (): ReactElement => {
  return (
    <section id="timeline" className="py-24 px-[5%] bg-mono-900">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-mono-500/25 border border-mono-500 text-mono-500 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-4">
            Timeline
          </span>
          <h2 className="font-extrabold text-mono-100 text-4xl tracking-tight mb-3">
            Jadwal Kompetisi
          </h2>
          <p className="text-mono-300 max-w-md mx-auto leading-relaxed">
            Catat semua tanggal penting agar tidak ketinggalan satu pun tahapan kompetisi.
          </p>
        </div>

        {/* Track */}
        <div className="relative pl-12">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-mono-500" />

          {items.map((item, i) => (
            <div key={i} className={`relative pb-12 ${i === items.length - 1 ? "pb-0" : ""}`}>
              {/* Dot */}
              <div
                className={`absolute -left-[2.35rem] top-1 w-3.5 h-3.5 rounded-full border-2 z-10 ${dotMap[item.status]}`}
              />
              <time className="text-xs text-mono-300 font-medium tracking-wide mb-1">{item.date}</time>
              <h3 className="text-base font-semibold text-white mb-1">{item.title}</h3>
              <p className="text-xs text-mono-300 leading-relaxed mb-2">{item.desc}</p>
              <span className={`inline-block px-3 py-0.5 rounded-full text-xs font-semibold ${badgeMap[item.status]}`}>
                {labelMap[item.status]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TimelineSection