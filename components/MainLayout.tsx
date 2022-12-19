import { memo, FC, ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

interface MainLayoutProps {
  title?: string;
  children?: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ title = '', children }) => {
  return (
    <>
      <Head>
        <title>{title} Page</title>
      </Head>
      <div>
        <nav className="navigation">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/posts">Posts</Link>
        </nav>
        <main className="main-wrapper">
          <h1>{title}</h1>
          <article>{children}</article>
        </main>
      </div>
    </>
  );
};
