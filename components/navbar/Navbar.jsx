'use client'
import React, { useState } from 'react';
import classes from './navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import person from '../../public/ali.jpg'
import { AiOutlineClose } from 'react-icons/ai'
import {signIn, signOut, useSession} from 'next-auth/react'

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false)
    const {data: session} = useSession()
    const str = session?.user.email;
  if(str){
    var firstCharacter = getFirstCharacter(str);
    function getFirstCharacter(str) {
      return str[0];
    }
   
  }
  
    const handleShowDropdown = () => setShowDropdown(prev => true)
  
    const handleHideDropdown = () => setShowDropdown(prev => false)
  
  
    return (
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <h2 className={classes.left}>
          <Image className='mt-4' src="/Sailorlogo.png" height={70} width={70} alt='logo' />
          <Link className={classes.logo} href="/">StorySailor</Link>
          </h2>
          
          <ul className={classes.right}>
          
            {
              session?.user
                ? (
                  
                  <div className={classes.usercontain}>
                    <div className={classes.rightside}>
            {session?.user && <Link onClick={handleHideDropdown} href='/create-blog' className={classes.create}>Create</Link>
}
          </div>
                    {/* <Image onClick={handleShowDropdown} src={person} alt='Person' width='45' height='45' /> */}
                    <div onClick={handleShowDropdown} className={classes.user}>
                      <h1>{firstCharacter.toUpperCase()}</h1>
                    </div>
                    {showDropdown && (
                      <div className={classes.dropdown}>
                        <AiOutlineClose className={classes.closeIcon} onClick={handleHideDropdown} />
                        <h5>{session?.user.email}</h5>
                        <button onClick={() => {signOut(); handleHideDropdown()}} className={classes.logout}>Logout</button>
                        <Link onClick={handleHideDropdown} href='/create-blog' className={classes.create}>Create</Link>
                      </div>
                    )}
                  </div>
                )
                : (
                  <>
                    <button onClick={() => {signIn()}} className={classes.login}>Log in</button>
                    <Link href='/register'>Register</Link>
                  </>
                )
            }
          </ul>
        </div>
      </div>
    )
  }
  

export default Navbar
