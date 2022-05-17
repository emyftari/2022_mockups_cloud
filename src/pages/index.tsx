import type { NextPage } from 'next'

import Header from 'widgets/Header'
import Posts from 'components/Posts'

const Home: NextPage = () => {
  return (
    <>
      <Header home />
      <Posts />
    </>
  )
}

export default Home
