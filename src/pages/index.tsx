import Navbar from '@/components/Navbar'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>aoirint.com</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className="section">
        <div className="container">
          <h1 className="title">
            Hello World
          </h1>
          <p className="subtitle">
            My first website with <strong>Bulma</strong>!
          </p>
        </div>
      </section>
    </>
  )
}
