import axios from '../../utils/axios'
import * as React from 'react'
import { AiFillEye, AiOutlineMessage } from 'react-icons/ai'
import { Ipost } from '../../Types'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../Hooks/reduxHooks'
import { removePost } from '../../Redux/postSlice'
import { toast } from 'react-toastify'
import { createComment, getCommentsForPost } from '../../Redux/commentSlice'
import { comment } from 'postcss'
import Comment from '../../Components/Comment'

function SinglePost(): JSX.Element {

  const [post, setPost] = React.useState<Ipost | null>(null)
  const [commentBody, setCommentBody] = React.useState<string>('')
 
  const { id } = useParams()

  const { user } = useAppSelector(state => state.auth)
  const { comments } = useAppSelector(state => state.comments)
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

  const fetchComments = React.useCallback(async ()=> {
        try {

          if(id){
            dispatch(getCommentsForPost(id))
          }
          
          
        } catch (error) {
          console.log(error);
        }
  }, [dispatch, id])

  React.useEffect(() => {
    fetchComments()
  }, [fetchComments])

  //change format data for data post
  const originalDateString = "2023-12-15T17:31:31.259Z"
  const originalDate = new Date(originalDateString)
  const day = originalDate.getUTCDate()
  const month = originalDate.getUTCMonth() + 1
  const year = originalDate.getUTCFullYear()
  const formattedDateString = `${day}:${month}:${year}`
 
  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    try {
   
      if(id && comment.length > 0){
        dispatch(createComment({ postId: id, comment: commentBody }))
        setCommentBody('')
      }


    } catch (error) {
      console.log(error)
    }
  }


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
                <Link to={'/edit-post/' + post?._id}>
                <button className='tr bg-gray-600 py-1 px-4 text-sm rounded-md hover:bg-slate-700'>Edit post</button>
                </Link>
                

                <button
                  onClick={removePostHandler}
                  className='tr bg-gray-600 py-1 px-4 text-sm rounded-md hover:bg-slate-700'>Delete post</button>
              </div>
            }


          </div>
        </div>

        <div className='w-1/3 p-8 bg-gray-700 flex flex-col gap-3 rounded-sm'>
          <form className='flex gap-2 mb-[10px]'>
            <input 
            value={commentBody}
            onChange={(e)=>{setCommentBody(e.target.value)}}
            type="text" 
            placeholder='Comment'
            className='text-black w-full rounded-sm bg-gray-400 border p-2 text-xs outline-none placeholder:text-gray-700'
             />

             <button 
             className='flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm py-2 px-4 tr hover:bg-gray-800'
             onClick={handleSubmit}
             type='submit'
             >Add my comment</button>

          </form>

           {
             comments?.map((e, i)=>(
              <Comment 
              key={e?.comment + i}
              cmt={e}
               />
            ))
          } 
        </div>

      </div>

    </>
  )
}

export default SinglePost
