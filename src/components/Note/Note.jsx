import React from 'react';
import styles from './Note.module.css';

const Note = (props) => {
	return (
		<div className={`card ${styles.notefont}`}>
			<div className={`card-header ${styles.noteheading}`}>{props.heading || 'Default heading'}</div>
			<div className="card-body">{props.description || 'Default description'}</div>
		</div>
	);
};

export default Note;
