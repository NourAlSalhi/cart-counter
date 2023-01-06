import React, { useCallback, useState } from 'react'
import CounterCell from '../../components/counterCelll'

const counters = [1, 2, 3]
const CartCounter = () => {
    //state
    const [count, setCount] = useState({
        total: 0,
        items: {
            1: {
                isPressed: false,
                count: 0
            },
            2: {
                isPressed: false,
                count: 0
            },
            3: {
                isPressed: false,
                count: 0
            }
        }
    })
    //functions
    const increment = useCallback((id) => {
        setCount(prev => ({
            ...prev,
            total: count.items[id].isPressed ? prev.total : prev.total + 1,
            items: {
                ...prev.items,
                [id]: {
                    count: prev.items[id].count + 1,
                    isPressed: true
                }
            }
        }))
    }, [count]); // TODO: why useCallback? ,how we can enhancing this code without useCallback?

    const decrement = useCallback((id) => {
        setCount(prev => ({
            ...prev,
            total: count.items[id].count === 1 ? prev.total - 1 : prev.total,
            items: {
                ...prev.items,
                [id]: {
                    count: prev.items[id].count - 1,
                    isPressed: prev.items[id].count === 1 ? false : true
                }
            }
        }))
    }, [count]);

    return (
        <div>
            <h1>CartCounter <span style={{ color: 'red' }}>{count.total}</span></h1>
            {
                counters.map(counter => {
                    return (
                        <div key={counter}>
                            <CounterCell
                                count={count.items[counter].count}
                                increment={increment}
                                decrement={decrement}
                                id={counter}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CartCounter;