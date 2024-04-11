'use client';

import Footer from "@/componenets/Footer/Footer";
import Header from "@/componenets/Header/Header";
import { useState } from "react";
import './contact.css';
import ContacthtmlForm from "@/componenets/ContactForm/ContactForm";


export default function Contact() {
    return (
        <div>
            <Header />
            <ContacthtmlForm/>
            <Footer />
        </div>
    )
}