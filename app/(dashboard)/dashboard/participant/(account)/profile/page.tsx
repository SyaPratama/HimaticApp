"use client"

export default function ProfilePage(){
  return (
    <div>
      <h1 className="text-2xl font-extrabold text-mono-100 mb-2">Profile</h1>
      <p className="text-mono-300 mb-4">Kelola informasi profil peserta — nama, institusi, dan kontak.</p>

      <div className="grid grid-cols-1 gap-4">
        <div className="bg-mono-900 border border-mono-700 rounded-lg p-4">
          <div className="text-sm text-mono-300">Nama</div>
          <div className="font-semibold text-mono-100">Nama Peserta</div>
        </div>
        <div className="bg-mono-900 border border-mono-700 rounded-lg p-4">
          <div className="text-sm text-mono-300">Email</div>
          <div className="font-semibold text-mono-100">email@example.com</div>
        </div>
      </div>
    </div>
  );
}
