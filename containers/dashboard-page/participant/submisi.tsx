"use client"

import { useState } from "react";
import { UploadCloud, File } from "lucide-react";
import Breadcrumb from "@/components/ui/breadcrumb";

export default function SubmisiParticipantClient(){
  const [files, setFiles] = useState([
    { id: 1, name: "Prototype.figma", status: "uploaded" },
    { id: 2, name: "Presentasi.pdf", status: "pending" },
    { id: 3, name: "Video.mp4", status: "missing" },
  ]);

  function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    setFiles((s) => [{ id: Date.now(), name: f.name, status: "uploaded" }, ...s]);
  }

  return (
    <div className="p-6">
      <Breadcrumb items={[{ title: 'Dashboard', href: '/dashboard/participant' }, { title: 'Submisi Saya' }]} />
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-extrabold text-2xl text-mono-100">Submisi Saya</h1>
          <p className="text-mono-300 mt-1">Kelola file submisi dan lihat status pengiriman.</p>
        </div>
        <label className="inline-flex items-center gap-2 px-4 py-2 bg-mono-600 text-mono-100 rounded-lg cursor-pointer">
          <UploadCloud className="w-5 h-5" />
          <span className="text-sm font-semibold">Upload File</span>
          <input className="hidden" type="file" onChange={handleUpload} />
        </label>
      </div>

      <div className="mt-6 grid gap-3">
        {files.map((f) => (
          <div key={f.id} className="flex items-center justify-between bg-mono-800 border border-mono-700 rounded-lg p-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 bg-mono-900 rounded-md flex items-center justify-center">
                <File className="w-5 h-5 text-mono-300" />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-semibold text-mono-100 truncate">{f.name}</div>
                <div className="text-xs text-mono-300">{f.status === "uploaded" ? "Terkirim" : f.status === "pending" ? "Menunggu Review" : "Belum dikirim"}</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {f.status === "uploaded" && <button className="px-3 py-1 rounded-md text-xs font-semibold bg-mono-600 text-mono-100">Kelola</button>}
              {f.status === "pending" && <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-mono-500/25 text-mono-300">Menunggu</span>}
              {f.status === "missing" && <button className="px-3 py-1 rounded-md text-xs font-semibold bg-transparent text-mono-300 border border-mono-700">Upload</button>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
