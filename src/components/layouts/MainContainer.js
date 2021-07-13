import React from "react";

const MainContainer = ({ children }) => {
  return (
    <main className="main-wrapper">
      <section className="container">{children}</section>
    </main>
  );
};

export default MainContainer;
