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
                <Image src={leftArrow} alt={"left arrow"} width={50}/>
                <div className={styles.card}>
                    <div className={styles.upper}>
                        <p>1 of 10</p>
                        <Image src={star} alt={"star"} width={20}/>
                    </div>
                    <div className={styles.termDef}>
                        <p>Term</p>  
                    </div>
                    <div className={styles.turnArrow}>
                        <Image src={flipArrow} alt={"flip"} width={20}/>
                    </div>

                </div>
                <Image src={rightArrow} alt={"right arrow"} width={50}/>
                        
           </div>

           <div className={styles.shuffling}> 
              <Image src={shuffleSet} alt={"shuffle"} width={150}/>
            </div>

            <div className={styles.bottom}>
                <Image src={speaker} alt={"sound"} width={40}/>
                <p className={styles.time}>Time left: 00:00</p>
            </div>
         </div>
         
        
    )
}