import React from 'react';
import Note from './Note';
import Modal from '../modal/Modal';

const NoteList = () => {
	return (
		<div className="row">
			<div className="col-lg-3 col-md-4 col-sm-12">
				{/* <Modal delete /> */}
				<Note />
			</div>
		</div>
	);
};

export default NoteList;
