import React, { Component } from 'react';
import './App.css';
import blogData from '../blog_data'

class App extends Component {
  render() {
    console.log('blog data ====', blogData.blogData)
    let theBlogData = blogData.blogData
    const blogs = theBlogData.map(blog => <li>{blog.title}</li>)
    return <div>
    <p>So many blogs</p>
      <ul>{blogs}</ul>
    </div>
  }
}

export default App;
