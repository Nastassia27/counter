import React, {useState} from 'react';
import s from "./counter.module.css";
import {Button} from "./Button";

type PropsType = {
    counter: number
    maxValue: number
    minValue: number
    changeCounter: () => void
    resetCounter: () => void
    buttonClicked: boolean
    previousMaxValue: number
    previousMinValue: number
}
export const MainWindow = (props: PropsType) => {
const labelVariant = ()=>{
    if(!props.buttonClicked && (props.minValue < 0 || props.maxValue < 0 || props.maxValue <= props.minValue)){
        return <label className={s.incorrectNumber} htmlFor="counter">Incorrect value</label>
    } else if (!props.buttonClicked){
        return  <label className={s.firstMessage} htmlFor="counter">Enter values and press "Set"</label>
    } else{
        return <p>{props.counter}</p>
    }

}

    return (

        <div className={s.counter}>
            <div className={props.counter === props.previousMaxValue ? s.numberError : s.number}>
                { labelVariant()}
            </div>
            <div className={s.buttons}>
                <Button className={s.click} title={'inc'} callBack={props.changeCounter}
                        disabled={props.counter === props.previousMaxValue || !props.buttonClicked || props.minValue < 0 || props.maxValue < 0 || props.maxValue <= props.minValue}/>
                <Button className={s.click} title={'reset'} callBack={props.resetCounter}
                        disabled={props.counter === props.previousMinValue || !props.buttonClicked}/>
            </div>

        </div>
    )
};

export default MainWindow;