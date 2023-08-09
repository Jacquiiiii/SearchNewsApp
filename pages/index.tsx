import Link from "next/link"
import Head from "next/head"
import Layout from "../components/Layout"

const Index = () => {
  return (
    <Layout title="News App" footer={'@2023'}>
      <Head>
        <title>Home Page</title>
      </Head>
      <ul style={{ listStyle: 'none', padding: '10px', margin: '10px' }}>
        <li>
          <Link href="/about" style={{ color: '#800020', margin: '10px', borderLeft: '2px solid #800020', paddingLeft: '10px' }}>
            Go to About page
          </Link>
        </li>
        <li>
          <Link href="/news" style={{ color: '#800020', margin: '10px', borderLeft: '2px solid #800020', paddingLeft: '10px' }}>
            Go to News page
          </Link>
        </li>
      </ul>
    </Layout>
  )
}

export default Index