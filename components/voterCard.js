import React from 'react'

const VoterCard = ({ props}) => {
  // console.log('from voterscard ',candidateDetails)
  return (
    <div className='bg-blue-800 w-1/3 h-full mr-6 py-4  rounded-xl hover:shadow-2xl '>
    <div>
    <h1 className='flex justify-center items-center text-2xl text-white font-bold uppercase '>NAME</h1>
        <h1 className='flex justify-center items-center text-white font-bold uppercase mt-1'>{props.name}</h1>
    </div>
     <div>
     <h1 className='flex justify-center items-center text-2xl text-white font-bold uppercase mt-3'>VOTES</h1>
        <p className='flex justify-center items-center text-sm text-white font-bold uppercase mt-1'>{props.numVotes.toString()}</p>
     </div>
       </div>
  )
}

export default VoterCard
