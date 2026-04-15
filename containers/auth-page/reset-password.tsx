"use client"

export default function ResetPasswordClient(){

  return (
    <div className="min-h-screen flex items-center justify-center px-[5%] pt-[100px] pb-16 bg-mono-900">
      <div className="w-full max-w-md bg-mono-800 border border-mono-700 rounded-3xl p-10">
        <h2 className="font-extrabold text-mono-100 text-[1.8rem] mb-1">Reset Password</h2>
        <p className="text-mono-300 text-sm mb-6">Masukkan email untuk menerima instruksi reset.</p>

        <label className="block text-xs font-semibold text-mono-100 mb-1.5">Email</label>
        <input className="w-full bg-mono-900 border border-mono-700 rounded-md px-3 py-2 text-mono-100 mb-6" />

        <button className="px-4 py-2 bg-mono-600 text-mono-100 rounded-lg">Kirim Instruksi</button>
      </div>
    </div>
  );
}
