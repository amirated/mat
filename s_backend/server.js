import express from 'express'
import cors from 'cors'

const PORT = 8080
const app = express()


app.get("/abc", cors(), (req, res) => {
	res.json(["Tony","Lisa","Michael","Ginger","Food"]);
	// res.send('Hello World!')
	// res.sendFile(path.resolve('./react_app/index.html'));
	// res.sendFile('/../react_app/index.html', {root: __dirname});
})


app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`)
})