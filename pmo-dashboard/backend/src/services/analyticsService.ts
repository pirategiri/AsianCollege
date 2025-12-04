import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class AnalyticsService {
  public async getPortfolioOverview() {
    return prisma.project.findMany({
      include: {
        category: true,
      },
    });
  }

  // Placeholder for other analytics methods
  public async getCompletionTrends() {
    // Logic to calculate completion trends
    return {
      // Sample data
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      data: [10, 15, 12, 18],
    };
  }

  public async getResourceWorkload() {
    // Logic to calculate resource workload
    return prisma.resource.findMany({
      include: {
        tasks: true,
      },
    });
  }

  public async getRiskHeatmap() {
    // Logic to generate risk heatmap data
    return prisma.risk.findMany();
  }
}

export default new AnalyticsService();
// test append
