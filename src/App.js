import React from "react";
import CommentDetail from "./CommentDetail";
import faker from'faker';
import ApprovelCards from "./ApprovelCards";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovelCards>
          <CommentDetail 
              name="Mark"  
              date="2011" 
              avatar={faker.image.avatar()}
              content="It is pretty cool"
          />
      
      
      </ApprovelCards>  

      <ApprovelCards>

          <CommentDetail 
              name="Nahid"  
              date="2015" 
              avatar={faker.image.avatar()}
              content="It is pretty cool"
          />

      </ApprovelCards>  

      <ApprovelCards>
          <CommentDetail 
              name="Zahid" 
              date="2014" 
              avatar={faker.image.avatar()}
              content="It is pretty cool"
          />
      </ApprovelCards> 
    </div>
  );
};

export default App;