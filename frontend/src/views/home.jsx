import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/auth';
import AddCard from './cards/addCard';
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


/*What the logged in user sees
Option to logout and go to cards page */
const LoggedInView = ({ user }) => {
    return (
        <div>
            
            <h1>Welcome, {user.username}</h1>
            
            
            <Link to="/logout">
                <button>Logout</button>
            </Link>

            <Link to="/safe">
                <button>Cards</button>
            </Link>
        </div>
    );
};


/*What the not logged in user sees*/
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