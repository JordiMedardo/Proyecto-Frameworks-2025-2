// src/app.js
import express from 'express'
import cors from 'cors'
import authRoutes from './routes/auth.routes.js'
import userRoutes from './routes/users.routes.js'
import cartaRoutes from './routes/carta.routes.js'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('✅ API de Cartas funcionando!')
})

// rutas
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/cartas', cartaRoutes)

export default app