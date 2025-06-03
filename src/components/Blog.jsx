import React,{ useContext, useEffect } from 'react'
import SmallBanner from "./SmallBanner";
import BlogCards from "./BlogCards";
import ProductContext from "../context/ProductContext";
import AppleImg from "../assets/apple.jpg";
 

const Blog = ({ mode }) => {
   const context = useContext(ProductContext);
  const { product, count, fetchData, news } = context;
  console.log("product", product);
  console.log("count", count);
  console.log("news", news);

     let title = "Blog Page";

      useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <SmallBanner title={title} />
      <BlogCards mode={mode}/>
       <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div class="card">
              <img src={AppleImg} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{product.name}</h5>
                <p class="card-text">{product.description}</p>
                <a href="#" class="btn btn-primary">
                  Click to know more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
