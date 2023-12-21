import * as React from 'react'
import { IcommentComponentProps } from '../../Types'

const Comment = ({ cmt }:IcommentComponentProps) => {

  const avatar 
  return(
    <div className='flex gap-3 items-center'>
        <div className='flex item-center justify-center shrink-0 rounded-full w-10 h-10 bg-blue-300 text-sm'>
          Avatar
        </div>
        <div className='flex text-gray-300 text-[10px]'>
          {cmt?.comment}
        </div>
    </div>
  )
}

export default Comment