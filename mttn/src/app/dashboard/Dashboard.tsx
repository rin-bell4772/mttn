import styles from './Dashboard.module.css';
import AddStudySet from '../components/AddStudySet';
import StudySet from '../components/StudySet';

export default function Dashboard() {
    return (
        <div className={styles.dashboard}>
           <h1>RECENT</h1>
           <div>
                <AddStudySet />
           </div>
           <h1>FAVORITES</h1>
            <div className={styles.scroll}>
                <AddStudySet />
            </div>
           <h1>ALL</h1>
           <div className={styles.grid}>
                <AddStudySet />
           </div>
        </div>
    );
}