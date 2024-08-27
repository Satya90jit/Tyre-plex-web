import { Login } from "@mui/icons-material";
import { Collapse } from "@mui/material";
import { memo, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenuAltLeft } from "react-icons/bi";
import { NavMenuItems } from "./Navbar";

const ResponsiveNavbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="lg:hidden py-4 cursor-pointer fixed top-0 bg-white shadow-md shadow-slate-300 w-full">
      <div className="h-full flex justify-between items-center w-full main-container">
        <img src="/TP-logo.webp" className="" />
        <div className="">
          <span onClick={() => setOpen(!open)} className="inline-block w-6">
            {open ? (
              <AiOutlineClose className="text-2xl text-black" />
            ) : (
              <BiMenuAltLeft className="text-3xl text-black" />
            )}
          </span>
        </div>
      </div>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <article className="bg-white w-full shadow-sm max-h-[90vh] overflow-y-scroll">
          <section className="main-container w-full flex flex-col font-medium pt-6">
            <hr />
            <div className="w-full pt-6 pb-2 text-gray-900 text-lg">
              {NavMenuItems?.map((item) => (
                <div
                  key={item?.title}
                  onClick={() => setOpen(false)}
                  className="hover:bg-red-700/20 rounded-lg px-3 py-2 common-transition"
                >
                  {item?.title}
                </div>
              ))}
            </div>
            <div className="border border-gray-300 w-fit px-6 py-1 cursor-pointer rounded-md flex justify-center items-center gap-2">
              <p>Login</p>
              <Login />
            </div>
          </section>
        </article>
      </Collapse>
    </section>
  );
};

const MemorizeResponsiveNavbar = memo(ResponsiveNavbar);
export default MemorizeResponsiveNavbar;
