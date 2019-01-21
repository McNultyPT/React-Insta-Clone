import React from 'react';

import './SearchBar.css';

function SearchBar() {
    return (
        <div className='searchContainer'>
            <div className='searchLeft'>
                <i class="fab fa-instagram fa-4x"></i>
                <h1>Instagram</h1>
            </div>
            <div className='searchMid'>
                <form>
                    <input 
                        type='search bar'
                        placeholder='Search'
                    />
                </form>
            </div>
            <div className='searchRight'>
                <i class="far fa-compass fa-3x"></i>
                <i class="far fa-heart fa-3x"></i>
                <i class="far fa-user fa-3x"></i> 
            </div>
        </div>
    )
}

export default SearchBar;