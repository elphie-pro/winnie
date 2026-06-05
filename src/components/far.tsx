"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ScrollAnimation } from "@/app/SlideAnimation";

export default function Page() {
    const route = useRouter()
    return (
        <div className="bg-[#3A0517] hidden lg:block">
             <div className="w-full block lg:max-w-[85rem] md:max-w-[50rem]  mx-auto px-4 xl:pt-[3rem] md:py-6 pb-12 h-screen">
                <div>
                    <ScrollAnimation from={200} to={0}>
                        <Image alt="" src="/Rectangle 34.svg" width={300} height={300} className="w-1/6 absolute xl:mt-[4rem] mt-[7rem] ml-[47rem] xl:ml-[58rem]"/>
                    </ScrollAnimation>
                    <ScrollAnimation from={-200} to={0}>
                        <Image alt="" src="/Rectangle 35.svg" width={10} height={10} className="w-1/6 absolute xl:mt-[28rem] mt-[30rem] ml-[1rem] xl:ml-[-1rem] rotate-355"/>
                    </ScrollAnimation>
                </div>
                <div className="flex flex-col justify-center items-center font-syne text-7xl gap-10 h-full">
                    <h2>Okay Ayomide!</h2>
                    <h2>You&apos;ve made it this far😝</h2>
                    <button className="w-[15rem] text-3xl h-[4rem] bg-[#EBB6D4] rounded-2xl text-black cursor-pointer" onClick={() => { route.push('/') }}>Lets finish this!</button>
                </div>
            </div>
        </div>
    );
}