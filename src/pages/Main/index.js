import { api } from '../../services/api'
import { Post } from '../../components/Post'
import { useState, useEffect } from 'react'


export function Main(){

  const [post, setPost] = useState([])


  useEffect(()=>{
      api.get('/posts')
      .then((response) =>{
        setPost(response.data)
      })
      
  }, [])

  // o useEffect irá atualizar quando 2 situações possíveis ocorrerem:
  // 1 - a varíavel de controle passada no lugar do array vazio for modificada;
  // 2 - somente a primeira vez;

  return (
    <>

    <section className ="container">

      <h2 className='mt-3'> Articles</h2>

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



/* O useEffect recebe uma função, e o que for colocado dentro dessa função, 
o useEffect monstará na primeira vez; 
porém, se alguma coisa atualizar dentro dessa função, ele irá renderizar novamente,
porque a resposta da api está sendo passada para o setPost*/