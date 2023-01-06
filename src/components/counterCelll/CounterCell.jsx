import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames'
//style
import './CounterCell.css'
const CounterCell = (props) => {
    return (
        <div className='item-counter'>
            <p className={classNames({
                "green": 8 <= props.count,
                "yellow": 5 <= props.count && props.count <= 7,
                "red": 5 > props.count,
            })}>
                {props.count}
            </p>
            <div>
                <button onClick={() => props.increment(props.id)}>+</button>
                <button disabled={props.count === 0} onClick={() => props.decrement(props.id)}>-</button>
            </div>
        </div>
    )
}

CounterCell.propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
};
export default CounterCell;