import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'

export default function Layout({children, home}) {
  return(
    <div className={styles.container}>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;700&family=Montserrat&display=swap" rel="stylesheet"/>
            <meta
            name="description"
            content="Write a framing order with Frame-E"
            />

        </Head>
        <header className={styles.header}>
            {!home && (
                <h1>Frame-E | ShopName Goes Here: Username goes here</h1>
            )}
        </header>
        <main>{children}</main>
        {!home && (
            <div className={styles.backToHome}>
            <Link href="/">
                <a>← Back to home</a>
            </Link>
            </div>
        )}
        </div>
  )
}