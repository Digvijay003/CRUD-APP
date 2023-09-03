"use client"

import { useRouter } from 'next/navigation'
import React from 'react'
import {AiFillDelete} from 'react-icons/ai'

export default function DeleteButton({id}) {
    const router=useRouter()

    const deletePost=async()=>{
        try{
            const res= await fetch(`/api/mytopics?id=${id}`,{
                method:"DELETE"
            })
            if(res.ok){
                router.refresh()
                console.log('POST DELETED')
            }
            return res.json()

        }catch(error){
            console.log(error,'some error occurs')
        }

    }
  return (
    <div onClick={deletePost}>
         <AiFillDelete color='red'width='40px'height='40px'className='delete-icon'/>
    </div>
  )
}
