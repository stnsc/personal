import { useEffect, useState } from "react"

function Background() {
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setCursorPos({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener("mousemove", updateMousePosition)

        return () => {
            window.removeEventListener("mousemove", updateMousePosition)
        }
    }, [])

    return (
        <div className="background_container">
            <div
                className="background"
                style={{
                    backgroundPosition: `${cursorPos.x * 0.02}px ${cursorPos.y * 0.02}px`,
                }}
            ></div>
            <div
                className="background_bright"
                style={{
                    backgroundPosition: `${cursorPos.x * 0.02}px ${cursorPos.y * 0.02}px`,
                    maskImage: `radial-gradient(circle 15vw at ${cursorPos.x}px ${cursorPos.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 75%)`,
                }}
            ></div>
        </div>
    )
}

export default Background
