import Router from "next/router"
import Layout from "../components/Layout"
import { useState } from "react"
import { GetServerSideProps } from 'next'

interface NewsProps {
  news: NewsItem[];
}

interface NewsItem {
  title: string;
  url: string;
}

const News: React.FC<NewsProps> = ({ news }) => {
  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    Router.push(`/news/?searchTerm=${value}`)
    setValue('')
  }

  const filteredNews = news.filter(item => item.title)

  return (
    <Layout title="News" footer={'@2023'}>
      <form
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '20px',
        }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Enter a search term..."
          value={value}
          onChange={handleChange}
          style={{
            padding: '10px',
            border: '2px solid #ccc',
            borderRadius: '6px',
            marginRight: '10px',
            flex: '1',
            outline: 'none',
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#4f4f4f',
            color: '#fff',
            border: 'none',
            padding: '10px 60px',
            borderRadius: '4px',
          }}
        >
          Search
        </button>
      </form>
      <ul style={{ listStyle: 'none', padding: '10px', marginLeft: '10px' }}>
        {filteredNews.map((item, index) => (
          <li key={index} style={{ margin: '15px', paddingRight: '15px' }}>
            📰 <a style={{ color: '#800020' }} href={item.url} target="_blank">{item.title}</a>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const searchTerm = query.searchTerm || ''
  let news

  try {
    const res = await fetch(`https://hn.algolia.com/api/v1/search?query=${searchTerm}`)
    news = await res.json()
  } catch (error) {
    console.log(error)
    news = []
  }

  return { props: { news: news.hits } }
}

export default News