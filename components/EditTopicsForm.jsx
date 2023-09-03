"use client"
import React, { useRef, useState } from 'react'
import styles from '../styles/AllStyles.module.css'
import { useRouter } from 'next/navigation'

export default function EditTopicsForm({id}) {
  const [newTitle,setNewTitle]=useState('dummytitle')
  const [newDescription,setNewDescription]=useState('dummydescp')
 const router=useRouter()
    const handleSubmit=async (e)=>{
        e.preventDefault()
        try{
            const res= await fetch(`http://localhost:3000/api/mytopics/${id}`,{
                method:"PUT",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify({newTitle,newDescription})
            })
            if(res.ok){
                router.refresh()
                router.push('/')
            }
            
            

        }catch(error){
            console.log(error)
        }
        setNewTitle('')
        setNewDescription('')

    }
  return (
    <div className={styles.each_form}>
    <form className={styles.form}onSubmit={(e)=>handleSubmit(e)}>
      <label htmlFor='title'>Title </label>
  <input id='title'value={newTitle}onChange={e=>setNewTitle(e.target.value)}/>
  <label htmlFor='details'>Description</label>
  <textarea id='details'onChange={e=>setNewDescription(e.target.value)}value={newDescription}></textarea>
  <button type='submit'>UpDate</button>
  <button>Cancel</button>
  </form>

</div>
  )
}
