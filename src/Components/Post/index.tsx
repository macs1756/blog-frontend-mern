import * as React from 'react'
import { AiFillEye, AiOutlineMessage } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { IpropsComponentPost } from '../../Types'

const Post = ({ e }: IpropsComponentPost) => {

  //change format data for data post
  const originalDateString = "2023-12-15T17:31:31.259Z"
  const originalDate = new Date(originalDateString)
  const day = originalDate.getUTCDate()
  const month = originalDate.getUTCMonth() + 1
  const year = originalDate.getUTCFullYear()
  const formattedDateString = `${day}:${month}:${year}`



  return (
    <Link to={'/post/' + e?._id} className='flex flex-col basis-1/4 flex-grow mb-[50px] border-b-2 border-gray-500 pb-2'>

      {
        (e?.image && e?.image !== "missing") &&
        <div className='flex rouded-sm h-80'>
        <img className='object-cover h-full w-full' src={'http://localhost:3002/' + e?.image} alt="postImage" />
        </div>
      }

      <div className='flex justify-between items-center pt-2 pb-2'>
        <h3 className='text-sx text-white opacity-50'>{e?.username}</h3>
        <p className='text-sx text-white opacity-50'>{formattedDateString}</p>
      </div>
      <div className="text-white text-xl line-clamp-2">{e?.title}</div>
      <p className='text-white opacity-60 text-xs pt-2 mb-2 line-clamp-4'>{e?.description}</p>

      <div className="flex gap-3 items-center">


        <button className='flex items-center justify-center text-xs gap-2 text-white opacity-50'>
          <AiFillEye /> <span>{e?.views}</span>
        </button>


        <button className='flex items-center justify-center text-xs gap-2 text-white opacity-50'>
          <AiOutlineMessage />
          <span>{e?.comments?.length}</span>
        </button>

      </div>

    </Link>
  )
}


export default Post
