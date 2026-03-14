import { useState } from "react"

const Showhide = () => {
   const [display, setdisplay] = useState(true);
  return (
     <div className="bg-amber-50 flex flex-col p-5 w-3xs">
      <h1>Toggle Button</h1>
      <button className="bg-green-700 text-white p-3 m-0.5 rounded-2xl" onClick={()=>setdisplay(!display)}>Toggle</button>
      {
        display? <h1>Hi Aman</h1> : null
      }
    </div>
  )
}
export default Showhide
