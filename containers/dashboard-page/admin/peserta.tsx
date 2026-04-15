"use client"

import { useState } from "react";
import { Search } from "lucide-react";
import Breadcrumb from "@/components/ui/breadcrumb";

export default function PesertaClient(){
  const [query, setQuery] = useState("");
  const participants = [
    { id: 1, team: "Desain Nusantara", category: "UI/UX", uni: "Universitas Indonesia", status: "Terverifikasi" },
    { id: 2, team: "AlgoForce", category: "CP", uni: "ITB", status: "Terverifikasi" },
    { id: 3, team: "PixelCraft", category: "UI/UX", uni: "UGM", status: "Review" },
  ];

  return (
    <div className="p-6">
      <Breadcrumb items={[{ title: 'Dashboard', href: '/dashboard/admin/overview' }, { title: 'Peserta' }]} />
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-extrabold text-2xl text-mono-100">Peserta</h1>
          <p className="text-mono-300 mt-1">Daftar peserta terdaftar.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="w-4 h-4 text-mono-300 absolute left-3 top-3" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Cari peserta..." className="pl-10 pr-3 py-2 bg-mono-900 border border-mono-700 rounded-md text-mono-100" />
          </div>
          <button className="px-3 py-2 bg-mono-600 text-mono-100 rounded-md">Export CSV</button>
        </div>
      </div>

      <div className="mt-6 bg-mono-800 border border-mono-700 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="text-xs text-mono-300 uppercase text-left">
            <tr>
              <th className="p-3">Nama Tim</th>
              <th className="p-3">Kategori</th>
              <th className="p-3">Universitas</th>
              <th className="p-3">Status</th>
              <th className="p-3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {participants.filter(p => p.team.toLowerCase().includes(query.toLowerCase())).map(p => (
              <tr key={p.id} className="border-t border-mono-700">
                <td className="p-3 text-mono-100 font-semibold">{p.team}</td>
                <td className="p-3 text-mono-300">{p.category}</td>
                <td className="p-3 text-mono-300">{p.uni}</td>
                <td className="p-3"><span className="px-2 py-1 rounded-full text-xs bg-mono-500/25 text-mono-300">{p.status}</span></td>
                <td className="p-3"><button className="px-3 py-1 rounded-md bg-mono-600 text-mono-100">Lihat</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
