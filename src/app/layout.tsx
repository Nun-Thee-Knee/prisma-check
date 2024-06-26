import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Testing Prisma and TRPC",
  description: "We will test Prisma and trpc here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
