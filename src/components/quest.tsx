"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page() {
    const route = useRouter()
    return (
        <div className="bg-[#3A0517] hidden lg:block">
             <div className="relative w-full block xl:max-w-[85rem] lg:max-w-[60rem]  mx-auto px-4 py-26 pb-30 h-screen">
                <div>
                    <Image alt="" src="/question.svg" width={10} height={10} className="w-1/8 absolute xl:mt-[5rem] mt-[15rem] ml-[50rem] xl:ml-[70rem]"/>
                    <Image alt="" src="/heart icon, love and favorite symbol, social media like button.svg" width={10} height={10} className="w-1/8 absolute mt-[20rem] xl:mt-[28rem] ml-[3rem] xl:ml-[-5rem]"/>
                </div>
                <div className="flex flex-col justify-center items-center h-full">
                    <h2 className="xl:text-[6.5rem] text-[4.5rem] font-birds text-[#EBB6D4]">Now. The golden question!</h2>
                    <div>
                      <button className="font-custom w-[5rem] rounded-lg h-[3rem] text-[2rem]! cursor-pointer text-[#3A0517] bg-[#EBB6D4]" onClick={() => {route.push('/')}}>Home</button>
                    </div>
                </div>
            </div>
        </div>
    );
}