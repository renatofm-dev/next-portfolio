import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <div className='grid grid-cols-12 gap-6'>
    <div>
      sidebar
    </div>
    <div>
        <Component {...pageProps} />

    </div>

  </div>
  

  
}
