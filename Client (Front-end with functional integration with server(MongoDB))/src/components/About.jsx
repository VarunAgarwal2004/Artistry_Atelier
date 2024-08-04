import React from 'react'
import original from "../assets/original.png"
import openness from "../assets/openness.png"
import decency from "../assets/decency.png"
import courage from "../assets/courage.png"
import forartists from"../assets/forartists.png"
import forbuyers from"../assets/forbuyers.png"  
import { HiOutlineLifebuoy } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import { FaTruck,FaRegImage } from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";
import { IoPerson } from "react-icons/io5";
const About = () => {
  return (
    <div>
      <div>
      <div className='flex justify-center items-center'>
      <div className='flex items-center'>
          <HiOutlineLifebuoy className='text-9xl text-red-700 '/>
        </div>
      <div className='mt-[10%] w-[40%] '> 
        <h2 className='text-6xl font-bold text-center'>Artistry Atelier: the art marketplace</h2> 
        <p className='text-2xl  mt-[3%] mb-[5%] text-center' >On a mission to make art sustainable, accessible, affordable, and a joy to discover, while supporting artists to make a living doing what they love.</p>
        </div>
        <div className='flex items-center'>
          <HiOutlineLifebuoy className='text-9xl text-red-700 '/>
        </div>
      </div>
       
        <div className='w-full bg-[#15212F] text-white flex flex-col items-center '>
            <div className='flex flex-col items-center w-[50%] mt-[5%]'>
              <h2 className='font-bold text-4xl'>
              Our mission for a better art world
              </h2>
              <p className='font-semibold text-center mt-[10px]'>At Artistry Atelier, we do things a little differently. Our mission is to make art accessible, affordable, and a viable career for artists. We help buyers find pieces that they can’t find anywhere else. We value doing the right thing for our artists and customers and staying true to who we are above all else.</p>
            </div>
            <div className='flex gap-[7%] justify-center mt-[5%] mb-[4%]'>
              <div className='flex flex-col items-center w-[10%]'>
                <img className='w-[70%]' src={original} alt=""/>
                <h2 className='font-bold'>Originality</h2>
                <p className='text-center'>Creativity and authenticity underpin everything we do - it’s hard-coded into our DNA.</p>
              </div>
              <div className='flex flex-col items-center w-[10%]'>
                <img className='w-[70%]' src={openness} alt=""/>
                <h2 className='font-bold'>Openness</h2>
                <p className='text-center'>We strive to ensure art is accessible for everyone, whether you’re an artist or customer.</p>
              </div>
              <div className='flex flex-col  items-center w-[10%]'>
                <img className='w-[70%]' src={courage} alt=""/>
                <h2 className='font-bold '>Courage</h2>
                <p className='text-center'>We’re unafraid to make bold choices if it means delivering a better experience.</p>
              </div>
              <div className='flex flex-col items-center w-[10%]'>
                <img className='w-[70%]' src={decency} alt=""/>
                <h2 className='font-bold'>Decency</h2>
                <p className='text-center'>We champion a fair, equitable and open marketplace that rewards both artists and customers.</p>
              </div>
            </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='text-4xl font-bold mt-[5%] mb-[4%]'>
            We connect artists with buyers
          </h2>
          <div className='flex justify-center items-center'>
          <div className='flex flex-col items-center w-[20%] relative z-[20] gap-4'>
          <img src={forartists} className='rounded-full w-[72%] border-2 border-black p-2'/>
          <h2 className='font-bold'>For artists</h2>
          <p className='text-center'>When you join Artfinder, you join our entire community for a friendlier, fairer world for artists. As well as reaching a global audience, you receive dedicated support at every step of the way.</p>
          </div>
            <div className='h-[2px] w-[13.3%] bg-black absolute left-1/2 -translate-x-1/2 -translate-y-20 z-[0]' ></div>
            <div className='bg-red-700 rounded-[50%] w-32 h-32 z-[20] relative -top-20 border-2 border-black p-2'></div>
            
            <div className='flex flex-col items-center w-[20%] relative z-[20] gap-4'>
            <img src={forbuyers} className='rounded-full w-[72%] border-2 border-black p-2 '/>
            <h2 className='font-bold'>For buyers</h2>
            <p className='text-center'>We match you with original artwork we know you’ll love – and help you support artists at the same time. Directly connect with artists and find the perfect piece for you, no matter your taste or budget.</p>
            </div>
            
          </div>
          <Link to="/marketplace" className=" block mt-[4%] "><button className='bg-red-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300 '>Shop Now</button></Link>
          <div className='flex flex-col items-center justify-center w-[50%]'>
          <h2 className='text-4xl font-bold mt-[5%] mb-[4%]'>How We Started ?</h2>
          <p className='text-center'>We launched Artistry Atelier to challenge the industry to offer a fair and sustainable marketplace for artists, where anyone can discover and buy original art. We’re committed to eliminating the ‘starving artist’ syndrome and believe that affordable art and artist success shouldn’t be mutually exclusive.</p>
        </div>
        <h2 className='text-4xl font-bold mt-[5%] mb-[4%]'>Why Us?</h2>
        <div className='flex  items-center justify-center gap-10 mb-[4%]'>
          <div className='flex flex-col items-center w-[15%]'>
          <PiCertificateFill className='text-[#15212F] text-4xl'/>
          <h2 className='text-[#15212F] font-bold'>We’re certified</h2>
          <p className='text-center'>Certified by authorities, we specialize in selling authentic and premier art pieces.</p>
          </div>
          <div className='flex flex-col items-center w-[15%] ml-4 mr-4'>
          <FaRegImage className='text-[#15212F] text-4xl'/>
          <h2 className='text-[#15212F] font-bold'>Authentic,hand-crafted art</h2>
          <p className='text-center'>Shop original,unique and affordable art from thousands of artists aorund the world.</p>
          </div>
          <div className='flex flex-col items-center w-[15%] ml-4 mr-4'>
          <IoPerson className='text-[#15212F] text-4xl'/>
          <h2 className='text-[#15212F] font-bold'>Support independent artists</h2>
          <p className='text-center'>Buy directly from an artist,helping them to make a living doing what they love.</p>
          </div>
          <div className='flex flex-col items-center w-[15%]'>
          <FaTruck className='text-[#15212F] text-4xl'/>
          <h2 className='text-[#15212F] font-bold'>Risk-free shopping</h2>
          <p className='text-center'>Secure transactions,free 14-day returns.Full peace of mind,guaranteed.</p>
          </div>
          
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default About