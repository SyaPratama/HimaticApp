"use client"

export default function PaymentPage(){
  return (
    <div>
      <h1 className="text-2xl font-extrabold text-mono-100 mb-2">Payment</h1>
      <p className="text-mono-300 mb-4">Kelola metode pembayaran dan riwayat transaksi pendaftaran.</p>

      <div className="space-y-4">
        <div className="bg-mono-900 border border-mono-700 rounded-lg p-4">
          <div className="text-sm text-mono-300">Metode Pembayaran</div>
          <div className="mt-2 text-mono-300">Belum ada metode pembayaran.</div>
        </div>
        <div className="bg-mono-900 border border-mono-700 rounded-lg p-4">
          <div className="text-sm text-mono-300">Riwayat Transaksi</div>
          <div className="mt-2 text-mono-300">Tidak ada transaksi ditemukan.</div>
        </div>
      </div>
    </div>
  );
}
