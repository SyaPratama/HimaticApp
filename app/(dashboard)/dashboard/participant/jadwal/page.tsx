export const metadata = { title: 'Jadwal' };

export default function Page() {
  const events = [
    { id: 1, name: "Pendaftaran Tutup", date: "28 Feb 2025", status: "done" },
    { id: 2, name: "Technical Meeting", date: "10 Mar 2025", status: "done" },
    { id: 3, name: "Penyisihan Online", date: "30 Mar 2025", status: "ongoing" },
    { id: 4, name: "Semifinal", date: "10 Apr 2025", status: "upcoming" },
    { id: 5, name: "Grand Final", date: "20 Apr 2025", status: "upcoming" },
  ];

  return (
    <div className="p-6">
      <h1 className="font-extrabold text-2xl text-mono-100">Jadwal</h1>
      <p className="text-mono-300 mt-1">Semua tanggal penting kompetisi.</p>

      <div className="mt-6 grid gap-3">
        {events.map((e) => (
          <div key={e.id} className="flex items-center justify-between bg-mono-800 border border-mono-700 rounded-lg p-4">
            <div>
              <div className="text-sm font-semibold text-mono-100">{e.name}</div>
              <div className="text-xs text-mono-300">{e.date}</div>
            </div>
            <div>
              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${e.status === 'done' ? 'bg-mono-500/25 text-mono-300' : e.status === 'ongoing' ? 'bg-mono-600/25 text-mono-300' : 'bg-mono-200 text-mono-900'}`}>
                {e.status === 'done' ? 'Selesai' : e.status === 'ongoing' ? 'Berlangsung' : 'Akan datang'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
