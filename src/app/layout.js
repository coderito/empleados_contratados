"use client"

import "./globals.css";
import { Poppins } from "next/font/google";
import { QueryClientProvider, QueryClient} from 'react-query'

import {store} from "../../redux/store"
import { Provider } from "react-redux";

const poppins = Poppins({ weight: '400', subsets: ["latin"], variable: '--font-poppins' });

const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <body className={`${poppins.variable} font-sans`}>{children}</body>
        </QueryClientProvider>
      </Provider>
    </html>
  );
}
