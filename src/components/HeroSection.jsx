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
        thumbnail:
            "/assets/ProjectImages/qkart.png",
    },
    {
        name: "Qtify",
        link: "https://listenyourlove.netlify.app/",
        thumbnail:
            "/assets/ProjectImages/qtify.png",
    },
    {
        name: "Qtravel",
        link: "https://qtrip-travel-dynamic-frontend.netlify.app/",
        thumbnail:
            "/assets/ProjectImages/qtravel.png",
    },

    {
        name: "Letzstepin(Company)",
        link: "https://kunalborkar2001-letz-step-in-assessment.vercel.app/",
        thumbnail:
            "/assets/ProjectImages/letzstepinhomepage.png",
    },
    {
        name: "Letzstepin(Company) Listing",
        link: "https://tranquil-sunshine-bb8d96.netlify.app",
        thumbnail:
            "/assets/ProjectImages/letzstepinlisting1.png",
    },
    {
        name: "Letzstepin(Company)(Optimized)",
        link: "https://letzstepin-next-lstw.vercel.app/",
        thumbnail:
            "/assets/ProjectImages/letzstepinlisting2.png",
    },

    {
        name: "Casa De Silver",
        link: "https://casadesilver.netlify.app/",
        thumbnail:
            "/assets/ProjectImages/casadesilver.png",
    },
    {
        name: "Nike Landing Page",
        link: "https://fantastic-cajeta-ac419b.netlify.app",
        thumbnail:
            "/assets/ProjectImages/nike.png",
    },
    {
        name: "Zevi (Company)",
        link: "https://zevi-shop-six.vercel.app/",
        thumbnail:
            "/assets/ProjectImages/zevi.png",
    },
    {
        name: "Myntra",
        link: "https://myntrastore.netlify.app",
        thumbnail:
            "/assets/ProjectImages/myntraclone.png",
    },
];
