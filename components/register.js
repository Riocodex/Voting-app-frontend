import React, { useEffect , useState } from 'react'


const Register = () => {
  const [nameChange, setNameChange] = useState("")

  //updating the title Change
  function updateName(event){
    setNameChange(event.target.value)
  }
  return (
    <div>
    <div className='h-screen flex justify-center items-center py-20 px-20 '>
<div className='voter-back flex flex-col flex justify-center items-center border-green-800 py-20 shadow-xl rounded-md'>

</div>
<div className='flex flex-col flex justify-center items-center border-blue-800 border-8 border-dotted px-6 py-20 h-full w-1/2 rounded-md shadow-xl'>
<label className='font-bold text-2xl'>Full Name</label>
<input class="shadow-md m-2 px-20 py-5 rounded-lg border-gray-200 border-2 text-gray-500 text-xl font-semibold justify-center items-center placeholder-indigo-300" onChange={updateName} type="text"  placeholder="Enter your full name"/>
<button 

class="bg-blue-800 rounded-lg text-white py-5 px-6 font-bold text-xl mt-2">Register</button>
</div>
</div>
</div>
  )
}

export default Register
