"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import Link from "next/link";

export default function ThankYou() {

    const words = [
        {
            text: "I",
        },
        {
            text: "will",
        },
        {
            text: "get",
        },
        {
            text: "back",
            className: "text-blue-500 dark:text-blue-500",
        },
        {
            text: "to",
        },
        {
            text: "you",
        },
        {
            text: "soon.",
        },
    ];

    return (
        <WavyBackground className="max-w-4xl mx-auto pb-40 flex flex-col justify-center items-center gap-5">
            <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
                Thank You
            </p>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
                <TypewriterEffectSmooth words={words} />
            </p>
            <Link href="/">
                <button className="w-[200px] px-8 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
                    <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                    <span className="relative z-20">
                        Back to Home
                    </span>
                </button>
            </Link>
        </WavyBackground>
    );
}
