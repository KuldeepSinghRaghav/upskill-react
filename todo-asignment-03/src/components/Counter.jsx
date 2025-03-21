import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/counter/actions';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())} style={{ marginRight: '1rem' }}>
        Increment
      </button>
      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
