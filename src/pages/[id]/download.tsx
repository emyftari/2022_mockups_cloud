import { FC } from 'react'
import Head from 'next/head'
import { Toaster } from 'react-hot-toast'

import { client } from 'utils/client'

import HeaderDownload from 'widgets/HeaderDownload'

const Download: FC<any> = ({ post }) => {
  return (
    <>
      <Head>
        <title>Mockups Cloud - {post.title}</title>
      </Head>
      <HeaderDownload post={post} />
      <Toaster />
    </>
  )
}

export default Download

export const getStaticProps = async ({ params: { id } }: any) => {
  const { data } = await client.get('/posts/3')
  const post = data.data[0].filter((post: any) => post.id.toString() === id)

  return {
    props: { post: post[0] },
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
