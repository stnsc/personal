import { DocumentArrowDownIcon } from "@heroicons/react/24/solid"

function Download() {
    return (
        <>
            <div className="download-div flex justify-center">
                <button type="button" className="button-download ">
                    <a
                        target="_blank"
                        href="/CV - Stanescu Vladut.pdf"
                        className="flex flex-row"
                    >
                        <DocumentArrowDownIcon className="size-6" />
                        Download the resume in a simple PDF format
                    </a>
                </button>
            </div>
        </>
    )
}

export default Download
