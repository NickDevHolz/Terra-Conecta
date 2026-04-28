import { Route, Routes } from 'react-router-dom';

import { DashboardPage } from '../modules/dashboard/pages/DashboardPage';
import { ProductionPage } from '../modules/production/pages/ProductionPage';
import { ManagementPage } from '../modules/management/pages/ManagementPage';
import { MarketPage } from '../modules/market/pages/MarketPage';
import { HomePage } from '../modules/home/pages/HomePage';
import { PlantAnalysisPage } from '../modules/plants/pages/PlantAnalysisPage';
import { OriaPage } from '../modules/oria/pages/OriaPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />`r`n        <Route path="/production" element={<ProductionPage />} />`r`n        <Route path="/production/:stepId" element={<ProductionPage />} />`r`n        <Route path="/management" element={<ManagementPage />} />`r`n        <Route path="/management/:stepId" element={<ManagementPage />} />`r`n        <Route path="/market" element={<MarketPage />} />`r`n        <Route path="/market/:stepId" element={<MarketPage />} />
      <Route path="/plants" element={<PlantAnalysisPage />} />
        <Route path="/oria" element={<OriaPage />} />
    </Routes>
  );
}