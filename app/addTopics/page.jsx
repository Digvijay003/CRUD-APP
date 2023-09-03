"use client"
import React, { useState } from 'react'

import styles from '../../styles/AllStyles.module.css'
import { useRouter } from 'next/navigation'
import axios from 'axios'


export default function AddTopic() {
    
    const router=useRouter()
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit=async (e)=>{
        e.preventDefault()
       
        try{
            const res=await fetch('http://localhost:3000/api/mytopics',{
                method:"POST",
                headers:{
                    'Content-Type': 'application/json'
                }
            ,
                body:JSON.stringify({title,description})
            })
           
            
            console.log(res,'post response')
           
            if(res.ok){
                router.refresh()
                router.push('/')

            }
            else{
                throw new Error('response is not okay')
            }
           
            

        }
        catch(error){
            console.log('error occurs',error)
        }
        setTitle('')
        setDescription('')

    }

  return (
    <div className={styles.each_form}>
        <form className={styles.form} onSubmit={(e)=>handleSubmit(e)}>
            <label htmlFor='title'style={{color:'white'}}>Title </label>
        <input id='title'value={title}name='title'onChange={e=>setTitle(e.target.value)}/>
        <label htmlFor='details'style={{color:'white'}}>Description</label>
        <textarea id='details'value={description}name='description'onChange={e=>setDescription(e.target.value)}></textarea>
        <button type='submit'>Submit</button>
        </form>

    </div>
  )
}

