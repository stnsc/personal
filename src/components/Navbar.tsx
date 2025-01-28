import { UserIcon, BriefcaseIcon } from "@heroicons/react/24/solid"

function Navbar() {
    return (
        <div className="flex justify-center m-8">
            <div className="button-nav flex justify-center">
                <div className="button-container flex">
                    <button
                        type="button"
                        className="flex flex-row items-center button button-active"
                    >
                        <UserIcon className="size-6" /> Personal Projects
                    </button>
                    <button
                        type="button"
                        className="flex flex-row items-center button"
                    >
                        <BriefcaseIcon className="size-6" /> Work & Experience
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
