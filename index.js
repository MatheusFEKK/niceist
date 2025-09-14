import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res)=>{
    res.send("Hello Word")
})

app.use(express. static('public'))

app. listen(port, ()=>{
    console.log('O app startou')
})



