"use client";
import axios from "axios";
import { useState, useEffect } from "react";

const page = ({ params: { id } }) => {
  const [error, setError] = useState(null);
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await axios.get(`/api/posts/${id}`);
        setPost(data.data);
      } catch (error) {
        console.error("Error fetching post:", error);
        setError("Error fetching post");
      }
    }
    fetchData();
  }, [id]);

  if (error) {
    return (
      <div className="mt-20 flex h-full w-full flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Error</h1>
        <p className="mt-10 px-10 text-center text-xl text-gray-500 md:w-1/2">
          An error occurred while fetching the post. Please try again later.
        </p>
        <img
          src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1443&q=80"
          alt="error"
          className="mt-20 h-96 w-96 rounded-lg object-cover"
        />
      </div>
    );
  }

  return (
    <div className="mt-20 flex h-full w-full flex-col items-center justify-center">
      <img
        src={post?.img}
        className="h-96 w-full object-cover object-center"
        alt={post?.title}
      />

      <div className="mt-20 flex w-full flex-col items-center justify-center">
        <h1 className="px-10 text-center text-4xl font-bold md:text-left">
          {post?.title || "No title found for this post!"}
        </h1>
        <p className="mt-10 px-10 text-center text-xl text-gray-500 md:w-1/2">
          {post?.subheading}
        </p>
        <div className="mt-10 flex w-full flex-row items-center justify-center gap-5">
          <img
            src={post?.authorImg}
            className="mt-19 h-16 w-16 rounded-full object-cover object-center"
          />
          <div>
            <p className="mt-1 text-xl text-gray-500">{post?.author}</p>
            <p className="mt-1 text-xl text-gray-500">
              {new Date(post?.date).toLocaleDateString()}
            </p>
          </div>
        </div>
        {
          <div className="mt-10 flex flex-col gap-10 px-10 text-xl leading-10 text-gray-500 md:w-1/2">
            {post?.content?.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        }
      </div>
    </div>
  );
};

export default page;
