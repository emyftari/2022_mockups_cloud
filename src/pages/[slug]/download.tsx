import { FC } from 'react'
import { Toaster } from 'react-hot-toast'
import { NextSeo } from 'next-seo'

import { getPaths, getAllPosts, getSinglePost } from 'utils/client'

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
  const posts = await getAllPosts()
  const post = getSinglePost(posts, slug)

  if (!post)
    return {
      notFound: true,
    }

  return {
    props: { post },
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
