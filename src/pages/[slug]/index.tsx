import { FC, useEffect } from 'react'
import { NextSeo } from 'next-seo'

import {
  getPaths,
  getAllPosts,
  getSinglePost,
  getRelatedPosts,
  getSubcategories,
} from 'utils/client'

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
      {!subcategory && <PostInfo {...post} />}
      {subcategory === null ? (
        <RelatedPosts relatedPosts={relatedPosts} />
      ) : (
        <Container wide>
          <Posts posts={posts} />
        </Container>
      )}
    </>
  )
}

export default Post

export const getStaticProps = async ({ params: { slug } }: any) => {
  const posts = await getAllPosts()
  const subcategories = await getSubcategories()

  const post = getSinglePost(posts, slug)
  const relatedPosts = getRelatedPosts(posts, post)

  if (!post)
    return {
      notFound: true,
    }

  return {
    props: {
      post,
      posts,
      relatedPosts,
      subcategories,
    },
    revalidate: 30,
  }
}

export const getStaticPaths = async () => {
  const posts = await getAllPosts()
  const paths = getPaths(posts)

  return {
    paths,
    fallback: 'blocking',
  }
}
