import anime from "animejs"
import { useEffect } from "react"

function Title() {
    useEffect(() => {
        anime({
            targets: ".title-div",
            scaleX: [0, 1],
            scaleY: [0, 1],
            opacity: [0, 1],
            duration: 1000,
            easing: "easeInOutCirc",
        })
    }, [])

    return (
        <div className="title-div flex flex-col text-center m-8">
            <h1 className="uppercase underline text-5xl title-font">
                stanescu vladut-george
            </h1>
            <p className="text-2xl">
                Brasov - stanescuvladutgeorge@gmail.com - +40 751870213
            </p>
            <div className="text-2xl">
                <a
                    className="underline"
                    href="https://github.com/stnsc"
                    target="_blank"
                >
                    github/stnsc
                </a>{" "}
                -{" "}
                <a
                    className="underline"
                    href="https://github.com/nelexium"
                    target="_blank"
                >
                    github/nelexium
                </a>
            </div>
        </div>
    )
}

export default Title
