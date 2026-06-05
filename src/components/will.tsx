"use client"
import RotatingText from "./RotatingText";
import { ToastContainer, toast } from "react-toastify";
import Confetti from "react-confetti";
import { useState } from "react";

export default function Page() {
    const [showConfetti, setShowConfetti] = useState(false)
    const no = () => {
        toast('Wrong Option! 😡')
    }
    const yes = async () => {
        setShowConfetti(true)
        await fetch('/api/send', { method: 'POST' })
        toast('Yayyyy!! 🎉❤️')
        setTimeout(() => setShowConfetti(false), 5000)
    }
    return (
        
        <div className="bg-[#EBB6D4] relative hidden lg:block">
             {showConfetti && <Confetti />}
            <div className="absolute inset-0 bg-[url('/Rectangle-11.svg')] bg-contain bg-center opacity-15" />
                <div className=" w-full block  lg:max-w-[85rem] md:max-w-[50rem]  mx-auto px-4 xl:pt-[1.5rem]  pb-40 h-screen isolate">
                    <div className="flex flex-col gap-8 justify-center items-center h-full">
                        <h2 className="xl:text-7xl text-5xl text-[#3A0517] font-birds">Babadele Ayomide Winnifred</h2>
                            <div className="flex items-center gap-8 text-5xl ">
                                <span className="font-birds xl:text-[6rem] text-[3rem] text-[#3A0517]">Will you officially be my</span>
                                <RotatingText
                                    texts={['Girlfriend?', 'Partner?', 'Person?', 'Mine?', 'Alfredo?', 'Supreme Empress?']}
                                    mainClassName="px-2 sm:px-2 md:px-3 bg-[#3A0517] text-[#EBB6D4] font-custom overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                                    staggerFrom="last"
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    exit={{ y: "-120%" }}
                                    staggerDuration={0.025}
                                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                    rotationInterval={2000}
                                    splitBy="characters"
                                    auto
                                    loop
                                />
                        </div>
                        <div className="flex gap-10 justify-center items-center">
                            <button className="w-[12rem] h-[4rem] bg-[#C33062] text-[#fff] text-3xl rounded-xl font-syne cursor-pointer" onClick={() => {yes()}}>Yes!😝❤️🥳</button>
                            <button className="w-[7rem] h-[4rem] bg-[#C33062] text-[#fff] text-3xl rounded-xl font-syne cursor-pointer" onClick={() => {no()}}>No! 💔</button>
                            <ToastContainer theme="dark" />
                        </div>
                    </div>
                </div>
        </div>
    );
}