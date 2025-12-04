import {create} from 'zustand';
import axios from 'axios';

interface Project {
  id: string;
  name: string;
  status: string;
  startDate: string;
  targetCompletionDate: string;
  progress: number;
  owner: string;
  team: string;
}

interface PortfolioState {
  projects: Project[];
  fetchProjects: () => Promise<void>;
}

const usePortfolioStore = create<PortfolioState>((set) => ({
  projects: [],
  fetchProjects: async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/analytics/portfolio-overview');
      set({ projects: response.data });
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  },
}));

export default usePortfolioStore;
