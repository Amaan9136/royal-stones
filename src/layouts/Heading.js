import { memo, useContext, useState } from 'react';
import { AppContext } from '../contexts/AppContext';
import { Link } from 'react-router-dom';
import Icon from '../assets/FontAwsomeIcons';

const Heading = memo(({ sidebarRef }) => {
  console.log("head");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { addCartCount } = useContext(AppContext);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    if (sidebarRef.current) {
      const sidebar = sidebarRef.current;
      sidebar.classList.toggle('-translate-x-full');
      sidebar.classList.toggle('sm:translate-x-0');
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-gray-900 border-b">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Icon
              name={isSidebarOpen ? 'times' : 'bars'}
              defaultClassName="text-[1.8rem] mt-[0.2rem] mr-2 sm:hidden"
              onClick={toggleSidebar}
            />
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 me-3"
              alt=""
            />
            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">
              Royal Stone Company
            </span>
          </div>
          <Link to='/cart' className="mt-2 p-2 relative">
            <Icon name='cart' className="text-xl" />
            {addCartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-700 text-white font-medium rounded-full h-5 w-5 flex items-center justify-center">
                {addCartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
});

export default Heading;
