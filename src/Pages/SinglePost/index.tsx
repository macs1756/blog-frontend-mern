import axios from '../../utils/axios'
import * as React from 'react'
import { AiFillEye, AiOutlineMessage } from 'react-icons/ai'
import { Ipost } from '../../Types'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../Hooks/reduxHooks'
import { removePost } from '../../Redux/postSlice'
import { toast } from 'react-toastify'

function SinglePost(): JSX.Element {

  const [post, setPost] = React.useState<Ipost | null>(null)

  const { id } = useParams()

  const { user } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const removePostHandler = async () => {
      try {
        
        if(id){
          dispatch( removePost(id) )
          toast('This post is delete')
          navigate('/')
        }
       
      } catch (error) {
        console.log(error)
      }
  }

  const fetchPost = React.useCallback(async () => {
    const { data } = await axios.get(`http://localhost:3002/api/posts/${id}/`)
    setPost(data.post)
  }, [id])


  React.useEffect(() => {
    fetchPost()
  }, [fetchPost])

  //change format data for data post
  const originalDateString = "2023-12-15T17:31:31.259Z"
  const originalDate = new Date(originalDateString)
  const day = originalDate.getUTCDate()
  const month = originalDate.getUTCMonth() + 1
  const year = originalDate.getUTCFullYear()
  const formattedDateString = `${day}:${month}:${year}`

  return (
    <>
      <Link to='/' className='inline-flex justify-center items-center bg-gray-600 text-xs transition-all text-white rounded-sm py-2 px-4 hover:bg-gray-700'>
        Back
      </Link>

      <div className='flex gap-10 py-8'>
        <div className="w-2/3">

          <div className='flex flex-col flex-grow w-full'>
            {(post?.image && post?.image !== "missing") && (
              <div className='flex rounded-sm h-[500px]'>
                <img
                  className='object-cover h-full w-full'
                  src={'http://localhost:3002/' + post?.image}
                  alt="postImage"
                />
              </div>
            )}

            <div className='flex justify-between items-center pt-2 pb-2'>
              <h3 className='text-xs text-white opacity-50'>{post?.username}</h3>
              <p className='text-xs text-white opacity-50'>{formattedDateString}</p>
            </div>
            <div className="text-white text-xl ">{post?.title}</div>
            <p className='text-white opacity-60 text-xs pt-2 mb-2'>{post?.description}</p>

            <div className="flex gap-3 items-center">
              <button className='flex items-center justify-center text-xs gap-2 text-white opacity-50'>
                <AiFillEye /> <span>{post?.views}</span>
              </button>
              <button className='flex items-center justify-center text-xs gap-2 text-white opacity-50'>
                <AiOutlineMessage />
                <span>{post?.comments?.length}</span>
              </button>
            </div>


            {
              user?._id === post?.autor &&
              <div className='gap-2 flex mt-[20px]'>
                <button className='tr bg-gray-600 py-1 px-4 text-sm rounded-md hover:bg-slate-700'>Edit post</button>

                <button
                  onClick={removePostHandler}
                  className='tr bg-gray-600 py-1 px-4 text-sm rounded-md hover:bg-slate-700'>Delete post</button>
              </div>
            }


          </div>
          {/* Moved closing tag for <div className='flex gap-10 py-8'> here */}
        </div>
        <div className='w-1/3'>Comments</div>
      </div>

    </>
  )
}

export default SinglePost
