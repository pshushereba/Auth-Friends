import React, {useState} from 'react'
import axiosWithAuth from '../utils/axiosAuth.js';

const Login = (props) => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value})
    }

    console.log(user);

    const login = (e) => {
        e.preventDefault();
        axiosWithAuth().post('/login', user)
            .then((res) => {
                localStorage.setItem('token', res.data.payload);
                props.history.push('/friends');
            })
            .catch((err) => console.log(err))
    }
    
    return (
        <div>
            <form onSubmit={login}>
                <input 
                    type="text"
                    name="username"
                    value={user.username}
                    placeholder="Username"
                    onChange={handleChange}></input>
                <input 
                    type="password"
                    name="password"
                    value={user.password}
                    placeholder="Password"
                    onChange={handleChange}></input>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;
