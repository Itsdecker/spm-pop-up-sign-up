"use client";

import Image from "next/image";

import SpmLogo from '@/public/spm-logo.png';
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return <div className='flex items-center justify-between w-full gap-4 px-6 py-4 overflow-hidden border-b shadow-md'>
    <div className="w-[200px] cursor-pointer" onClick={() => router.push('/')}>
      <Image alt="Star Performance" src={SpmLogo} layout="responsive" width={200} height={100} />
    </div>
    <div className="grow">
      <p className="link" onClick={() => router.push('/prices')}>Prices</p>
    </div>
    <button className="primary" onClick={() => router.push('/login')}>Login</button>
  </div>
}
