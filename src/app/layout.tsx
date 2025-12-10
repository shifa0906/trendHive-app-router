// src/app/layout.tsx
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";         
import { ReactNode } from "react";
import { CartProvider } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "E-Commerce App",
  description: "FakeStore API E-commerce",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <main className="container my-4">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
