"use client"
import Image from 'next/image'
import React, { useState } from 'react';
import styles from './SearchBar.module.scss';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <div className={styles.searchBar}>
            <input
                type="text"
                className={styles.searchInput}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
            />

            <Image src="/search.png" width="24" height="24" alt="search-icon" onClick={handleSearch} className={styles.searchButton}/>

        </div>
    );
};

export default SearchBar;
