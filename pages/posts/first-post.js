import Link from "next/link";
import React from "react";

const FirstPost = () => {
  return (
    <>
      <h1>My First Post using Next.js</h1>
      <Link href="/">
        <a>back to home</a>
      </Link>
    </>
  );
};

export default FirstPost;
