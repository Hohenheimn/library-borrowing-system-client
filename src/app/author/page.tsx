import React from "react";

import Author from "./_component/Author";


const AuthorPage = () => {
  return (
    <section className=" flex flex-col justify-center items-center">
      <h1>Author Management</h1>
      <Author />
    </section>
  );
};

export default AuthorPage;
