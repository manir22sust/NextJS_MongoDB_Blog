"use client";
import { useState, useEffect, useContext } from "react";

import axios from "axios";
import Tag from "@/components/cards/Tag";
import BlogCard from "@/components/cards/BlogCard";
import PostsContext from "@/context/PostsContext";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [error, setError] = useState();

  const { setPosts: postContextFunc } = useContext(PostsContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await axios.get("/api/posts");
        console.log(data);
        setPosts(data.data);
        postContextFunc(data.data);
      } catch (error) {
        setError("Error fetching posts");
      }
    }

    fetchData();
  }, []);

  if (posts?.length === 0) {
    return <div className="text-center">No posts found...</div>;
  }

  if (error) {
    return (
      <div className="mt-10 text-center text-3xl">
        <img
          src="https://images.unsplash.com/photo-1555861496-0666c8981751?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80"
          alt="error"
          className="h-96 w-96 object-cover"
        />
      </div>
    );
  }

  return (
    <main className="lg:p:20 min-h-screen p-10">
      <h2 className="mb-10 flex h-96 flex-col items-center justify-center text-center text-3xl font-bold uppercase tracking-widest md:text-4xl lg:text-5xl">
        <span className="border-b-4 pb-3 text-5xl font-bold"> Dev Blog</span>
        <p className="mt-10 text-lg">
          Like, share and subscribe for more content!
        </p>
      </h2>
      <h2 className="mt-10 flex flex-wrap gap-4">
        {[
          ...new Set(
            posts?.map((post) => {
              return post.tag;
            })
          ),
        ].map((tag) => {
          return (
            <Tag
              key={tag}
              tag={tag}
              isSelected={selectedTags.includes(tag)}
              setSelectedTags={setSelectedTags}
            />
          );
        })}
        {selectedTags?.length !== 0 && (
          <button
            className="rounded-md bg-red-500 px-4 py-2 text-white"
            onClick={() => setSelectedTags([])}
          >
            Clear
          </button>
        )}
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {selectedTags?.length !== 0 &&
          posts
            ?.filter((post) => {
              return selectedTags.includes(post.tag);
            })
            .map((post) => {
              return (
                <BlogCard
                  tag={post.tag}
                  title={post.title}
                  image={post.img}
                  key={post.title}
                  id={post._id}
                  desc={post.subheading}
                />
              );
            })}
        {selectedTags?.length === 0 &&
          posts.map((post) => {
            return (
              <BlogCard
                tag={post.tag}
                title={post.title}
                image={post.img}
                key={post.title}
                id={post._id}
                desc={post.subheading}
              />
            );
          })}
      </div>
    </main>
  );
}
