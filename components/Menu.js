import React from "react";
import Link from "next/link";

const Menu = () => (
  <div>
    <Link href="/about">
      <a>About</a>
    </Link>
    <br />
    <Link href="/">
      <a>Home Page</a>
    </Link>
  </div>
);

export default Menu;
