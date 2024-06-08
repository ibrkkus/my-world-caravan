import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/AppLayout/Navbar";
import Footer from "@/app/AppLayout/Footer";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "My World Caravan Turkey",
  description: "Hafiflikte Rekortmen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
