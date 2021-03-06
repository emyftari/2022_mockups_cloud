import Container from 'components/ui/Container'
import Card from 'components/Card'

import styles from './RelatedPosts.module.scss'

const RelatedPosts = ({ relatedPosts }: any) => {
  return (
    <section className={styles.relatedPosts}>
      <Container>
        <h5>Related Posts</h5>
      </Container>
      <Container>
        {relatedPosts?.map((post: any) => (
          <Card key={post.id} {...post} />
        ))}
      </Container>
    </section>
  )
}

export default RelatedPosts
