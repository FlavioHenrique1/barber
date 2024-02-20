// pages/_app.js

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'; // ou qualquer outro arquivo de estilo global que você tenha

import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
