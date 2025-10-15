import { useState} from "react";
export const Practice = () => {
const [count, setCount] = useState(0);

    return (
        <div>
        <button onClick={()=>{
            setCount(count+1);
        }}>
            Click
        </button>
        <p>Count is ::::{count}</p>
        </div>
    )
}