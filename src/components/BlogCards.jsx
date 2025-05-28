import React from "react";
import BlogImg from "../assets/participant1.jpg";

const BlogCards = ({ mode }) => {
  const Blogs = [
    {
      id: 1,
      title: "Blog 1",
      description: "This is the first blog post",
    },
    {
      id: 2,
      title: "Blog 2",
      description: "This is the second blog post",
    },
    {
      id: 3,
      title: "Blog 3",
      description: "This is the third blog post",
    },
    {
      id: 4,
      title: "Blog 4",
      description: "This is the fourth blog post",
    },
  ];

  return (
    <div className={`container my-4 text-${mode === "dark" ? "light" : "dark"}`}>
      <div className="row">
        {Blogs.map((item) => (
          <div className="col-md-3 mb-4" key={item.id}>
            <div className="card h-100 shadow-sm">
              <img src={BlogImg} className="card-img-top" alt="blog" />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCards;
