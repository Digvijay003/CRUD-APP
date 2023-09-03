import connectDB from "@/libs/mongoDBConnect"
import mymodelforDB from "@/models/TopicsModels"
import { NextResponse } from "next/server"

export async function  POST(request){
    await connectDB()
    const {title,description}=await request.json()
  
    await mymodelforDB.create({title,description})
    return NextResponse.json({message:'Success'},{status:201})


}
export  async function GET(){
    await connectDB()
    const getTopics=await mymodelforDB.find()
    return NextResponse.json({getTopics})
}

export async function DELETE(request){
    await connectDB()
    const id=await request.nextUrl.searchParams.get('id')
    await mymodelforDB.findByIdAndDelete(id)
    return NextResponse.json({message:'success'},{status:200})


}