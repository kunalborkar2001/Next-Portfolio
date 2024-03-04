"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="relative w-full flex items-center justify-center ">
            <NavbarContent className="top-2" />
        </div>
    );
}

function NavbarContent({ className }) {
    const [active, setActive] = useState(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Home" />
                <MenuItem setActive={setActive} active={active} item="Services">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/">Front End Design</HoveredLink>
                        <HoveredLink href="/">Bancend Design</HoveredLink>
                        <HoveredLink href="/">Home Page Designs</HoveredLink>
                        <HoveredLink href="/">Full stack website</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Projects">
                    <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                        <ProductItem
                            title="All"
                            href="/projects"
                            src="https://img.freepik.com/free-photo/glowing-spaceship-orbits-planet-starry-galaxy-generated-by-ai_188544-9655.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709424000&semt=sph"
                            description="Have a look at my all time best projects"
                        />
                        <ProductItem
                            title="QKart"
                            href="#!"
                            src="/assets/qkart.png"
                            description="Complete Ecommerce Website"
                        />
                        <ProductItem
                            title="Qtify"
                            href="#!"
                            src="/assets/qtify.png"
                            description="Music website like spotify"
                        />
                        <ProductItem
                            title="Qtravel"
                            href="#!"
                            src="/assets/qtravel.png"
                            description="Travel Booking site"
                        />
                    </div>
                </MenuItem>
                <Link href="/contact">
                    <MenuItem setActive={setActive} active={active} item="Contact Me" />
                </Link>
            </Menu>
        </div>
    );
}
