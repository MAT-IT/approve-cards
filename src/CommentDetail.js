import React from "react";


const CommentDetail =(props)=>{
    const {name,date,avatar,content}=props;
    return(        
        <div class="comment">
            <a href="/" className="avatar">
                
                <img alt="avatar" src={avatar}/>
            </a>
            <div className="content">
                <a href="/" className="autor">
                   Name : {name}
                </a>
                <div className="metadata">
                    <span className="date">Update : {date}</span>
                </div>
                <div className="text">
                    {content}
                </div>
            </div>
        </div>
     
    )
}

export default CommentDetail;