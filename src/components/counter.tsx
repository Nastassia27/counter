import React, {ChangeEvent, useState} from "react";
import s from './counter.module.css'
import {Button} from "./Button";
import SetValues from "./SetValues";
import MainWindow from "./MainWindow";

type PropsType = {}

export function Counter(props: PropsType) {
    let [maxValue, setMaxValue] = useState<number>(0)
    let [minValue, setMinValue] = useState<number>(0)
    let [counter, setCounter] = useState<number>(0)
    let [buttonClicked, setButtonClicked] = useState<boolean>(false)
    let [previousMinValue, setPreviousMinValue] = useState(0);
    let [previousMaxValue, setPreviousMaxValue] = useState(0);
    const onChangeMax = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Number(event.target.value))
        setButtonClicked(false)
    }
    const onChangeMin = (event: ChangeEvent<HTMLInputElement>) => {
        setMinValue(Number(event.target.value))
        setButtonClicked(false)
    }
    const changeCounter = () => {

       if(counter<previousMaxValue)
        setCounter(counter+1)
    }
    const resetCounter = () => {
        setCounter(previousMinValue);
    }
    const setValue = () => {
        setButtonClicked(true)
        setCounter(minValue)
        setPreviousMinValue(minValue);
        setPreviousMaxValue(maxValue)
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