import '../styles/testCss.css'
import {useState} from "react";
export default function TestCss() {
    let [count,setCount] = useState(0)
    return (
       <div style={{
           margin: '100px',
           display: 'flex',
           flexDirection: 'row',
           width : '300px',
           gap: '10px',
       }}>
           <button className={"red-border"} onClick={()=>{
               setCount(count + 1);
           }}> Increase</button>
           <h1>{count}</h1>
           <button className={"red-border"} onClick={function (){
               if(count >0){
                   setCount(count - 1);
               }
           }}>Decrease</button>
       </div>
    )
}