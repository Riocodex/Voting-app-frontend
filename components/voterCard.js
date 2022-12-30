import React from 'react'

const VoterCard = ({item}) => {
  console.log('from voterscard, here are items ',item)
  return (
    <div className='bg-blue-800 w-1/3 h-full mr-6 py-4  rounded-xl hover:shadow-2xl '>
    <div>
    <h1 className='flex justify-center items-center text-2xl text-white font-bold uppercase '>NAME</h1>
        <h1 className='flex justify-center items-center text-white font-bold uppercase mt-1'>{item.name}</h1>
    </div>
     <div>
     <h1 className='flex justify-center items-center text-2xl text-white font-bold uppercase mt-3'>VOTES</h1>
        <p className='flex justify-center items-center text-sm text-white font-bold uppercase mt-1'>{item.numVotes.toString()}</p>
     </div>
       </div>
  )
}

export default VoterCard
