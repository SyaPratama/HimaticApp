"use client";

import { usePathname } from "next/navigation";
import {
  Home,
  Folder,
  Calendar,
  Users,
  Megaphone,
  LogOut,
  Scale,
  BarChart2,
} from "lucide-react";

import NavbarDashboard from "@/components/template/(dashboard)/navbar-dashboard";
import Sidebar from "@/components/template/(dashboard)/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname() || "";
  const isAdmin = pathname.includes("/dashboard/admin");
  const accountPattern = /^\/dashboard\/participant\/(profile|settings|payment)(\/|$)/;
  const showGlobalSidebar = !accountPattern.test(pathname);

  const adminItems = [
    {
      icon: <Home className="w-5 h-5" />,
      label: "Overview",
      href: "/dashboard/admin",
      active: pathname.includes("/dashboard/admin/overview"),
    },
    {
      icon: <Users className="w-5 h-5" />,
      label: "Peserta",
      href: "/dashboard/admin/peserta",
    },
    {
      icon: <Folder className="w-5 h-5" />,
      label: "Submisi",
      href: "/dashboard/admin/submisi",
    },
    {
      icon: <Scale className="w-5 h-5" />,
      label: "Penilaian",
      href: "/dashboard/admin/penilaian",
    },
    {
      icon: <Megaphone className="w-5 h-5" />,
      label: "Pengumuman",
      href: "/dashboard/admin/pengumuman",
    },
    {
      icon: <BarChart2 className="w-5 h-5" />,
      label: "Laporan",
      href: "/dashboard/admin/laporan",
    },
    { icon: <LogOut className="w-5 h-5" />, label: "Keluar", href: "/logout" },
  ];

  const participantItems = [
    {
      icon: <Home className="w-5 h-5" />,
      label: "Dashboard",
      href: "/dashboard/participant",
      active: pathname === "/dashboard/participant",
    },
    {
      icon: <Folder className="w-5 h-5" />,
      label: "Submisi Saya",
      href: "/dashboard/participant/submisi",
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      label: "Jadwal",
      href: "/dashboard/participant/jadwal",
    },
    {
      icon: <Users className="w-5 h-5" />,
      label: "Tim Saya",
      href: "/dashboard/participant/tim",
    },
    {
      icon: <Megaphone className="w-5 h-5" />,
      label: "Pengumuman",
      href: "/dashboard/participant/pengumuman",
    },
    { icon: <LogOut className="w-5 h-5" />, label: "Keluar", href: "/logout" },
  ];

  return (
    <div className="flex lg:max-h-full min-h-screen bg-mono-900">
      {showGlobalSidebar && <NavbarDashboard isAdmin={isAdmin} />}

      {showGlobalSidebar ? (
        <Sidebar
          items={isAdmin ? adminItems : participantItems}
        />
      ) : null}

      <main className={showGlobalSidebar ? "flex-1 sm:ml-64 mt-14 overflow-y-auto p-4" : "flex-1 mt-14 overflow-y-auto p-4"}>
        {children}
      </main>
    </div>
  );
}
