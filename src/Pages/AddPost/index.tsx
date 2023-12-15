import * as React from 'react';
import { useAppDispatch } from '../../Hooks/reduxHooks';
import { createPost } from '../../Redux/postSlice';

function AddPost(): JSX.Element {

  const [title, setTitle] = React.useState<string>('')
  const [description,setDescription] = React.useState<string>('')

  const [image, setImage] = React.useState<File | null>(null)
  const dispatch = useAppDispatch()

  const submitHandler = () => {
    try {
      
      const data = new FormData()

      data.append('title', title)
      data.append('description', description)
      if(image !== null){
        data.append('image', image)
      }else{
        data.append('image', '')
      }

      dispatch(createPost(data))

    } catch (error) {
      console.log(error);
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];

      // Add a null check before updating the state
      if (selectedFile) {
        setImage(selectedFile);
      }
    }
  };


  return (
    <form className='w-1/3 mx-auto py-10 ' onSubmit={(e)=>{ e.preventDefault() }}>

      <div className='relative cursor-pointer'>
        <label className='text-grey-300 py-2 bg-gray-600 text-xs  flex items-center justify-center border-2 border-dotted'>Add image:</label>

        <input 
        type="file" 
        onChange={handleFileChange}
        className='absolute top-0 left-0 w-full h-full  cursor-pointer  opacity-0' />
      </div>
   
      <div className='flex object-cover py-2'>
        {
          image && (
            <img src={URL.createObjectURL(image)} alt="preview" />
          )
        }
      </div>

      <label className='text-xs text-white opacity-70'>Title your title</label>

      <input 
      type="text"
      className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700 h-[40px] mb-3'
      placeholder='Lorem Ipsum is simply dummy text ...'
      value={title}
      onChange={(e)=>{setTitle(e.target.value)}}
       />


      <label className='text-xs text-white opacity-70'>Title your description</label>
      <textarea
      className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700 h-40 resize-none' 
      placeholder='Lorem Ipsum is simply dummy text ...'
      value={description}
      onChange={(e) => { setDescription(e.target.value)}}
       />
 
      <div className="flex gap-6 items-center justify-center mt-4">
        <button onClick={submitHandler} className='flex items-center bg-gray-600 text-xs text-white rounded-sm py-2 px-5'>Add</button>
        <button className='flex items-center bg-red-500 text-xs text-white rounded-sm py-2 px-5'>Cancel</button>
      </div>

    </form>
  );
}

export default AddPost;
