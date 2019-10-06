import React, {useState} from 'react'

const Login = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value})
    }

    console.log(user);
    
    return (
        <div>
            <input 
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleChange}></input>
            <input 
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}></input>
            <button>Login</button>
        </div>
    )
}

export default Login
