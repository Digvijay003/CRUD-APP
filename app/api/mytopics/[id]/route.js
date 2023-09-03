import connectDB from "@/libs/mongoDBConnect";
import mymodelforDB from "@/models/TopicsModels";
import { NextResponse } from "next/server";

export async function  PUT(request,{params}){
    await connectDB()

    const {id}=params
    const {newTitle:title,newDescription:description}=await request.json()

    await mymodelforDB.findByIdAndUpdate(id,{title,description})

    return NextResponse.json({message:'success'},{status:200})


}

export  async function GET(request,{params}){
    await connectDB()
    const {id}=params
    const singleTopic=mymodelforDB.findOne({_id:id})
    return NextResponse.json({singleTopic},{status:200})
}