import React from 'react'
import { FaFacebook, FaInstagramSquare,FaLinkedin} from "react-icons/fa";
import {FaSquareXTwitter,FaRegRegistered, FaTrademark} from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";
import { HiOutlineLifebuoy } from "react-icons/hi2"
const Footer = () => {
  return (
    <div className='flex justify-center bg-red-700'>
       <div className='flex flex-col justify-between gap-8 items-center w-[80%] mt-4 mb-4 bg-slate-900 text-white font-bold rounded-[30px]'>
        <div className='flex flex-row  gap-[20%] justify-center w-3/4 mt-2 mb-2'>
            <div className='flex items-center'><FaFacebook className='mr-2'/><a href="/">Facebook</a></div>
            <div className='flex items-center'><FaLinkedin className='mr-2'/><a href="/">Linkedin</a></div>
            <div className='flex items-center'><FaInstagramSquare className='mr-2'/><a href="/">Instagram</a></div>
            <div className='flex items-center'><FaSquareXTwitter className='mr-2'/><a href="/">X</a></div>
            
        </div>
        <div className='flex items-center'><RiCustomerService2Fill className='mr-2'/><h3>Customer Care Helpline: 1800 1800 1800 /AAhelp@gmail.com</h3></div>
        <div className='flex items-center  '><HiOutlineLifebuoy className='font-bold text-2xl text-red-700'/><h2 className='text-2xl text-red-700'>Artistry Atelier</h2><FaRegRegistered className='ml-2'/><FaTrademark className='ml-2 mr-1'/> 2024</div>
    </div>
    </div>
   
  )
}

export default Footer