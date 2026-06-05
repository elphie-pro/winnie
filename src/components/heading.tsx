"use client"
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Page() {
    return (
        <div className="w-full block xl:max-w-[85rem] lg:max-w-[60rem]  mx-auto px-4 py-6 md:py-6 pb-12 h-screen hidden lg:block">
            <div>
                <Image alt="" src="/bouquet of white roses.svg" width={10} height={10} className="w-1/6 absolute xl:mt-[12rem] mt-[15rem] ml-[50rem] xl:ml-[70rem]"/>
                <Image alt="" src="/flowers.svg" width={10} height={10} className="w-1/6 absolute mt-[20rem] xl:mt-[15rem] ml-[-3rem] xl:ml-[-5rem]"/>
            </div>
            <div className="flex justify-center items-center h-full">
                    <h1 className="xl:text-[6.5rem] text-[4.5rem] text-[#3A0517] font-birds ">Babadele Ayomide Winnifred</h1>    
            </div>
            <div className="mt-[-6rem]">
                <Marquee autoFill={false} pauseOnHover={true} speed={40} >
                    <div className="flex gap-20 font-pete">
                        <div className="bg-[#C33062] w-[13rem] xl:h-[4.8rem] px-2 p-1 justify-center flex items-center rounded-xl md:text-lg lg:text-lg">
                            <h2 className="text-[2.5rem]">My heart</h2>
                        </div>
                        <div className="bg-[#C33062] w-[14rem] xl:h-[4.8rem] px-2 p-1 justify-center flex items-center rounded-xl md:text-lg lg:text-lg">
                            <h2 className="text-[2.5rem]">Alfredo Mi</h2>
                        </div>
                        <div className="bg-[#C33062] w-[15rem] xl:h-[4.8rem] px-2 p-1 justify-center flex items-center rounded-xl md:text-lg lg:text-lg">
                            <h2 className="text-[2.5rem]">My Ayomide</h2>
                        </div>
                        <div className="bg-[#C33062] w-[16rem] xl:h-[4.8rem] px-2 p-1 justify-center flex items-center rounded-xl md:text-lg lg:text-lg">
                            <h2 className="text-[2.5rem]">Supreme Empress</h2>
                        </div>
                    </div>
                    
                </Marquee>
            </div>
            
        </div>
    );
}