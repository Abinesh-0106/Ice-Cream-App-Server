import  Express  from "express";
import cors from "cors"
import orders from "./data/OrderHeader.js";

const app=Express();
app.use(cors())
app.use(Express.json())

app.get('/login',(req,res) => {
    console.log(`url : `,req.url)
    res.status(200).json({success : true})
})
app.post('/login',(req,res) => {
    console.log(`url : `,req.url);
    console.log(`Request Body : `,req.body);
    res.status(201).json({success : true})
})

app.post('/api/orders/headers',async (req,res) =>{
    const requestbody= await req.body;
    const userId=requestbody.userId;
    const responseBody=orders.filter((order)=> order.userId==userId) ;
    res.status(200).json(responseBody)

})
app.listen(2500,()=> {
    console.log(`Server started at port 2500`)
})
