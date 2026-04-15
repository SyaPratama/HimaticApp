"use client"

import { useState } from "react";
import { User, UserPlus, Trash2 } from "lucide-react";
import Breadcrumb from "@/components/ui/breadcrumb";

export default function TimClient(){
  const [members, setMembers] = useState([
    { id: 1, name: "Budi Santoso", role: "Ketua" },
    { id: 2, name: "Siti Aminah", role: "Anggota" },
  ]);

  function addMember() {
    const name = `Anggota ${members.length + 1}`;
    setMembers((s) => [...s, { id: Date.now(), name, role: "Anggota" }]);
  }

  function removeMember(id: number) {
    setMembers((s) => s.filter((m) => m.id !== id));
  }

  return (
    <div className="p-6">
      <Breadcrumb items={[{ title: 'Dashboard', href: '/dashboard/participant' }, { title: 'Tim Saya' }]} />
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-extrabold text-2xl text-mono-100">Tim Saya</h1>
          <p className="text-mono-300 mt-1">Kelola anggota tim dan peran.</p>
        </div>
        <button onClick={addMember} className="inline-flex items-center gap-2 px-4 py-2 bg-mono-600 text-mono-100 rounded-lg">
          <UserPlus className="w-4 h-4" /> Tambah Anggota
        </button>
      </div>

      <div className="mt-6 bg-mono-800 border border-mono-700 rounded-lg p-4">
        {members.map((m) => (
          <div key={m.id} className="flex items-center justify-between gap-4 py-2 border-b last:border-b-0 border-mono-700">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-mono-900 rounded-full flex items-center justify-center"><User className="w-5 h-5 text-mono-300"/></div>
              <div>
                <div className="text-sm font-semibold text-mono-100">{m.name}</div>
                <div className="text-xs text-mono-300">{m.role}</div>
              </div>
            </div>
            <button onClick={() => removeMember(m.id)} className="text-sm text-mono-300 inline-flex items-center gap-2">
              <Trash2 className="w-4 h-4"/> Hapus
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
