import axios from 'axios';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class JiraService {
  private getApiUrl(domain: string) {
    return `https://${domain}/rest/api/3`;
  }

  private getAuthHeaders(email: string, apiToken: string) {
    return {
      'Authorization': `Basic ${Buffer.from(`${email}:${apiToken}`).toString('base64')}`,
      'Content-Type': 'application/json',
    };
  }

  public async fetchIssues(jiraConnectionId: string, boardId: string): Promise<any[]> {
    const connection = await prisma.jiraConnection.findUnique({ where: { id: jiraConnectionId } });
    if (!connection) {
      throw new Error('Jira connection not found.');
    }
    const { domain, email, apiToken } = connection;
    const apiUrl = this.getApiUrl(domain);
    const headers = this.getAuthHeaders(email, apiToken);

    // This is a simplified example. In a real application, you would need to handle pagination.
    const response = await axios.get(`${apiUrl}/search?jql=project=${boardId}`, { headers });
    return response.data.issues;
  }
}

export default new JiraService();
