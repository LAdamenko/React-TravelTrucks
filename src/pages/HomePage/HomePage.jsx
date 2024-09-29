import { useNavigate } from 'react-router-dom';
import css from './HomePage.module.css';

export default function HomePage() {
    
    const navigate = useNavigate();
    const handleViewCatalog = () => {
        navigate('/catalog', { replace: true });
    }

    return (
        <div className={css.container}>
            <h1 className={css.tytle}>Campers of your dreams</h1>
            <p className={css.slogan}>You can find everything you want in our catalog</p>
            <button type='button' onClick={handleViewCatalog}>View Now</button>
        </div>
    );
}