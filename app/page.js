"use client";
import React from "react";
import Intents from "./pages/intents";
import { BrowserRouter as Router, Route } from "react-router-dom";

const page = () => {
  return (
    <>
      <div className="overflow-hidden">
        <div className="flex absolute top-10 left-80 w-4/5">
          <input
            className="w-4/5 h-10 border border-gray-300 rounded-md px-2 placeholder:italic placeholder:text-slate-600"
            placeholder="Intent Name"
            type="text"
          />
          <button
            id="saveButton"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-8"
          >
            Save
          </button>
        </div>
      </div>
      {/* make two input boxes like the one above in the context div */}
      <div id="context" className="">
        <div className="flex absolute top-70 left-80 w-4/5">
          <h4>Context</h4>
          <input
            className="w-4/5 h-10 border border-gray-300 rounded-md px-2 placeholder:italic placeholder:text-slate-600"
            placeholder="Intent Name"
            type="text"
          />
        </div>
      </div>
    </>
  );
};

export default page;
