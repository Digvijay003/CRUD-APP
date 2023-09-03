"use client"
import React from 'react'

import styles from '../styles/AllStyles.module.css'

import Link from 'next/link'

import { signOut, useSession } from 'next-auth/react'
import { Button } from '@chakra-ui/react'

export default function NavBar() {
  const {data:session,status}=useSession()
  if(status==='authenticated'){
    return (
      <div className={styles.navbar}>
           <Link className={styles.title}href='/'>ABC Company</Link>
           <Link className={styles.add_button}href='/addTopics'>Add Topics</Link>
           {status==='authenticated'?<Button onClick={()=>signOut()}variant='outline'colorScheme='green'className='sign-out'>Sign Out</Button>:''}
       </div>
     )

  }

}
