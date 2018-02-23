// This code belongs to Bryan Erick Ambriz
// 02/22/2018


//put all libraries into variables for use
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

// app stuff now
//
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
//stuff

app.get('/posts',(req, res) =>{
	res.send(
		[
			{
				title: "Hello World!",
				description: "Hi there! How are you?"
			}
		]
	)
})

//listener
//
app.listen(process.env.PORT || 8081
)
