import Navbar from "@/components/Navbar";
import { connectDB } from "@/services/connectMongo";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "StaySwift",
  description: "StaySwift- Hotel finding app",
};

export default async function RootLayout({ children }) {
  await connectDB();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar fromAuthPage={false} />
        <main>{children}</main>
      </body>
    </html>
  );
}
