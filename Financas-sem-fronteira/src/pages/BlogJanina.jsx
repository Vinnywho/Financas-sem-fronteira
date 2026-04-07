import React from "react";
import Navbar from "../components/navbar/Navbar";
import Blog from "../components/blog-janina/BlogJanina";
import Footer from "../components/footer/Footer";

function BlogJanina() {
  return (
    <div >
        <Navbar isOtherPage={true}/>
        <Blog />
        <Footer />
    </div>
  );
}

export default BlogJanina;
