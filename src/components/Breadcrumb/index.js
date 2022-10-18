import React from "react";
import { Link } from "react-router-dom";

function index() {
  return (
    <section className="bg-gray-100 pb-8 pt-20 px-4 ">
      <div className="container mx-auto">
        <ul className="breadcrumb">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="#">Office Room</Link>
          </li>
          <li>
            <Link to="#" aria-label="current-page">
              Details
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default index;
