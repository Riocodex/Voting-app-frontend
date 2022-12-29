import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { ethers } from "ethers";

import React, { useEffect , useState } from 'react'


import VoterCard from '../components/voterCard'
import StartElection from '../components/StartElection'
import Register from '../components/register'

import abi from '../constants/abi.json'


export default function Home() {

  let contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
  const contractABI = abi.abi

  //web3 states
  const [currentAccount, setCurrentAccount] = useState("");
  
  //smartContract states
  const [electionDetails, setElectionDetails] = useState([])
 
  const [candidateDetails, setCandidateDetails] = useState([])

      // Wallet connection logic
  const isWalletConnected = async () => {
    try {
      const { ethereum } = window;

      const accounts = await ethereum.request({method: 'eth_accounts'})
      console.log("accounts: ", accounts);

      if (accounts.length > 0) {
        const account = accounts[0];
        console.log("wallet is connected! " + account);
      } else {
        console.log("make sure MetaMask is connected");
      }
    } catch (error) {
      console.log("error: ", error);
    }
  }
  const connectWallet = async () => {
    try {
      const {ethereum} = window;

      if (!ethereum) {
        console.log("please install MetaMask");
      }

      const accounts = await ethereum.request({
        method: 'eth_requestAccounts'
      });

      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  }

 

  useEffect(() => {
   
    isWalletConnected();
    
  },[])
  return (
    <>
       <nav className=" bg-blue-800 p-5 border-b-2 flex flex-row ">
            <h1 className="py-4 px-4 font-bold text-3xl text-white">Voting App</h1>
           <div className="flex mt-2 ml-auto  text-xl">
           
              <p className="py-4 px-4 font-bold text-white border-solid hover:border-2">Home</p>
            
      
           </div>
            <div className="ml-auto mt-2 py-2 px-4">
          
            {currentAccount ? (
            <button
            
            className='bg-blue-500 py-2 px-4 rounded-md text-white font-bold text-xl hover:bg-blue-700'>Wallet Connected!</button>
        ) : (
          <button
          onClick={connectWallet}
          type="button"
          className='bg-blue-500 py-2 px-4 rounded-md text-white font-bold text-xl hover:bg-blue-700'   
      >
          Connect
      </button>
        )}
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
      <StartElection contractAddress={contractAddress} contractABI={contractABI}/>
      <Register 
      contractAddress={contractAddress} 
      contractABI={contractABI} 
      setCandidateDetails={setCandidateDetails}/>
      
    </div>
  </>
  )
}
