let first120CharOfPost = blogPost => {
    let snippet
    if (blogPost.length >= 120){
      snippet = blogPost.substring(0,120)
      return snippet
    }
    return blogPost
  }

module.exports = { first120CharOfPost }