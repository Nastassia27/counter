import React, {useState} from "react";
import s from './counter.module.css'
import {Button} from "./Button";

type CounterTypes = {
    counter: () => void;
    number: number;
    reset: () => void;
    maxValue: number
}

export function Counter(props: CounterTypes) {
    return (
        <div className={s.wrapper}>
            <div className={s.counter}>
                <div className={props.number === props.maxValue ? s.numberError : s.number}>
                    {props.number}
                </div>
                <div className={s.buttons}>
                    <Button title={'inc'} callBack={props.counter} disabled={props.number === props.maxValue}/>
                    <Button title={'reset'} callBack={props.reset} disabled={props.number === 0}/>
                </div>
            </div>
        </div>
    )
}