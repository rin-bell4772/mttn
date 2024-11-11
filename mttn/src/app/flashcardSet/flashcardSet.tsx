import styles from './flashcardSet.module.css';

export default function FlashcardSet() {
    return (
        <div className={styles.flashcardPage}>
            <h1>TITLE</h1>
            <div className={styles.cardArrows}>
                <p className={styles.arrows}>&#8592;</p>
                <div className={styles.card}>
                    <div className={styles.upper}>
                        <p>1 of 10</p>
                        <p>&#11088;</p>
                    </div>
                    <p className={styles.termDef}>term/definition</p>
                    <p className={styles.flipArrow}>&#8631;</p>
                </div>
                <p className={styles.arrows}>&#8594;</p>
   
            </div>
            <p>Shuffle Set &#10227;</p>
            
            <p className={styles.time}>Time left: 0:00</p>
         </div>
         
        
    )
}