"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import PublicLayout from "@/components/layouts/PublicLayout";

export default function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <PublicLayout>
      <h1 className="h1-bold text-center">Homepage</h1>

      <div className="posts">
        {posts.map((post) => (
          <div key={post.id}>Post TI {post.title}</div>
        ))}
      </div>

      <div className="my-20 text-center">
        <Link
          className="px-8 py-2 border shadow rounded-md hover:bg-light-500 hover:text-light-100"
          href="/register"
        >
          Get Started
        </Link>
      </div>
    </PublicLayout>
  );
}
