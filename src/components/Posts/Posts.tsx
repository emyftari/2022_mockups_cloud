import Card from 'components/Card'

import styles from './Posts.module.scss'

const Posts = () => {
  return (
    <section className={styles.posts}>
      {Array(30)
        .fill(null)
        .map((_item, i) => (
          <Card key={i} />
        ))}
    </section>
  )
}

export default Posts
