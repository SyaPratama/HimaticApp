"use client"

import * as React from "react";
import { NavigationMenuLink } from "./navigation-menu";
import Link from "next/link";

const ListItem = ({
    title, children, href, ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) => {
    return (
        <li {...props}>
            <NavigationMenuLink asChild className="bg-inherit">
                <Link href={href}>
                    <div className="flex flex-col gap-1 text-sm">
                        <div className="leading-none font-medium">{title}</div>
                        <div className="line-clamp-2 text-muted-foreground">{children}</div>
                    </div>
                </Link>
            </NavigationMenuLink>
        </li>
    )    
}

export default ListItem