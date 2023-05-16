"use client"

import "./globals.css";
import { Poppins } from "next/font/google";
import { QueryClientProvider, QueryClient} from 'react-query'

const poppins = Poppins({ weight: '400', subsets: ["latin"], variable: '--font-poppins' });

const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body className={`${poppins.variable} font-sans`}>{children}</body>
      </QueryClientProvider>
    </html>
  );
}
