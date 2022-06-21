import type { NextPage } from 'next'
import Head from 'next/head'

import { client } from 'utils/client'

import { IProps } from 'interfaces/props'

import Header from 'widgets/Header'
import Posts from 'components/Posts'

const Home: NextPage<IProps> = ({ posts, subcategories }) => {
  return (
    <>
      <Head>
        <title>Mockups Cloud</title>
      </Head>
      <Header home subcategories={subcategories} />
      <Posts posts={posts} />
    </>
  )
}

export const getStaticProps = async () => {
  const posts = await client.get('/posts/3')
  const subcategories = await client.get('/categories/subcategories')

  return {
    props: {
      posts: posts.data.data[0],
      subcategories: subcategories.data.data[0],
    },
    revalidate: 30,
  }
}

export default Home
