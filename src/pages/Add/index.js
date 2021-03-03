import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addCAR } from '../../store/cars';


export default function Add() {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: '', url: ''
  })

  const formChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(addCAR(form));
    setForm({ name: '', url: '' });
  }
	return (
		<form onSubmit={onSubmit} className="container mt-5">
			<div className="form-group">
				<label>Nome</label>
				<input 
          type="text" 
          name="name" 
          className="form-control" 
          placeholder="Nome..." 
          onChange={formChange}
          value={form.name}
          />
			</div>
			<div className="form-group">
				<label>URL:</label>
				<input 
          type="text" 
          name="url" 
          className="form-control" 
          placeholder="URL:https://cars" 
          onChange={formChange}
          value={form.url}
          />
			</div>
			<button type="submit" className="btn btn-primary">
				Adicionar
			</button>
		</form>
	);
}
