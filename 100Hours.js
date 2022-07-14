const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

    const bills = {
        'Rent':{
            'dueDate': 4,
            'amountDue': 540,
            'lateFee': 25,
            'importance': 3,
        },
        'Appliance Warehouse':{
            'dueDate': 2,
            'amountDue': 58,
            'lateFee': 0,
            'importance': 2,
        },
        'Planet Fitness':{
            'dueDate': 18,
            'amountDue': 26,
            'lateFee': 0,
            'importance': 1, 
        }
    }

    app.get('/', (request, response)=>{
        response.sendFile(__dirname + '/index.html')
    })
    
    app.get('/api/:billsName', (request,response)=>{
        const billsName = request.params.billsName.toLowerCase()
        if(bill[billsName]){
            response.json(bills[billsName])
        }else{
            response.json(bills['Rent'])
        }
    })
    
    app.listen(process.env.PORT || PORT, ()=>{
        console.log(`The server is running on port ${PORT}! You better go catch it!`)
    })