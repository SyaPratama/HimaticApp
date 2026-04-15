"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar, File, Megaphone } from "lucide-react";
import Breadcrumb from "@/components/ui/breadcrumb";

export default function ParticipantOverview() {
  const [seconds, setSeconds] = useState(18 * 3600 + 45 * 60 + 22);

  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, []);

  const h = Math.floor(seconds / 3600).toString().padStart(2, "0");
  const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");

  const recent = [
    { id: 1, name: "Prototype.figma", time: "2 jam lalu", status: "review" },
    { id: 2, name: "Presentasi.pdf", time: "Kemarin", status: "pass" },
  ];

  const events = [
    { id: 1, label: "Penyisihan Online", date: "s/d 30 Mar 2025", status: "ongoing" },
    { id: 2, label: "Semifinal", date: "10 Apr 2025", status: "upcoming" },
  ];

  const announcements = [
    { id: 1, title: "Jadwal Presentasi Semifinal Dirilis", time: "2 hari lalu" },
  ];

  return (
    <div className="p-6">
      <Breadcrumb items={[{ title: 'Dashboard', href: '/dashboard/participant' }, { title: 'Overview' }]} />
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-extrabold text-2xl text-mono-100">Dashboard</h1>
          <p className="text-mono-300 mt-1">Ringkasan untuk peserta — progress, submisi, dan pengumuman.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/dashboard/participant/submisi" className="px-3 py-2 bg-mono-600 text-mono-100 rounded-md">Kelola Submisi</Link>
          <Link href="/dashboard/participant/tim" className="px-3 py-2 bg-transparent border border-mono-700 text-mono-300 rounded-md">Tim Saya</Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-6">
        <div className="bg-mono-800 border border-mono-700 rounded-xl p-5">
          <div className="text-xs text-mono-300 font-medium mb-2">Status Pendaftaran</div>
          <div className="text-lg font-extrabold text-mono-100">Terverifikasi</div>
        </div>
        <div className="bg-mono-800 border border-mono-700 rounded-xl p-5">
          <div className="text-xs text-mono-300 font-medium mb-2">Babak Saat Ini</div>
          <div className="text-lg font-extrabold text-mono-100">Penyisihan</div>
        </div>
        <div className="bg-mono-800 border border-mono-700 rounded-xl p-5">
          <div className="text-xs text-mono-300 font-medium mb-2">Submisi Dikirim</div>
          <div className="text-lg font-extrabold text-mono-100">2 / 3</div>
          <div className="text-xs text-mono-300 mt-1">Periksa daftar submisi untuk detail.</div>
        </div>
        <div className="bg-mono-800 border border-mono-700 rounded-xl p-5 flex flex-col justify-between">
          <div className="text-xs text-mono-300 font-medium mb-2">Sisa Waktu</div>
          <div className="text-2xl font-extrabold text-mono-100">{h}:{m}:{s}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2 bg-mono-800 border border-mono-700 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2"><File className="w-5 h-5 text-mono-300" /><h3 className="text-sm font-semibold text-mono-100">Submisi Terbaru</h3></div>
            <Link href="/dashboard/participant/submisi" className="text-xs text-mono-300">Lihat semua</Link>
          </div>
          <div className="grid gap-3">
            {recent.map(r => (
              <div key={r.id} className="flex items-center justify-between bg-mono-900 rounded-lg p-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-mono-900 rounded-md flex items-center justify-center"><File className="w-5 h-5 text-mono-300"/></div>
                  <div>
                    <div className="text-sm font-semibold text-mono-100">{r.name}</div>
                    <div className="text-xs text-mono-300">{r.time}</div>
                  </div>
                </div>
                <div className="text-xs text-mono-300">{r.status === 'pass' ? 'Diterima' : r.status === 'review' ? 'Dalam Review' : 'Menunggu'}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-mono-800 border border-mono-700 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4"><Calendar className="w-5 h-5 text-mono-300"/><h3 className="text-sm font-semibold text-mono-100">Timeline</h3></div>
          <div className="flex flex-col gap-3">
            {events.map(e => (
              <div key={e.id} className="flex items-start gap-3">
                <div className={`w-2 h-2 ${e.status === 'ongoing' ? 'bg-mono-600' : 'bg-mono-200'} rounded-full mt-1`} />
                <div>
                  <div className="text-sm text-mono-100">{e.label}</div>
                  <div className="text-xs text-mono-300">{e.date}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t border-mono-700 pt-3">
            <div className="flex items-center gap-2 mb-2"><Megaphone className="w-4 h-4 text-mono-300"/><div className="text-sm font-semibold text-mono-100">Pengumuman</div></div>
            {announcements.map(a => (
              <div key={a.id} className="text-xs text-mono-300">{a.title} • {a.time}</div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
}
