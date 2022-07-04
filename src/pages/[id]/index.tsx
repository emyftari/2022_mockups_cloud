import { FC } from 'react'
import Head from 'next/head'

import { client } from 'utils/client'

import { IProps } from 'interfaces/props'

import HeaderPost from 'widgets/HeaderPost'
import PostInfo from 'components/PostInfo'
import RelatedPosts from 'components/RelatedPosts'

const Post: FC<IProps> = ({ post, subcategories, relatedPosts }) => {
  return (
    <>
      <Head>
        <title>Mockups Cloud - {post.title}</title>
      </Head>
      <HeaderPost post={post} subcategories={subcategories} />
      <PostInfo app={post.application} title={post.title} />
      <RelatedPosts posts={relatedPosts} />
    </>
  )
}

export default Post

export const getStaticProps = async ({ params: { id } }: any) => {
  const posts = await client.get('/posts/3')
  const subcategories = await client.get('/categories/subcategories')

  const currentPost = posts.data.data[0].filter(
    (post: any) => post.id.toString() === id
  )

  const relatedPosts = posts.data.data[0].filter(
    (post: any) =>
      post.subcategory.id === currentPost[0].subcategory.id &&
      post.id !== currentPost[0].id
  )

  return {
    props: {
      relatedPosts,
      post: currentPost[0],
      subcategories: subcategories.data.data[0],
    },
    revalidate: 30,
  }
}

export const getStaticPaths = async () => {
  const { data } = await client.get('/posts/3')
  const paths = data.data[0].map((post: any) => ({
    params: { id: post.id.toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}
