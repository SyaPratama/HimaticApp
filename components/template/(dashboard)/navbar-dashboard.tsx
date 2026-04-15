"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { CardSim, Settings, UserIcon } from "lucide-react";
import { ReactElement } from "react";

const menuGroup: Record<string, menuType[]> = {
  account: [
    {
      name: "Profile",
      shortcut: true,
      shortcutIcon: <UserIcon />,
    },
    {
      name: "Settings",
      shortcut: true,
      shortcutIcon: <Settings />,
    },
    {
      name: "Payment",
      shortcut: true,
      shortcutIcon: <CardSim />,
    },
  ],
};

const NavbarDashboard = (): ReactElement => {
  return (
    <nav className="bg-mono-800 border-b border-mono-700 px-10 py-3 fixed top-0 w-full z-50">
      <div className="flex items-center justify-between text-mono-50">
        <span className="font-bold text-2xl">LOGO BRAND</span>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="w-10 h-10">
              <AvatarImage src={"/images/avatar-placeholder.png"} />
              <AvatarFallback>Avatar Placeholder</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48 mr-4 mt-2 p-3 bg-mono-700 text-mono-100">
            <DropdownMenuGroup className="space-y-1 border-b py-2 border-b-mono-500/50">
              <DropdownMenuLabel className="text-mono-400">My Account</DropdownMenuLabel>
              {menuGroup.account.map((item) => (
                <DropdownMenuItem key={item.name} className="px-3 py-2">
                  {item.name}
                  <DropdownMenuShortcut>
                    {item.shortcutIcon}
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
            <DropdownMenuGroup className="py-2">
                <DropdownMenuItem className="px-3 py-2">Logout</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default NavbarDashboard;
