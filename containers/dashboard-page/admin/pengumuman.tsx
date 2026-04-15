"use client"

import { useState } from "react";
import Breadcrumb from "@/components/ui/breadcrumb";

export default function PengumumanClient(){
  const [list, setList] = useState([
    { id:1, title:'Deadline diperpanjang', body:'Deadline sampai 30 Maret' }
  ]);
  const [title,setTitle] = useState('');
  const [body,setBody] = useState('');

  function create(){
    if(!title) return;
    setList(s=>[{id:Date.now(), title, body}, ...s]);
    setTitle(''); setBody('');
  }

  return (
    <div className="p-6">
      <Breadcrumb items={[{ title: 'Dashboard', href: '/dashboard/admin/overview' }, { title: 'Pengumuman' }]} />
      <h1 className="font-extrabold text-2xl text-mono-100">Pengumuman</h1>
      <p className="text-mono-300 mt-1">Kelola pengumuman kompetisi.</p>

      <div className="mt-6 grid gap-4">
        <div className="bg-mono-800 border border-mono-700 rounded-lg p-4">
          <input placeholder="Judul" value={title} onChange={(e)=>setTitle(e.target.value)} className="w-full bg-mono-900 border border-mono-700 rounded-md px-3 py-2 mb-2 text-mono-100" />
          <textarea placeholder="Isi pengumuman" value={body} onChange={(e)=>setBody(e.target.value)} className="w-full bg-mono-900 border border-mono-700 rounded-md px-3 py-2 mb-2 text-mono-100" />
          <button onClick={create} className="px-3 py-2 bg-mono-600 text-mono-100 rounded-md">Buat Pengumuman</button>
        </div>

        {list.map(a=> (
          <div key={a.id} className="bg-mono-800 border border-mono-700 rounded-lg p-3">
            <div className="text-sm font-semibold text-mono-100">{a.title}</div>
            <div className="text-xs text-mono-300">{a.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
