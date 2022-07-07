import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'

import { getAllPosts, getSubcategories } from 'utils/client'

import { IProps } from 'interfaces/props'

import Header from 'widgets/Header'
import Posts from 'components/Posts'

const Home: NextPage<IProps> = ({ posts, subcategories }) => {
  return (
    <>
      <NextSeo
        title="Mockups Cloud - Home"
        description="The web-wide search engine for design inspiration"
        canonical="https://www.mockupscloud.com"
        openGraph={{
          url: 'https://www.mockupscloud.com',
          title: 'Mockups - Home',
          description: 'The web-wide search engine for design inspiration',
          site_name: 'Mockups Cloud',
        }}
      />
      <Header home subcategories={subcategories} />
      <Posts posts={posts} />
    </>
  )
}

export const getStaticProps = async () => {
  const posts = await getAllPosts()
  const subcategories = await getSubcategories()

  return {
    props: {
      posts,
      subcategories,
    },
    revalidate: 30,
  }
}

export default Home
