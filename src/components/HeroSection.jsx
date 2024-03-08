"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export default function HeroSection() {
    return <HeroParallax products={products} />;
}
export const products = [
    {
        name: "Qkart",
        link: "https://qonlineshopping.netlify.app/",
        imgLink:
            "https://i.ibb.co/Nn7G057/qkart.png",
    },
    {
        name: "Qtify",
        link: "https://listenyourlove.netlify.app/",
        imgLink:
            "https://i.ibb.co/yYtnQjQ/qtify.png",
    },
    {
        name: "Qtravel",
        link: "https://qtrip-travel-dynamic-frontend.netlify.app/",
        imgLink:
            "https://i.ibb.co/MGB11TV/qtravel.png",
    },

    {
        name: "Letzstepin(Company)",
        link: "https://kunalborkar2001-letz-step-in-assessment.vercel.app/",
        imgLink:
            "https://i.ibb.co/bJ3rLN2/letzstepinhomepage.png",
    },
    {
        name: "Letzstepin(Company) Listing",
        link: "https://tranquil-sunshine-bb8d96.netlify.app",
        imgLink:
            "https://i.ibb.co/rsWKBbQ/letzstepinlisting1.png",
    },
    {
        name: "Letzstepin(Company)(Optimized)",
        link: "https://letzstepin-next-lstw.vercel.app/",
        imgLink:
            "https://i.ibb.co/DfQwBT1/letzstepinlisting2.png",
    },

    {
        name: "Casa De Silver",
        link: "https://casadesilver.netlify.app/",
        imgLink:
            "https://i.ibb.co/B2FNVj5/casadesilver.png",
    },
    {
        name: "Nike Landing Page",
        link: "https://fantastic-cajeta-ac419b.netlify.app",
        imgLink:
            "https://i.ibb.co/99fpGK5/nike.png",
    },
    {
        name: "Zevi (Company)",
        link: "https://zevi-shop-six.vercel.app/",
        imgLink:
            "https://i.ibb.co/xXCNDbv/zevi.png",
    },
    {
        name: "Myntra",
        link: "https://myntrastore.netlify.app",
        imgLink:
            "https://i.ibb.co/kgqvTfd/myntraclone.png",
    },
];
