// src/routes/carta.routes.js
import { Router } from 'express'
const router = Router()
router.get('/', (req, res) => res.send('Cartas route funcionando ✅'))
export default router