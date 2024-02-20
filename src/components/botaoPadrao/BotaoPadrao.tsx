import React from 'react';
import styles from './botaoPadrao.module.css';

interface BtnProps{
    texto:string,
    funcao?:any,
    tipo?: "button" | "submit" | "reset";
}

export default function BotaoPadrao(props: BtnProps) {

    return (
        <div className={styles.btnPrinc}>
            <button type={props.tipo} className={styles.btnAgendamento} onClick={props.funcao}>{props.texto}</button>
        </div>
    );
}
