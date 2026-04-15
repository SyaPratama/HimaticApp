"use client"

import { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";
import { ArrowLeft, User, Settings, CreditCard } from "lucide-react";
import SidebarAccount from "@/components/template/(dashboard)/(account)/sidebar";
import Breadcrumb from '@/components/ui/breadcrumb';

export default function AccountLayout({ children }: PropsWithChildren) {
  const pathname = usePathname() || "";

  const items = [
    { icon: <User className="w-5 h-5" />, label: "Profile", href: "/dashboard/participant/profile" },
    { icon: <Settings className="w-5 h-5" />, label: "Settings", href: "/dashboard/participant/settings" },
    { icon: <CreditCard className="w-5 h-5" />, label: "Payment", href: "/dashboard/participant/payment" },
  ];

  const active = items.find((it) => pathname.startsWith(it.href))?.label || "";

  const groups = [
    { label: 'Account', items: items.slice(0, 2) },
    { label: 'Billing', items: items.slice(2) },
  ];

  return (
    <div className="flex">
      <SidebarAccount items={items} groups={groups} backHref="/dashboard/participant" backLabel="Kembali" backIcon={<ArrowLeft className="w-4 h-4" />} />

      <div className="flex-1 ml-64 p-4">
        <div>
          <Breadcrumb items={[{ title: 'Dashboard', href: '/dashboard/participant' }, { title: active || 'Profile' }]} />
        </div>

        <div className="bg-mono-800 border border-mono-700 rounded-xl p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
