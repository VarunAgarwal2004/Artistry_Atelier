import React ,{useEffect,useState}from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineLifebuoy } from "react-icons/hi2"
import { FaBarsStaggered} from "react-icons/fa6"

const Navbar = () => {
    const [isMenuOpen,setIsMenuOpen]=useState(false);
    const[isSticky,setIsSticky]=useState(false);
    const toggleMenu=()=>{
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(()=>{
        const handleScroll=()=>{
            if(window.scrollY>100){
                setIsSticky(true);
            }
            else{
                setIsSticky(false);
            }
        }
        window.addEventListener("scroll",handleScroll);
        return()=>{
            window.addEventListener("scroll",handleScroll);
        }
    },[])

    //navItems here
    const navItems=[
        {link:"Home",path:"/"},
        {link:"About",path:"/about"},
        {link:"Featured",path:"/featured"},
        {link:"MarketPlace",path:"/marketplace"},
        {link:"Sell Your Craft",path:"/admin/dashboard"},
       
    ]
  return (
    <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300 z-[30]'>
    <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-[#15121F]" : ""}`}>
        <div className='flex justify-between items-center text-base gap-8'>
            {/*logo*/}
            <Link to="/" className="text-3xl font-bold text-red-700 flex items-center gap-2">
                <HiOutlineLifebuoy className='inline-block text-4xl font-bold'/>
                Artistry Atelier
            </Link>
            {/*nav items for large device */ }
            <ul className='md:flex space-x-9 hidden ml-[25%]'>
                {
                    navItems.map(({link,path}) => (
                        <Link 
                            key={path} 
                            to={path} 
                            className={`block text-base uppercase cursor-pointer font-semibold 
                                ${isSticky ? 'text-white hover:text-red-700' : 'text-red-700 hover:text-[#15121F]'}`}>{link}</Link>
                    ))
                }
            </ul> 
            <div className='space-x-12 hidden lg:flex items-center'>
                <button>
                    <FaBarsStaggered 
                        className={`w-5 ${isSticky ? 'text-white hover:text-red-700' : 'text-red-700 hover:text-[#15121F]'}`}
                    />
                </button>
            </div>
        </div>
    </nav>
</header>

  )
}

export default Navbar