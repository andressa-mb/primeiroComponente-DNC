import styles from './Navbar.module.css'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import perfil from '../imagens/user.svg'

function Navbar(){
    return(
        <div className={styles.navbar}>    
            <ul>
                <li><a href="#">Gmail</a></li>
                <li><a href="#">Imagens</a></li>           
                <li><a><BsFillGrid3X3GapFill/></a></li>  
                <li><a><img src={perfil} alt="Foto Perfil"></img></a></li>                  
            </ul>  
        </div>
    )
}

export default Navbar