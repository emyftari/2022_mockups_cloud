import styles from './PostInfo.module.scss'

import Container from 'components/Container'

const PostInfo = () => {
  return (
    <div>
      <div className={styles.action__bar}>
        <Container>
          <div>Adobe Photoshop</div>
          <button>Report</button>
          <button>Donate</button>
        </Container>
      </div>
      <Container className={styles.info}>
        <h1>Download Free DL Flyer PSD Mockup Vol-02</h1>
        <p>
          Today’s freebie is a Photorealistic DL flyer psd mockup vol-02 comes
          in high resolution with two flyers in display at once. you’ll be able
          to share or showcase various designs like new offers, sales, special
          events, branding designs, and many others or simply make your design
          look eye popping project.
        </p>
      </Container>
    </div>
  )
}

export default PostInfo
