import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About"
import ArticleList from "./ArticleList"



console.log(blogData);

function App() {
  const alt = "blog logo"
  const id = "blog-image"
  const img = blogData.image
  const posts = blogData.posts
  console.log(blogData.image)


  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About  img={img} alt={alt} id={id} about={blogData.about}/>
      <ArticleList posts={posts}/>
    </div>
  );
}

export default App;
