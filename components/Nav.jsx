import Link from "next/link";
import { useState } from "react";

const Nav = ({ posts }) => {
  const [filter, setFilter] = useState("");

  const handlePostClick = () => {
    setFilter("");
  };

  const filteredPosts = filter
    ? posts.filter((post) =>
        post.title.toLowerCase().includes(filter.toLowerCase())
      )
    : [];

  return (
    <nav className="mt-10 flex flex-wrap items-center justify-between px-16">
      <h1 className="mx-auto p-4 text-center text-4xl font-bold text-gray-800 md:mx-0">
        <Link href="/">Web Development</Link>
      </h1>
      <div className="relative mx-auto md:mx-0">
        <input
          type="text"
          className="rounded-lg border-2 border-gray-200 px-4 py-2 transition duration-300 ease-in-out focus:border-green-600 focus:outline-none"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
        />
        {filteredPosts.length > 0 && (
          <div
            className="md:mx:0 absolute mx-auto mt-2 flex flex-col rounded-lg border border-gray-200 bg-white"
            style={{ width: "100%" }}
          >
            {filteredPosts.map((post) => (
              <Link
                href={`/post/${post._id}`}
                key={post._id}
                className="px-4 py-2 text-gray-800 transition duration-300 ease-in-out hover:text-green-600"
                onClick={handlePostClick}
              >
                {post.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
