import React from "react";
import CategoryItem from "./CategoryItem";

export default function CategoryContainer({continents}) {

  return (
    <ul className="nav nav-pills tm-tabs-links">
      {continents.map((continent) => (
        <CategoryItem image={continent.image} name={continent.name} />
      ))}
    </ul>
  );
}
