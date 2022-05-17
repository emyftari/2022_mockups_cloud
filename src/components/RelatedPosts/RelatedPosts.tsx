import Container from 'components/Container'
import Card from 'components/Card'

import styles from './RelatedPosts.module.scss'

const RelatedPosts = () => {
  return (
    <section className={styles.relatedPosts}>
      <Container>
        <h5>Related Posts</h5>
      </Container>
      <Container>
        {Array(15)
          .fill(null)
          .map((_item, i) => (
            <Card key={i} />
          ))}
      </Container>
    </section>
  )
}

export default RelatedPosts
