import React from 'react'
import SmallBanner from "./SmallBanner";
import BlogCards from "./BlogCards";
import Footer from './Footer';

const Blog = ({ mode }) => {
     let title = "Blog Page";
  return (
    <div>
      <SmallBanner title={title} />
      <BlogCards mode={mode}/>
    </div>
  );
};

export default Blog;
