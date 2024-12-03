"use client";

import { useEffect, useState } from 'react';
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
//import { useRouter } from 'next/navigation';
import {useSession} from "next-auth/react";
import {useSetId} from '../context/SetIdContext';

type Flashcards = {
  id: number;
  term: string;
  definition: string;
  image: string;
};

type cardData = {
  cards: Flashcards[];
}

/*const dummyArr: Flashcards[] = [
  {
    id: 1,
    term: "Red Panda",
    definition: "Mammal that is cute!",
    image: "https://classroomclipart.com/images/gallery/Clipart/Animals/cute-small-baby-red-panda-animal-clipart.jpg",
  },
  {
    id: 2,
    term: "Starfish",
    definition: "In the ocean omg",
    image: "https://www.shutterstock.com/image-vector/vector-starfish-icon-under-sea-600nw-2279259637.jpg",
  },
  {
    id: 3,
    term: "Lion",
    definition: "Lion king is a rlly good movie",
    image: "https://classroomclipart.com/image/static2/preview2/cute-animal-lion-clipart-33697.jpg",
  },
  {
    id: 4,
    term: "Panda",
    definition: "Black and white",
    image: "https://denettefretz.com/wp-content/uploads/2018/07/Andy2.png",
  },
];
*/

export default function FlashcardSet() {

  // need useState for Client-side rendering of audio
  const [jazz, setJazz] = useState<HTMLAudioElement | null>(null);
  const [cafe, setCafe] = useState<HTMLAudioElement | null>(null);
  const [rainforest, setRainforest] = useState<HTMLAudioElement | null>(null);
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);

  // useEffect to set the audio files
  useEffect(() => {
    setJazz(new Audio('/audios/jazz.mp3'));
    setCafe(new Audio('/audios/restaurantsounds.mp3'));
    setRainforest(new Audio('/audios/rainforest.mp3'));
  }, []);

  const playAudio = (audio: HTMLAudioElement | null) => {
    // turn off the current audio
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    // play the new audio
    if (audio) {
      audio.play();
      setCurrentAudio(audio);
    }
  };

  const playAndPause = () => {
    if (currentAudio) {
      if (currentAudio.paused) {
        currentAudio.play();
      } else {
        currentAudio.pause();
      }
    }
  }

  const startJazz = () => {
    playAudio(jazz);
  };

  const startCafe = () => {
    playAudio(cafe);
  };

  const startRainforest = () => {
    playAudio(rainforest);
  };

  const [cards, setCards] = useState<Flashcards[]>([]); // Cards array
  const [currentIndex, setCurrentIndex] = useState(0); // Index of the current card
  const [isFlipped, setIsFlipped] = useState(false); // Flip state
  const [loading, setLoading] = useState(true) // loading state for fetching data

  //const router = useRouter();
  //const userId = router.query.userId; // extract userId from the route, if it's available
  //const setId = router.query.setId; // extract setId from the route, if it's available
  const {data: session} = useSession();
  const userId = session?.user?.id;
  const { setId, updateSetId } = useSetId();


  // eetch cards when the component mounts
  /*useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(`/api/users/${userId}/sets/${setId}/cards`, {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error("Failed to fetch cards");
        }
        const data = await response.json();
        setCards(data.cards);
      } catch (error) {
        console.error("Error fetching cards:", error);
      } finally {
        setLoading(false);
      }
    };
    */
    interface CardData {
      id: string;
      term: string;
      definition: string;
      image: string;
    }
    const [cardData, setCardData] = useState<CardData[]>([]);
    //useEffect(() => {
      const fetchCards = async () => {

        try {
          if (!userId) {
            console.log('User ID is not available');
            return;
          }

          const response = await fetch(`/api/users/${userId}/sets/${setId}/cards`);
          
          if(!response.ok) {
            throw new Error('Network response was not ok');
          }

          const data = await response.json();
          setCardData(data.cards);

        } catch (error) {
          console.log('Error from ShowItemList:', error);
        }
      };
    //},);
    useEffect(() => {fetchCards}, []);
    console.log(cardData);

    /*if (userId && setId) {
      fetchCards(); // fetch cards only if userId and setId are available
    }*/
  

  const shuffleCards = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCurrentIndex(0); // Reset to the first card
    setIsFlipped(false); // Reset flip state
  };

  const flipCard = () => {
    setIsFlipped((prev) => !prev);
  };

  const goToNextCard = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setIsFlipped(false); // Reset flip state
    }
  };

  const goToPrevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setIsFlipped(false); // Reset flip state
    }
  };

  const currentCard = cardData[currentIndex];//cards[currentIndex];

  return (
    <div className={styles.flashcardPage}>
      <div className={styles.heading}>
        <Link href="/dashboard">
          <Image src={backArrow} alt="Back to Dashboard" />
        </Link>
        <h1>Animals</h1>
      </div>

      <div className={styles.mainCard}>
        {/* Left Arrow */}
        <button className={styles.button} onClick={goToPrevCard}>
          <Image src={leftArrow} alt="Previous card" width={50} />
        </button>

        {/* Flashcard */}
        <div className={`${styles.card} ${isFlipped ? styles.flipped : ''}`}>
          <div className={styles.upper}>
            <p>
              {currentIndex + 1} of {cards.length}
            </p>
          </div>
          <div className={styles.termDef}>
            {isFlipped ? (
                <div>
                    
                    <p>{currentCard.definition}</p>
                    <Image src={currentCard.image} alt="image" width={50} height={50}/>
                </div>
   
            ) : (
              <p>{currentCard.term}</p>
            )}
          </div>
          <div className={styles.turnArrow}>
            <button className={styles.button} onClick={flipCard}>
              <Image src={flipArrow} alt="Flip card" width={20} />
            </button>
          </div>
        </div>

        {/* Right Arrow */}
        <button className={styles.button} onClick={goToNextCard}>
          <Image src={rightArrow} alt="Next card" width={50} />
        </button>
      </div>

      {/* Shuffle Button */}
      <div className={styles.shuffling}>
        <button className={styles.button} onClick={shuffleCards}>
          <Image src={shuffleSet} alt="Shuffle cards" width={150} />
        </button>
      </div>

      <div className={styles.bottom}>
        <div className={styles.time}> <Timer /> </div>
        <div className={styles.dropdown}>
          <Button className={styles.dropdownButton} onClick={playAndPause}>
            <Image src={speaker} alt={"sound"} width={40} />
          </Button>
          <div className={styles.dropdownContent}>
            <button className={styles.buttonDrop} onClick={startJazz}><p>Jazz</p></button>
            <button className={styles.buttonDrop} onClick={startCafe}><p>Cafe</p></button>
            <button className={styles.buttonDrop} onClick={startRainforest}><p>Rainforest</p></button>
            <button className={styles.buttonDrop} onClick={startRainforest}><p>People Screaming</p></button>
          </div>
        </div>
      </div>

    </div>
  );
}
