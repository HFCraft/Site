import axios from 'axios'

const TestPage = (props) => {
  return (
    <>
      <h1>Teste! 👋</h1>
      <p>{props.sponsorsData}</p>
    </>
  )
}


export const getStaticProps = async (ctx) => {
  const res = axios.get('http://localhost:3000/api/sponsors/list')
  const sponsorsData = res.data
  console.log(res.data)

  return {
    props: {
      sponsorsData,
    }
  }

  
}

export default TestPage