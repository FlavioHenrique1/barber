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

export default function InputSelect(props: InpotProps) {
    return (
        <div className={styles.custominput}>
            <label className={styles.customlabel}>{props.texto}</label>
            <select className="form-select form-select-lg mb-3" aria-label="Large select example" value={prof} onChange={(evt)=>setProf(evt.target.value)}>
              <option selected>Selecione o profissional</option>
              <option value="1">Jose</option>
              <option value="2">João</option>
              <option value="3">Three</option>
            </select>
        </div>
    );
}
