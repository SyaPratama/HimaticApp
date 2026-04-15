"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/libs/utils";

interface SidebarItem {
  icon: ReactNode;
  label: string;
  href?: string;
  active?: boolean;
  onClick?: () => void;
}

interface SidebarProps {
  items: SidebarItem[];
  isAdmin?: boolean;
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ items, className }) => {
  const pathname = usePathname() || "";

  return (
    <aside
      className={cn(
        "w-64 bg-mono-800 border-r border-mono-700 p-4 shrink-0 h-full flex flex-col fixed top-0 left-0 z-40",
        className,
      )}
    >
      <div className="py-4">
        <div className="font-bold text-2xl mb-2.5">LOGO BRAND</div>
        <nav className="flex flex-col gap-0.5 flex-1 space-y-2">
          {(() => {
            let bestIndex = -1;
            let bestLen = -1;
            items.forEach((it, idx) => {
              if (!it.href) return;
              if (pathname === it.href && it.href.length > bestLen) {
                bestIndex = idx;
                bestLen = it.href.length;
              } else if (
                pathname.startsWith(it.href) &&
                it.href.length > bestLen
              ) {
                bestIndex = idx;
                bestLen = it.href.length;
              }
            });

            return items.map((item, i) => {
              const isActive =
                item.active || (item.href ? i === bestIndex : false);
              const baseCls = `flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all text-left w-full border-none cursor-pointer`;
              const cls = isActive
                ? `${baseCls} bg-mono-600/25 text-mono-300`
                : `${baseCls} text-mono-300 hover:bg-mono-800 hover:text-mono-100 bg-transparent`;

              if (item.href) {
                return (
                  <Link key={i} href={item.href} className={cls}>
                    <span className="text-base w-5 text-center">
                      {item.icon}
                    </span>
                    {item.label}
                  </Link>
                );
              }

              return (
                <button key={i} onClick={item.onClick} className={cls}>
                  <span className="text-base w-5 text-center">{item.icon}</span>
                  {item.label}
                </button>
              );
            });
          })()}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
