import React, { useState } from 'react';
import Note from './Note';
import Modal from '../modal/Modal';

const NoteList = () => {
	const [showModal, setShowModal] = useState(true);

	const closeModal = () => {
		setShowModal(false);
	};

	return (
		<div className="row">
			<div className="col-lg-3 col-md-4 col-sm-12">
				{/* {showModal && (
					<Modal
						delete
						closeModal={() => {
							closeModal();
						}}
					/>
				)} */}
				<Note />
			</div>
		</div>
	);
};

export default NoteList;
