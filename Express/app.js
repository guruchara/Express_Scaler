const express = require('express')

// for accessing the methods of express 

const app=express()


//here we can use express all methods which are provided by the express
// like get,post,delete,update 

// here need to pass two parameter for using the get or post method 
app.get('/',(req,res)=>{
    res.send('Hello I am Guru SDE at Zunpulse')
})

// if we want to update the send message then we need to again start the server .. if changing the port 
app.get('/about',(req,res)=>{
    res.send('Hello this is new server')
})

// for using executing this code we need a localhost port 

// like 30000,40000,8000 


// for running this port we use node filename.js 

// after executing above command if we want to see message then open the browser and paste port 


// nodemon npm i nodemon :) nodemon automatic update the sending message which we pass in param of send 

app.get('/nodemonexample',(req,res)=>{
    res.send('Hello Ji I am Guru From Haryana ')
})

// now making port as dynamic 
const port=process.env.PORT || 3000


app.listen(port,()=>console.log(`port  is running on dynamic port ${port}`))


// for executing the nodemon simply execue the nodemon app.js