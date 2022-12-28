import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import VoterCard from '../components/voterCard'
import StartElection from '../components/StartElection'
import Register from '../components/register'



export default function Home() {
  return (
    <>
       <nav className=" bg-blue-800 p-5 border-b-2 flex flex-row ">
            <h1 className="py-4 px-4 font-bold text-3xl text-white">Voting App</h1>
           <div className="flex mt-2 ml-auto  text-xl">
           
              <p className="py-4 px-4 font-bold text-white border-solid hover:border-2">Home</p>
            
      
           </div>
            <div className="ml-auto mt-2 py-2 px-4">
          
            <button
                    type="button"
                    className='bg-blue-500 py-2 px-4 rounded-md text-white font-bold text-xl hover:bg-blue-700 '
                    
                >
                    Connect
                </button>
            </div>
        </nav>
      <div className='py-10 px-10 '>
      <div className='h-800 bg-blue-500 rounded-t-xl'>
          <div className=' border-t rounded-t-xl flex flex-col justify-center items-center py-20 big-one'>
            <p className='text-8xl'>🏆</p>
            <p className='text-4xl text-white font-bold mt-4'>Artist of the Year</p>
          </div>
          <div className='bg-blue-800 py-10 px-10 flex justify-around'>
        
        <VoterCard/>
        <VoterCard/>
        <VoterCard/>
      
      </div>
      </div>
      <StartElection/>
      <Register/>
      
    </div>
  </>
  )
}
