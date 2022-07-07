import axios from 'axios'

const client = axios.create({
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
