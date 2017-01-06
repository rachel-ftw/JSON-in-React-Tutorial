import React, { Component } from 'react';
import './App.css';
import blogData from '../blog_data'
import BlogCard from './BlogCard'

export default class App extends Component {
  render() {
    const blogsRaw = blogData.blogData
    const blogComponents = blogsRaw.map(blog => 
        <BlogCard key={blog.id} blog={blog} />
      )

    return (
      <div>
        <h1>Blog Posts</h1>
        <div>{blogComponents}</div>
      </div>
    )
  }
}

