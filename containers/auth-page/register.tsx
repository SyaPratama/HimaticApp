"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function RegisterClient(){

  return (
    <div className="min-h-screen flex items-center justify-center px-[5%] pt-[100px] pb-16 bg-mono-900">
      <div className="w-full max-w-md bg-mono-800 border border-mono-700 rounded-3xl p-10">
        <h2 className="font-extrabold text-mono-100 text-[1.8rem] mb-1">Daftar</h2>
        <p className="text-mono-300 text-sm mb-6">Buat akun untuk mengakses dashboard.</p>

        <div className="flex flex-col gap-3 mb-4">
          <Button className="w-full  gap-4 px-4 py-6 bg-white text-mono-900 rounded-lg border">
            <Image src={"/images/google.svg"} width={20} height={20} className="w-1/12" alt="Google"/>
            <span>Masuk dengan Google</span>
          </Button>
          <Button className="w-full flex items-center justify-center gap-4 px-4 py-6 bg-[#1877F2] text-white rounded-lg">
            <Image src={"/images/facebook-white.svg"} width={20} height={20} className="w-1/12" alt="Facebook"/>
            <span>Masuk dengan Facebook</span>
          </Button>
        </div>

        <label className="block text-xs font-semibold text-mono-100 mb-1.5">Nama Lengkap</label>
        <input className="w-full bg-mono-900 border border-mono-700 rounded-md px-3 py-2 text-mono-100 mb-4" />

        <label className="block text-xs font-semibold text-mono-100 mb-1.5">Email</label>
        <input className="w-full bg-mono-900 border border-mono-700 rounded-md px-3 py-2 text-mono-100 mb-4" />

        <label className="block text-xs font-semibold text-mono-100 mb-1.5">Password</label>
        <input type="password" className="w-full bg-mono-900 border border-mono-700 rounded-md px-3 py-2 text-mono-100 mb-6" />

      <div className="grid gap-3">
          <Button className="w-full px-4 py-5 bg-mono-600 text-lg text-mono-100 rounded-lg">
            Daftar
          </Button>
          <div className="w-full inline-flex gap-1 px-4 py-2.5 bg-mono-700/50 rounded-lg justify-center text-sm text-mono-100">
            <span>Sudah memilik akun?</span>
            <Link href={"/auth/login"} className="text-blue-400">
              Masuk
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
