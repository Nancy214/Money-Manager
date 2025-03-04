import { useState } from 'react';
import HomePage from './app-components/HomePage';
import { MainLayout } from './app-components/MainLayout';
import { SidebarProvider } from './components/ui/sidebar';

export default function ExpenseTracker() {
  return (
    <SidebarProvider defaultOpen={true}>
      <MainLayout>
        <HomePage />
      </MainLayout>
    </SidebarProvider>
  );
}
