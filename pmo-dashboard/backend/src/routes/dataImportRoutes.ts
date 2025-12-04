import { Router } from 'express';
import dataImportController from '../controllers/dataImportController';
import upload from '../middleware/multer';

const router = Router();

router.post('/upload', upload.single('file'), dataImportController.uploadFile);

export default router;
