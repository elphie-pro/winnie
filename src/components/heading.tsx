"use client"
import Image from "next/image";

export default function Page() {
    return (
        <div className="w-full block lg:max-w-[85rem] md:max-w-[50rem]  mx-auto px-4 py-6 md:py-6 h-screen flex justify-center items center">
            <div>
                <Image alt="" src="/bouquet of white roses.svg" width={10} height={10} className="w-1/6 absolute mt-[12rem] ml-[62rem]"/>
                <Image alt="" src="/flowers.svg" width={10} height={10} className="w-1/6 absolute mt-[15rem] ml-[-13rem]"/>
            </div>
            <div className="flex justify-center items-center">
                <h1 className="text-[6.5rem] text-[#3A0517] font-birds ">Babadele Ayomide Winnifred</h1>
            </div>
            
        </div>
    );
}