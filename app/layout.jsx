import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aiswarya constructions",
  description: "Generated by create next app",
  icons:{
    // icon:{''}
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <head>
      <link rel="icon" href="/logo.png" sizes="any" />
      </head>
     
      <body className={inter.className}>

      <ToastContainer />
        <Header/>
        {children}
        <Footer/>
        </body>
     
    </html>
  );
}