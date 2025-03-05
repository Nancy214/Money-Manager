import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import StatisticsPage from './pages/StatisticsPage';
import TransactionsPage from './pages/TransactionsPage';
import BudgetPage from './pages/BudgetPage';

import {
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';

export default function AppRoutes() {
  const { open } = useSidebar();

  return (
    <main className='flex-1 transition-all duration-300'>
      <SidebarTrigger />
      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='/statistics'
          element={<StatisticsPage />}
        />
        <Route
          path='/transactions'
          element={<TransactionsPage />}
        />
        <Route
          path='/budget'
          element={<BudgetPage />}
        />
      </Routes>
    </main>
  );
}
