import React from 'react'

const StartElection = () => {
  return (
    <div>
            <div className='h-screen flex justify-center items-center py-20 px-20 '>
      <div className='election-back flex flex-col flex justify-center items-center border-green-800 py-20 shadow-xl rounded-md'>
       
      </div>
      <div className='flex flex-col flex justify-center items-center border-blue-800 border-8 border-dashed px-6 py-20 h-full w-1/2 rounded-md shadow-xl'>

      <div className='flex'>
   
        <input 
        class="ml-6 m-2 px-20 py-5 rounded-lg border-gray-200 border-2 text-gray-500 text-xl font-semibold justify-center items-center placeholder-indigo-300" 
        type="text" 
        
        placeholder="Enter election title"
        />
      </div>
      <div>
      
        <input 
        class="ml-6 m-2 px-20 py-5 rounded-lg border-gray-200 border-2 text-gray-500 text-xl font-semibold justify-center items-center placeholder-indigo-300" 
        type="text" 
        placeholder="Enter period of election"
        />
      </div>
        
        
  <button 
  
  class="mt-8 bg-blue-800 rounded-lg text-white py-5 px-6 font-bold text-xl mt-2 hover:py-6 hover:px-10 hover:text-2xl"
  >
    Start Election
    </button>
      </div>
    </div>
    </div>
  )
}

export default StartElection
