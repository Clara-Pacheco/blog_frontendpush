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

      <div className='mt-5 container-posts'>
        {
          post.map(({id,category, title, resume, author, date})=>{
              return (
                <Post 
                key={id}
                subtitle={category}
                title={title}
                author={author}
                date={date}>
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