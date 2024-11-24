import styles from './flashcardSet.module.css';
import Image from 'next/image';
import backArrow from '../images/backArrow.png';
import leftArrow from '../images/leftArrow.png';
import rightArrow from '../images/rightArrow.png';
import flipArrow from '../images/flipArrow.png';
import star from '../images/star.png';
import speaker from '../images/speaker.png';
import shuffleSet from '../images/shuffleSet.png';
import Link from 'next/link';
import Button from '../components/Button';
import Timer from '../components/Timer';

export default function FlashcardSet() {
    return (

        <div className={styles.flashcardPage}>
            <div className={styles.heading}>
                <Link href="/dashboard">
                    <Image src={backArrow} alt={"arrow"}/>
                </Link>
                <h1>TITLE</h1>
            </div>

           <div className={styles.mainCard}>
                <Button className={styles.button}>
                    <Image src={leftArrow} alt={"left arrow"} width={50}/>
                </Button>

                
                <div className={styles.card}>
                    <div className={styles.upper}>
                        <p>1 of 10</p>
                        <Button className={styles.button}>
                            <Image src={star} alt={"star"} width={20}/>
                        </Button>
                        
                    </div>
                    <div className={styles.termDef}>
                        <p>Term</p>  
                    </div>
                    <div className={styles.turnArrow}>
                        <Button className={styles.button}>
                            <Image src={flipArrow} alt={"flip"} width={20}/>
                        </Button>
                        
                    </div>

                </div>

                <Button className={styles.button}>
                    <Image src={rightArrow} alt={"right arrow"} width={50}/>
                </Button>
                
                        
           </div>

           <div className={styles.shuffling}> 
                <Button className={styles.button}>
                    <Image src={shuffleSet} alt={"shuffle"} width={150}/>
                </Button>
              
            </div>
            
            <div className={styles.bottom}>
                <div className={styles.dropdown}>
                    <Button className={styles.dropdownButton}>
                        <Image src={speaker} alt={"sound"} width={40}/>
                    </Button>
                    <div className={styles.dropdownContent}>
                        <button className={styles.buttonDrop}><p>Jazz</p></button>
                        <button className={styles.buttonDrop}><p>Cafe</p></button>
                        <button className={styles.buttonDrop}><p>Rainforest</p></button>

                    </div>
                </div>


                <p className={styles.time}><Timer/></p>
                
                
                
                
            </div>
         </div>
         
         
        
    )
}