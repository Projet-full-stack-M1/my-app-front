"use client";
import { Inter } from "next/font/google";
import "../components/styles/globals.scss";
import Header from '@/components/Header';
import ApolloProvider from "./Apolloprovider";
import { usePathname } from "next/navigation";


const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  const pathname = usePathname();
  const noHeaderRoutes = ['/auth/signin', '/auth/signup'];
  return (
    <html lang="en">
      <body className={inter.className}>
      <ApolloProvider>
      {!noHeaderRoutes.includes(pathname) && <Header />}
      {children} 
       </ApolloProvider>
      </body> 
    </html>
  );
}
