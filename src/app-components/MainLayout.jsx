import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Separator } from '../components/ui/separator';
import {
  Home,
  BarChart2,
  Receipt,
  PiggyBank,
  Menu,
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from '../components/ui/sidebar';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
} from '../components/ui/sheet';

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

function NavigationContent({
  currentPage,
  setCurrentPage,
}) {
  return (
    <div className='h-full py-4'>
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
    </div>
  );
}

export function MainLayout({ children }) {
  const [currentPage, setCurrentPage] =
    useState('home');
  const { state } = useSidebar();

  return (
    <div className='grid min-h-screen w-full'>
      {/* Desktop Sidebar */}
      <div className='hidden md:block fixed inset-y-0 z-20 w-64 border-r bg-background'>
        <Sidebar>
          <NavigationContent
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </Sidebar>
      </div>

      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant='ghost'
            size='icon'
            className='md:hidden fixed top-4 left-4 z-40'
          >
            <Menu className='h-6 w-6' />
          </Button>
        </SheetTrigger>
        <SheetContent
          side='left'
          className='w-64 p-0'
        >
          <NavigationContent
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </SheetContent>
      </Sheet>

      <div className='flex-1 md:ml-64'>
        <div className='md:hidden h-16' />{' '}
        {/* Spacer for mobile menu button */}
        {children}
      </div>
    </div>
  );
}
