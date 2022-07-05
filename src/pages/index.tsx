import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'

import { client } from 'utils/client'

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
  const posts = await client.get('/posts/3')
  const res = await client.get('/categories/subcategories')

  const subcategories = res.data.data[0].filter(
    (item: any) => item.posts_number > 0
  )

  return {
    props: {
      subcategories,
      posts: posts.data.data[0],
    },
    revalidate: 30,
  }
}

export default Home
