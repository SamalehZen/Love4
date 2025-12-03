import { Link, useLocation } from 'react-router-dom';
import { Home, Map as MapIcon, User, Bell, Coffee } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white rounded-full px-6 py-4 shadow-xl flex items-center gap-8">
        <Link to="/discovery" className={`transition-colors ${isActive('/discovery') ? 'text-[#6C5CE7]' : 'text-gray-400'}`}>
          <Home size={28} strokeWidth={2.5} />
        </Link>
        <Link to="/map" className={`transition-colors ${isActive('/map') ? 'text-[#6C5CE7]' : 'text-gray-400'}`}>
          <MapIcon size={28} strokeWidth={2.5} />
        </Link>
        
        <Link to="/match" className={`bg-[#6C5CE7] text-white p-3 rounded-full -mt-8 shadow-lg border-4 border-white transform hover:scale-110 transition-transform`}>
           <Coffee size={24} />
        </Link>

        <div className={`transition-colors text-gray-400`}>
          <Bell size={28} strokeWidth={2.5} />
        </div>
        <div className={`transition-colors text-gray-400`}>
          <User size={28} strokeWidth={2.5} />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
