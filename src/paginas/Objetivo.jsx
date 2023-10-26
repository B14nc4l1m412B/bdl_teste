import { Link } from "react-router-dom"

import styles from "./css/Objetivo.module.css"

import Logo from "./imagens/Logo.png"
import login from "./imagens/login.png"
import camera from "./imagens/camera1.png"

function Objetivo() {

    return (
      <>
        <header className={styles.header}>
          <div className={styles.buttonLogo}>
          <button>
            <img className={styles.Logo} src={Logo} alt="logo azul" />
            <Link className={styles.home} to={"/"} >B.D.L. systems</Link>
          </button>
          </div>
          <div className={styles.todomenu}>
            <Link className={styles.menu} to={"/objetivo"}>Objetivo</Link>
            <Link className={styles.menu} to={"/ideia"}>Nossa ideia</Link>
            <Link className={styles.menu} to={"/equipamento"}>Equipamento</Link>
            <Link className={styles.menu} to={"/bibliografia"}>Bibliografia</Link>
          </div>
          <div className={styles.buttonLogin}>
            <button>
              <img className={styles.login} src={login} alt="login" />
              <Link className={styles.loginUsuario} to={"/login"}>Login</Link>
            </button>
          </div>
        </header>

        <main className={styles.main}>
          <div className={styles.divcamera}>
            <img className={styles.camera} src={camera} alt="camera observando" />
          </div>
          <div className={styles.conteudo}>
            <h1 className={styles.h1}>Objetivo:</h1>
            <p className={styles.p}> Nosso trabalho é fazer um sistema de segurança (alarme) que só acione se o tempo pré-definido do alarme tiver passado. Ele vai soar um alarme alto para o proprietário e pessoas ao redor serem informando que algo suspeito aconteceu perto de sua porta. Trazendo assim mais conforto e segurança para as pessoas que utilizam nossos equipamentos da forma mais rápida, fácil e prática. </p>
            <h1 className={styles.h1}>Público-alvo:</h1>
            <p className={styles.p}> Trabalhamos com familias pequenas e grandes, nossos sistemas ajudam a identificar os membros que tem a permição de entrar em sua propriedade. Para jovens ou adultos que pretendem maior segurança em suas casas.</p>
          </div>
        </main>
      </>
    )
  }
  
  export default Objetivo
