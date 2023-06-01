import React, {ChangeEvent, useEffect, useState} from "react";
import s from './counter.module.css'
import {Button} from "./Button";
import SetValues from "./SetValues";
import MainWindow from "./MainWindow";


export function Counter() {
    let [maxValue, setMaxValue] = useState<number>(() => {
        const storedValue = localStorage.getItem('Max value');
        return storedValue ? +JSON.parse(storedValue) : 1;
    });
    let [minValue, setMinValue] = useState<number>(() => {
        const storedValue = localStorage.getItem('Min value');
        return storedValue ? +JSON.parse(storedValue) : 0;
    })
    let [counter, setCounter] = useState<number>(() => {
        const storedValue = localStorage.getItem('Counter');
        console.log(typeof storedValue)

        return storedValue ? JSON.parse(storedValue) : 0;
    })
    let [buttonClicked, setButtonClicked] = useState<boolean>(false)
    let [previousMinValue, setPreviousMinValue] = useState(0);
    let [previousMaxValue, setPreviousMaxValue] = useState(0);

    useEffect(() => {
        localStorage.setItem('Min value', JSON.stringify(minValue))
        localStorage.setItem('Max value', JSON.stringify(maxValue))
        localStorage.setItem('Counter', JSON.stringify(counter))
    }, [minValue, maxValue, counter])

    const onChangeMax = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Number(event.target.value))
        setButtonClicked(false)
    }
    const onChangeMin = (event: ChangeEvent<HTMLInputElement>) => {
        setMinValue(Number(event.target.value))
        setButtonClicked(false)
    }
    const changeCounter = () => {

        if (counter < previousMaxValue)
            setCounter(counter + 1)
    }
    const resetCounter = () => {
        setCounter(previousMinValue);
    }
    const setValue = () => {
        setPreviousMinValue(minValue)
        setPreviousMaxValue(maxValue)
        setButtonClicked(true)
        setCounter(minValue)

    }
    return (
        <div className={s.wrapper}>
            <div>
                <SetValues
                    maxValue={maxValue}
                    minValue={minValue}
                    changeMax={onChangeMax}
                    changeMin={onChangeMin}
                    setValue={setValue}

                />
            </div>
            <div>
                <MainWindow
                    counter={counter}
                    maxValue={maxValue}
                    minValue={minValue}
                    changeCounter={changeCounter}
                    resetCounter={resetCounter}
                    buttonClicked={buttonClicked}
                    previousMaxValue={previousMaxValue}
                    previousMinValue={previousMinValue}
                />
            </div>


        </div>
    )
}