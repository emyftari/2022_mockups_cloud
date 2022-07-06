import { FC } from 'react'
import { Toaster } from 'react-hot-toast'
import { NextSeo } from 'next-seo'

import { client } from 'utils/client'

import HeaderDownload from 'widgets/HeaderDownload'
import Download from 'components/Download'

const DownloadPage: FC<any> = ({ post }) => {
  return (
    <>
      <NextSeo
        title={`Download - ${post.title}`}
        description="The web-wide search engine for design inspiration"
        canonical="https://www.mockupscloud.com"
        openGraph={{
          url: `https://www.mockupscloud.com/${post.short_url}/download`,
          title: `Download - ${post.title}`,
          description: 'The web-wide search engine for design inspiration',
          site_name: 'Mockups Cloud',
        }}
      />
      <HeaderDownload post={post} />
      <Download
        filepath={post.filepath}
        downloadLink={post.download_link}
        id={post.id}
        url={post.short_url}
        media={post.post_images[0].preview}
      />
      <Toaster />
    </>
  )
}

export default DownloadPage

export const getStaticProps = async ({ params: { slug } }: any) => {
  const { data } = await client.get('/posts/3')
  const post = data.data[0].filter((post: any) => post.short_url === slug)

  return {
    props: { post: post[0] },
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
    fallback: false,
  }
}
