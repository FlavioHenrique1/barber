import styles from "./cadastro.module.css";
import Input from "@/components/input/Input";
import BotaoPage from "@/components/botaoPage/BotaoPage";
import BotaoPadrao from "@/components/botaoPadrao/BotaoPadrao";
import { useState } from "react";
import Link from "next/link";
import Topo from "@/components/topo/Topo";

export default function Login() {
  const [nome, setNome] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [senha, setSenha] = useState<string>("")
  const [senhaConf, setSenhaConf] = useState<string>("")


  function btnClick(evt:any) {
    evt.preventDefault()
    console.log(email)
    console.log(senha)
  }

  return (
    <div className="">
      <Topo/>
      <div className={styles.conteudo}>
        <div>
          <img src="../img/barberIcon.png" alt="" className={styles.imgIcon} />
        </div>
        <h1>Cadastro!</h1>
        <BotaoPage />
        <form className={styles.conteudo} onSubmit={btnClick} >
        <Input
            type="text"
            placeholder="Digite seu nome"
            nome="nome"
            texto="Nome"
            isRequired={true}
            valor={nome}
            setValor={setNome}
          />
          <Input
            type="email"
            placeholder="Digite seu e-mail"
            nome="email"
            texto="E-mail"
            isRequired={true}
            valor={email}
            setValor={setEmail}
          />
          <Input
            type="password"
            placeholder="Digite sua Senha"
            nome="senha"
            texto="Senha"
            isRequired={true}
            valor={senha}
            setValor={setSenha}
          />
          <Input
            type="password"
            placeholder="Confirme sua Senha"
            nome="senhaConf"
            texto="Confirmação de Senha"
            isRequired={true}
            valor={senhaConf}
            setValor={setSenhaConf}
          />
          <div className={styles.divBtn}>
            <BotaoPadrao texto="Sing in" tipo="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
