"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { useState } from "react";
import PostsContext from "@/context/PostsContext";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Web Dev Blog",
  description: "The best blog for web development",
};

export default function RootLayout({ children }) {
  const [posts, setPosts] = useState([]);
  return (
    <PostsContext.Provider
      value={{
        posts,
        setPosts,
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <Nav posts={posts} />
          {children}
          <Footer />
        </body>
      </html>
    </PostsContext.Provider>
  );
}
