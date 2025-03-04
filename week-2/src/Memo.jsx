import React,{memo} from 'react'
// rfce
function Memo(data) {
  console.log("🚀 ~ Memo ~ data:", data)
  return (
    // <>...</> Fragment
    <>
    <h1>Memo Component: {data.data}</h1>
      
    </>
  )
}

export default memo(Memo)
