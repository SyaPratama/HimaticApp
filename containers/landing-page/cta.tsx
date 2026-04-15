"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ReactElement } from "react";

const CTA = (): ReactElement => {
  return (
    <section className="py-24 px-[5%] bg-mono-900 text-center">
      <div className="max-w-lg mx-auto bg-mono-800 border border-mono-700 rounded-3xl p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-mono-700/10" />
        <div className="relative z-10">
          <h2 className="font-extrabold text-mono-100 text-3xl mb-4">Siap Berkompetisi?</h2>
          <p className="text-mono-300 leading-relaxed mb-8">
            Bergabunglah dengan ratusan mahasiswa terbaik Indonesia. Pendaftaran masih dibuka — jangan sampai ketinggalan!
          </p>
          <Link href="/register">
            <Button className="bg-mono-600 text-mono-100 px-10 py-4 rounded-xl font-bold text-base hover:bg-mono-500">
              Daftar Sekarang — Gratis!
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTA;
