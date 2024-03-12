import React from 'react'

export default function UserProfile({params}: any) {
  return (
    <div className='flex flex-col items-center min-h-screen py-2'>
      <div className='block items-center'>
      <h1 className='text-2xl mb-2 mr-2'>Hey {params.id}, it's your Home page</h1>
      <button type='button' className=' float-end text-black bg-white rounded-lg border-1 border-white border-solid p-2 hover:bg-blue-400'> Add Hobbies</button>
      </div>
      <div>
        
      </div>
      </div>
  )
}
