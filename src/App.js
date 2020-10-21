import React, {useState} from 'react';

function App() {
    const [num, setNum] = useState(0);

    return (
        <>
            <h1>
                Plus N Minus
            </h1>
            <div>
                <button onClick={()=> setNum(num + 1)}>
                    +
                </button>
                    <input type="number" value={num}/>
                <button onClick={()=> setNum(num - 1)}>
                    -
                </button>
            </div>
        </>
    )
}

export default App;