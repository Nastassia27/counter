import React, {ChangeEvent, useState} from 'react';
import s from "./counter.module.css";
import {Button} from "./Button";
import Input from "./Input";

type PropsTypes = {
    maxValue: number
    minValue: number
    changeMax:(event: ChangeEvent<HTMLInputElement>)=>void
    changeMin:(event: ChangeEvent<HTMLInputElement>)=>void
    setValue:()=>void
}

export const SetValues = (props: PropsTypes) => {

    return (
        <div className={s.counter}>
            <div className={s.inputgroup}>
                <label htmlFor="maxValue">Max Value</label>
                <Input class={props.maxValue<0 || props.maxValue<=props.minValue ? s.inputError: ''} type={'number'} id={'maxValue'} value={props.maxValue} callback={props.changeMax}/>
            </div>
            <div className={s.inputgroup}>
                <label htmlFor="minValue">Min Value</label>
                <Input class={props.minValue<0 || props.maxValue<=props.minValue ? s.inputError: ''} type={'number'} id={'minValue'} value={props.minValue} callback={props.changeMin}/>
            </div>
            <div className={s.buttons}>
                <Button disabled={props.minValue<0 || props.maxValue<0 || props.maxValue<=props.minValue} className={s.click} title={'Set'} callBack={props.setValue}/>
            </div>
        </div>
    );
};

export default SetValues;