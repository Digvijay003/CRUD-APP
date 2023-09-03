
import React  from 'react'

import EditTopicsForm from '@/components/EditTopicsForm'

const getTopicsById=async(id)=>{
  try{
    const res =await fetch(`http://localhost:3000/api/mytopics/${id}`,{
      cache:'no-store'
    }) 
    if(!res.ok){
      throw new Error("could not get data by ID")
    }
   
     return res.json()

  }catch(error){
    console.log(error)
  }
 

}

export default async function EditTopics({params}) {
 
  const {id}=params

  console.log(id,'let see this id')

 

  const data=await getTopicsById(id)
  // console.log(data,'data with single ID')

  // const {title,description}=data



  return (
    
  <EditTopicsForm id={id} />
   
  )
}
