import { useState, useEffect } from "react";
import { MainLayout } from "../../components/MainLayout";
import { useRouter } from "next/router";
import { NextPage } from "next";
import Link from "next/link";

interface PostProps {
  post: { id: string; title: string; description: string };
}

const Post: NextPage<PostProps> = ({ post: serverPost }) => {
  const [post, setPost] = useState(serverPost);
  const router = useRouter();

  useEffect(() => {
    async function load() {
      const response = await fetch(
        `${process.env.API_URL}/posts/${router.query.id}`
      );
      const post = await response.json();
      setPost(post);
    }

    if(!serverPost) {
        load();
    }
  }, [router.query.id, serverPost]);

  if (!post) {
    return <MainLayout>Loading...</MainLayout>;
  }

  return (
    <MainLayout title="Post">
      <h3>{post.title}</h3>
      <hr />
      <p>{post.description}</p>
      <Link className="goBackLink" href={"/posts"}>
        &larr; Go back to all posts
      </Link>
    </MainLayout>
  );
};

Post.getInitialProps = async (ctx) => {
  if (!ctx.req) {
    return { post: null };
  }

  const response = await fetch(`${process.env.API_URL}/posts/${ctx.query.id}`);
  const post = await response.json();

  return {
    post,
  };
};

export default Post;
