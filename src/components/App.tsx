import React, {useState} from "react";
import './App.scss'
const App = ()=> {
    const [state,setState] = useState<number>(0)
    const onClick = (operator:'+' | '-') => {
        if (operator === "+"){
            setState(prev=>++prev)
        }
        else if (operator === '-'){
            setState(prev =>--prev )
        }
    }
    return (
        <div>
            App
            <div>
                <button onClick={()=>{onClick("-")}}>decrease</button>
                <span>{state}</span>
                <button onClick={()=>{onClick("+")}}>increase</button>
            </div>
        </div>
    )
}
export default App;