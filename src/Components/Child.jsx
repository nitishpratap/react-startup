import {useEffect, useState} from "react";
import axios from "axios";
export function Child(){
    const [value, setValue] = useState("");
    const [name,setName] = useState("");
    function handleChange(event){
        const data = event.target.value;
        setValue(data);
    }
    useEffect( ()=>{
        axios.get("http://localhost:3000/search/HHH").then(res => {
           setName(res.data?.name)
            console.log("Case 1 :::::",res.data?.name)
        });
        console.log("UseEffect case 1 called");
    },[])

    useEffect(() => {
        console.log("Case 2 ::::::")

    });

    useEffect(() => {
        axios.get(`http://localhost:3000/search/${value}`).then(res => {
            setName(res.data?.name)
            console.log("Case 1 :::::",res.data?.name)
        });
        console.log("UseEffect case 3 called");
    },[value])

    return (
        <div style={{
            display: "flex",
            width: "350px",
            height: "300px",
            backgroundColor: "lightgreen",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <div>
               <input onChange={handleChange} value={value} />
                <p>Value is ::::: {value}</p>
                <h1>Name is :::::{name}</h1>
            </div>

        </div>
    )
}