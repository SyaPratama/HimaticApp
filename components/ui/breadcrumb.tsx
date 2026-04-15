"use client"

import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = { title: string; href?: string };

export default function Breadcrumb({ items }: { items: Crumb[] }){
  if(!items || items.length === 0) return null;
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-mono-300 mb-4">
      <ol className="flex items-center gap-2">
        {items.map((it, idx) => {
          const last = idx === items.length - 1;
          return (
            <li key={idx} className="flex items-center gap-2">
              {it.href && !last ? (
                <Link href={it.href} className="text-mono-300 hover:underline">{it.title}</Link>
              ) : (
                <span className={last ? 'text-mono-100 font-semibold' : 'text-mono-300'}>{it.title}</span>
              )}
              {!last && <ChevronRight className="w-4 h-4 text-mono-500" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
