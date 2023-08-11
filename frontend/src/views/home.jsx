import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/auth';
import AddCard from './cards/newCards';
import FlashcardList from './cards/flashcardlist';


import '../App.css'

const Home = () => {
    const [isLoggedIn, user] = useAuthStore((state) => [
        state.isLoggedIn,
        state.user,
    ]);

    return (
        <div>
            {isLoggedIn() ? <LoggedInView user={user()} /> : <LoggedOutView />}
        </div>
    );
};

const LoggedInView = ({ user }) => {
    return (
        <div>
            
            <h1>Welcome, {user.username}</h1>
            
            
            <Link to="/logout">
                <button>Logout</button>
            </Link>
        </div>
    );
};

export const LoggedOutView = ({ title = 'Home' }) => {
    return (
        <div>
            
            <h1>{title}</h1>
            <Link to="/login">
                <button>Login</button>
            </Link>
            <Link to="/register">
                <button>Register</button>
            </Link>
        </div>
    );
};

export default Home;