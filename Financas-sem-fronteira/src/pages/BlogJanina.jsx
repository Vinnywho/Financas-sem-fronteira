import React from "react";
import Navbar from "../components/navbar/Navbar";
import Blog from "../components/blog-janina/BlogJanina";

function BlogJanina() {
  return (
    <div >
        <Navbar isOtherPage={true}/>
        <Blog />
    </div>
  );
}

export default BlogJanina;
