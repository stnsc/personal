import { useState } from "react"
import {
    ChevronDoubleRightIcon,
    ArrowTopRightOnSquareIcon,
    CodeBracketIcon,
} from "@heroicons/react/24/solid"

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
            url: "",
        },
        {
            name: "AUTO-SERVICE",
            description:
                "Bachelors Final Project, a website system for managing various car service shops.",
            technologies:
                "React, TypeScript, Bootstrap, Express.JS, PostgreSQL",
            url: "",
        },
        {
            name: "PRINTABLES",
            description:
                "Personal Project in development, a website based on selling 3D printed gadgets.",
            technologies:
                "Figma, React, TypeScript, Tailwind, Vercel for hosting",
            url: "",
        },
        {
            name: "DIGITAL HOURGLASS",
            description:
                "Master’s Project, a robotics prototype that simulates sand falling by using LED’s and a Gyroscope sensor, plus Bluetooth for IoT purposes.",
            technologies: "Arduino, Virtuino for IoT",
            url: "",
        },
        {
            name: "THIS WEBSITE!",
            description:
                "Documenting the whole design through implementation process.",
            technologies: "Figma, Vite, React, TailwindCSS",
            url: "",
        },
    ])

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
                            <a href="#" className="flex flex-row gap-2">
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
