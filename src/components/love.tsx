"use client"
import Image from "next/image";
import { ScrollAnimation } from "@/app/SlideAnimation";

export default function Page() {
    return (
        <div className="bg-[#EBB6D4] relative">
      <div className="absolute inset-0 bg-[url('/Rectangle-11.svg')] bg-contain bg-center opacity-15" />
            <div className=" w-full block  lg:max-w-[85rem] md:max-w-[50rem]  mx-auto px-4 xl:pt-[1.5rem]  pb-16 min-h-screen">
                <div className="flex flex-col gap-10 justify-center items-center">
                        <ScrollAnimation yfrom={-200} yto={0}>
                    <h2 className="font-birds text-[4rem] text-[#3A0517]">She love me cause she look good beside me <br />
                    <span className="ml-[28rem]">-Odunsi the Engine</span>
                    </h2></ScrollAnimation>
                    <div className="isolate">
                        <ScrollAnimation yfrom={-200} yto={0}>
                            <Image src="/Rectangle 7.svg" alt="" width={10} height={10} className="w-[60rem]"/>
                        </ScrollAnimation>
                    </div>
                    <div className="flex justify-between isolate gap-20">
                        <ScrollAnimation from={-200} to={0}>
                            <Image src="/Rectangle 8.svg" alt="" width={10} height={10} className="w-[23rem]"/>
                        </ScrollAnimation>
                        <ScrollAnimation yfrom={200} yto={0}>
                            <Image src="/Rectangle 9.svg" alt="" width={10} height={10} className="w-[23rem]"/>
                        </ScrollAnimation>
                        <ScrollAnimation from={200} to={0}>
                            <Image src="/Rectangle 10.svg" alt="" width={10} height={10} className="w-[23rem]"/>
                        </ScrollAnimation>
                        

                    </div>
                </div>
            </div>
        </div>
        
    );
}