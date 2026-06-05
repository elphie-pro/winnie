import CircularGallery from "@/app/CircularGallery";

const items: { image: string; text:string}[] =[
    { image: '/ayo/IMG-20260603-WA0006.jpg', text:'' },
    { image: '/ayo/IMG-20260603-WA0007.jpg', text:'' },
    { image: '/ayo/IMG-20260603-WA0008.jpg', text:'' },
    { image: '/ayo/IMG-20260603-WA0010.jpg', text:'' },
    { image: '/ayo/IMG-20260603-WA0011.jpg', text:'' },
    { image: '/ayo/IMG-20260603-WA0012.jpg', text:'' },
    { image: '/ayo/IMG-20260603-WA0014.jpg', text:'' },
    { image: '/ayo/IMG-20260603-WA0015.jpg', text:'' },
    { image: '/ayo/IMG-20260603-WA0016.jpg', text:'' },
    { image: '/ayo/IMG-20260603-WA0017.jpg', text:'' },
    { image: '/ayo/Snapchat-6638621.jpg', text:'' },
    { image: '/ayo/Snapchat-43839006.jpg', text:'' },
    { image: '/ayo/Snapchat-106488433.jpg', text:'' },
    { image: '/ayo/Snapchat-419313270.jpg', text:'' },
    { image: '/ayo/Snapchat-681094218.jpg', text:'' },
]

export default function Page() {
    return (
        <div className="bg-[#EBB6D4] relative">
            <div className="absolute inset-0 bg-[url('/Rectangle-11.svg')] bg-contain bg-center opacity-15" />
                 <div className="relative z-10 w-full lg:max-w-[85rem] md:max-w-[50rem] mx-auto px-4 xl:pt-[1.5rem] pb-12 min-h-screen">
                     <div className="flex flex-col justify-center items-center gap-10 text-[#3A0517]">
                        <h2 className="font-syne text-7xl">WHY I&apos;M A FINISHED MAN!😝</h2>
                            <div className="w-full lg:max-w-[85rem] md:max-w-[50rem]" style={{ height: '600px', position: 'relative' }}>
                                <CircularGallery
                                    items={items}
                                    bend={1}
                                    textColor="#ffffff"
                                    borderRadius={0.05}
                                    scrollEase={0.05}
                                    fontUrl=""
                                    font="bold 30px Orbitron"
                                    scrollSpeed={2}
                                />
                            </div>
                        <h2 className="font-syne text-5xl">Scroll sideways...</h2>
                    </div>
                </div>
        </div>

    );
}