import {useState} from 'react';
import styles from './Footer.module.css';
import { AiFillInstagram, AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { SiMercadopago } from "react-icons/si";





export default function Footer(){

    const [mail, setMail] = useState("");


    return(
        <footer className={styles.footer}>
            <div className={styles.footercolums}>
                <div className={styles.mainColumsFooter}>
                    <h2>Únete a Urban Life</h2>
                    <div className={styles.form}>
                        <input 
                            type="text" 
                            placeholder="Tu direccion de email"
                            value={mail}
                            onChange={(e)=>setMail(e.target.value)}
                        />
                        <button>Registrarse</button>
                    </div>
                    <div className={styles.socialNetwroks}>
                        <ul>
                            <li> 
                                <a href="https://www.instagram.com"><AiFillInstagram className={styles.icon}/></a>
                                <a href="https://www.facebook.com"><AiFillFacebook className={styles.icon}/></a>
                                <a href="https://twitter.com"><AiFillTwitterSquare className={styles.icon}/></a>
                            </li>
                        </ul>
                        <p>46 tiendas en argentina</p>
                    </div>
                    <button className={styles.btnLarge}>Encontrar una tienda</button>
                </div>
                <div className={styles.cardColums}>
                    <p>acerca de UrbanLife</p>
                    <ul>
                        <li><a href="">UrbanLife Club</a></li>
                        <li><a href="">Grupo UrbanLife</a></li>
                        <li><a href="">Trabaja con nosotros</a></li>
                        <li><a href="">Protección de la marca</a></li>
                        <li><a href="">Data Fiscal</a></li>
                    </ul>
                </div>
                <div className={styles.cardColums}>
                    <p>categorias</p>
                    <ul>
                        <li><a href="">Coleccion Hombre</a></li>
                        <li><a href="">Coleccion Mujer</a></li>
                        <li><a href="">Coleccion Niños</a></li>
                        <li><a href="">Urban para Hombre</a></li>
                        <li><a href="">Urban para Mujer</a></li>
                        <li><a href="">Zapatería</a></li>
                        <li><a href="">Urban Sport</a></li>
                        <li><a href="">Chandal Life</a></li>
                        <li><a href="">Bolsos de mano para Mujer</a></li>
                    </ul>
                </div>
                <div className={styles.cardColums}>
                    <p>ayuda y contacto</p>
                    <ul>
                        <li><a href="">Escribinos</a></li>
                        <li><a href="">Llamanos</a></li>
                        <li><a href="">(+54)9 11 1234-5678</a></li>
                    </ul>
                </div>
            </div>
            <div className={styles.mediosDePago}>
                <p>métodos de pago</p>
                <a href="https://www.mercadopago.com"><SiMercadopago className={styles.icon}/></a>
            </div>
            <div className={styles.legales}>
                <div className={styles.legalesItems}>
                    <ul>
                        <li>
                            <a href="">Mapa del Sitio</a>
                            <a href="">Créditos</a>
                            <a href="">Términos y Condiciones</a>
                            <a href="">Pólitica de Privacidad</a>
                            <a href="">Guía de Tallas</a>
                            <a href="">Botón de Arrpentimiento</a>
                            <a href="">Configuración de Cookies</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.bandera}>
                    <a href=""></a>
                    <p><a href="">Argentina</a></p>
                </div>
            </div>
        </footer>
    )
}