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



type Flashcards = {
    id: number;
    term: string;
    definition: string;
    image: string;
};

const dummyArr: Flashcards[] = [
    {
        id: 1,
        term: 'Red Panda',
        definition: 'Mammal that is cute!', 
        image: 'https://classroomclipart.com/images/gallery/Clipart/Animals/cute-small-baby-red-panda-animal-clipart.jpg',
    },
    {
        id: 2,
        term: 'Starfish',
        definition: 'In the ocean omg',
        image: 'https://www.shutterstock.com/image-vector/vector-starfish-icon-under-sea-600nw-2279259637.jpg',
    },
    {
        id: 3,
        term: 'Lion',
        definition: 'Lion king is a rlly good movie',
        image: 'https://classroomclipart.com/image/static2/preview2/cute-animal-lion-clipart-33697.jpg',
    },
    {
        id: 4,
        term: 'Panda',
        definition: 'black and white',
        image: ''
    },
];

export default function FlashcardSet() {
    
    
    
    return (
        
        <div className={styles.flashcardPage}>
            <div className={styles.heading}>
                <Link href="/dashboard">
                    <Image src={backArrow} alt={"arrow"}/>
                </Link>
                <h1>Animals</h1>
            </div>

           <div className={styles.mainCard}>
                <Button className={styles.button}>
                    <Image src={leftArrow} alt={"left arrow"} width={50}/>
                </Button>

                
                <div className={styles.card}>
                    <div className={styles.upper}>
                        <p>1 of 10</p>
                        
                        
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

            <div className={styles.time}> <Timer/> </div>
            
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

                
                
                
            </div>
         </div>
         
         
        
    )
}