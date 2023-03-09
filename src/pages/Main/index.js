import { api } from '../../services/api'
import { Post } from '../../components/Post'
import { useState } from 'react'

export function Main(){

  const [post, setPost] = useState([])

  async function handleAxios() {

    try {
      const response =  await api.get('/posts')
      console.log(response.data)
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

      <div className='mt-5 container-posts'>
        {
          post.map(({id,category, title, resume})=>{
              return (
                <Post key={id} subtitle={category} title={title}>
                  {resume}
                </Post>
              )
          })
        }

      </div>
    </section>

    </>



  )
}