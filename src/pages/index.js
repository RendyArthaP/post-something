import Head from 'next/head'
import Bio from '../components/Bio/Bio'
import ListPost from '../components/ListPost/ListPost'
import PostForm from '../components/PostForm/PostForm'
import styles from '../styles/Home.module.scss'
import { useAuth } from '../components/Hooks/useAuth'; 

export default function Home() {
  const auth = useAuth()

  return (
    <div className={styles.container}>
      <Head>
        <title>Post Something!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Bio />
        <ListPost />
        <PostForm />
      </main>
    </div>
  )
}
