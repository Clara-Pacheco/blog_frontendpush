import { api } from '../../services/api'
import { Post } from '../../components/Post'


export function Main(){

  async function handleAxios() {
    const response =  await api.get('/posts')
    console.log(response.data)
  }



  return (
    <>

    <section className ="container">
      <h1>Main.js</h1>
      <button onClick={handleAxios}> Fazer requisição </button>
    </section>

    </>



  )
}