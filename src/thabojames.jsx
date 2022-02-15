import WindowWith from "./getWindowSize";
import { useState } from "react";


const ThaboJames = () => {
    
    const [state, setState] = useState('');
      
    const handler = (event) => {
    
      setState(event.target.value);
    }

    return(
        <div style={{border: '2px solid red', height: `${state}px`}}>

            <span className="test1">
                <WindowWith />
            </span>
                <br/>
            
            <p>The Div height is: {state}px</p>
            <form >
                <input type="text" style={{border: '1px solid red'}} value={state} onChange={(event) => handler(event)} />
            </form>
            
        </div>);

}

export default ThaboJames;