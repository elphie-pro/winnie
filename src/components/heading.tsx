"use client"
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Page() {
    return (
        <div className="w-full block lg:max-w-[85rem] md:max-w-[50rem]  mx-auto px-4 py-6 md:py-6 pb-12 h-screen">
            <div>
                <Image alt="" src="/bouquet of white roses.svg" width={10} height={10} className="w-1/6 absolute mt-[12rem] ml-[70rem]"/>
                <Image alt="" src="/flowers.svg" width={10} height={10} className="w-1/6 absolute mt-[15rem] ml-[-5rem]"/>
            </div>
            <div className="flex justify-center items-center h-full">
                    <h1 className="text-[6.5rem] text-[#3A0517] font-birds ">Babadele Ayomide Winnifred</h1>    
            </div>
            <div className="mt-[-10rem]">
                <Marquee autoFill={false} pauseOnHover={true} speed={40} >
                    <div className="flex gap-5">
                        <span>John</span>
                    <span>John</span>
                    <span>John</span>
                    <span>John</span>
                    <span>John</span>
                    </div>
                    
                </Marquee>
            </div>
            
        </div>
    );
}