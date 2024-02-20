import React from 'react';
import styles from './botaoVoltar.module.css';

export default function BotaoVoltar() {

    return (
        <div className={styles.btnPrinc}>
            <img className={styles.imgIcon} src="../../img/back.svg" alt="" />
            <label className={styles.labelImg} >Back</label>
        </div>
    );
}
