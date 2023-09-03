"use client"
import React, { useEffect, useState } from 'react'

import { AiFillEdit} from 'react-icons/ai'

import styles from '../styles/AllStyles.module.css'
import { redirect, useRouter } from 'next/navigation'
import Link from 'next/link'
import axios from 'axios'
import DeleteButton from './DeleteButton'
import { Heading } from '@chakra-ui/react'

const getTopics=async ()=>{
    try{
        const res=await fetch('http://localhost:3000/api/mytopics',{
            cache:"no-store"
        })
      

        // console.log(res,'fetched response')

        if(!res.ok){
            throw new Error('response is not okay in get request')
        }
        return res.json()

    }
    catch(error){
        console.log('error in fetching',error)
    }
   
   
  

}



export default  function TopicDetails() {
    const [mydata,setData]=useState()

   useEffect(()=>{
    async function fetchData(){
        const data=await getTopics()
       setData(data?.getTopics)
    }
    fetchData()
   
    
   

   },[])
   async function fetchAgain(){
    const data=await getTopics()
    setData(data?.getTopics)

   }
  
  
  
   
  return (
    
   <>
        {mydata!==undefined?mydata?.map((itr,index)=>{
            return <>
            <div className={styles.whole_title_div}key={index}>
              <div >
        <div className={styles.title}>
            {itr.title}
        </div>
        <div className={styles.title_details}>
          {itr.description}
        </div>

        </div>
        <div className={styles.icons}>
        <div onClick={()=>fetchAgain()}>
            <DeleteButton id={itr._id}/>
       
        </div>
        <Link href={`/editTopics/${itr._id}`}>
            <AiFillEdit color='gray'width='20px'height='20px' className='edit-icons'/>

        </Link>

        </div>
        </div>
            </>
        }):<Heading style={{color:'white'}}>Loading.....</Heading>}
       
     
      
      
       </>     

   
  )
}
