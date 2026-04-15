"use client"
import Link from "next/link";
import { Button } from "../../ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "../../ui/navigation-menu";
import ListItem from "../../ui/list-item";
import { ReactElement } from "react";
import { UserIcon } from "lucide-react";

const Navbar = (): ReactElement => {
    return (
        <nav className="bg-mono-900 border-b border-mono-800 px-10 py-3 sticky top-0 z-50">
            <div className="flex items-center justify-between text-mono-50">
                <Link href={"/"} className="font-bold text-2xl">LOGO BRAND</Link>
                <NavigationMenu className="inline-flex items-center gap-5">
                            <NavigationMenuItem asChild className={navigationMenuTriggerStyle()}>
                                <Link href={"/"} className="text-lg">About</Link>
                            </NavigationMenuItem>
                        <NavigationMenuList>
                            <NavigationMenuItem className="">
                                <NavigationMenuTrigger className="text-lg font-normal">Competition</NavigationMenuTrigger>
                                <NavigationMenuContent className="bg-mono-800 text-white">
                                    <ul className=" w-80">
                                        <ListItem href="/test" title="UI/UX">
                                            a creative contest where participants design user-friendly, to solve real-world problems.
                                        </ListItem>
                                         <ListItem href="/test" title="Competitive Programming">
                                            a sport where participantsolve well-defined, logic-based algorithm and memory constraints.
                                        </ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem asChild className={navigationMenuTriggerStyle()}>
                                <Link href={"/"} className="text-lg">Guideline</Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem asChild className={navigationMenuTriggerStyle()}>
                                <Link href={"/"} className="text-lg">Timeline</Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                </NavigationMenu>
                <div className="flex items-center gap-4">
                    <Link href="/auth/login">
                    <Button className="border-mono-700 rounded-xl bg-mono-600 text-mono-100 font-bold text-md py-4 px-5">
                        Login
                        <UserIcon/>
                    </Button>
                    </Link>
                </div>
            </div>
        </nav>
    )
};

export default Navbar