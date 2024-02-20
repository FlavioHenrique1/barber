import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';
import BotaoVoltar from '../botaoVoltar/BotaoVoltar';
import styles from './topo.module.css'

export default function Topo() {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.divBtn}>
                    <BotaoVoltar/>
                </div>
                <div>
                    <h3 className={styles.centeredText}>Barbearia</h3>
                </div>
                <div></div>
            </div>
        </div>
    );
}
