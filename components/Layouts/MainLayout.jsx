import Head from 'next/head'
import { Navbar} from '../Navbar'

import styles from './MainLayout.module.css'

export const MainLayout = ({children,title, content}) => {
  return (
    <div className={styles.container}>
        <Head>
        <title>{title}</title>
        <meta name="description" content={content} />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <main className={styles.main}>
            {children}
        </main>
    </div>
  )
}