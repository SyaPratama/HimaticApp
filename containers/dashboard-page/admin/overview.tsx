"use client"

import { useState } from "react";
import { Users, FileText, BarChart2, Megaphone } from "lucide-react";
import Breadcrumb from "@/components/ui/breadcrumb";

export default function AdminOverviewClient(){
  const [metrics] = useState({ attendees: 487, teams: 163, submissions: 241, universities: 52 });

  const participants = [
    { id: 1, team: "Desain Nusantara", category: "UI/UX", uni: "Universitas Indonesia", status: "Terverifikasi" },
    { id: 2, team: "AlgoForce", category: "CP", uni: "ITB", status: "Terverifikasi" },
    { id: 3, team: "PixelCraft", category: "UI/UX", uni: "UGM", status: "Review" },
  ];

  const pending = [
    { id:1, team: 'Desain Nusantara', file: 'Prototype.v3.figma', time: '30 menit lalu' },
    { id:2, team: 'AlgoForce', file: 'solution.cpp', time: '2 jam lalu' },
  ];

  return (
    <div className="p-6">
      <Breadcrumb items={[{ title: 'Dashboard', href: '/dashboard/admin/overview' }, { title: 'Overview' }]} />
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-extrabold text-2xl text-mono-100">Overview</h1>
          <p className="text-mono-300 mt-1">Ringkasan metrik, submisi, dan aktivitas terbaru.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-2 bg-mono-600 text-mono-100 rounded-md">Export CSV</button>
          <button className="px-3 py-2 bg-mono-600/25 text-mono-300 rounded-md">+ Pengumuman</button>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <div className="bg-mono-800 border border-mono-700 rounded-xl p-5">
          <div className="text-xs text-mono-300 font-medium mb-2">Total Peserta</div>
          <div className="text-2xl font-extrabold text-mono-100">{metrics.attendees}</div>
        </div>
        <div className="bg-mono-800 border border-mono-700 rounded-xl p-5">
          <div className="text-xs text-mono-300 font-medium mb-2">Tim Terdaftar</div>
          <div className="text-2xl font-extrabold text-mono-100">{metrics.teams}</div>
        </div>
        <div className="bg-mono-800 border border-mono-700 rounded-xl p-5">
          <div className="text-xs text-mono-300 font-medium mb-2">Submisi Masuk</div>
          <div className="text-2xl font-extrabold text-mono-100">{metrics.submissions}</div>
        </div>
        <div className="bg-mono-800 border border-mono-700 rounded-xl p-5">
          <div className="text-xs text-mono-300 font-medium mb-2">Universitas</div>
          <div className="text-2xl font-extrabold text-mono-100">{metrics.universities}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2 bg-mono-800 border border-mono-700 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2"><FileText className="w-5 h-5 text-mono-300" /><h3 className="text-sm font-semibold text-mono-100">Daftar Peserta Terbaru</h3></div>
            <div className="text-xs text-mono-300">{participants.length} terbaru</div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="text-xs text-mono-300 uppercase text-left">
                <tr>
                  <th className="p-3">Nama Tim</th>
                  <th className="p-3">Kategori</th>
                  <th className="p-3">Universitas</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {participants.map(p=> (
                  <tr key={p.id} className="border-t border-mono-700">
                    <td className="p-3 text-mono-100 font-semibold">{p.team}</td>
                    <td className="p-3 text-mono-300">{p.category}</td>
                    <td className="p-3 text-mono-300">{p.uni}</td>
                    <td className="p-3"><span className="px-2 py-1 rounded-full text-xs bg-mono-500/25 text-mono-300">{p.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-mono-800 border border-mono-700 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4"><div className="flex items-center gap-2"><Users className="w-5 h-5 text-mono-300"/><h3 className="text-sm font-semibold text-mono-100">Aktivitas</h3></div><div className="text-xs text-mono-300">Realtime</div></div>

          <div className="grid gap-3">
            {pending.map(p=> (
              <div key={p.id} className="flex items-center justify-between bg-mono-900 rounded-lg p-3">
                <div>
                  <div className="text-sm font-semibold text-mono-100">{p.team}</div>
                  <div className="text-xs text-mono-300">{p.file} • {p.time}</div>
                </div>
                <div className="flex items-center gap-2"><button className="px-3 py-1 bg-mono-600 text-mono-100 rounded-md">Tinjau</button></div>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t border-mono-700 pt-3">
            <div className="flex items-center gap-2 mb-2"><Megaphone className="w-4 h-4 text-mono-300"/><div className="text-sm font-semibold text-mono-100">Pengumuman Terbaru</div></div>
            <div className="text-xs text-mono-300">Tidak ada pengumuman baru</div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-mono-800 border border-mono-700 rounded-xl p-6">
        <div className="text-sm font-semibold text-mono-100 mb-2">Laporan Singkat</div>
        <div className="text-xs text-mono-300">Grafik dan export laporan (placeholder).</div>
        <div className="mt-3 h-28 bg-mono-900 rounded-md flex items-center justify-center text-mono-300">[Chart Placeholder]</div>
      </div>
    </div>
  );
}
