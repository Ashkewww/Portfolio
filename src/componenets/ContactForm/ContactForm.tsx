"use client";
import supabase from "@/config/supabase-client";
import { useState } from "react";

export default function ContacthtmlForm() {
    var [formData, setFormData] = useState({
        name: null,
        phone: null,
        email: null,
        message: null
    });
    const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
    const handleOnSubmit = async () => {
        const { data, error } = await supabase
            .from("Contacts")
            .insert([
                formData
            ])
            .select();
        if (error) {
            console.log(error);
        } else {
            setFormData({
                name: null,
                phone: null,
                email: null,
                message: null
            })
        }
    }

    return (
        <section className="body-font relative background-global text-gray-400 ">
            <div className="container mx-auto px-5 py-24">
                <div className="mb-12 flex w-full flex-col text-center">
                    <h1 className="title-font mb-4 text-2xl lg:text-5xl font-medium text-white sm:text-3xl">Contact Me</h1>
                    <p className="mx-auto text-base leading-relaxed lg:w-2/3">Feel free to reach out for anything!
                    </p>
                </div>
                <div className="mx-auto md:w-2/3 lg:w-1/2 ">
                    <div className="-m-2 flex flex-wrap">
                        <div className="w-1/2 p-2">
                            <div className="relative">
                                <input type="text" id="name" name="name" className="peer w-full rounded border border-gray-700 background-global-light bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-yellow-500" placeholder="Name" onChange={handleInputChange} />
                                <label htmlFor="name" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 transition-all text-yellow-600 peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-yellow-200 peer-placeholder-shown:text-opacity-40 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-yellow-500">Name</label>
                            </div>
                        </div>
                        <div className="w-1/2 p-2">
                            <div className="relative">
                                <input type="text" id="phone" name="phone" className="peer w-full rounded border border-gray-700 background-global-light bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-yellow-500" placeholder="Phone" onChange={handleInputChange} />
                                <label htmlFor="phone" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 transition-all text-yellow-600 peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-yellow-200 peer-placeholder-shown:text-opacity-40 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-yellow-500">Phone</label>
                            </div>
                        </div>
                        <div className="mt-4 w-full p-2">
                            <div className="relative">
                                <input type="email" id="email" name="email" className="peer w-full rounded border border-gray-700 background-global-light bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-yellow-500 " placeholder="Email" onChange={handleInputChange} />
                                <label htmlFor="email" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-yellow-600 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2  peer-placeholder-shown:text-base peer-placeholder-shown:text-yellow-200 peer-placeholder-shown:text-opacity-40 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-yellow-500">Email</label>
                            </div>
                        </div>
                        <div className="mt-4 w-full p-2">
                            <div className="relative">
                                <textarea id="message" name="message" className="peer h-32 w-full resize-none rounded border border-gray-700 background-global-light bg-opacity-40 py-1 px-3 text-base leading-6 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out  focus:border-yellow-500" placeholder="Message" onChange={handleInputChange}></textarea>
                                <label htmlFor="message" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-yellow-600 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2  peer-placeholder-shown:text-base peer-placeholder-shown:text-yellow-200 peer-placeholder-shown:text-opacity-40 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-yellow-500">Message</label>
                            </div>
                        </div>
                        <div className="w-full mt-4 flex justify-end">
                            <div className="w-1/2 p-2 flex justify-end">
                                <button onClick={handleOnSubmit} className="flex rounded border-0 bg-yellow-300 bg-opacity-100 py-2 px-8 text-lg text-yellow-950 font-semibold hover:bg-opacity-80 focus:outline-none">Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}