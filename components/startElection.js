import React, { useEffect , useState } from 'react'

import { ethers } from "ethers";



const StartElection = ({contractAddress, contractABI}) => {
    const [title , setTitle] = React.useState("")
    const [period , setPeriodChange] = React.useState()
    // updating the title Change
    function updateTitle(event){
        setTitle(event.target.value)
        
        
      }
  
      //updating the period
      function updatePeriod(event){
        setPeriodChange(event.target.value)
        
      }

      const startElectionTx = async () => {
        try {
          const {ethereum} = window;
    
          if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum, "any");
            const signer = provider.getSigner();
            const votingContract = new ethers.Contract(
              contractAddress,
              contractABI,
              signer
            );
    
            console.log("starting election.......")
            const electionTxn = await votingContract.startElection(title,period,{value: ethers.utils.parseEther("1")});
    
            await electionTxn.wait();
    
            
    
            console.log("Election has been created");
    
           
          }
        } catch (error) {
          console.log(error);
        }
        getElectionDetails()
      };

     

       // Function to fetch all result
  const getElectionDetails = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const votingContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        

        console.log("fetching details of election");
        const electionDetails = await votingContract.getElectionDetails();
        console.log("fetched!");
        console.log("the election details are",electionDetails.toString())
      } else {
        console.log("Metamask is not connected");
      }
      
    } catch (error) {
      console.log(error);
    }
  };
    

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
        onChange={updateTitle}
        placeholder="Enter election title"
        />
      </div>
      <div>
      
        <input 
        class="ml-6 m-2 px-20 py-5 rounded-lg border-gray-200 border-2 text-gray-500 text-xl font-semibold justify-center items-center placeholder-indigo-300" 
        type="text" 
        placeholder="Enter period of election"
        onChange={updatePeriod}
        />
      </div>
        
        
  <button 
  onClick={startElectionTx}
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
