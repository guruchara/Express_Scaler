const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/test')
    .then(() => console.log("connected")).catch(err => console.log("error", err))


// 
const TestSchema = new mongoose.Schema({
    name: String,
    phoneNumber: Number,
    isValid: Boolean
})


const Test = mongoose.model('Test', TestSchema)


const createTest = async () => {

    const testObj = new Test({
        name: 'varun',
        phoneNumber: '7540987089',
        isValid: false
    })

    const res = await testObj.save();

    console.log("res266", res)
}

createTest();

const getName=async()=>{


    // in the sort 1 use for ascending order  and -1 use for descending order on the basis of name 

    // select mnethod generally used for getting selected data for getting this data we need to pass only key and 1 if we want otherwise no need thanks :) 

    // find method is generally used for finding the data 

    // always we need to make it asyc beacuse we fetching data from the database 
     const result=await Test.find({name:'guru'}).select({name:1}).sort({name:1})

     console.log("findResult",result)
}

// for getting the name Here I am calling the getName function 

// comment for some seconds 
// getName();





// updating the data by using id and mongoose methods 
const update=async(id)=>{

     let dbData=await Test.findById(id)

     if(!dbData){
        return
     }

     console.log("dbData",dbData)
     dbData.name='shubham'
     dbData.phoneNumber='8990898970'

     const updateRes=await dbData.save();

     console.log("update",updateRes)
}

const deleteData=async(id)=>{

    // find by id and remove method generally using for removing data 
    let dbData=await Test.findByIdAndRemove(id)

    console.log("deletingData",dbData)

}



update('63cbb758ded65abdfcd532ca')

deleteData('63cbb758ded65abdfcd532ca');

