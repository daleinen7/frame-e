import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Frame-E</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Frame-E: the online frameshop management software
        </h1>

        <p>
          Get started by <Link href={'/writeorder'}><a className={'btn'}>Writing an Order</a></Link>
        </p>
      </main>

      <footer>
        frame-e custom order writing software for Masterpiece Framing
      </footer>
    </Layout>
  )
}
