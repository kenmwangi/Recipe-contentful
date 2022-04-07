import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function NotFound() {
  const router = useRouter();
  React.useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Ooops! This page cannot be found</p>
      <p>
        Redirecting to <Link href="/">Homepage</Link> for more recipe goodness
      </p>

      <style jsx>
        {`
          .not-found {
            background: #fff;
            padding: 30px;
            box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
            transform: rotateZ(-1deg);
          }
          h1 {
            font-size: 3em;
            text-align: center;
          }
        `}
      </style>
    </div>
  );
}

export default NotFound;
