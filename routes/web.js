import express from 'express'
const router = express.router();

import StudentController from '../controllers/studentController.js';

router.get('/', StudentController.getAllDoc)

export default router;