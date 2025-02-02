interface WorkProps {
    name: string
    description: string
    timeframe: string
}

import { ChevronDoubleRightIcon, ClockIcon } from "@heroicons/react/24/solid"
import anime from "animejs"

import { useEffect, useState } from "react"

function Work() {
    const [data] = useState<WorkProps[]>([
        {
            name: "TECHNICAL SUPPORT, AOL/YAHOO - CGS Romania",
            description:
                "Helping users through the platform Salesforce to fix and enhance their experience through email support.",
            timeframe: "December 2024 - Present",
        },
        {
            name: "hr",
            description: "",
            timeframe: "",
        },
        {
            name: "COMPUTER SCIENCE BACHELOR GRADUATE",
            description:
                "Received at the Polytechnic Institute of Bucharest, University Centre of Pitești.",
            timeframe: "October 2021 - July 2024",
        },
        {
            name: "ONGOING MASTER’S, INTERNET TECHNOLOGIES",
            description: "Studying at Transilvania University of Brașov.",
            timeframe: "October 2024 - Present",
        },
        {
            name: "hr",
            description: "",
            timeframe: "",
        },
        {
            name: "SPECIALTY PRACTICE, ROWEB DEVELOPMENT, PITEȘTI",
            description:
                "Studied and practiced Web Development in the Second Year of Bachelors.",
            timeframe: "July 2023 - August 2023",
        },
        {
            name: "ENDAVA4STUDENTS COURSE",
            description:
                "Learning about Web Development Technologies and practices, Java fundamentals, PostgreSQL, HTML, CSS, JavaScript, React.",
            timeframe: "October 2023 - February 2024",
        },
    ])

    useEffect(() => {
        anime({
            targets: ".data-entry",
            opacity: [0, 1],
            translateX: [-50, 0],
            duration: 300,
            easing: "easeInOutCirc",
            delay: anime.stagger(50),
        })
    }, [data])

    return (
        <div className="container max-w-4xl mx-auto flex flex-col items-start">
            {data.map((data, index) => (
                <>
                    {data.name == "hr" && <hr className="work-hr" />}
                    {data.name != "hr" && (
                        <div
                            key={index}
                            className="data-entry flex flex-col w-full"
                        >
                            <div className="data-title flex flex-row items-center">
                                <h2 className="flex flex-row">
                                    {" "}
                                    <ChevronDoubleRightIcon className="size-6" />{" "}
                                    {data.name}
                                </h2>
                            </div>
                            <div className="data-desc">
                                <p className="">{data.description}</p>
                                <p className="data-tech flex flex-row gap-2">
                                    <ClockIcon className="size-6" />{" "}
                                    {data.timeframe}
                                </p>
                            </div>
                        </div>
                    )}
                </>
            ))}
        </div>
    )
}

export default Work
