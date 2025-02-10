import React, { useState } from 'react';
import WardOrderChart from '../components/Piechart';


function Counter() {
  const [count, setCount] = useState(0);
    return (
<>
        <div>
        <h1 >Counter</h1>
        <div className="container">

        <p>Count: {count}</p>
        <br />
        <button onClick={() => setCount(count + 1)}>+</button>
        <br />
        <br />
        <button onClick={() => setCount(count - 1)}>-</button>
        <br />
        <br />
        <button onClick={() => setCount(0)}>Reset</button>
        </div>
        </div>
        <div>
          <WardOrderChart count={count} />
        </div>
        </>
    );
}

export default Counter;