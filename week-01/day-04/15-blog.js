'use strict'

const BlogPost = require('./03-blogpost')

// Reuse your BlogPost class
// Create a Blog class which can
// store a list of BlogPosts
// add BlogPosts to the list
// delete(int) one item at given index
// update(int, BlogPost) one item at the given index and update it with another BlogPost

const defaultBlogPost = new BlogPost()

class Blog {
  constructor() {
    this.blogPosts = []
  }

  set addNewBlogPosts(newBlogPosts) {
    this.blogPosts.push(newBlogPosts)
  }

  delete(int) {
    if (this.blogPosts.length === 0) {
      return '!No posts to delete...'
    } else if (int > this.blogPosts.length - 1 || int < 0) {
      return '!Access out of range...'
    } else {
      return this.blogPosts.splice(int, 1)
    }
  }

  update(int, blogPost = defaultBlogPost) {
    if (this.blogPosts.length === 0) {
      return '!No posts to update...'
    } else if (int > this.blogPosts.length - 1 || int < 0) {
      return '!Access out of range...'
    } else {
      this.blogPosts[int] = blogPost
      return this.blogPosts[int]
    }
  }
}

let blog = new Blog()
console.log(blog.delete(3)) 
console.log(blog.update(3))
blog.addNewBlogPosts = new BlogPost('Jeff-2')
blog.addNewBlogPosts = new BlogPost('Jeff-3')
console.log(blog)
console.log(blog.update(1))
console.log(blog.delete(0))
console.log(blog)