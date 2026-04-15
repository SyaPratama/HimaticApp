"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { menuType } from "@/types";
import Link from "next/link";

interface Navbar {
    isAdmin: boolean
}


const menuGroup: Record<string, menuType[]> = {
  account: [
    {
      name: "Profile",
      shortcut: false,
      href: "participant/profile",
    },
    {
      name: "Settings",
      shortcut: false,
      href: "participant/settings",
    },
    {
      name: "Payment",
      shortcut: false,
      href: "participant/payment",
    },
  ],
};

const NavbarDashboard: React.FC<Navbar> = ({ isAdmin }) => {
  return (
    <nav className="bg-mono-800 border-b border-mono-700 px-10 py-3 fixed top-0 w-full z-50">
      <div className="flex items-center justify-between text-mono-50">

        <Link href={isAdmin ? "/dashboard/admin" : "/dashboard/participant"}>
            <span className="font-bold text-2xl">LOGO BRAND</span>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="w-10 h-10">
              <AvatarImage src={"/images/avatar-placeholder.png"} />
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48 mr-4 mt-2 p-2 bg-mono-700 text-mono-100">
            { !isAdmin ? 
            <DropdownMenuGroup className="space-y-1 border-b py-2 border-b-mono-500/50">
              <DropdownMenuLabel className="text-mono-400">
                My Account
              </DropdownMenuLabel>
              {menuGroup.account.map((item) => (
                <Link href={item.href} key={item.name}>
                  <DropdownMenuItem className="px-3 py-2">
                    {item.name}
                    {item.shortcut ? (
                      <DropdownMenuShortcut>
                        {item.shortcutIcon}
                      </DropdownMenuShortcut>
                    ) : (
                      <></>
                    )}
                  </DropdownMenuItem>
                </Link>
              ))}
            </DropdownMenuGroup>
            : <></>
              }
            <DropdownMenuGroup className="py-2">
                <DropdownMenuLabel className="text-mono-400">
                    System
                </DropdownMenuLabel>
              <DropdownMenuItem className="px-3 py-2">Logout</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default NavbarDashboard;
