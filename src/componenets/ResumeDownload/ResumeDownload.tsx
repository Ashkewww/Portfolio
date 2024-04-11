

export default function ResumeDownload() {
    return (
        <section className="background-global py-12 text-yellow-200 text-opacity-80"> 
            <div className="w-1/2 mx-48 px-2">
                <h2 className="text-5xl font-bold mb-6 text-white hover:text-yellow-200 title-animation cursor-default">Resume</h2>
                <p className="text-lg mb-6  ">
                    Download my resume to learn more about my experience, skills, and qualifications.
                </p>
                <div className="flex items-center justify-center">
                    <a
                        href="/path/to/your/resume.pdf"
                        download
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    )
}