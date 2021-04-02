import React from "react";
import ApproveCards from "./ApproveCards";
import faker from'faker';
const App = () => {
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        display: "grid",
        minHeight: "100vh",
        placeContent: "center",
      }}
    >
      <ApproveCards name="Mark"  date="2011" avatar={faker.image.image()}/>
      <ApproveCards name="Nahid"  date="2015" avatar={faker.image.image()}/>
      <ApproveCards name="Zahid" date="2014" avatar={faker.image.image()}/>
    </div>
  );
};

export default App;