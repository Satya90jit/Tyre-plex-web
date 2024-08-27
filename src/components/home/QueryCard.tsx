import { QuestionAnswer, Send } from "@mui/icons-material";
import React from "react";

const QueryCard = () => {
  return (
    <section>
      <div className="px-8 rounded-lg py-10 flex lg:flex-row flex-col justify-between lg:gap-60 gap-12 w-full bg-slate-300/20 my-16">
        <div className="flex lg:flex-row flex-col gap-5">
          <div className="lg:flex justify-start hidden">
            <span className="flex items-center justify-center lg:p-8 p-8 rounded-full text-white bg-gray-800/40">
              <QuestionAnswer className="h-14 w-14" />
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-gray-900 font-semibold text-xl">
              Have a Query?
            </h3>
            <p className="text-gray-800 text-base">
              Got a question or need assistance? Drop us a message, and we'll
              get back to you as soon as possible.
            </p>
          </div>
        </div>
        <div className="md:p-6 p-3 bg-slate-700/20 shadow-md rounded-lg lg:w-[45rem] w-full border border-slate-100">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Your Query"
                className="focus:outline-none bg-gray-700 p-2 h-full text-sm text-white w-full flex-grow rounded-l-lg"
              />
              <span className="bg-orange-800 cursor-pointer common-transition hover:bg-orange-700 h-full inline-block text-white text-sm py-1 px-2 rounded-r-lg">
                <Send />
              </span>
            </div>
            <p className="text-gray-900">
              Submit your query, and we'll get back to you shortly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QueryCard;
