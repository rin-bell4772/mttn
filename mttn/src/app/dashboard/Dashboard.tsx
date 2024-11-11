import styles from './Dashboard.module.css';
import AddStudySet from '../components/AddStudySet';
import StudySet from '../components/StudySet';

export default function Dashboard() {
    return (
        <div className={styles.dashboard}>
            <h1>RECENT</h1>
            <div>
                
            </div>
            <h1>FAVORITES</h1>
            <div className={styles.scroll}>
                <StudySet title={"Name"}/>
                <StudySet title={"Name"}/>
                <StudySet title={"Name"}/>
                <StudySet title={"Name"}/>
                <StudySet title={"Name"}/>
                <StudySet title={"Name"}/>
                <StudySet title={"Name"}/>
            </div>
            <h1>ALL</h1>
            <div className={styles.grid}>
                
            </div>
        </div>
    );
}