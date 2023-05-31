import React from 'react'
import Layout from './Layout'
import Posts from '../pages/Posts'
import PostForm from '../client/PostForm'
import '../styles/postFormwithPosts.css'
import Contact from '../client/Contact'

const PostFormWithPosts = () => {
  return (
    <Layout>
        <div id='postFormWithPosts' className="PostFormWithPosts">
            <Posts />
            <PostForm />
        </div>
        <Contact />
    </Layout>
  )
}

export default PostFormWithPosts
