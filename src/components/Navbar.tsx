import { UserIcon, BriefcaseIcon } from "@heroicons/react/24/solid"
import { useState, useEffect, useRef } from "react"
import anime from "animejs"

interface NavbarProp {
    setActivePage: (page: string) => void
}

function Navbar({ setActivePage }: NavbarProp) {
    const [activeButton, setActiveButton] = useState("personal")
    const buttonRef = useRef(null)

    useEffect(() => {
        if (buttonRef.current) {
            anime({
                targets: buttonRef.current,
                translateX: activeButton === "personal" ? "0%" : "100%",
                duration: 300,
                easing: "easeInOutCirc",
            })
        }
    }, [activeButton])

    return (
        <>
            <div className="flex justify-center m-8">
                <div className="button-nav flex justify-center">
                    <div className="button-container flex">
                        <div className="button-active" ref={buttonRef} />
                        <button
                            type="button"
                            className={`flex flex-row items-center button ${activeButton === "personal" ? "text-active" : ""}`}
                            onClick={() => {
                                setActiveButton("personal")
                                setActivePage("personal")
                            }}
                        >
                            <UserIcon className="size-6" /> Personal Projects
                        </button>
                        <button
                            type="button"
                            className={`flex flex-row items-center button ${activeButton === "work" ? "text-active" : ""}`}
                            onClick={() => {
                                setActiveButton("work")
                                setActivePage("work")
                            }}
                        >
                            <BriefcaseIcon className="size-6" /> Work &
                            Experience
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
