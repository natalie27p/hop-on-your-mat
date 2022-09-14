import React from "react";
import { Route } from "react-router-dom";

const HomePage = (props) => {
  return (
    <section>
      <h1>Welcome:)</h1>
      <Route path="/home/new-user">
        <p>Welcome, new user!</p>
      </Route>
    </section>
  );
};

export default HomePage;
