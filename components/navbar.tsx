"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu"

export default function Navbar() {
    return (
        <div className="border-b bg-white">

            <div className="max-w-7xl mx-auto flex items-center justify-between p-4">

                <h1 className="text-xl font-bold">
                    Madhavi Polymoulds LTD
                </h1>

                <NavigationMenu>
                    <NavigationMenuList>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/">Home</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/about">About</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/products">Products</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/contact">Contact</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                    </NavigationMenuList>
                </NavigationMenu>

                <Button asChild>
                    <Link href="/contact">Get Quote</Link>
                </Button>

            </div>

        </div>
    )
}