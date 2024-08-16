import { Suspense, useEffect } from 'react';
import BrinteLogo from '@/assets/svg/brinte.svg?react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar'
import Footer from './Footer';

export default function Layout() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "instant"
        })
    }, [pathname])

    return (
        <>
            <Navbar/>
            <Suspense
                fallback={
                    <div className='flex justify-center items-center min-h-screen'>
                        <motion.div
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className='flex justify-center items-center min-h-screen w-[50px]'>
                                <BrinteLogo/>
                        </motion.div>
                    </div>
                }
            >
                <Outlet />
            </Suspense>
            <Footer />
        </>
    )
};

