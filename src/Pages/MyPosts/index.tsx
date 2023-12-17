import axios from '../../utils/axios'
import * as React from 'react'
import { Ipost, IresponseMyPosts } from '../../Types'
import Post from '../../Components/Post'


function CatalogPosts(): JSX.Element {

  const [posts,setPosts] = React.useState<Ipost[] | null>(null)

  const getMyPosts = async () => {   
    try {
      const { data }: IresponseMyPosts = await axios.get('/posts/user/me')

      setPosts(data.posts)
      
      

    } catch (error) {
      console.log(error)
      
    }
  }

  React.useEffect(()=>{
    getMyPosts()
  }, [])

  return (
    <div className='w-1/2 mx-auto p-10 flex flex-col gap-10'>
      {
        posts?.map((post) => (
          <Post 
          e={post} 
          type='delete'
           />
        ))
      }
    </div>
  )
}

export default CatalogPosts
