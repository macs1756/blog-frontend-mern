import * as React from 'react';

function AddPost(): JSX.Element {
  return (
    <form className='w-1/3 mx-auto py-10 ' onSubmit={(e)=>{ e.preventDefault() }}>

      <div className='relative cursor-pointer'>
        <label className='text-grey-300 py-2 bg-gray-600 text-xs  flex items-center justify-center border-2 border-dotted'>Add image:</label>
        <input type="file" className='absolute top-0 left-0 w-full h-full  cursor-pointer  opacity-0' />
      </div>
   
      <div className='flex object-cover py-2'>Image</div>

      <label className='text-xs text-white opacity-70'>Title your post</label>

      <input 
      type="text"
      
       />
    </form>
  );
}

export default AddPost;
