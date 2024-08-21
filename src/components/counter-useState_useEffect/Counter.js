import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)


    useEffect(() => {
        console.log(`Count is now ${count}`);

        return () => {
            console.log('Component is about to unmount.');
        };
    }, [count]);
    return (
        <div className='col-4 text-center'>
            <h1>Simple Counter</h1>
            <h4>Count : {count}</h4>
            <div className='col'>
                <button className='btn btn-danger mx-2' onClick={() => setCount(count - 1)}>Decrement</button>
                <button className='btn btn-success' onClick={() => setCount(count + 1)}>Increment</button>

            </div>
        </div>
    )
}

export default Counter
