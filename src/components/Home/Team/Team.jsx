import React from 'react'
import "./style.css"
import Image from 'next/image'
import yusufImage from "@/src/assets/yusuf.jpg"
import {FaTwitter, FaFacebookF, FaLinkedinIn} from "react-icons/fa"
import Link from 'next/link'

function Team() {
  return (
    <div className='team pt-[6rem] text-center'>
        <div className="container">
            <h2 className="section-title">Meet Our Team</h2>
            <ul>
                <li className='rounded-[1rem] shadow-md p-[1.2rem] bg-white'>
                    <Image className='w-full rounded-[1rem] mb-[1.8rem] block border' src={yusufImage} alt='Developer image' width="240" height="240" />
                    <h3 className='text-text-color mb-[1.8rem] max-sm:text-[1.8rem]'>G'ayratjonov Yusuf</h3>
                    <p className='text-gray-text-color mb-[1.2rem] max-md:text-[1.6rem]'>Full-stack Developer</p>
                    <div className='flex justify-center gap-6'>
                        <Link className='text-white flex items-center justify-center rounded-full w-[35px] h-[35px] bg-[#0077B5]' href="/">
                            <FaFacebookF className='text-2xl'/>
                        </Link>
                        <Link className='text-white flex items-center justify-center rounded-full w-[35px] h-[35px] bg-[#1DA1F2]' href="/">
                            <FaTwitter className='text-2xl'/>
                        </Link>
                        <Link className='text-white flex items-center justify-center rounded-full w-[35px] h-[35px] bg-[#4D77CF]' href="/">
                            <FaLinkedinIn className='text-2xl'/>
                        </Link>
                    </div>
                </li>
                <li className='rounded-[1rem] shadow-md p-[1.2rem] bg-white'>
                    <Image className='w-full rounded-[1rem] mb-[1.8rem] block border' src={yusufImage} alt='Developer image' width="240" height="240" />
                    <h3 className='text-text-color mb-[1.8rem] max-sm:text-[1.8rem]'>G'ayratjonov Yusuf</h3>
                    <p className='text-gray-text-color mb-[1.2rem] max-md:text-[1.6rem]'>Full-stack Developer</p>
                    <div className='flex justify-center gap-6'>
                        <Link className='text-white flex items-center justify-center rounded-full w-[35px] h-[35px] bg-[#0077B5]' href="/">
                            <FaFacebookF className='text-2xl'/>
                        </Link>
                        <Link className='text-white flex items-center justify-center rounded-full w-[35px] h-[35px] bg-[#1DA1F2]' href="/">
                            <FaTwitter className='text-2xl'/>
                        </Link>
                        <Link className='text-white flex items-center justify-center rounded-full w-[35px] h-[35px] bg-[#4D77CF]' href="/">
                            <FaLinkedinIn className='text-2xl'/>
                        </Link>
                    </div>
                </li>
                <li className='rounded-[1rem] shadow-md p-[1.2rem] bg-white'>
                    <Image className='w-full rounded-[1rem] mb-[1.8rem] block border' src={yusufImage} alt='Developer image' width="240" height="240" />
                    <h3 className='text-text-color mb-[1.8rem] max-sm:text-[1.8rem]'>G'ayratjonov Yusuf</h3>
                    <p className='text-gray-text-color mb-[1.2rem] max-md:text-[1.6rem]'>Full-stack Developer</p>
                    <div className='flex justify-center gap-6'>
                        <Link className='text-white flex items-center justify-center rounded-full w-[35px] h-[35px] bg-[#0077B5]' href="/">
                            <FaFacebookF className='text-2xl'/>
                        </Link>
                        <Link className='text-white flex items-center justify-center rounded-full w-[35px] h-[35px] bg-[#1DA1F2]' href="/">
                            <FaTwitter className='text-2xl'/>
                        </Link>
                        <Link className='text-white flex items-center justify-center rounded-full w-[35px] h-[35px] bg-[#4D77CF]' href="/">
                            <FaLinkedinIn className='text-2xl'/>
                        </Link>
                    </div>
                </li>
                <li className='rounded-[1rem] shadow-md p-[1.2rem] bg-white'>
                    <Image className='w-full rounded-[1rem] mb-[1.8rem] block border' src={yusufImage} alt='Developer image' width="240" height="240" />
                    <h3 className='text-text-color mb-[1.8rem] max-sm:text-[1.8rem]'>G'ayratjonov Yusuf</h3>
                    <p className='text-gray-text-color mb-[1.2rem] max-md:text-[1.6rem]'>Full-stack Developer</p>
                    <div className='flex justify-center gap-6'>
                        <Link className='text-white flex items-center justify-center rounded-full w-[35px] h-[35px] bg-[#0077B5]' href="/">
                            <FaFacebookF className='text-2xl'/>
                        </Link>
                        <Link className='text-white flex items-center justify-center rounded-full w-[35px] h-[35px] bg-[#1DA1F2]' href="/">
                            <FaTwitter className='text-2xl'/>
                        </Link>
                        <Link className='text-white flex items-center justify-center rounded-full w-[35px] h-[35px] bg-[#4D77CF]' href="/">
                            <FaLinkedinIn className='text-2xl'/>
                        </Link>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Team