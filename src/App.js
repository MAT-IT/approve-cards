import React from "react";
import ApproveCards from "./ApproveCards";
import faker from'faker';
import extraContetnt from "./extraContetnt";
const App = () => {
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        display: "grid",
        minHeight: "100vh",
        placeContent: "center",
      }
      .ac={
        display:"grid",
        Height:"25vh"

      }
    }
    >
      <ApproveCards className="ac" name="Mark"  date="2011" avatar={faker.image.image()}><extraContetnt Friends = "22"/></ApproveCards>
      <ApproveCards name="Nahid"  date="2015" avatar={faker.image.image()}/>
      <ApproveCards name="Zahid" date="2014" avatar={faker.image.image()}/>
      <ApproveCards name="mat" avatar={faker.image.image()} />     
    </div>
  );
};

export default App;