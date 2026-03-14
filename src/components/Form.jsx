import React, { useState } from 'react'

const Form = () => {
   const [name, setName] = useState('');
   const [password, setPassword] = useState('');
   const [email, setEmail] = useState('');
  return (
    <div>
      <form action="" method='get'>
        <input type="text" className="bg-amber-50 w-96 h-12 rounded-2xl p-5 m-1.5" onChange ={(e)=>setName(e.target.value)} placeholder='Enter Name' />
        <input type="password" className="bg-amber-50 w-96 h-12 rounded-2xl p-5 m-1.5" onChange={(e)=>setPassword(e.target.value)} name=""   placeholder='Enter Password'/>
        <input type="email" className="bg-amber-50 w-96 h-12 rounded-2xl p-5 m-1.5" onChange={(e)=>setEmail(e.target.value)} name=""  placeholder='Enter Email'/>
        <button className='bg-blue-950 text-white rounded-2xl p-5 mr-2.5'>Submit</button>
        <button className='bg-amber-500  text-white rounded-2xl p-5' onChange={()=>{setName('');setPassword('');setEmail('');}}>Clear</button>
      </form>
<h3>{name}</h3>
<h3>{password}</h3>
<h3>{email}</h3>

    </div>
  )
}

export default Form
