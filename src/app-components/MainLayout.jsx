import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Separator } from '../components/ui/separator';
import {
  Home,
  BarChart2,
  Receipt,
  PiggyBank,
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from '../components/ui/sidebar';

const menuItems = [
  {
    title: 'Home',
    icon: <Home className='h-5 w-5' />,
    path: 'home',
  },
  {
    title: 'Statistics',
    icon: <BarChart2 className='h-5 w-5' />,
    path: 'statistics',
  },
  {
    title: 'Transactions',
    icon: <Receipt className='h-5 w-5' />,
    path: 'transactions',
  },
  {
    title: 'Budget',
    icon: <PiggyBank className='h-5 w-5' />,
    path: 'budget',
  },
];

export function MainLayout({ children }) {
  const [currentPage, setCurrentPage] =
    useState('home');
  const { state } = useSidebar();

  return (
    <div className='grid min-h-screen w-full'>
      <div className='hidden md:block fixed inset-y-0 z-20 w-64 border-r bg-background'>
        <Sidebar>
          <SidebarHeader>
            <div className='flex items-center px-6 py-4'>
              <h2 className='text-lg font-semibold'>
                Navigation
              </h2>
            </div>
          </SidebarHeader>
          <Separator />
          <SidebarContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <Button
                    variant={
                      currentPage === item.path
                        ? 'secondary'
                        : 'ghost'
                    }
                    className='w-full justify-start gap-2'
                    onClick={() =>
                      setCurrentPage(item.path)
                    }
                  >
                    {item.icon}
                    {item.title}
                  </Button>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
      </div>
      <div className='flex-1 md:ml-64'>
        {children}
      </div>
    </div>
  );
}
