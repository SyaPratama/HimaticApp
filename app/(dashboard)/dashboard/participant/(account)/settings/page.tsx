"use client"

export default function SettingsPage(){
  return (
    <div>
      <h1 className="text-2xl font-extrabold text-mono-100 mb-2">Settings</h1>
      <p className="text-mono-300 mb-4">Pengaturan akun peserta — notifikasi, preferensi, dan privasi.</p>

      <div className="space-y-4">
        <div className="bg-mono-900 border border-mono-700 rounded-lg p-4">
          <div className="text-sm text-mono-300">Notifikasi</div>
          <div className="mt-2 text-mono-300">Toggle preferences (UI-only)</div>
        </div>
        <div className="bg-mono-900 border border-mono-700 rounded-lg p-4">
          <div className="text-sm text-mono-300">Privasi</div>
          <div className="mt-2 text-mono-300">Pengaturan privasi akun</div>
        </div>
      </div>
    </div>
  );
}
