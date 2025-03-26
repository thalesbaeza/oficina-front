import React from 'react';
import { MenuIcon, BellIcon, UserIcon } from 'lucide-react';
interface HeaderProps {
  onMenuClick: () => void;
}
const Header: React.FC<HeaderProps> = ({
  onMenuClick
}) => {
  return <header className="bg-white shadow-sm z-10">
      <div className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button type="button" className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500" onClick={onMenuClick}>
              <MenuIcon className="h-6 w-6" />
            </button>
            <div className="ml-2 md:ml-0 text-xl font-medium text-gray-800 md:hidden">
              Car Mechanic Manager
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-1 rounded-full text-gray-400 hover:text-gray-500">
              <BellIcon className="h-6 w-6" />
            </button>
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                <UserIcon className="h-5 w-5 text-gray-500" />
              </div>
              <span className="ml-2 text-sm font-medium text-gray-700 hidden md:block">
                Admin
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;