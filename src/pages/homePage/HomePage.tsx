import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Home Pagesss</h1>
      <Link to="/about-us"> click About Us</Link>
    </div>
  );
}
