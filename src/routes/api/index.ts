import express from 'express';
import notesRouter from '@/routes/api/notesRouter';

const router = express.Router();

// ✅ Mount nested routers
router.use('/Notes', notesRouter);

export default router;
