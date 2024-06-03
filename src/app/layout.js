import { Inter } from "next/font/google";
import "../components/styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body> 
    </html>
  );
}
