import Header from 'widgets/Header'
import PostInfo from 'components/PostInfo'
import RelatedPosts from 'components/RelatedPosts'

const Post = () => {
  return (
    <div>
      <Header post />
      <PostInfo />
      <RelatedPosts />
    </div>
  )
}

export default Post
