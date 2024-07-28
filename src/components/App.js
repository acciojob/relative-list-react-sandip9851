import React from 'react'


const App = () => {
  const relativeListArr = ["Brother","Sister","Uncle","Unty","GrandFather"]
 

  return (
    <div id="main">
              <ol id ={"relativeList"}>
                {relativeListArr.map((item,i)=>(
                  <li id ={`relativeListItem${i+1}`}>{item}</li>
                ))}

              </ol>
    </div>
  )
}

export default App
