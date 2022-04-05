import 'core-js'
import '../styles/tailwind.css'
import { appWithTranslation } from 'next-i18next'
import Script from 'next/script'

// eslint-disable-next-line no-unused-vars
const test = true

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Script
        src="https://twemoji.maxcdn.com/v/latest/twemoji.min.js"
        crossorigin="anonymous"
        defer
        async
      />
      <Component {...pageProps} />
    </>
  )
}

export default appWithTranslation(App)
