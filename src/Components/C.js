import React from 'react'

function C({addEntry}) {

  return (
    <button onClick={()=>addEntry({1:2,3:4})}>c</button>
  )
}

export default C