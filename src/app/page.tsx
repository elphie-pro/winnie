"use client"
import Heading from '@/components/heading'
import LOML from '@/components/loml'
import Love from '@/components/love'
import Stuck from '@/components/stuck'
import Evidence from '@/components/evidence'
import Far from '@/components/far'

export default function Home() {
  return (
    <div className="bg-[#EBB6D4] h-screen font-custom relative">
      {/* Background layer */}
      <div className="absolute inset-0 bg-[url('/Rectangle-11.svg')] bg-cover bg-center opacity-15" />
      {/* Content layer */}
      <div className="relative z-10">
        <Heading />
        <LOML />
        <Love />
        <Stuck />
        <Evidence />
        <Far />
      </div>
    </div>
  );
}