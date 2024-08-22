import { ReactNode, Suspense, useEffect } from 'react';
import BrinteLogo from '@/assets/svg/brinte.svg?react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/navbar/Navbar'
import Footer from '../footer/Footer';
import React from 'react';
import './_layout.scss'

export default function Layout({children} : {children: ReactNode}) {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [pathname])

    return (
        <>
            <Navbar/>
            <Suspense
                fallback={
                    <div className='flex-row-center min-h-screen'>
                        <motion.div
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className='flex-row-center min-h-screen w-[50px]'>
                                <BrinteLogo/>
                        </motion.div>
                    </div>
                }
            >
                {children}
            </Suspense>
            <Footer />
        </>
    )
};

