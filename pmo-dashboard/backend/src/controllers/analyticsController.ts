import { Request, Response } from 'express';
import analyticsService from '../services/analyticsService';

class AnalyticsController {
  public async getPortfolioOverview(req: Request, res: Response) {
    try {
      const data = await analyticsService.getPortfolioOverview();
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching portfolio overview.');
    }
  }

  public async getCompletionTrends(req: Request, res: Response) {
    try {
      const data = await analyticsService.getCompletionTrends();
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching completion trends.');
    }
  }

  public async getResourceWorkload(req: Request, res: Response) {
    try {
      const data = await analyticsService.getResourceWorkload();
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching resource workload.');
    }
  }

  public async getRiskHeatmap(req: Request, res: Response) {
    try {
      const data = await analyticsService.getRiskHeatmap();
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching risk heatmap.');
    }
  }
}

export default new AnalyticsController();
