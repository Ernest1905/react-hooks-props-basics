import React from "react";


  function BlogContent(props) {
    console.log(props);
  
    if (!props.isPublished) {
      // hide unpublished content
      // return null means "don't display any DOM elements here"
      return null;
    } else {
      // show published content
      return (
        <div>
          <h2>{props.articleText}</h2>
          <p>{props.minutesToRead} minutes to read</p>
          <p>{props.commentText}</p>
        </div>
      );
    }
}

export default BlogContent;
