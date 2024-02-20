import styles from "./login.module.css";
import Input from "@/components/input/Input";
import BotaoPage from "@/components/botaoPage/BotaoPage";
import BotaoPadrao from "@/components/botaoPadrao/BotaoPadrao";
import { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState<string>("")
  const [senha, setSenha] = useState<string>("")

  function btnClick(evt:any) {
    evt.preventDefault()
    console.log(email)
    console.log(senha)
  }

  return (
    <div className="">
      <div className={styles.conteudo}>
        <div>
          <img src="../img/barberIcon.png" alt="" className={styles.imgIcon} />
        </div>
        <h1>Bem Vindo!</h1>
        <BotaoPage />
        <form className={styles.conteudo} onSubmit={btnClick} >
          <Input
            type="email"
            placeholder="Entre com e-mail"
            nome="email"
            texto="E-mail"
            isRequired={true}
            valor={email}
            setValor={setEmail}
          />
          <Input
            type="password"
            placeholder="Entre com sua Senha"
            nome="senha"
            texto="Senha"
            isRequired={true}
            valor={senha}
            setValor={setSenha}
          />
          <div className={styles.textoSpan}>
            <Link href="/Cadastro/Cadastro">
              <span className={styles.textSpan}>Forgot your password?</span>
            </Link>
          </div>
          <div className={styles.divCheckbox}>
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label htmlFor="flexCheckDefault">Remember</label>
          </div>
          <div className={styles.divBtn}>
            <BotaoPadrao texto="Sing in" tipo="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
