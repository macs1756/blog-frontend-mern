import * as React from 'react'
import { Link } from 'react-router-dom'
import { IpropsComponentPost } from '../../Types'

export const PopularPost = ({e}: IpropsComponentPost) => {
  return(
      <div>
      <Link to={"/post/" + e?._id}> 
        <button className='bg-gray-600 my-1 cursor-pointer text-left'>
        <span className='flex text-xs p-2 text-gray-300 hover:bg-gray-800 hover:text-white transition-all'>{e.title}</span>
        </button>
      </Link>
      </div>
  )
}
