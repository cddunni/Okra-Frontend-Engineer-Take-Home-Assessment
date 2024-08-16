import React from "react"
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { navLinks } from "@/constants/contact.jsx";
import Button from "./button/Button";
import { RenderIf } from "./RenderIf";

export default function MobileMenu({ showSlider, setShowSlider }) {

  return (
    <AnimatePresence>
    <RenderIf condition={showSlider}>
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: '0', transition: { duration: .8 } }}
          exit={{ x: '-100%' }}
          className='absolute lg:hidden top-[60px] bg-on_primary text-primary w-full h-[93vh] overflow-y-auto py-5 lg:px-0 md:px-6 px-4'
        >
          <ul>
            {
              navLinks.map((item) =>
                <li
                  key={item}
                  className='mt-4 font-pptelegraph_r hide_tap mr-2'
                  onClick={() => setShowSlider(false)}
                >
                  <Link to='/' className='block w-full py-1 capitalize text-label hover:text-subdued'>
                    {item}
                  </Link>
                </li>
              )
            }
          </ul>
          <div className="flex items-center space-x-3 mt-8">
            <Button theme="transparent" btnText="Login" variant='text-base'/>
            <Button theme="secondary" btnText="Join waitlist" variant='text-base'/>
          </div>
        </motion.div>
        </RenderIf>
    </AnimatePresence>
  )
}