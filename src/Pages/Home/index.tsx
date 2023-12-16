import * as React from 'react'
import { toast } from 'react-toastify'
import { PopularPost } from '../../Components/PopularPost'
import Post from '../../Components/Post'
import { useAppDispatch, useAppSelector } from '../../Hooks/reduxHooks'
import { getPosts } from '../../Redux/postSlice'

 const Home = () =>  {

  const dispatch = useAppDispatch()
  const{ posts, popularPosts} = useAppSelector(state => state.post)

  React.useEffect(()=>{
    dispatch(getPosts())
  },[dispatch])

  if(posts.length === 0){
    toast('Posts not found')
  }




  return (

    <div className='max-w-[900px] mx-auto py-10'>
      
      <div className="flex justify-between items-start gap-8">

        <div className='flex flex-col basis-4/5'>
        <div className='text-xs uppercase text-white'>Posts</div>
        {
          posts.map((post) => (
            <Post e={post} />
          ))
        }

        </div>

        <div className="basis-1/5">
          <div className='text-xs uppercase text-white'>Popular posts</div>

          {
            popularPosts.map((post) => (
                <PopularPost e={post} />
            ))
          }
        
        </div>
        

      </div>
    </div>

  )
}

export default Home