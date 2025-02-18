import React from "react";
import Usercard from "./components/usercard";
// import "./components/usercard.css"

const App = () => {
  return (
    <div className="app-container">
      <h1>User Details</h1>
      <Usercard />
    </div>
  );
};

export default App;