"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export default function HeroSection({ topTen }) {
    return <HeroParallax products={topTen} />;
}
export const products = [
    {
        name: "Qkart",
        liveLink: "https://qonlineshopping.netlify.app/",
        imgLink:
            "https://i.ibb.co/Nn7G057/qkart.png",
    },
    {
        name: "Qtify",
        liveLink: "https://listenyourlove.netlify.app/",
        imgLink:
            "https://i.ibb.co/yYtnQjQ/qtify.png",
    },
    {
        name: "Qtravel",
        liveLink: "https://qtrip-travel-dynamic-frontend.netlify.app/",
        imgLink:
            "https://i.ibb.co/MGB11TV/qtravel.png",
    },

    {
        name: "Letzstepin(Company)",
        liveLink: "https://kunalborkar2001-letz-step-in-assessment.vercel.app/",
        imgLink:
            "https://i.ibb.co/bJ3rLN2/letzstepinhomepage.png",
    },
    {
        name: "Letzstepin(Company) Listing",
        liveLink: "https://tranquil-sunshine-bb8d96.netlify.app",
        imgLink:
            "https://i.ibb.co/rsWKBbQ/letzstepinlisting1.png",
    },
    {
        name: "Letzstepin(Company)(Optimized)",
        liveLink: "https://letzstepin-next-lstw.vercel.app/",
        imgLink:
            "https://i.ibb.co/DfQwBT1/letzstepinlisting2.png",
    },

    {
        name: "Casa De Silver",
        liveLink: "https://casadesilver.netlify.app/",
        imgLink:
            "https://i.ibb.co/B2FNVj5/casadesilver.png",
    },
    {
        name: "Nike Landing Page",
        liveLink: "https://fantastic-cajeta-ac419b.netlify.app",
        imgLink:
            "https://i.ibb.co/99fpGK5/nike.png",
    },
    {
        name: "Zevi (Company)",
        liveLink: "https://zevi-shop-six.vercel.app/",
        imgLink:
            "https://i.ibb.co/xXCNDbv/zevi.png",
    },
    {
        name: "Myntra",
        liveLink: "https://myntrastore.netlify.app",
        imgLink:
            "https://i.ibb.co/kgqvTfd/myntraclone.png",
    },
];
