import { api } from '../../services/api'
import { Post } from '../../components/Post'
import { useState } from 'react'

export function Main(){

  const [post, setPost] = useState([])

  async function handleAxios() {

    try {
      const response =  await api.get('/posts')
      setPost(response.data)
    }catch(error) {
      console.log(error)
    }

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