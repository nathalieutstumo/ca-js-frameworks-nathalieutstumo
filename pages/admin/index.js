import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Header from "../../components/header"
import { useSession, signIn, signOut } from "next-auth/react";


export default function Home() {

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
      </Header>

      <main>
     
    <h1>Admin</h1>
      </main>

      <footer>
       
      </footer>
    </div>
  )
}