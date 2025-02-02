import { useEffect, useState } from "react"
import {
    ChevronDoubleRightIcon,
    ArrowTopRightOnSquareIcon,
    CodeBracketIcon,
} from "@heroicons/react/24/solid"
import anime from "animejs"

interface PersonalProps {
    name: string
    url: string
    description: string
    technologies: string
}

function Personal() {
    const [data] = useState<PersonalProps[]>([
        {
            name: "NELENITE",
            description:
                "Work-in-progress, a robot for the social platform Discord, of general use, focused on a video game for API calls.",
            technologies: "Javascript, Koyeb for 24/7 Hosting",
            url: "https://github.com/nelexium/NELENITE",
        },
        {
            name: "AUTO-SERVICE",
            description:
                "Bachelors Final Project, a website system for managing various car service shops.",
            technologies:
                "React, TypeScript, Bootstrap, Express.JS, Framer Motion, PostgreSQL",
            url: "https://github.com/stnsc/AutoService-Website/tree/main",
        },
        {
            name: "WEATHER APPLICATION",
            description:
                "Personal Project for displaying weather data from any city on earth using OpenWeatherAPI.",
            technologies: "React, TypeScript, Framer Motion, Tailwind",
            url: "https://github.com/stnsc/weather-app",
        },
        {
            name: "DIGITAL HOURGLASS",
            description:
                "Master’s Project, a robotics prototype that simulates sand falling by using LED’s and a Gyroscope sensor, plus Bluetooth for IoT purposes.",
            technologies: "Arduino, Virtuino for IoT",
            url: "https://drive.google.com/file/d/1CgLry9wnZ4XLwn3fiN-dvkE1GNhrcOEd/view",
        },
        {
            name: "THIS WEBSITE!",
            description:
                "Documenting the whole design through implementation process.",
            technologies:
                "Figma, Vite, React, TypeScript, TailwindCSS, Anime.JS, Hosted on Vercel",
            url: "https://github.com/stnsc/personal",
        },
    ])

    useEffect(() => {
        anime({
            targets: ".data-entry",
            opacity: [0, 1],
            translateX: [50, 0],
            duration: 300,
            easing: "easeInOutCirc",
            delay: anime.stagger(50),
        })
    }, [data])

    return (
        <div className="container max-w-4xl mx-auto flex flex-col items-start">
            {data.map((data, index) => (
                <div key={index} className="data-entry flex flex-col w-full">
                    <div className="data-title flex flex-row items-center">
                        <h2 className="flex flex-row">
                            {" "}
                            <ChevronDoubleRightIcon className="size-6" />{" "}
                            {data.name}
                        </h2>
                        <div className="data-hr"></div>
                        <div className="data-link flex flex-row">
                            <a href={data.url} className="flex flex-row gap-2">
                                LINK{" "}
                                <ArrowTopRightOnSquareIcon className="size-6" />
                            </a>
                        </div>
                    </div>
                    <div className="data-desc">
                        <p className="">{data.description}</p>
                        <p className="data-tech flex flex-row gap-2">
                            <CodeBracketIcon className="size-6" />{" "}
                            {data.technologies}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Personal
