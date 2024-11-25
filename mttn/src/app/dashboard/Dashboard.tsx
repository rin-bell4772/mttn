"use client";
import styles from './Dashboard.module.css';
import AddStudySet from '../components/AddStudySet';
import StudySet from '../components/StudySet';
import { useStudySet } from '../context/StudySetContext';

export default function Dashboard() {
    const { setTitles } = useStudySet();

    return (
        <div className={styles.dashboard}>
            <h1>FAVORITES</h1>
            <div className={styles.scroll}>
                <AddStudySet />
                {/* Map through favorite sets if you have a way to identify them */}
                {setTitles.slice(0, 3).map((title, index) => (
                    <StudySet key={index} title={title} />
                ))}
            </div>
            <h1>ALL</h1>
            <div className={styles.grid}>
                <AddStudySet />
                {setTitles.map((title, index) => (
                    <StudySet key={index} title={title} />
                ))}
            </div>
        </div>
    );
}
