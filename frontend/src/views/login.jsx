import { useEffect, useState } from 'react';
import { login } from '../utils/auth';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/auth';

import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
  } from "@mantine/core";

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

    useEffect(() => {
        if (isLoggedIn()) {
            navigate('/');
        }
    }, []);

    const resetForm = () => {
        setUsername('');
        setPassword('');
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const { error } = await login(username, password);
        if (error) {
            alert(error);
        } else {
            navigate('/');
            resetForm();
        }
    };
    return (
        // <section>
        //     <h1>Login</h1>
        //     <Form onSubmit={handleLogin}>
        //         <div>
        //             <label htmlFor="username">Username</label>
        //             <input
        //                 type="text"
        //                 id="username"
        //                 name="username"
        //                 value={username}
        //                 onChange={(e) => setUsername(e.target.value)}
        //             />
        //         </div>
        //         <div>
        //             <label htmlFor="password">Password</label>
        //             <input
        //                 type="password"
        //                 id="password"
        //                 name="password"
        //                 value={password}
        //                 onChange={(e) => setPassword(e.target.value)}
        //             />
        //         </div>
        //         <Button type="submit" variant="primary">Login</Button>
        //     </Form>
        // </section>
        <Container size={420} my={40}>
            <Title align="center" sx={(theme) =>({
                fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                fontWeight: 900,
            })} 
            >
                Whatssup
            </Title>
        </Container>

     
    );
};

export default Login;