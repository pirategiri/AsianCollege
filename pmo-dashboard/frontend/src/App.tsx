import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import PortfolioOverview from './PortfolioOverview';
import DeliveryAnalytics from './DeliveryAnalytics';
import ResourceWorkload from './ResourceWorkload';
import RiskIntelligence from './RiskIntelligence';
import Settings from './Settings';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<PortfolioOverview />} />
          <Route path="/analytics" element={<DeliveryAnalytics />} />
          <Route path="/resources" element={<ResourceWorkload />} />
          <Route path="/risks" element={<RiskIntelligence />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
