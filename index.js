import express from 'express'
import apiRoute from './routes/routes'

const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json())
app.use('/whatsapp', apiRoute)
app.listen(PORT, () => {
	console.log('Aporta é: ' + PORT)
})
