import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Counter} from "./components/counter";

function App() {
    let [counter, setCounter] = useState<number>(0)
const maxValue=5
    const changeCounter = () => {
        counter = counter + 1;
        setCounter(counter)
    }
    const resetCounter = () => {
        setCounter(0)
    }

    return (
        <div>
            <Counter
                counter={changeCounter}
                number={counter}
                reset={resetCounter}
                maxValue={maxValue}
            />
        </div>
    );
}

export default App;
