import styles from './Dashboard.module.css';
import AddStudySet from '../components/AddStudySet';
import StudySet from '../components/StudySet';

// Dummy array of recent sets (think of as queue)
const recent = [
    { title: 'Linear Algebra' },
    { title: 'Chemistry' },
    { title: 'French' },
    { title: 'History' },
    { title: 'Calculus I' }
];

const favorites = [];

export default function Dashboard() {
    return (
        <div className={styles.dashboard}>
           <h1>RECENT</h1>
           <div className={styles.grid}>
                {recent.slice(0, 5).map((set, index) => (
                    <StudySet key={index} title={set.title} />
                ))}
           </div>
           <h1>FAVORITES</h1>
            <div className={styles.scroll}>
                <AddStudySet />
                {recent.map((set, index) => (
                    <StudySet key={index} title={set.title} />
                ))}
            </div>
           <h1>ALL</h1>
           <div className={styles.grid}>
                <AddStudySet />
                {recent.map((set, index) => (
                    <StudySet key={index} title={set.title} />
                ))}
           </div>
        </div>
    );
}