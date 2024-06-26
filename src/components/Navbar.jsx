"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="relative w-full flex items-center justify-center z-[1000]">
            <NavbarContent className="top-2" />
        </div>
    );
}

function NavbarContent({ className, threeProjects }) {
    const [active, setActive] = useState(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <Link href='/'><MenuItem setActive={setActive} active={active} item="Home" /></Link>
                <MenuItem setActive={setActive} active={active} item="Services">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/">Front End Design</HoveredLink>
                        <HoveredLink href="/">Backend Design</HoveredLink>
                        <HoveredLink href="/">Home Page Designs</HoveredLink>
                        <HoveredLink href="/">Full stack website</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Projects">
                    <div className="text-sm grid grid-cols-1 sm:grid-cols-2 gap-10 p-4">
                        <ProductItem
                            name="All"
                            href="/projects"
                            src="https://img.freepik.com/free-photo/glowing-spaceship-orbits-planet-starry-galaxy-generated-by-ai_188544-9655.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709424000&semt=sph"
                            description="Have a look at my all time best projects"
                        />
                        <ProductItem
                            name="Yoom"
                            href="https://zoom-clone-ruddy.vercel.app/"
                            src="https://i.ibb.co/XZQSm3h/Screenshot-2024-04-15-at-09-50-28.png"
                            description="Zoom Like Web Application"
                        />
                        <ProductItem
                            name="Share-Prompts"
                            href="https://share-prompts-flax.vercel.app/"
                            src="https://i.ibb.co/n3PV5Pz/Screenshot-2024-03-27-at-12-15-52.png"
                            description="Share Collaborative Prompts"
                        />
                        <ProductItem
                            name="QKart"
                            href="https://qonlineshopping.netlify.app/"
                            src="https://i.ibb.co/Nn7G057/qkart.png"
                            description="Complete Ecommerce Website"
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
