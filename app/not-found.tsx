"use client";
import dynamic from 'next/dynamic';
import Link from 'next/link'
 
const NotFound = () => {
  return (
    <div className='text-black  h-screen flex flex-col justify-center items-center gap-y-10'>
      <h2 className=' page-size'>404</h2>
      <Link href="/" className=''>Ana Sayfa</Link>
    </div>
  )
}
export default dynamic(() => Promise.resolve(NotFound), { ssr: false });