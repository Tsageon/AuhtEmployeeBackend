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

app.all('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the API! Here are the available routes since your new:',
        routes: {
            '/api/SignUp': 'POST - Sign Up a new user',
            '/api/Login': 'POST - Login to your account',
            '/api/resetPassword': 'POST - Reset your password',
            '/api/addEmployee': 'POST - Add a new employee',
            '/api/deleteEmployee/:id': 'DELETE - Delete an employee by ID',
            '/api/getEmployee': 'GET - Get list of all employees',
            '/api/updateEmployee/:id': 'PUT - Update employee details by ID'
        }
    });
});


app.listen(5000,  ()=>{
    console.log('Server is running on port http://localhost:5000')

})