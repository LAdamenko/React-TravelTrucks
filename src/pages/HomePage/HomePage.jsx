import css from './HomePage.module.css';

export default function HomePage() {
    return (
        <div className={css.container}>
            <h1 className={css.tytle}>Campers of your dreams</h1>
            <p className={css.slogan}>You can find everything you want in our catalog</p>
            <button>View Now</button>
        </div>
    );
}