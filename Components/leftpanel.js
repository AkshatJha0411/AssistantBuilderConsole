"use client";
import React, { useState, createContext, useContext } from "react";
import { ChevronFirst, MoreVertical, ChevronLast } from "lucide-react";
import Link from "next/link";
const SidebarContext = createContext();
const Leftpanel = ({ children }) => {
  const [expanded, setExpanded] = useState(true);
  return (
    <div>
      <aside className="h-screen">
        <nav className="h-full inline-flex flex-col bg-[#F9F9F9] justify-between">
          <div className="p-4 pb-2 flex justify-between items-center">
            <Link href="/">
              <img
                src="https://img.logoipsum.com/243.svg"
                className={`overflow-hidden transition-all ${
                  expanded ? "w-32" : "w-0"
                }`}
                alt=""
              />
            </Link>

            {/* make a button to retract the sidebar */}
            <button
              onClick={() => setExpanded((curr) => !curr)}
              className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-300"
            >
              {expanded ? (
                <ChevronFirst color="black" />
              ) : (
                <ChevronLast color="black" />
              )}
            </button>
          </div>
          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3">{children}</ul>
          </SidebarContext.Provider>

          <div className="border-t flex p-3">
            <img
              src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
              className="w-10 h-10 rounded-md"
            />
            <div
              className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
            >
              <div className="leading-4">
                <h4 className="font-semibold text-black">Sample User</h4>
                <span className="text-xs text-gray-500">
                  sampleuser@gmail.com
                </span>
              </div>
              <MoreVertical size={20} color="black" />
            </div>
          </div>
        </nav>
      </aside>
    </div>
  );
};
export function SidebarItem({ icon, active, text, alert, href }) {
  const { expanded } = useContext(SidebarContext);
  return (
    <li
      className={`
      relative flex items-center py-2 px-3 my-1
      font-medium rounded-md cursor-pointer
      transition-colors group
      ${
        active
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-indigo-50 text-gray-600"
      }
  `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
        absolute left-full rounded-md px-2 py-1 ml-6
        bg-indigo-100 text-indigo-800 text-sm
        invisible opacity-20 -translate-x-3 transition-all
        group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
    `}
        >
          {text}
        </div>
      )}
    </li>
  );
}
export default Leftpanel;
