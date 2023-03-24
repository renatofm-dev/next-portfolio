import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap" rel="stylesheet" />

        <meta 
          name='Description' 
          content='Full Stack Jr. Developer looking for a job'/>

        <meta 
          name='keywords' 
          content='Full Stack Jr. Developer, Freelancer, traffic manager'/>
          
        <meta 
          name='keywords' 
          content='Full Stack Jr. Developer, Freelancer, traffic manager'/>
      </Head>
      <body className='bg-gradient-to-r from-redplanet-100 to-redplanet-400 dark:from-dark-500 dark:to-dark-700 dark:text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
