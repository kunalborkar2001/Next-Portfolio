"use client";

import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "../utils/cn";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-[5rem]">
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

            <Boxes />
            <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
                Feel Free To Contact Me
            </h1>
            <p className="text-center mt-2 text-neutral-300 relative z-20">
                I will be glad to know about you lets connect
            </p>

            <Link href='/contact'>
                <div className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-black border border-white text-white  rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 mt-2">
                    Contact Me
                </div>
            </Link>
        </div>
    );
}
