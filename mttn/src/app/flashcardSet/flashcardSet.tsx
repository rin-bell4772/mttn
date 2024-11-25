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

export default function FlashcardSet() {
    // need useState for Client-side rendering of audio
    const [jazz, setJazz] = useState<HTMLAudioElement | null>(null);
    const [cafe, setCafe] = useState<HTMLAudioElement | null>(null);
    const [rainforest, setRainforest] = useState<HTMLAudioElement | null>(null);
    const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);

    // useEffect to set the audio files
    // useEffect only runs on client-side
    // audio doesn't work on server-side
    // prevents audio from rendering on server-side
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
                <div className={styles.time}> <Timer/> </div>
                <div className={styles.dropdown}>
                    <Button className={styles.dropdownButton} onClick={playAndPause}>
                        <Image src={speaker} alt={"sound"} width={40}/>
                    </Button>
                    <div className={styles.dropdownContent}>
                        <button className={styles.buttonDrop} onClick={startJazz}><p>Jazz</p></button>
                        <button className={styles.buttonDrop} onClick={startCafe}><p>Cafe</p></button>
                        <button className={styles.buttonDrop} onClick={startRainforest}><p>Rainforest</p></button>
                    </div>
                </div>
           </div>
        </div>
    )
}