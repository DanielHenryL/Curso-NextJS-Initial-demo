import Head from 'next/head'
import { Navbar} from '../components/Navbar'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Daniel lagunas </title>
        <meta name="description" content="About Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <h1>Home Page</h1>
          <h1 className={styles.title}>
            {/* Ir a <a href="/about">About</a> */}
            Ir a <Link href={'/about'}>About</Link>
          </h1>
          <p className={styles.main}>
            Get started by editing{' '};
            <code className={styles.code}>pages/home.tsx</code>
          </p>
      </main>
    </>
  )
}
