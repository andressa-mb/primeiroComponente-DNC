import google from './../imagens/google.svg'
import lupa from './../imagens/lupa.svg'
import microfone from './../imagens/microfone.svg'
import teclado from './../imagens/teclado.svg'
import checkup from './../imagens/checkup.svg'
import styles from './Main.module.css'


function Main() {
    return (
        <div className={styles.main}>
            <div>
                <img src={google} alt="Google"/>
            </div>
            <div className={styles.inputContainer}>
                <input/>
                    <span className={styles.leftIcon}>
                        <img src={lupa} alt="Lupa"/>
                    </span>
                    <span className={styles.rightIcons}>
                        <img src={teclado} alt="Teclado"/>
                        <img src={microfone} alt="Microfone"/>
                    </span>            
            </div>
            <div>
                <button>Pesquisa Google</button>
                <button>Estou com Sorte</button>
            </div>
            <div className={styles.checkup}>
                <img src={checkup} alt="Check-Up"/>
                <p>Faça um Check-up de privacidade</p>
            </div>
        </div>
    )
}

export default Main