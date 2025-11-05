// src/routes/auth.routes.js
import { Router } from 'express'
const router = Router()

// Ruta temporal de prueba
router.get('/', (req, res) => {
  res.send('Auth route funcionando ✅')
})

export default router