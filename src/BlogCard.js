import React, { Component } from 'react';
import './App.css';

export default class BlogCard extends Component {
  render() {
    const blog = this.props.blog

    return (
      <div>
        <h2>{blog.title}</h2>
        <p>{blog.content}</p>
      </div>
    )
  }
}