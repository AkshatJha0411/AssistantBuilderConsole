"use client";
import "./globals.css";
import {
  LifeBuoy,
  Receipt,
  Boxes,
  Package,
  UserCircle,
  LayoutDashboard,
  Settings,
  MessageSquarePlus,
} from "lucide-react";
import Link from "next/link";
import Leftpanel, { SidebarItem } from "@/Components/leftpanel";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> */}
        <title>ABC</title>
      </head>
      <body className="bg-white">
        <Leftpanel>
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text="Dashboard"
            alert
          />
          <Link href="/intents">
            <SidebarItem
              icon={<MessageSquarePlus size={20} />}
              text="Intents"
              active
            />
          </Link>
          <SidebarItem icon={<UserCircle size={20} />} text="Entities" />
          <SidebarItem icon={<Boxes size={20} />} text="Fulfillment" />
          <SidebarItem icon={<Package size={20} />} text="Integration" alert />
          <SidebarItem icon={<Receipt size={20} />} text="Training" />
          <hr className="my-3" />
          <SidebarItem icon={<Settings size={20} />} text="Settings" />
          <SidebarItem icon={<LifeBuoy asize={20} />} text="Help" />
        </Leftpanel>
        
        {children}
      </body>
    </html>
  );
}
