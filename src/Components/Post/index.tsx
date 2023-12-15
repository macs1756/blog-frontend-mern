import * as React from 'react'
import {AiFillEye, AiOutlineMessage} from 'react-icons/ai'

const Post = () => {
  return(
    <div className='flex flex-col basis-1/4 flex-grow mb-8'>
      <div>image</div>

      <div className='flex justify-between items-center pt-2 pb-2'>
          <h3 className='text-sx text-white opacity-50'>admin</h3>
          <p className='text-sx text-white opacity-50'>17.06,233</p>
      </div>
      <div className="text-white text-xl ">POst title</div>
      <p className='text-white opacity-60 text-xs pt-2 mb-2'>description</p>

      <div className="flex gap-3 items-center">

        
        <button className='flex items-center justify-center text-xs gap-2 text-white opacity-50'>
          <AiFillEye /> <span>0</span>
        </button>


        <button className='flex items-center justify-center text-xs gap-2 text-white opacity-50'>
          <AiOutlineMessage />
          <span>0</span>
        </button>

      </div>

    </div>
  )
}


export default Post
