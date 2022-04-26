import Head from 'next/head'
import Footer from '../components/Footer';
import skull from '../public/assets/img/op-skull.svg'
import Header from '../components/Header';
import Main from '../components/Main';

export default function Home() {
  return (
    <>
      <Head>
        <title>One Piece</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Main/>
      <Footer 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit at vel congue scelerisque tortor tortor."
        img={{src: skull.src, alt: "one piece skull"}} 
      />
    </>
  )
}
