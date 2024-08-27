import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { MdKeyboardArrowRight, MdOutlineMail } from "react-icons/md";

const QUICK_LINKS_ARR = [
  "Who We Are",
  "Are you a Tyre Dealer?",
  "Career",
  "Shipping & Return Policy",
];

const Footer = () => {
  return (
    <section className="bg-white border-t">
      <aside className="py-12 main-container">
        {/* footer grid part  */}
        <aside className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
          <div className="flex flex-col gap-7">
            <img src="/TP-logo.webp" className="w-[10rem]" />
            <p className=" text-slate-700  text-md tracking-wide">
              TyreHub is your go-to destination for top-quality car, bike, and
              commercial tyres. Explore our range and find the perfect fit for
              your vehicle.
            </p>
            <div className="flex items-center gap-4 text-gray-400">
              <a href="/" target="_blank" rel="noreferrer noopener">
                <FaFacebookF className="text-3xl hover:text-facebook hover:scale-110 common-transition" />
              </a>
              <a href="/" target="_blank" rel="noreferrer noopener">
                <FaTwitter className="text-3xl  hover:text-twitter hover:scale-110 common-transition" />
              </a>
              <a href="/" target="_blank" rel="noreferrer noopener">
                <FaInstagram className="text-3xl  hover:text-instagram hover:scale-110 common-transition" />
              </a>
              <a href="/" target="_blank" rel="noreferrer noopener">
                <FaLinkedinIn className="text-3xl  hover:text-linkedin hover:scale-110 common-transition" />
              </a>
              <a href="" target="_blank" rel="noreferrer noopener">
                <FaYoutube className="text-3xl  hover:text-youtube hover:scale-110 common-transition" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-xl tracking-wide capitalize text-black pb-6">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {QUICK_LINKS_ARR?.map((item: string, index: number) => {
                return (
                  <a key={index}>
                    <div className="flex flex-row items-center gap-1 hover:text-orange-600 cursor-pointer transition-all ease-in-out duration-75 text-slate-700 capitalize">
                      <MdKeyboardArrowRight />
                      <p className="common-transition">{item}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <h4 className="font-semibold text-xl tracking-wide capitalize text-black pb-6">
              Contact Information
            </h4>
            <div className="flex flex-row gap-2 items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-100">
                <FiPhoneCall />
              </div>
              <a
                href="tel:+1-123-456-7890"
                className="flex flex-col gap-1 text-black"
              >
                <p>Phone Number</p>
                <span className=" text-slate-500 ">+1-123-456-7890</span>
              </a>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-100">
                <MdOutlineMail />
              </div>
              <a
                href="tyre-plex.com"
                className="flex flex-col gap-1 text-black"
              >
                <p>Email Us</p>
                <span className=" text-slate-500 ">tyre@plex-web.com</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-xl tracking-wide capitalize text-black pb-6">
              Location
            </h4>
            <p className=" text-slate-700 ">
              123 Movie Street, Film City, Hollywood, CA 90210
            </p>
            <div className="text-slate-700 ">
              <Link
                href="/"
                className="hover:text-slate-200 text-sm tracking-wider common-transition hover:underline cursor-pointer w-fit"
              >
                Privacy Policy
              </Link>
              <span className="px-2">|</span>
              <Link
                href="/"
                className="hover:text-slate-200 text-sm tracking-wider common-transition hover:underline cursor-pointer w-fit"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </aside>
      </aside>
      {/* Copy Right Reserve part */}
      <section className="bg-gray-100 w-full">
        <div className="main-container flex md:flex-row flex-col gap-3 py-4 items-center justify-between">
          <p className="text-center text-gray-800">
            © {new Date().getFullYear()} TyrePlex. All rights reserved.
          </p>
          <div className="flex flex-row items-center text-gray-800">
            <span className="text-center text-gray-800 capitalize">
              designed & developed by
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="hover:text-theme pl-2 text-gray-800 hover:underline"
              >
                Satyajit sahu.
              </a>
            </span>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Footer;
