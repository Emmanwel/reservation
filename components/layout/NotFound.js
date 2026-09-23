import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="page-not-found-wrapper">
      <h1 id="title_404">404</h1>
      <h3 id="description_404">
        We couldn&apos;t find that page.
      </h3>
      <p className="text-muted mb-4">
        It may have been moved or no longer exists.
      </p>
      <Link href="/">
        <a className="btn login-header-btn text-white px-4">
          Back to homepage
        </a>
      </Link>
    </div>
  );
};

export default NotFound;
