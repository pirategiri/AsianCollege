import { Router } from 'express';
import analyticsController from '../controllers/analyticsController';

const router = Router();

router.get('/portfolio-overview', analyticsController.getPortfolioOverview);
router.get('/completion-trends', analyticsController.getCompletionTrends);
router.get('/resource-workload', analyticsController.getResourceWorkload);
router.get('/risk-heatmap', analyticsController.getRiskHeatmap);

export default router;
