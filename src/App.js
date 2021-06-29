import React from "react";
import ApproveCards from "./ApproveCards";
import faker from'faker';

const App = () => {
  return (
    <div className="ui container comments">
      <ApproveCards 
          name="Mark"  
          date="2011" 
          avatar={faker.image.avatar()}
          content="It is pretty cool"
      />
      
      <ApproveCards 
          name="Nahid"  
          date="2015" 
          avatar={faker.image.avatar()}
          content="It is pretty cool"
      />
      <ApproveCards 
          name="Zahid" 
          date="2014" 
          avatar={faker.image.avatar()}
          content="It is pretty cool"
      />
          
    </div>
  );
};

export default App;