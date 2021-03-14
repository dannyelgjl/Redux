import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authLogin } from '../../store/fetchActions';

const Login = () => {
    const dispatch = useDispatch();

    const [form, setForm] = useState({
        username: "",
        password: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(authLogin(form));

        setForm({ username: '', password: '' });
    }

    const onChange = (event) => {
        const { name, value } = event.target;

        setForm({ ...form, [name]: value });
    }

    return (
        <form 
        onSubmit={handleSubmit}
        style={{
            width: 350,
            margin: "40px auto"
        }} >
            <h2>Shopping-Car Login</h2>
            <div className="form-group">
                <input placeholder="Usuário"  value={form.username} onChange={onChange} name="username" className="form-control" />
            </div>
            <div className="form-group">
                <input placeholder="Password"  onChange={onChange} value={form.password}  name="password" type="password" className="form-control" />
            </div>
            <div className="form-group">
                <button  onClick={() => {}} className="bnt btn-primary btn-block" >Logar</button>
            </div>
        </form>
    );
};


export default Login;