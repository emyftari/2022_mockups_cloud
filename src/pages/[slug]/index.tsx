import { FC, useEffect } from 'react'
import { NextSeo } from 'next-seo'

import { client } from 'utils/client'

import { useAppDispatch, useAppSelector } from 'app/hooks'
import { clearFilter } from 'app/features/filterSlice'

import { IProps } from 'interfaces/props'

import HeaderPost from 'widgets/HeaderPost'
import PostInfo from 'components/PostInfo'
import Posts from 'components/Posts'
import RelatedPosts from 'components/RelatedPosts'
import Container from 'components/ui/Container'

const Post: FC<IProps> = ({ post, subcategories, relatedPosts, posts }) => {
  const dispatch = useAppDispatch()
  const subcategory = useAppSelector((state) => state.filter.subcategory)

  useEffect(() => {
    dispatch(clearFilter())
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <NextSeo
        title={`Mockups Cloud - ${post.title}`}
        description="The web-wide search engine for design inspiration"
        canonical="https://www.mockupscloud.com"
        openGraph={{
          url: `https://www.mockupscloud.com/${post.short_url}`,
          title: `Mockups Cloud - ${post.title}`,
          description: 'The web-wide search engine for design inspiration',
          site_name: 'Mockups Cloud',
        }}
      />
      <HeaderPost post={post} subcategories={subcategories} />
      <PostInfo {...post} />
      {subcategory === null ? (
        <RelatedPosts relatedPosts={relatedPosts} />
      ) : (
        <Container>
          <Posts posts={posts} />
        </Container>
      )}
    </>
  )
}

export default Post

export const getStaticProps = async ({ params: { slug } }: any) => {
  const posts = await client.get('/posts/3')
  const res = await client.get('/categories/subcategories')

  const currentPost = posts.data.data[0].filter(
    (post: any) => post.short_url === slug
  )

  const relatedPosts = posts.data.data[0].filter(
    (post: any) =>
      post.subcategory.id === currentPost[0].subcategory.id &&
      post.id !== currentPost[0].id
  )

  const subcategories = res.data.data[0].filter(
    (item: any) => item.posts_number > 0
  )

  if (!currentPost.length)
    return {
      notFound: true,
    }

  return {
    props: {
      relatedPosts,
      subcategories,
      post: currentPost[0],
      posts: posts.data.data[0],
    },
    revalidate: 30,
  }
}

export const getStaticPaths = async () => {
  const { data } = await client.get('/posts/3')
  const paths = data.data[0].map((post: any) => ({
    params: { slug: post.short_url },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}
