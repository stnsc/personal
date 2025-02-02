import { useState } from "react"
import Background from "./components/Background"
import Navbar from "./components/Navbar"
import Personal from "./components/Personal"
import Title from "./components/Title"
import Work from "./components/Work"

function App() {
    const [activePage, setActivePage] = useState("personal")

    return (
        <>
            <Background />
            <Title />
            <Navbar setActivePage={setActivePage} />
            {activePage === "personal" ? <Personal /> : <Work />}
        </>
    )
}

export default App
