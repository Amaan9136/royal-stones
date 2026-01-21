import React, { useContext, useRef, useState, memo } from "react";
import { Link } from "react-router-dom";
import Heading from "./Heading";
import Icon from "../assets/FontAwsomeIcons";
import { AppContext } from '../contexts/AppContext';

const Header = memo(() => {
  console.log("side");
  const sidebarRef = useRef(null);
  const { addCartCount } = useContext(AppContext);

  const [showProductsDropdown, setShowProductsDropdown] = useState(false);

  const menuItems = [
    { to: '/', icon: 'home', label: 'Home' },
    {
      label: 'Products',
      icon: 'bag',
      subItems: [
        { to: '/products', label: 'All Products' },
        { to: '/products/granites', label: 'Granites' },
        { to: '/products/marbles', label: 'Marbles' },
        { to: '/products/tiles', label: 'Tiles' },
        { to: '/products/sand-stones', label: 'Sand Stones' },
        { to: '/products/italian-marbles', label: 'Italian Marbles' },
        { to: '/products/vietnam-marbles', label: 'Vietnam Marbles' },
        { to: '/products/onyx-stones', label: 'Onyx Stones' },
      ],
    },
    { to: '/cart', icon: 'cart', label: 'My Cart', },
    { to: '/contact', icon: 'contact', label: 'Contact Us' },
    { to: '/about', icon: 'shop', label: 'About Us' },
    { to: '/branch', icon: 'branch', label: 'Royal Branch' },
  ];

  return (
    <>
      <Heading sidebarRef={sidebarRef} />

      <aside
        ref={sidebarRef}
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-gray-900 border-r border-gray-200 sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            {menuItems.map((item, index) => (
              <li key={index}>
                {item.subItems ? (
                  <div>
                    <button
                      onClick={() => setShowProductsDropdown(!showProductsDropdown)}
                      className="flex items-center p-2 rounded-lg hover:bg-gray-100 hover:text-black w-full"
                      style={{ textAlign: "left" }}
                    >
                      <Icon name={item.icon} defaultClassName={item.defaultClassName} />
                      <span className="flex-1 ms-3">{item.label}</span>
                      <Icon name={'down'} defaultClassName={'text-md'} />
                    </button>
                    {showProductsDropdown && (
                      <ul className="pl-5">
                        {item.subItems.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link to={subItem.to} className="block py-2 hover:bg-gray-100 hover:text-black pl-4">
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link to={item.to} className="flex items-center p-2 rounded-lg hover:bg-gray-100 hover:text-black">
                    <Icon name={item.icon} defaultClassName={item.defaultClassName} />
                    <span className="flex-1 ms-3">{item.label}</span>
                    {item.to === '/cart' && addCartCount > 0 && (
                      <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium rounded-full bg-red-700 text-white">
                        {addCartCount}
                      </span>
                    )}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
});

export default Header;
