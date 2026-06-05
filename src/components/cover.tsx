export default function Page() {
    return (
        <div className="bg-[#EBB6D4] relative block lg:hidden">
             <div className="absolute inset-0 bg-[url('/Rectangle-11.svg')] bg-contain bg-center opacity-15" />
                <div className=" w-full block  lg:max-w-[85rem] md:max-w-[50rem]  mx-auto px-4 xl:pt-[1.5rem]  pb-40 h-screen">
                    <div className="flex justify-center items-center h-full isolate">
                        <h2 className="md:text-3xl text-2xl font-alfa text-white">Please use a bigger Screen</h2>
                    </div>
                </div>
        </div>
    );
}