"use client";
import React from "react";
import Leftpanel, { SidebarItem } from "@/Components/leftpanel";
import {
  LifeBuoy,
  Receipt,
  Boxes,
  Package, 
  UserCircle,
  BarChart3,
  LayoutDashboard,
  Settings,
} from "lucide-react";
const page = () => {
  return (
    <div>
      <Leftpanel>
        <SidebarItem
          icon={<LayoutDashboard size={20} />}
          text="Dashboard"
          alert
        />

        <SidebarItem icon={<BarChart3 size={20} />} text="Intents" active />
        <SidebarItem icon={<UserCircle size={20} />} text="Entities" />
        <SidebarItem icon={<Boxes size={20} />} text="Fulfillment" />
        <SidebarItem icon={<Package size={20} />} text="Integration" alert />
        <SidebarItem icon={<Receipt size={20} />} text="Training" />
        <hr className="my-3" />
        <SidebarItem icon={<Settings size={20} />} text="Settings" />
        <SidebarItem icon={<LifeBuoy asize={20} />} text="Help" />
      </Leftpanel>
    </div>
  );
};

export default page;
