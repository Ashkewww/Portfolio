import './Footer.css';




export default function Footer() {
    return (
        <footer className="relative footer-bg pt-8 pb-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap text-left text-center">
                    <div className="w-full  px-4">
                        <h4 className="text-3xl fonat-semibold text-blueGray-700">Let&apos;s keep in touch!</h4>
                        <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                            Find me on any of these platforms!
                        </h5>
                        <div className="mt-6 lg:mb-0 mb-6 flex justify-center ">
                            <div className='flex justify-center align-top m-2'>
                                <a href="https://twitter.com/ashkewww" target='_blank'>
                                    <img className="h-10 w-10" src="./images/icons/twitter-x.svg" alt="twitter icon" width={32} height={32} />
                                </a>
                            </div>
                            <div className='flex justify-center align-top m-2'>
                                <a href="https://www.instagram.com/ashkewww" target='_blank'>
                                    <img className="h-10 w-8" src="./images/icons/instagram.svg" alt="twitter icon" width={32} height={32} />
                                </a>
                            </div>
                            {/*
                            <button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <i className="fab fa-dribbble"></i>
                            </button>
                            <button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <i className="fab fa-github"></i>
                            </button> */}
                        </div>
                    </div>
                    {/* <div className="w-full lg:w-6/12 px-4">
                        <div className="flex flex-wrap items-top mb-6">
                            
                            <div className="w-full lg:w-4/12 px-4">
                                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">MIT License</a>
                                    </li>
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</a>
                                    </li>
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/contact-us?ref=njs-profile">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> */}
                </div>
                <hr className="my-6 border-black " />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-blueGray-500 font-semibold py-1">
                            Copyright © <span id="get-current-year">2024</span>
                            &nbsp; Ayush Chandan
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
