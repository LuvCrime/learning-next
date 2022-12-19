import Link from "next/link";

const Error404 = () => {
  return (
    <div className="padding">
      <p>Sorry, The page you are looking for can&apos;t be found</p>
      <p>Try checking your URL</p>
      <h2>
        Please <Link className="errorLink" href="/">go back</Link> to safety
      </h2>
    </div>
  );
};

export default Error404;
