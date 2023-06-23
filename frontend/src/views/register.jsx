import { useEffect, useState } from 'react';
import { register } from '../utils/auth';
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

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn()) {
            navigate('/');
        }
    }, []);

    const resetForm = () => {
        setUsername('');
        setPassword('');
        setPassword2('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { error } = await register(username, password, password2);
        if (error) {
            alert(JSON.stringify(error));
        } else {
            navigate('/');
            resetForm();
        }
    };

    return (
        <Container size="xl" px={0}>
            <Title 
                align="center"
                sx={(theme) => ({
                    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                    fontWeight: 900,
                })}
                >Register
            </Title>
            <Text color="dimmed" size="sm" align="center" mt={5}>
                have an account ?{" "}
                    <Anchor
                    href="#"
                    size="sm"
                    onClick={(event) => event.preventDefault()}
                    >
                        Login
                    </Anchor>
            </Text>
            <Paper withBorder shadow="md" p={60} mt={30} radius="md">
            <TextInput 
                label="Username" 
                placeholder="username" 
                required 
                id="username" 
                name="username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)} />

            <PasswordInput
                label="Password"
                placeholder="Your password"
                required
                mt="md"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
            id="confirm-password"
            name="password"
            value={password}
            onChange={(e) => setPassword2(e.target.value)}
            />
    </Paper>
        </Container>
                   
    );
}

export default Register;