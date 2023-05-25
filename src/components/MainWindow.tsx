import React from 'react';
import s from "./counter.module.css";
import {Button} from "./Button";

type PropsType = {
    counter: () => void;
    number: number;
    reset: () => void;
    maxValue: number
}
export const MainWindow = (props: PropsType) => {
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
};

export default MainWindow;