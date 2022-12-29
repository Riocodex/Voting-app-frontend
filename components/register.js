import React, { useEffect , useState } from 'react'

import { ethers } from "ethers";

const Register = ({contractAddress, contractABI}) => {
  const [nameChange, setNameChange] = useState("")

  //updating the name Change
  function updateName(event){
    setNameChange(event.target.value)
    
  }

  const registerTx = async ({contractAddress, contractABI}) => {
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

        console.log("registering.......")
        const registerTxn = await votingContract.startElection(nameChange,{value: ethers.utils.parseEther("1")});

        await registerTxn.wait();

        

        console.log("Canidate has been registered");

       
      }
    } catch (error) {
      console.log(error);
    }
    getCandidateDetails()
  };

 

   // Function to fetch all result
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
    

    console.log("fetching details of candidates");
    const candidateDetails = await votingContract.getCandidates();
    console.log("fetched!");
    console.log("the candidate details are",candidateDetails.toString())
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
<div className='voter-back flex flex-col flex justify-center items-center border-green-800 py-20 shadow-xl rounded-md'>

</div>
<div className='flex flex-col flex justify-center items-center border-blue-800 border-8 border-dotted px-6 py-20 h-full w-1/2 rounded-md shadow-xl'>
<label className='font-bold text-2xl'>Full Name</label>
<input class="shadow-md m-2 px-20 py-5 rounded-lg border-gray-200 border-2 text-gray-500 text-xl font-semibold justify-center items-center placeholder-indigo-300" onChange={updateName} type="text"  placeholder="Enter your full name"/>
<button 
onClick={registerTx}
class="bg-blue-800 rounded-lg text-white py-5 px-6 font-bold text-xl mt-2">Register</button>
</div>
</div>
</div>
  )
}

export default Register
