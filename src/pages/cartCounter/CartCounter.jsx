import React, { useCallback, useState } from 'react'
//style
import './CartCounter.css'
const CartCounter = () => {
    //state
    const [count, setCount] = useState(0)
    //functions
    const incerement = useCallback(() => setCount(count + 1), [count]) // TODO: why useCallback? ,how we can enhancing this code without useCallback?
    const decerement = useCallback(() => {
        if (count > 0)
            setCount(count - 1)
    }, [count])
    return (
        <div>
            <h1>CartCounter <span style={{ color: 'red' }}>{count}</span></h1>
            <div className='item-counter'>
                <p>{count}</p>
                <div>
                    <button onClick={incerement}>+</button>
                    <button onClick={decerement}>-</button>
                </div>
            </div>
        </div>
    )
}

export default CartCounter