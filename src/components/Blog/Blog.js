import React from 'react';
import Mainbar from "../Mainbar/Mainbar";
import Sidebar from "../Sidebar/Sidebar";

function Blog(props) {
  return (
    <div className="blog">
       <Mainbar posts={props.posts}/>
       <Sidebar/>
    </div>
  );
}

export default Blog;