const express= require('express')
const app = express()
const port = 3001

app.get('/', (req,res) => {
	res.status(200).send('Testing Port Connection');
})

app.listen (port, () => {
	console.log(`App running on port ${port}.`)
})
