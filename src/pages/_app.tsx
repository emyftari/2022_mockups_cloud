import type { AppProps } from 'next/app'

import { Toaster } from 'react-hot-toast'

import { Provider } from 'react-redux'
import { store } from 'app/store'

import 'styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <Toaster />
    </Provider>
  )
}

export default MyApp
