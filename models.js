const mongoose= require("mongoose")

// connection
mongoose.connect("mongodb+srv://umamahesh9447230:kazuto14@cluster0.eoieac4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Database Connected")
})
.catch(err=>console.log(err))


let mongoSchema=mongoose.Schema

const EmployeeSchema = new mongoSchema({
    ename:String,
    eage:Number,
    position:String,
    Salary:Number
})

var employeeModel=mongoose.model("employee",EmployeeSchema)
module.exports=employeeModel