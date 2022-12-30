import React, { useEffect , useState } from 'react'

import { ethers } from "ethers";

const Voting = ({isElection, contractAddress, contractABI, setCandidateDetails}) => {
    const [voterName , setVoterName] = React.useState("")
    //updating voters name
    function updateVotersName(event){
        setVoterName(event.target.value)
        
        
      }
    const votingTx = async () => {
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
    
            console.log("voting.......")
            const votingTxn = await votingContract.vote(voterName,{value: ethers.utils.parseEther("1")});
    
            await votingTxn.wait();
    
            
    
            console.log("voted!");    
            getCandidateDetails()   
          }
        } catch (error) {
          console.log(error);
        }
        
      };
  //Function to fetch all result
  const getCandidateDetails = async () => {
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
        

        console.log("fetching candidates");
        let candidates = await votingContract.getCandidates();
        setCandidateDetails(candidates)
        
        console.log('candidate details after voting are', candidates)
      } else {
        console.log("Metamask is not connected");
      }
      
    } catch (error) {
      console.log(error);
    }
  };


     

  return (
   <div>
     {isElection ? (
        <div>
        <div className='h-screen flex justify-center items-center py-20 px-20 '>
  <div className='election-back flex flex-col flex justify-center items-center border-green-800 py-20 shadow-xl rounded-md'>
   
  </div>
  <div className='flex flex-col flex justify-center items-center border-blue-800 border-8 border-dashed px-6 py-20 h-full w-1/2 rounded-md shadow-xl'>

  <div>
  
    <input 
    class="ml-6 m-2 px-20 py-5 rounded-lg border-gray-200 border-2 text-gray-500 text-xl font-semibold justify-center items-center placeholder-indigo-300" 
    type="text" 
    placeholder="Enter name of Candidate"
    onChange={updateVotersName}
    />
  </div>
    
    
<button 
onClick={votingTx}
class="mt-8 bg-blue-800 rounded-lg text-white py-5 px-6 font-bold text-xl mt-2 hover:py-6 hover:px-10 hover:text-2xl"
>
Vote
</button>
  </div>
</div>
</div>
     ) : (
        <p></p>
     )}
   </div>
  )
}

export default Voting
