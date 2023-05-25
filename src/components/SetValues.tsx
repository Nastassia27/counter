import React from 'react';
import s from "./counter.module.css";
import {Button} from "./Button";

type PropsTypes = {
    counter: ()=> void
}

export const SetValues = (props: PropsTypes) => {
    return (
        <div className={s.wrapper}>
            <div className={s.counter}>
                <div className={s.inputgroup}>
                    <label htmlFor="maxValue">Макс</label>
                    <input type="number" id="maxValue"/>
                </div>
                <div className={s.inputgroup}>
                    <label htmlFor="minValue">Мин</label>
                    <input type="number" id="minValue"/>
                </div>
                <div className={s.buttons}>
                    <Button title={'Set'} callBack={props.counter}/>
                </div>
            </div>
        </div>
    )

};

export default SetValues;