import React from "react";

import Category from "./_component/Category";


const CategoryPage = () => {
  return (
    <section className=" flex flex-col justify-center items-center">
      <h1>Category Management</h1>
      <Category />
    </section>
  );
};

export default CategoryPage;
