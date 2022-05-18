import Container from 'components/ui/Container'
import Card from 'components/Card'

import styles from './RelatedPosts.module.scss'

const RelatedPosts = () => {
  return (
    <section className={styles.relatedPosts}>
      <Container>
        <h5>Related Posts</h5>
      </Container>
      <Container>
        {data.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </Container>
    </section>
  )
}

export default RelatedPosts

const data = [
  { title: 'Hanging Frame 24×36 Poster', image: '/images/post (1).png' },
  { title: 'Wedding Cards Mockup', image: '/images/post (2).png' },
  { title: 'Stick Sachet Mockups', image: '/images/post (3).png' },
  { title: 'Nike Aeroswift T-Shirt Mockup', image: '/images/post (4).png' },
  { title: 'Food Packaging Mockup', image: '/images/post (5).png' },
  {
    title: 'Resume Template & Mockup',
    image: '/images/post (6).png',
  },
  { title: 'MacBook Archive Mockup', image: '/images/post (7).png' },
  { title: 'Two Cardboard Tag Labels Mockup', image: '/images/post (8).png' },
  { title: 'Free Android App Mockup', image: '/images/post (9).png' },
  { title: 'Free Food Packaging Mockup PSD', image: '/images/post (10).png' },
  { title: 'Free Brand Identity Mockup', image: '/images/post (11).png' },
  { title: 'Free Gorgeous Restaurant Menu', image: '/images/post (12).png' },
]
