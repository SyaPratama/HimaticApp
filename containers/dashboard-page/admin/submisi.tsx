"use client"

import { useState } from "react";
import { FileText } from "lucide-react";
import Breadcrumb from "@/components/ui/breadcrumb";

export default function SubmisiClient(){
  const [submissions, setSubmissions] = useState([
    { id: 1, team: "Desain Nusantara", file: "Prototype.v3.figma", status: "review" },
    { id: 2, team: "AlgoForce", file: "solution.cpp", status: "pass" },
    { id: 3, team: "PixelCraft", file: "brief.pdf", status: "pending" },
  ]);

  function markReviewed(id:number){
    setSubmissions(s=>s.map(x=> x.id===id?{...x,status:'pass'}:x));
  }

  return (
    <div className="p-6">
      <Breadcrumb items={[{ title: 'Dashboard', href: '/dashboard/admin/overview' }, { title: 'Submisi' }]} />
      <h1 className="font-extrabold text-2xl text-mono-100">Submisi</h1>
      <p className="text-mono-300 mt-1">Lihat dan tinjau submisi peserta.</p>

      <div className="mt-6 grid gap-3">
        {submissions.map(s => (
          <div key={s.id} className="flex items-center justify-between bg-mono-800 border border-mono-700 rounded-lg p-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-mono-900 rounded-md flex items-center justify-center"><FileText className="w-5 h-5 text-mono-300"/></div>
              <div>
                <div className="text-sm font-semibold text-mono-100">{s.team}</div>
                <div className="text-xs text-mono-300">{s.file}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${s.status==='pass'?'bg-mono-600/25 text-mono-300':s.status==='review'?'bg-mono-500/25 text-mono-500':'bg-mono-200 text-mono-900'}`}>
                {s.status==='pass'? 'Terverifikasi': s.status==='review'? 'Dalam Review':'Menunggu'}
              </span>
              {s.status!=='pass' && <button onClick={()=>markReviewed(s.id)} className="px-3 py-1 rounded-md bg-mono-600 text-mono-100">Tinjau</button>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
