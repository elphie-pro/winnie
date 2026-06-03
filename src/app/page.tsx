"use client"
import Heading from '@/components/heading'

export default function Home() {
  return (
    <div className="bg-[#EBB6D4] h-screen overflow-hidden font-custom relative">
      {/* Background layer */}
      <div className="absolute inset-0 bg-[url('/Rectangle-11.svg')] bg-cover bg-center opacity-15" />
      
      {/* Content layer */}
      <div className="relative z-10">
        <Heading />
      </div>
    </div>
  );
}