import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, CarIcon, UsersIcon, ShoppingCartIcon, PackageIcon, TruckIcon, BarChart2Icon, XIcon } from 'lucide-react';
interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  setIsOpen
}) => {
  const location = useLocation();
  const navigation = [{
    name: 'Dashboard',
    icon: HomeIcon,
    path: '/'
  }, {
    name: 'Carros',
    icon: CarIcon,
    path: '/cars'
  }, {
    name: 'Clientes',
    icon: UsersIcon,
    path: '/customers'
  }, {
    name: 'Transações',
    icon: ShoppingCartIcon,
    path: '/transactions'
  }, {
    name: 'Peças',
    icon: PackageIcon,
    path: '/parts'
  }, {
    name: 'Fornecedores',
    icon: TruckIcon,
    path: '/suppliers'
  }, {
    name: 'Estoque',
    icon: BarChart2Icon,
    path: '/inventory'
  }];
  return <>
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ease-linear ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-gray-600 opacity-75" onClick={() => setIsOpen(false)}></div>
        <div className="fixed inset-y-0 left-0 flex flex-col z-40 w-64 bg-gray-800 text-white">
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-700">
            <span className="text-xl font-bold">Car Mechanic Manager</span>
            <button onClick={() => setIsOpen(false)} className="p-1 rounded-md text-gray-300 hover:text-white">
              <XIcon size={24} />
            </button>
          </div>
          <nav className="flex-1 px-2 py-4 space-y-1">
            {navigation.map(item => <Link key={item.name} to={item.path} className={`flex items-center px-4 py-2 text-sm rounded-md ${location.pathname === item.path ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`} onClick={() => setIsOpen(false)}>
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </Link>)}
          </nav>
        </div>
      </div>
      {/* Desktop sidebar */}
      <div className="hidden md:flex md:flex-col md:w-64 md:fixed md:inset-y-0 bg-gray-800 text-white">
        <div className="flex items-center h-16 px-4 border-b border-gray-700">
          <span className="text-xl font-bold">Car Mechanic Manager</span>
        </div>
        <nav className="flex-1 px-2 py-4 space-y-1">
          {navigation.map(item => <Link key={item.name} to={item.path} className={`flex items-center px-4 py-2 text-sm rounded-md ${location.pathname === item.path ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </Link>)}
        </nav>
      </div>
    </>;
};
export default Sidebar;