import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './Modal.module.css';

const Modal = (props) => {
	let getType = () => {
		if (props.edit) {
			return 'yellow';
		} else if (props.delete) {
			return '#CC0000';
		}
	};

	const { handleSubmit, register, errors } = useForm();
	const [spinner, setSpinner] = useState(false);
	const onSubmit = (values, e) => {
		e.preventDefault();
		// console.log(values);
		setSpinner(true);
	};

	const showAddForm = () => {
		return (
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="form-group">
					<label htmlFor="title">Title</label>
					<input
						type="text"
						name="title"
						ref={register({
							required: 'Required',
						})}
						className={`form-control`}
						style={errors.title && { border: '1px solid red' }}
					/>
					<p className="text-danger" style={{ fontSize: '0.8rem' }}>
						{errors.title && errors.title.message}
					</p>
				</div>
				<div className="form-group">
					<label htmlFor="description">Description</label>
					<input
						type="text"
						name="description"
						ref={register({
							required: true,
							minLength: 5,
						})}
						className={`form-control`}
						style={errors.description && { border: '1px solid red' }}
					/>
					<p className="text-danger" style={{ fontSize: '0.8rem' }}>
						{errors.description && `Atleast 5 characters long`}
					</p>
				</div>
				<div className="form-group mx-auto text-center">
					<div>
						{props.add && (
							<button className={`btn btn-outline-primary `}>Add</button>
						)}
						{props.edit && (
							<button className={`btn btn-outline-warning `}>Edit</button>
						)}
						{props.delete && (
							<button className={`btn btn-outline-danger `}>Delete</button>
						)}
						<button className={`btn btn-outline-secondary  ml-3`}>Cancel</button>
					</div>
					<div></div>
				</div>
			</form>
		);
	};

	const showEditForm = () => {
		return (
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="form-group">
					<label htmlFor="title">Title</label>
					<input
						value={props.title}
						type="text"
						name="title"
						ref={register({
							required: 'Required',
						})}
						className={`form-control`}
						style={errors.title && { border: '1px solid red' }}
					/>
					<p className="text-danger" style={{ fontSize: '0.8rem' }}>
						{errors.title && errors.title.message}
					</p>
				</div>
				<div className="form-group">
					<label htmlFor="description">Description</label>
					<input
						value={props.description}
						type="text"
						name="description"
						ref={register({
							required: true,
							minLength: 5,
						})}
						className={`form-control`}
						style={errors.description && { border: '1px solid red' }}
					/>
					<p className="text-danger" style={{ fontSize: '0.8rem' }}>
						{errors.description && `Atleast 5 characters long`}
					</p>
				</div>
				<div className="form-group mx-auto text-center">
					<div>
						{props.add && (
							<button className={`btn btn-outline-primary `}>Add</button>
						)}
						{props.edit && (
							<button className={`btn btn-outline-warning `}>Edit</button>
						)}
						{props.delete && (
							<button className={`btn btn-outline-danger `}>Delete</button>
						)}
						<button className={`btn btn-outline-secondary  ml-3`}>Cancel</button>
					</div>
					<div></div>
				</div>
			</form>
		);
	};

	const showDeleteModal = () => {
		return (
			<div className="text-center">
				<p>Are you sure you want to delete the note named {props.not && props.note.title}</p>
				{props.delete && <button className={`btn btn-outline-danger`}>Delete</button>}
				<button className={`btn btn-outline-secondary ml-3`}>Cancel</button>
			</div>
		);
	};

	return (
		<div className={`${styles.backdrop}`}>
			<div className={`card`}>
				<div className={`card-header`} style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>
					{props.add && 'Add'}
					{props.edit && 'Edit'}
					{props.delete && 'Delete'}
				</div>
				<div className="card-body">
					{props.add && showAddForm()}
					{props.edit && showEditForm()}
					{props.delete && showDeleteModal()}
				</div>
			</div>
		</div>
	);
};

export default Modal;
