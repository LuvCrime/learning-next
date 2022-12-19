import NextNprogress from 'nextjs-progressbar'
import type { AppProps } from "next/app";
import './styles.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <NextNprogress
        color="dodgerblue"
        startPosition={0.3}
        stopDelayMs={500}
        height={3}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;