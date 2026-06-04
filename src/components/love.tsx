"use client"
import Image from "next/image";

export default function Page() {
    return (
        <div className="bg-[#EBB6D4] relative">
      <div className="absolute inset-0 bg-[url('/Rectangle-11.svg')] bg-cover bg-center opacity-15" />
            <div className=" w-full block  lg:max-w-[85rem] md:max-w-[50rem]  mx-auto px-4 xl:pt-[1.5rem]  pb-16 min-h-screen">
                <div className="flex flex-col gap-10 justify-center items-center">
                    <h2 className="font-birds text-[4rem] text-[#3A0517]">She love me cause she look good beside me <br />
                    <span className="ml-[28rem]">-Odunsi the Engine</span>
                    </h2>
                    <div className="isolate">
                        <Image src="/Rectangle 7.svg" alt="" width={10} height={10} className="w-[60rem]"/>
                    </div>
                    <div className="flex justify-between isolate gap-20">
                        <Image src="/Rectangle 8.svg" alt="" width={10} height={10} className="w-[23rem]"/>
                        <Image src="/Rectangle 9.svg" alt="" width={10} height={10} className="w-[23rem]"/>
                        <Image src="/Rectangle 10.svg" alt="" width={10} height={10} className="w-[23rem]"/>

                    </div>
                </div>
            </div>
        </div>
        
    );
}