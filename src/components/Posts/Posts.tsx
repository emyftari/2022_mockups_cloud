import { FC } from 'react'

import { useAppSelector } from 'app/hooks'

import { IProps } from 'interfaces/props'

import styles from './Posts.module.scss'

import Card from 'components/Card'
import Container from 'components/ui/Container'

const Posts: FC<IProps> = ({ posts }) => {
  const searchTerm = useAppSelector((state) => state.filter.searchTerm)
  const subcategory = useAppSelector((state) => state.filter.subcategory)

  const { filteredPosts } = useFilter(posts, searchTerm, subcategory)

  return (
    <section className={styles.posts}>
      <Container wide className={styles.posts__container}>
        {filteredPosts.map((post: any) => (
          <Card key={post.id} {...post} />
        ))}
      </Container>
    </section>
  )
}

export default Posts

const useFilter = (
  arr: any,
  searchTerm: string,
  subcategory: number | null
) => {
  const filteredPosts = arr
    .filter((post: any) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((post: any) =>
      subcategory === null ? post : post.subcategory.id === subcategory
    )

  return {
    filteredPosts,
  }
}
