import Head from 'next/head'
import Bio from '../components/Bio/Bio'
import ListPost from '../components/ListPost/ListPost'
import PostForm from '../components/PostForm/PostForm'
import styles from '../styles/Home.module.scss'
import { useAuth } from '../components/Hooks/useAuth'; 

export default function Home() {
  const { user, logIn} = useAuth()
  console.log(user)

  return (
    <div className={styles.container}>
      <Head>
        <title>Post Something!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button onClick={logIn}>
        Login
      </button>
      <main className={styles.main}>
        <Bio />
        <ListPost />
        <PostForm />
      </main>
    </div>
  )
}
