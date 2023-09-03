"use client"
import { signIn, useSession } from 'next-auth/react'
import React from 'react'
import TopicDetails from './TopicDetails'
import { Button, Heading } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'






export default function HomePage() {
    const {data:session,status}=useSession()
    if(status==='authenticated'){
        return(
            <>
            <ChakraProvider>
                <div className='whole-content'>
                <div>
             
            <Heading className='user-name'>Welcome,{session?.user?.name}</Heading>
            <Heading size='sm'colorScheme='white'className='user-email'>{session?.user?.email}</Heading>

                </div>

            <TopicDetails/>
            </div>
            </ChakraProvider>
         
            </>
        )
    }
    else if(status==='unauthenticated'){
        return (
            <ChakraProvider>
            <div className='login-page'>
                <Heading className='heading'>Log In </Heading>
                <Button onClick={()=>signIn('google')}variant='outline'colorScheme='green'className='sign-in-button'>Sign In with Google</Button>
        
            </div>
            </ChakraProvider>
          )

    }

}
