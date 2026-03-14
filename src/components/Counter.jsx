import { useState } from "react"

const Counter = () => {

const [count, setcount] = useState(0);

  return (
    <div className="bg-amber-50 flex flex-col p-5 w-3xs">
      <p className="font-black text-4xl">count: {count}</p>
      <button className="bg-green-700 text-white p-3 m-0.5 rounded-2xl" onClick={()=> setcount(count+1)}>Update Counter</button>
      <button className="bg-red-800 text-white p-3 m-0.5 rounded-2xl" onClick={()=> setcount(count-1)}>Decrease Counter</button>
      <button className="bg-orange-800 text-white p-3 m-0.5 rounded-2xl" onClick={()=> setcount(0)}>Reset Counter</button>
    </div>
  )
}

export default Counter
