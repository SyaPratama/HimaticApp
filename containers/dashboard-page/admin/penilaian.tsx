"use client"

import { useState } from "react";
import Breadcrumb from "@/components/ui/breadcrumb";

export default function PenilaianClient(){
  const [scores, setScores] = useState([
    { id:1, team:'Desain Nusantara', design: 80, innovation: 75 },
    { id:2, team:'PixelCraft', design: 72, innovation: 68 },
  ]);

  function update(id:number, field:string, value:number){
    setScores(s=>s.map(x=> x.id===id?{...x,[field]:value}:x));
  }

  return (
    <div className="p-6">
      <Breadcrumb items={[{ title: 'Dashboard', href: '/dashboard/admin/overview' }, { title: 'Penilaian' }]} />
      <h1 className="font-extrabold text-2xl text-mono-100">Penilaian</h1>
      <p className="text-mono-300 mt-1">Catat skor juri untuk tiap tim.</p>

      <div className="mt-6 grid gap-3">
        {scores.map(row=> (
          <div key={row.id} className="bg-mono-800 border border-mono-700 rounded-lg p-4 flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold text-mono-100">{row.team}</div>
              <div className="text-xs text-mono-300">Masukkan skor antara 0-100</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex flex-col">
                <label className="text-xs text-mono-300">Design</label>
                <input type="number" value={row.design} onChange={(e)=> update(row.id,'design', Number(e.target.value))} className="w-20 bg-mono-900 border border-mono-700 rounded-md px-2 py-1 text-mono-100" />
              </div>
              <div className="flex flex-col">
                <label className="text-xs text-mono-300">Innovation</label>
                <input type="number" value={row.innovation} onChange={(e)=> update(row.id,'innovation', Number(e.target.value))} className="w-20 bg-mono-900 border border-mono-700 rounded-md px-2 py-1 text-mono-100" />
              </div>
              <button className="px-3 py-1 bg-mono-600 text-mono-100 rounded-md">Simpan</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
