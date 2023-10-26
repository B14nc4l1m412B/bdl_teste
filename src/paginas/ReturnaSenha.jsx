import { Link } from "react-router-dom"

import styles from "./css/RetornaSenha.module.css"

import volta from "./imagens/arrow-u-up-left.png"

function RetornaSenha() {

  return (
    <>
      <main  className={styles.main}>
      <div className={styles.divform}>
            <form  className={styles.form} action="">
                <button className={styles.volta}>
                    <img className={styles.setavolta} src={volta} alt="seta voltando" />
                    <Link className={styles.voltalogin} to={"/login"} > - </Link>
                </button>

                <div className={styles.login}>
                    <h1>Redefinição de senha</h1>
                </div>

                <div className={styles.paragrafo}>
                    <h2>Por favor, digite seu email para que enviaremos um email com instruções para redifinição da sua senha.</h2>
                </div>

                <div className={styles.cadastro}>
                    <div className={styles.usermail}>
                    <input className={styles.input} type="text" name="user-mail" id="user-mail" placeholder="Nome do usuário/e-mail"/>
                    </div>
                </div>

                <div className={styles.cetralizabotao}>
                    <button className={styles.botao}>
                        <Link className={styles.link2} to={"/login"} >Enviar</Link>
                    </button>
                </div>
                
            </form>
            </div>
    </main>
    </>
  )
}

export default RetornaSenha