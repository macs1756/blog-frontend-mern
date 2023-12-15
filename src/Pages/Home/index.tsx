import * as React from 'react';
import Post from '../../Components/Post';

 const Home = () =>  {

  return (

    <div className='max-w-[900px] mx-auto py-10'>
      
      <div className="flex justify-between items-start gap-8">

        <div className='flex flex-col basis-4/5'>
        <div className='text-xs uppercase text-white'>Posts</div>
        <Post />
        </div>

        <div className="basis-1/5">
          <div className='text-xs uppercase text-white'>Popular posts</div>
          post
        </div>
        

      </div>
    </div>

  )
}

export default Home