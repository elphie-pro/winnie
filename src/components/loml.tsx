import Image from "next/image";
import { ScrollAnimation } from "@/app/SlideAnimation";

export default function Page() {
    return (
        <div className="bg-[#3A0517]">
             <div className="w-full block lg:max-w-[85rem] md:max-w-[50rem]  mx-auto px-4 xl:pt-[3rem] md:py-6 pb-12 h-screen">
                <div className="flex justify-between">
                    <ScrollAnimation yfrom={200} yto={0}>
                        <div >
                            <Image src="/Ellipse 1.svg" alt="" width={10} height={10} className="w-full"/>
                        </div>
                    </ScrollAnimation>
                    <div className="flex flex-col">
                        <h2 className="font-birds text-5xl">Just Who is the <span className="font-custom text-[#EBB6D4]">LOML</span></h2>
                    </div>
                </div>
             </div>
        </div>
       
    );
}