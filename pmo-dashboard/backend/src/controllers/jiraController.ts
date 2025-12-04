import { Request, Response } from 'express';
import jiraService from '../services/jiraService';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class JiraController {
  public async createConnection(req: Request, res: Response) {
    const { domain, email, apiToken, boards } = req.body;

    try {
      const connection = await prisma.jiraConnection.create({
        data: {
          domain,
          email,
          apiToken,
          boards,
        },
      });
      res.status(201).json(connection);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error creating Jira connection.');
    }
  }

  public async syncData(req: Request, res: Response) {
    const { connectionId, boardId } = req.body;

    try {
      const issues = await jiraService.fetchIssues(connectionId, boardId);
      // Here you would add logic to normalize and save the data
      console.log(issues);

      await prisma.dataImportLog.create({
        data: {
          source: 'jira',
          status: 'success',
        },
      });

      res.status(200).send('Jira data synced successfully.');
    } catch (error) {
      console.error(error);
      await prisma.dataImportLog.create({
        data: {
          source: 'jira',
          status: 'failure',
          message: error instanceof Error ? error.message : String(error),
        },
      });
      res.status(500).send('Error syncing Jira data.');
    }
  }
}

export default new JiraController();
