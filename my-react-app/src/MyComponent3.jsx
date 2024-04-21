import React, {useState} from 'react'

function MyComponent (){

    const [count, setCount] = useState(0);

    const increment = () => {
        //Uses the CURRENT state to calculate the NEXT state.
        //set functions do not trigger an update/
        //React batches together state updates for performance reasons.
        //NEXT state becomes CURRENT state after an update
        //This would still only update the count 1 time per click.
        //For multiple state updates-- use an updater function
        //setCount(count+1);setCount(count+1);setCount(count+1);


        //Takes the PENDING state to calculate the NEXT state
        //React puts your updater function in a queue
        //During the next render, it will call them in the same order

        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);

    }
    const decrement = () => {
        setCount(c => c-1);
        setCount(c => c-1);
        setCount(c => c-1);
    }
    const reset = () => {
        setCount(0);//B/c we dont need the previous state, the updater function wouldn't be necessary
    }

    return(
        <div className='counter-container'>
            <p className='count-display'>{count}</p>
            <button className='counter-button' onClick={decrement}>decrement</button>
            <button className='counter-button' onClick={reset}>reset</button>
            <button className='counter-button' onClick={increment}>increment</button>
        </div>
    )
}

export default MyComponent;