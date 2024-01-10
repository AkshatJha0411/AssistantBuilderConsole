"use client";
import "./globals.css";
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> */}
        <title>ABC</title>
      </head>
      <body className="bg-white">{children}</body>
    </html>
  );
}
