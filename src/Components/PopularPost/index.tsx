import * as React from 'react'
import { IpropsComponentPost } from '../../Types'

export const PopularPost = ({e}: IpropsComponentPost) => {
  return(
      <div className='bg-gray-600 my-1 cursor-pointer'> 
        <div className='flex text-xs p-2 text-gray-300 hover:bg-gray-800 hover:text-white transition-all'>{e.title}</div>
      </div>
  )
}
