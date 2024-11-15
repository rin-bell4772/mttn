import React from 'react';
import styles from './StudySet.module.css';

interface StudySetProps {
    title: string;
}

export default function StudySet(props: StudySetProps) {
    return (
        <div className={styles.studySet}>
            <p>{props.title}</p>
        </div>
    );
}