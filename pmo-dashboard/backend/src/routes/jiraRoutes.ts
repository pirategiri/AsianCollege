import { Router } from 'express';
import jiraController from '../controllers/jiraController';

const router = Router();

router.post('/connections', jiraController.createConnection);
router.post('/sync', jiraController.syncData);

export default router;
