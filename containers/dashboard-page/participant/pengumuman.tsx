"use client"

import { useState } from "react";
import { Megaphone } from "lucide-react";
import Breadcrumb from "@/components/ui/breadcrumb";

export default function PengumumanParticipantClient(){
  const [announcements] = useState([
    { id: 1, title: "Jadwal Presentasi Semifinal Dirilis", body: "Cek email untuk detail.", time: "2 hari lalu" },
    { id: 2, title: "Deadline Submisi Diperpanjang", body: "Perpanjangan hingga 30 Maret.", time: "5 hari lalu" },
  ]);

  return (
    <div className="p-6">
      <Breadcrumb items={[{ title: 'Dashboard', href: '/dashboard/participant' }, { title: 'Pengumuman' }]} />
      <h1 className="font-extrabold text-2xl text-mono-100">Pengumuman</h1>
      <p className="text-mono-300 mt-1">Pengumuman terbaru untuk peserta.</p>

      <div className="mt-6 grid gap-3">
        {announcements.map((a) => (
          <div key={a.id} className="bg-mono-800 border border-mono-700 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Megaphone className="w-5 h-5 text-mono-300" />
              <div>
                <div className="text-sm font-semibold text-mono-100">{a.title}</div>
                <div className="text-xs text-mono-300">{a.body}</div>
                <div className="text-xs text-mono-300 mt-2">{a.time}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
