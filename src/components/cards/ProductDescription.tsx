import { Directions, LocationOn } from "@mui/icons-material";
import { Fragment } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FiClock } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";

const ProductDescription = () => {
  return (
    <section className="relative p-8 bg-white rounded-lg shadow-md my-16">
      <span className="absolute right-0 top-0 p-2">
        <MdFavoriteBorder className="text-3xl text-slate-500 cursor-pointer" />
      </span>
      <h2 className="text-2xl font-bold mb-2">
        SHREE HEMKUNT TYRES AND SERVICES
      </h2>
      <div className="text-gray-600 mb-4 flex items-start gap-2">
        <span>
          <LocationOn className="text-gray-400" />
        </span>
        PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02
        INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014
      </div>
      <div className="text-gray-600 mb-4 flex items-center gap-2">
        <span>
          <FiClock className="text-gray-400" />
        </span>
        Open - Monday to Sunday - 10:00AM to 8:00PM
      </div>

      <p className="text-gray-700">Rating</p>
      <div className="flex items-center gap-3 pb-2">
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, index) => (
            <Fragment key={index}>
              {index < 4 ? (
                <AiFillStar className="text-amber-400 text-sm" />
              ) : (
                <AiOutlineStar className="text-amber-400 text-sm" />
              )}
            </Fragment>
          ))}
        </div>
        <p className="text-gray-500 underline">2777 Reviews</p>
      </div>
      <div className="text-gray-400 border w-fit border-gray-300 px-4 py-1 mb-4 text-sm bg-gray-200/40 rounded-md cursor-pointer hover:text-gray-500">
        Rate
      </div>

      <div className="flex flex-col gap-1 pb-4">
        <a href="tel:+918114957912" className="!w-fit">
          <button className="flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-1.5 px-4 rounded-md font-medium">
            Get Directions
            <span className="bg-emerald-500 text-white text-xs px-3 py-1 rounded-md font-semibold">
              <Directions />
            </span>
          </button>
        </a>
      </div>
      <p className="tracking-wide mb-6">
        Short product description here.{" "}
        <a href="#description" className="font-bold cursor-pointer">
          Read more
        </a>
      </p>
    </section>
  );
};

export default ProductDescription;
