const express = require ('express');
const app = express() ;
const cors = require('cors');
const dbRoutes =  require("./routes/db") ;
const authRoutes = require("./routes/auth")

app.use(cors({
    origin: '*',  
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: false
}));

app.use(express.json()) ;
app.use('/api' , dbRoutes)
app.use('/api', authRoutes)  


app.listen(5000,  ()=>{
    console.log('Server is running on port http://localhost:5000')

})