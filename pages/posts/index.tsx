import { useState, useEffect } from "react";
import { MainLayout } from "../../components/MainLayout";
import { NextPage } from "next";
import Link from "next/link";

interface PostsProps {
  posts: { id: string; title: string; description: string }[];
}

const Posts: NextPage<PostsProps> = ({ posts: serverPosts }) => {
  const [posts, setPosts] = useState(serverPosts);

  useEffect(() => {
    async function load() {
      const response = await fetch(`${process.env.API_URL}/posts`);
      const posts = await response.json();
      setPosts(posts);
    }

    if (!serverPosts) {
      load();
    }
  }, [serverPosts]);

  if (!posts) {
    return <MainLayout>Loading...</MainLayout>;
  }

  return (
    <MainLayout title="Posts">
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link
                className="postListLink"
                href={`/post/[id]`}
                as={`/post/${post.id}`}
              >
                {post.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </MainLayout>
  );
};

Posts.getInitialProps = async (ctx) => {
  if (!ctx.req) {
    return { posts: null };
  }
  const response = await fetch(`${process.env.API_URL}/posts`);
  const posts = await response.json();

  return {
    posts,
  };
};

export default Posts;
