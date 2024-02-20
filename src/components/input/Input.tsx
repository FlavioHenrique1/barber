import React from 'react';
import styles from './input.module.css';

interface InpotProps{
    nome:string,
    type:string,
    texto:string,
    isRequired?: boolean,
    placeholder:string,
    valor:string,
    setValor:any
}

export default function Input(props: InpotProps) {
    return (
        <div className={styles.custominput}>
            <label className={styles.customlabel}>{props.texto}</label>
            <input type={props.type} name={props.nome} placeholder={props.placeholder} required={props.isRequired} value={props.valor} onChange={(evt)=>{props.setValor(evt.target.value)}}/>
        </div>
    );
}
