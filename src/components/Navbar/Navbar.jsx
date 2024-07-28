import { Suspense } from 'react';
import BoardCreateBtn from '@/components/BoardCreateBtn/BoardCreateBtn';
import SearchBar from '@/components/SearchBar/SearchBar';
import styles from './Navbar.module.scss'; // Optional, for custom styling

const Navbar = ({ onSearch }) => {
    return (
        <nav className={styles.navbar}>
            <div className={styles["navbar-logo"]}>
                <a href="/">Trello</a>
            </div>
            <SearchBar onSearch={onSearch} />
            <Suspense fallback={'Loading...'}>
                <BoardCreateBtn />
            </Suspense>
        </nav>
    );
};

export default Navbar;
