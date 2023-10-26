import { Link } from "react-router-dom"

import styles from "./css/Login.module.css"

import volta from "./imagens/arrow-u-up-left.png"

function Login() {

  return (
    <>
    <main className={styles.main}>
        <div className={styles.divform}>
            <form className={styles.form} action="">
                <button className={styles.volta}>
                    <img className={styles.setavolta} src={volta} alt="seta voltando" />
                    <Link className={styles.voltalogin} to={"/"} > - </Link>
                </button>

                <div className={styles.login}>
                    <h1>Login</h1>
                </div>

                <div className={styles.cadastro}>
                    <div className={styles.usermail}>
                    <input className={styles.input} type="text" name="user-mail" id="user-mail" placeholder="Nome do usuário/e-mail"/>
                    </div>
                    <p>Não tem cadastro?</p>
                    <Link className={styles.link} to={"/cadastro"}>Clique aqui</Link>
                </div>

                <div className={styles.cadastro}>
                    <div className={styles.senha}>
                    <input className={styles.input}  type="text" name="senha" id="senha" placeholder="Senha"/>
                    </div>
                    <p>Esqueceu sua senha?</p>
                    <Link className={styles.link} to={"/returnasenha"} >Clique aqui</Link>
                </div>

                <div className={styles.cetralizabotao}>
                    <button className={styles.botao}>
                    <Link className={styles.link2} to={"/"} >Entrar</Link>
                    </button>
                </div>
                
            </form>
            </div>
    </main>
      
    </>
  )
}

export default Login