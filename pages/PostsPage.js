// bringing Redux into React. To do this we'll use connect from react-redux. First, we'll just make a regular component for the page.
//Finally, we'll bring in the asynchronous fetchPosts from the actions, which is the action that combines the whole lifecycle of fetching all posts into one. Using useEffect from React, we'll dispatch fetchPosts when the component mounts. dispatch will automatically be available on a connected component.
//All that's left to do at this point is display all three possible states of the page - whether it's loading, has an error, or successfully retrieved the posts from the API.

import React, {useEffect} from 'react'
import {connect} from 'react-redux'

import {fetchPosts} from '../actions/postActions'
import {Post} from '../components/Post'

const PostsPage = ({dispatch, loading, posts, hasErrors}) => {
  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  // Show loading, error, or success state
  const renderPosts = () => {
    if (loading) return <p>Loading posts...</p>
    if (hasErrors) return <p>Unable to display posts.</p>
    return posts.map((post) => <Post key={post.id} post={post} />)
  }

  return (
    <section>
      <h1>Posts</h1>
      {renderPosts()}
    </section>
  )
}

const mapStateToProps = (state) => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasErrors: state.posts.hasErrors,
})

export default connect(mapStateToProps)(PostsPage)