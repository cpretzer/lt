import Head from 'next/head'
import Link from 'next/link'
import Layout, {siteTitle} from '../components/layout'

export default function Home() {
  return (
    <div className="container">
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1 className="title">
            Welcome to The Life Tracker
          </h1>

          <p className="description">
            Set and keep track of health, habits, and goals on a quarterly basis
          </p>

          <div className="grid">
            <Link href="/login">
              <a>Log In To Your Account &rarr;</a>
            </Link>
          </div>

          <div className="grid">
            <Link href="/register">
              <a>Create An Account  &rarr;</a>
            </Link>
          </div>
        </main>

        <footer>

        </footer>
      </Layout>
    </div>
  )
}
