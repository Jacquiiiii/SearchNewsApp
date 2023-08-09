import Layout from "../components/Layout"

const About = () => {
  return (
    <Layout title="About" footer={'@2023'}>
      <p style={{ fontSize: '18px', padding: '10px', margin: '15px' }}>
        Welcome to The News App! Stay up-to-date with breaking news, trending stories, and insightful analyses. Intuitive search functionality allows you to explore news articles tailored to your interests. Whether you're a casual reader or a news enthusiast, this app is here to provide you with a seamless and enjoyable news browsing experience.
        <br />
        <br />
        This app originated as a project for the Udemy course <a href="https://www.udemy.com/course/next-js-react-hooks/">Next JS with React Hooks - Building SSR React Applications</a> by Ryan Dhungel and it was refactored and added to by Jacqui Koroll for the purpose of learning Next.js. It was built using Next.js, React, and TypeScript and uses the <a href="https://hn.algolia.com/api">Hacker News API</a> to fetch news articles. The CSS was done with <a href="https://mdbootstrap.com/">Material Design for Bootstrap</a>, Google Fonts, and custom CSS via inline styling. The newspaper icon was found on <a href="https://iconscout.com/">IconScout</a>.
        <br />
      </p>
    </Layout>
  )
}

export default About
