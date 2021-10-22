import React from "react";

export default function CategoryItem({ name, image }) {
  return (
    <li className="tm-tab-link-li">
      <a href="#1a" data-toggle="tab" className="tm-tab-link">
        <img
          src={`http://localhost:8000/storage/images/continents/${image}`}
          alt="Image"
          className="img-fluid"
        />
        {name}
      </a>
    </li>
  );
}
