"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { useState } from "react";
import PostsContext from "@/context/PostsContext";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
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
          <div className="flex min-h-screen flex-col">
            <Nav posts={posts} />
            <div className="flex-grow">{children}</div>
            <Footer />
          </div>
        </body>
      </html>
    </PostsContext.Provider>
  );
}
