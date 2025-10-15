import './App.css'

import {Child} from "./Components/Child.jsx";
export default function App() {
    return (
        <div style={{
            width: "100%",
            height: "100vh",
            display: "flex",
           alignItems: "center",
            justifyContent: "center"
        }}>
            <Child/>
        </div>
    );
}
