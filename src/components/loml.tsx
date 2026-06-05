import Image from "next/image";
import { ScrollAnimation } from "@/app/SlideAnimation";

export default function Page() {
    return (
        <div className="bg-[#3A0517] hidden lg:block">
             <div className="w-full block xl:max-w-[85rem] lg::max-w-[60rem]  mx-auto px-4 xl:pt-[3rem] md:py-6 pb-12 h-screen">
                <div className="flex justify-between">
                    <ScrollAnimation from={-200} to={0}>
                        <div >
                            <Image src="/Ellipse 1.svg" alt="" width={10} height={10} className="xl:w-full w-[25rem] mt-[3rem] xl:mt-0"/>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation yfrom={200} yto={0}>
                        <div className="flex flex-col gap-10 justify-center items-center mt-[3rem]">
                            <h2 className="font-pete xl:text-6xl text-5xl">Just Who is the <span className="font-custom text-[#EBB6D4]">LOML</span></h2>
                            <div className="flex flex-col gap-10 xl:text-xl">
                                    <span> <span className=" text-[#EBB6D4]">Babadele Ayomide Winnifred</span> is a very beautiful, funny <br />
                                            and joyous person. She’s a very selfless person that always <br />
                                            put the needs of those important to her first. She has a <br />
                                            genuine soul that honestly makes me so happy and glad to <br />
                                            have her in my life</span>
                                <span>     A final year student Mass Communication student in <br />
                                            Babcock University, who specializes in Public Relations <br />
                                            and Advertisement (PRAD), she has very few friends, <br />
                                            closest to her is one social work babe named Roli amongst <br />
                                            others. She loves and cherishes them very very much. She <br />
                                            The only thing she loves more than her me is her family,  <br />
                                            with two brothers and a sister she absolutely adores <br />
                                            despite all her hard guy.</span>
                                <span>      With such a beautifully articulated and soft spoken <br />
                                            voice she easily captivates me whenever she’s speaking in <br />
                                            any instance. She’s always able to give me the most <br />
                                            comforting hugs whenever im in need of one. Actively <br />
                                            causing my mind to race with scenarios of two of us doing <br />
                                            almost any and everything possible.</span>
                            </div>
                            

                        </div>
                    </ScrollAnimation>
                    
                </div>
             </div>
        </div>
       
    );
}