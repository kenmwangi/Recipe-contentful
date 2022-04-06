import Link from "next/link";
import React from "react";

function Layout(props) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>Just Add</span>
              <span>Marmite</span>
            </h1>
            <h2>Spread The Joy</h2>
          </a>
        </Link>
      </header>
      <div className="page-content">{props.children}</div>
      <footer>
        <p>
          &copy; Copyright, Add Marmite {new Date().getFullYear()}. All rights
          reserved :)
        </p>
      </footer>
    </div>
  );
}

export default Layout;
