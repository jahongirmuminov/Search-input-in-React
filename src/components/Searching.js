import React, {  useState } from 'react'

const Searching = ({getQuery}) => {
    const [text,setText ]=useState("")

     
 const onChange=(q)=>{
       
      getQuery(q)
      setText(q)
  }
    return (
        <section className="search">
              <form>
                    <input 
                     type="text"
                     className="form-control"
                     value={text}
                    onChange={(e)=>onChange(e.target.value)}
                    autoFocus
                    />
              </form>
        </section>
    )
}

export default Searching









