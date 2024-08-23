import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { navLinks } from "@/constants/contact";
import {Button, RenderIf} from "@/components";
import React from 'react';
import './_mobile-menu.scss'

interface MobileMenuProps {
  showSlider: boolean,
  setShowSlider: (data: any) => void
}

export const MobileMenu = ({ showSlider, setShowSlider }: MobileMenuProps) => {

  return (
    <AnimatePresence>
    <RenderIf condition={showSlider}>
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: '0', transition: { duration: .8 } }}
          exit={{ x: '-100%' }}
          className='mobile-menu-container'
        >
          <ul>
            {
              navLinks.map((item) =>
                <li
                  key={item}
                  className='font-pptelegraph_r item'
                  onClick={() => setShowSlider(false)}
                >
                  <Link to='/'>
                    {item}
                  </Link>
                </li>
              )
            }
          </ul>
          <div className="cta-button">
            <Button theme="transparent" btnText="Login" variant='text-base'/>
            <Button theme="secondary" btnText="Join waitlist" variant='text-base'/>
          </div>
        </motion.div>
        </RenderIf>
    </AnimatePresence>
  )
}