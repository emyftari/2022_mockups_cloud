import axios from 'axios'

export const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
})

// REQUESTS
export const getAllPosts = async () => {
  const res = await client.get(`/posts/${process.env.NEXT_PUBLIC_DOMAIN_ID}`)
  return res.data.data[0]
}

export const getSubcategories = async () => {
  const res = await client.get(
    `/categories/subcategories/${process.env.NEXT_PUBLIC_DOMAIN_ID}`
  )
  return res.data.data[0]
}

export const votePost = async (id: number, vote: 1 | 0) =>
  await client.post(`/posts/${id}/vote`, {
    vote,
    domain: process.env.NEXT_PUBLIC_DOMAIN_ID,
  })

export const reportPost = async (id: number, reason: string) =>
  await client.post(`/reports/${id}/report`, {
    reason,
    domain: process.env.NEXT_PUBLIC_DOMAIN_ID,
    details: 'Details empty',
  })

// FILTERS
export const getSinglePost = (posts: any, slug: string) =>
  posts.filter((post: any) => post.short_url === slug)[0]

export const getRelatedPosts = (posts: any, singlePost: any) =>
  posts.filter(
    (post: any) =>
      post.subcategory.id === singlePost.subcategory.id &&
      post.id !== singlePost.id
  )

export const getPaths = (posts: any) =>
  posts.map((post: any) => ({
    params: { slug: post.short_url },
  }))
