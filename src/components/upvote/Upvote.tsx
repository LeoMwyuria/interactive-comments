import { useState } from "react"


const Upvote = () => {
    const [count, setCount] = useState(0);

    const addBtn = () => {
        if(count == count +1){}
        setCount(count + 1 )

    }
    const subBtn = () => {
        if(count > 0){
            setCount(count - 1 )
        }
  

    }
  return (
    <div className="upvote">
        <div className="plus" onClick={addBtn}>+</div><p>{count}</p><div className="sub" onClick={subBtn}>-</div>
      
    </div>
  )
}

export default Upvote
