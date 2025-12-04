import { useEffect } from 'react';
import usePortfolioStore from './portfolioStore';

const PortfolioOverview = () => {
  const { projects, fetchProjects } = usePortfolioStore();

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Portfolio Overview</h2>
      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Target Completion</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Owner</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {projects.map((project) => (
              <tr key={project.id}>
                <td className="px-6 py-4 whitespace-nowrap">{project.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{project.status}</td>
                <td className="px-6 py-4 whitespace-nowrap">{new Date(project.startDate).toLocaleDateString()}</td>
                <td className="px-6 py-4 whitespace-nowrap">{new Date(project.targetCompletionDate).toLocaleDateString()}</td>
                <td className="px-6 py-4 whitespace-nowrap">{project.progress}%</td>
                <td className="px-6 py-4 whitespace-nowrap">{project.owner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PortfolioOverview;
