import { ArrowDropDownOutlined, Login } from "@mui/icons-material";
import { Button, Menu, MenuItem } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import MemorizeResponsiveNavbar from "./ResponsiveNavbar";

export const NavMenuItems = [
  {
    title: "Car Tyres",
    subMenu: [
      { title: "MRF Tyres", path: "/" },
      { title: "CEAT Tyres", path: "/" },
      { title: "Goodyear Tyres", path: "/" },
      { title: "Apollo Tyres", path: "/" },
      { title: "Bridgestone Tyres", path: "/" },
      { title: "JK Tyres", path: "/" },
      { title: "Michelin Tyres", path: "/" },
      { title: "All Car Tyres", path: "/" },
    ],
  },
  {
    title: "Bike Tyres",
    subMenu: [
      { title: "MRF Tyres", path: "/" },
      { title: "CEAT Tyres", path: "/" },
      { title: "Apollo Tyres", path: "/" },
      { title: "Bridgestone Tyres", path: "/" },
      { title: "JK Tyres", path: "/" },
      { title: "Michelin Tyres", path: "/" },
      { title: "Pirelli Tyres", path: "/" },
      { title: "All Bike Tyres", path: "/" },
    ],
  },
  { title: "Tyre Pressure", path: "/" },
  {
    title: "Commercial Tyres",
    subMenu: [{ title: "All Commercial Tyres", path: "/" }],
  },
  {
    title: "Accessories",
    subMenu: [
      { title: "Batteries", path: "/" },
      { title: "Alloys Wheels", path: "/" },
      { title: "All Accessories", path: "/" },
    ],
  },
  { title: "More", path: "/" },
];

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentMenu, setCurrentMenu] = useState(null);
  const router = useRouter();

  const handleClose = () => {
    setAnchorEl(null);
    setCurrentMenu(null);
  };

  const handleClick = (event: any, menu: any) => {
    setAnchorEl(event.currentTarget);
    setCurrentMenu(menu);
    if (menu === currentMenu) {
      handleClose();
    }
  };

  const handleMenuClick = (path: string) => {
    router.push(path);
    handleClose();
  };

  const open = Boolean(anchorEl);
  return (
    <nav
      className={`bg-white shadow-md shadow-slate-300 h-16 items-center sticky top-0 justify-center flex w-full z-[999999]`}
    >
      <div className="main-container hidden lg:flex flex-row justify-between items-center w-full">
        <img src="/TP-logo.webp" className="" />
        <ul className="flex flex-col sm:flex-row gap-4">
          {NavMenuItems?.map((item, index) => (
            <li key={index}>
              {item?.subMenu ? (
                <>
                  <Button
                    className="text-black hover:bg-red-700/20 flex items-center capitalize"
                    onClick={(e) => handleClick(e, item?.title)}
                  >
                    {item.title}
                    <ArrowDropDownOutlined
                      className={`transition-transform duration-200 ${
                        currentMenu === item.title ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </Button>
                  <Menu
                    className="mt-5 shadow-none"
                    anchorEl={anchorEl}
                    open={open && currentMenu === item?.title}
                    onClose={handleClose}
                  >
                    {item.subMenu.map((subItem, subIndex) => (
                      <MenuItem
                        className="hover:bg-red-700/10  hover:text-black font-medium common-transition mx-2 rounded-md"
                        key={subIndex}
                        onClick={() => handleMenuClick(subItem?.path)}
                      >
                        {subItem.title}
                      </MenuItem>
                    ))}
                  </Menu>
                </>
              ) : (
                <Button
                  className="text-black capitalize hover:bg-red-700/20 common-transition"
                  onClick={() => handleMenuClick(item?.path)}
                >
                  {item?.title}
                </Button>
              )}
            </li>
          ))}
        </ul>
        <div className="border border-gray-300 px-6 py-1 cursor-pointer rounded-lg flex justify-center items-center gap-2">
          <p>Login</p>
          <Login />
        </div>
      </div>
      <MemorizeResponsiveNavbar />
    </nav>
  );
};

export default Navbar;
