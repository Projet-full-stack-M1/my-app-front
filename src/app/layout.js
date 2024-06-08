import { Inter } from "next/font/google";
import "../components/styles/globals.scss";
import Header from '@/components/Header';
import ApolloProvider from "./Apolloprovider";


const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
      <ApolloProvider>
      <Header/>
      {children} 
       </ApolloProvider>
      </body> 
    </html>
  );
}
