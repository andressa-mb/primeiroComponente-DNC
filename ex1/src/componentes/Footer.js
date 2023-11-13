import styles from './Footer.module.css'

function Footer() {
    return(
        <div className={styles.footer}>
            <div className={styles.pais}>  
                <p>Brasil</p>
            </div>
            <div className={styles.footerbar}>
                <div className={styles.links}>
                    <a href='https://about.google/'><p>Sobre</p></a>
                    <a href='https://about.google/products/'><p>Publicidade</p></a>
                    <a href='https://about.google/commitments/'><p>Negócios</p></a>
                    <a href='https://www.google.com/intl/pt-BR/search/howsearchworks/how-search-works/#:~:text=Como%20a%20Busca%20funciona%20%E2%80%93%20Como%20a%20Busca%20do%20Google%20funciona&text=Sempre%20que%20voc%C3%AA%20faz%20uma,em%20resposta%20%C3%A0%20sua%20consulta.'><p>Como funciona a Pesquisa</p></a>
                </div>
                <div className={styles.links}>
                    <a href='https://policies.google.com/privacy?hl=pt_BR'><p>Privacidade</p></a>
                    <a href='https://policies.google.com/terms?hl=pt_BR'><p>Termos</p></a>
                    <a href='https://support.google.com/accounts/answer/3118621?hl=pt-BR'><p>Configurações</p></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;