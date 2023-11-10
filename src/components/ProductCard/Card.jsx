import { AiOutlineEye } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import { useState } from 'react';
import styles from "./Card.module.css"

export default function Card(props){
    const [like, setLike] = useState(false);

    /* function handleLike(e){
        e.preventDefault();
        if(!like ? setLike(true) : null);    
    } */


    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardImage}>
                <a href="#" className={styles.iconLike}><BsHeart/></a>
            </div>
            <div className={styles.cardDetail}>
                <div className={styles.cardText}>
                    <a href="">{}</a>
                    <p>{}</p>
                    <a href="">{}</a>
                </div>
                <div className={styles.cardIcon}>
                    <AiOutlineEye className={styles.iconEye}/>
                </div>
            </div>
        </div>
    )
}