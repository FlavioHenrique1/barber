import React from 'react';
import { useRouter } from 'next/router';
import styles from './botaoPage.module.css';
import Link from 'next/link';

export default function BotaoPage() {
  const router = useRouter();

  // Função para verificar se a rota atual é a página de login
  const isLoginPage = () => router.pathname === '/Login/Login';
  const isCadastroPage  = () => router.pathname === '/Cadastro/Cadastro';


  return (
    <div className={styles.customDiv}>
      <Link href={"/Login/Login"} className={`${styles.divBt} ${isLoginPage() ? styles.ativo : ''}`}>
          <span>Sign in</span>
      </Link>
      <Link href={"/Cadastro/Cadastro"} className={`${styles.divBt} ${isCadastroPage() ? styles.ativo : ''}`}>
          <span>Sign up</span>
      </Link>
    </div>
  );
}
