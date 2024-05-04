/*import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const[isSticky, setIsSticky]= useState(false);

    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(()=>{
        const handleScroll = () =>{
            if(window.scrollY >100){
                setIsSticky(true);
            }else{
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll',handleScroll);

        return ()=>{

            window.addEventListener('scroll',handleScroll);
            
        }
    })
    

    const navItems =[
        {link:"Home",path:"home"},
        {link:"Service",path:"service"},
        {link:"About",path:"about"},
        {link:"Product",path:"product"},
        {link:"Testimotional",path:"testimotional"},
        {link:"FAQ",path:"faq"},
    ]
  return (
    <header className='w-full bg-white md:bg-white fixed top-0 left-0 right-0 '>
        <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border bg-white duration-300":""}`}>
            <div className="flex justify-between items-center text-base gap-8">
                <a href='/' className='text-2xl font-semibold flex items-center space-x-3 '><span className='text-green-600 '>SPACECO</span></a>
                <ul className='md:flex space-x-12 hidden'>
                    {
                        navItems.map(({link,path}) =><Link  to={path} spy={true} smooth={true} offset={-100} 
                        key={path} className='block text-base text-green-600 hover:text-green-600 first:front-medium '>{link}</Link>)
                    }


                </ul>
                <div className='space-x-12 hidden lg:flex items-center '>
                    <a href="/" className="hidden lg:flex item-center text-green-600 hover:text-gray-900 ">Login</a>
                    <button className='bg-green-600 text-w px-4 py-2 transition-all duration-300 rounded hover:bg-slate-500'>Sign Up</button>

                </div>
                <div className='md:hidden '>
                    <button onClick={toggleMenu}
                    className='focus:outline-none focus:text-gray-800 text-gray-700 '>
                        {
                            isMenuOpen ? (<AiOutlineClose className='h-6 w-6 '/>):(<AiOutlineMenu className='h-6 w-6  '/>)
                        }

                    </button>

                </div>

            </div>


            <div className={`space-y-4 px-4 mt-16 py-7 bg-green-500 
            ${ isMenuOpen ? "block fixed top-0 right-0 left-0 ": "hidden"}`}>
                {
                      navItems.map(({link,path}) =><Link  to={path} spy={true} smooth={true} offset={-100} 
                      key={path} className='block text-base text-white hover:text-green-600 first:front-medium '>{link}</Link>)
                }

            </div>

        </nav>

    </header>
  )
}

export default Navbar;*/
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const navItems = [
        { link: "Home", path: "home" },
        { link: "About", path: "about" },
        { link: "Service", path: "service" },
        
        { link: "Product", path: "product" },
        { link: "Testimonial", path: "testimonial" },
        { link: "Contact", path: "contact" },
    ];

    return (
        <header className='w-full md:bg-white fixed top-0 left-0 right-0 '>
            <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border bg-white duration-300" : ""}`}>
                <div className="flex justify-between items-center text-base gap-8">
                    <a href='/' className='text-2xl font-semibold flex items-center space-x-3 '><span className='text-green-600 '>SPACECO.</span></a>
                    <ul className='md:flex space-x-12 hidden'>
                        {navItems.map(({ link, path }) => (
                            <a href={`#${path}`} key={path} className='block text-base text-green-600 hover:text-green-600 first:front-medium'>{link}</a>
                        ))}
                    </ul>
                    <div className='space-x-12 hidden lg:flex items-center '>
                        <a href="/login" className="hidden lg:flex item-center text-green-600 hover:text-gray-900 ">Login</a>
                        <Link to="/register" className='bg-green-600 text-w px-4 py-2 transition-all duration-300 rounded hover:bg-slate-500'>Sign Up</Link>
                    </div>
                    <div className='md:hidden '>
                        <button onClick={toggleMenu} className='focus:outline-none focus:text-green-800 text-green-600 '>
                            {isMenuOpen ? (<AiOutlineClose className='h-6 w-6 '/>) : (<AiOutlineMenu className='h-6 w-6  '/>)}
                        </button>
                    </div>
                </div>

                {/* Nav Items for Mobile Devices*/}
                <div className={`space-y-4 px-4 mt-16 py-7 bg-green-500 ${isMenuOpen ? "block fixed top-0 right-0 left-0 " : "hidden"}`}>
                    {navItems.map(({ link, path }) => (
                        <a href={`#${path}`} key={path} className='block text-base text-white hover:text-green-600 first:front-medium border-b border-white'>{link}</a>
                    ))}
                     <a href="/login" className="block text-base text-white hover:text-green-600 border-b border-white">Login</a>
                    <Link to="/register" className='block text-base text-white hover:text-green-600'>Sign Up</Link>
                    
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
