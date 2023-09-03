import mongoose,{Schema} from "mongoose";

const myschema=new Schema({
    title:String,
    description:String
},
{
    timestamps:true
})

const mymodelforDB=mongoose.models.mymodelforDB||mongoose.model("mymodelforDB",myschema)

export default mymodelforDB