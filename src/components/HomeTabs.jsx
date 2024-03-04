"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";
import Link from "next/link";


export default function HomeTabs() {
    const tabs = [
        {
            title: "Projects",
            value: "projects",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white ">
                    <Link href='/projects'>
                        <DummyContent src="/assets/Tabs/project.jpeg" />
                    </Link>
                </div>
            ),
        },
        {
            title: "About",
            value: "about",
            content: (
                <Link href="#about">
                    <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white ">
                        <DummyContent src="/assets/Tabs/about.jpeg" />
                    </div>
                </Link>
            ),
        },
        {
            title: "Contact",
            value: "contact",
            content: (
                <Link href='/contact' >
                    <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white ">
                        <DummyContent src="/assets/Tabs/contact.jpeg" />
                    </div>
                </Link>
            ),
        },


    ];

    return (
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
            <Tabs tabs={tabs} />
        </div>
    );
}

const DummyContent = ({ src }) => {
    return (
        <Image
            src={src}
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-contain  h-[90%] sm:h-[100%]  absolute  inset-x-0 w-full mx-auto  hover:scale-105 hover:transition-all ease-in duration-400"
        />
    );
};
