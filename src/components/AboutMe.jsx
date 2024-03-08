import { HoverEffect } from "./ui/card-hover-effect";

export default function AboutMe() {
    return (
        <div className="max-w-5xl mx-auto px-8 mt-11" id="about">
            <div className="w-full font-black text-center">
                <h1 className="text-[4rem]">
                    About Me
                </h1>
            </div>
            <HoverEffect items={projects} />
        </div>
    );
}
export const projects = [
    {
        title: "Hobbies",
        description:
            ["Playing a musical instrument (e.g., guitar, piano)", "Online communities or forums related to tech interests", "Traveling to new destinations"],

    },
    {
        title: "Education",
        description:
            ["Sinhgad College of Engineering, Pune 82%  (2019 - 2023)", "R.I.G College, Mohadura 12th 71.09% (2017 - 2019)", "Royal Public School (CBSE), Bhandara 10th 8.4 CGPA"],

    },
    {
        title: "Courses",
        description:
            ["Crio full stack development (March 2023 - January 2024)", "Basic App Development with Kotlin (2022)"],

    },
    {
        title: "Interest",
        description:
            ["Camping and outdoor adventures", "wildlife safari", "Exploring new destinations and cultures", "Reading self-help books or personal development literature"],

    },
    {
        title: "Achievements",
        description:
            ["Scored 94% in GeekTrust Challenge", "200+ DSA Solved"],

    },
    {
        title: "Companies",
        description:
            ["Cracked Tech-Mahindra during college", "Received a call from CodeHall for the final HR round.","Letzstepin Round in process"],

    },
];
