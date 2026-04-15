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
  className?: string;
}

const SidebarAccount: React.FC<SidebarProps & { groups?: { label: string; items: SidebarItem[] }[]; backHref?: string; backLabel?: string; backIcon?: ReactNode }> = ({ items, groups, backHref = '/dashboard/participant', backLabel = 'Kembali', backIcon, className }) => {
  const pathname = usePathname() || "";

  const renderItem = (item: SidebarItem, i: number) => {
    const isActive = item.active || (item.href ? pathname.startsWith(item.href) : false);
    const baseCls = `flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all text-left w-full border-none cursor-pointer`;
    const cls = isActive
      ? `${baseCls} bg-mono-600/25 text-mono-300`
      : `${baseCls} text-mono-300 hover:bg-mono-800 hover:text-mono-100 bg-transparent`;

    if (item.href) {
      return (
        <Link key={i} href={item.href} className={cls}>
          <span className="text-base w-5 text-center">{item.icon}</span>
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
  };

  return (
    <aside className={cn("w-64 bg-mono-800 border-r border-mono-700 p-4 shrink-0 h-full flex flex-col fixed top-0 left-0 z-40", className)}>
      <div className="py-4 flex flex-col h-full">
        {/* Back button at top */}
        <div className="mb-6">
          <Link href={backHref} className="flex items-center gap-2 text-mono-300 hover:text-mono-100">
            <span className="text-base w-5">{backIcon || <span className="inline-block w-4 h-4" />}</span>
            <span className="text-sm">{backLabel}</span>
          </Link>
        </div>

        {/* Groups or flat items */}
        <div className="flex-1 overflow-y-auto">
          {groups ? (
            groups.map((g, gi) => (
              <div key={gi} className="mb-4">
                <div className="text-xs text-mono-300 uppercase mb-2 px-1">{g.label}</div>
                <nav className="flex flex-col gap-1">
                  {g.items.map((it, idx) => renderItem(it, idx))}
                </nav>
              </div>
            ))
          ) : (
            <nav className="flex flex-col gap-0.5">{items.map((it, i) => renderItem(it, i))}</nav>
          )}
        </div>

      </div>
    </aside>
  );
};

export default SidebarAccount;
