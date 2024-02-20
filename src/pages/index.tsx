import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Principal from "./home/Principal";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Principal/>
    </div>
  );
}
