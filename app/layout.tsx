'use client'

// app/layout.tsx
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CartProvider from "@/components/Provider";
import ShoppingCartModule from "@/components/ShoppingCartModule";
import { Auth0Provider } from '@auth0/auth0-react';
import { useEffect, useState } from "react";
import { metadata } from './Metadata'; // Your metadata import

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [origin, setOrigin] = useState('');

  // This ensures window.location is available on the client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
    }
  }, []);

  return (
    <html lang="en">
      <body className="slim-font">
        {origin ? (  // Render Auth0Provider only when origin is available
          <Auth0Provider
            domain="dev-2fmo3te670mqym4v.us.auth0.com"         // Paste your Auth0 Domain here
            clientId="csWz2oio1XQjcXDUiAc7OlzPkCepyGkh"     // Paste your Auth0 Client ID here
            authorizationParams={{
              redirect_uri: origin,       // Use origin safely
            }}
          >
            <CartProvider>
              <Navbar />
              <ShoppingCartModule />
              {children}
            </CartProvider>
          </Auth0Provider>
        ) : ( 
          <div className="flex text-center text-[4rem] font-[400] justify-center py-40 items-center text-red-300">Infoword {''}<span className="text-black pl-4">Global</span></div>  // Show a loading state while waiting for the origin
        )}
      </body>
    </html>
  );
}
