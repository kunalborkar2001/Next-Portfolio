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
        imgUrl:
            "/assets/ProjectImages/qkart.png",
    },
    {
        name: "Qtify",
        link: "https://listenyourlove.netlify.app/",
        imgUrl:
            "/assets/ProjectImages/qtify.png",
    },
    {
        name: "Qtravel",
        link: "https://qtrip-travel-dynamic-frontend.netlify.app/",
        imgUrl:
            "/assets/ProjectImages/qtravel.png",
    },

    {
        name: "Letzstepin(Company)",
        link: "https://kunalborkar2001-letz-step-in-assessment.vercel.app/",
        imgUrl:
            "/assets/ProjectImages/letzstepinhomepage.png",
    },
    {
        name: "Letzstepin(Company) Listing",
        link: "https://tranquil-sunshine-bb8d96.netlify.app",
        imgUrl:
            "/assets/ProjectImages/letzstepinlisting1.png",
    },
    {
        name: "Letzstepin(Company)(Optimized)",
        link: "https://letzstepin-next-lstw.vercel.app/",
        imgUrl:
            "/assets/ProjectImages/letzstepinlisting2.png",
    },

    {
        name: "Casa De Silver",
        link: "https://casadesilver.netlify.app/",
        imgUrl:
            "/assets/ProjectImages/casadesilver.png",
    },
    {
        name: "Nike Landing Page",
        link: "https://fantastic-cajeta-ac419b.netlify.app",
        imgUrl:
            "/assets/ProjectImages/nike.png",
    },
    {
        name: "Zevi (Company)",
        link: "https://zevi-shop-six.vercel.app/",
        imgUrl:
            "/assets/ProjectImages/zevi.png",
    },
    {
        name: "Myntra",
        link: "https://myntrastore.netlify.app",
        imgUrl:
            "/assets/ProjectImages/myntraclone.png",
    },
];
