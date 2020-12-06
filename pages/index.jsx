import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Frame-E</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Frame-E: the online frameshop management software
        </h1>

        <p className={styles.description}>
          Get started by <Link href={'/writeorder'}><a className={'btn'}>Writing an Order</a></Link>
        </p>
      </main>

      <footer className={styles.footer}>
        frame-e custom order writing software for Masterpiece Framing
      </footer>
    </div>
  )
}
