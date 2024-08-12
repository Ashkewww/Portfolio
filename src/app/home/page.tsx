"use-client";

import Footer from "@/componenets/Footer/Footer";
import Header from "@/componenets/Header/Header"
import Hero from "@/componenets/Hero/Hero"
// import React, { useState } from "react";

export default function Home() {
    // var [currentPage, setCurrentPage] = useState("home");
    return (
        <div>
            <Header />
            <Hero />
            <Footer />
        </div>
    )
}